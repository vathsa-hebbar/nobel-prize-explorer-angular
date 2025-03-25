import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { NobelPrizeService, NobelPrize } from '../../services/nobel-prize.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-nobel-list',
  templateUrl: './nobel-list.component.html',
  styleUrls: ['./nobel-list.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class NobelListComponent implements OnInit, OnDestroy {
  prizes: NobelPrize[] = [];
  categories: string[] = [];
  filterForm: FormGroup;
  loading = false;
  error: string | null = null;
  currentPage = 1;
  itemsPerPage = 10;
  private destroy$ = new Subject<void>();

  constructor(
    private nobelPrizeService: NobelPrizeService,
    private fb: FormBuilder
  ) {
    this.filterForm = this.fb.group({
      year: [''],
      category: [''],
    });
  }

  ngOnInit(): void {
    this.categories = this.nobelPrizeService.getCategories();
    this.loadPrizes();

    this.filterForm.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.currentPage = 1;
      this.loadPrizes();
    });
  }

  loadPrizes(): void {
    const { year, category } = this.filterForm.value;
    
    if (!year) {
      this.prizes = [];
      this.loading = false;
      this.error = null;
      return;
    }

    this.loading = true;
    this.error = null;
    
    this.nobelPrizeService.getNobelPrizes(year, category).subscribe({
      next: (data) => {
        if (data.length === 0) {
          this.error = 'No Nobel prizes found for the selected criteria.';
        }
        this.prizes = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load Nobel prizes. Please try again.';
        this.loading = false;
        this.prizes = [];
      }
    });
  }

  get paginatedPrizes(): NobelPrize[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.prizes.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get totalPages(): number {
    return Math.ceil(this.prizes.length / this.itemsPerPage);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}