import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Laureate {
  firstname: string;
  surname: string;
  motivation: string;
  share: string;
}

export interface NobelPrize {
  year: string;
  category: string;
  laureates: Laureate[];
}

@Injectable({
  providedIn: 'root'
})
export class NobelPrizeService {
  private apiUrl = 'https://api.nobelprize.org/v1/prize.json';

  constructor(private http: HttpClient) {}

  getNobelPrizes(year?: string, category?: string): Observable<NobelPrize[]> {
    let url = `${this.apiUrl}?`;
    
    if (year) {
      url += `year=${year}`;
    }
    
    if (category) {
      url += `${year ? '&' : ''}category=${category.toLowerCase()}`;
    }
    
    return this.http.get<{prizes: NobelPrize[]}>(url).pipe(
      map(response => response.prizes)
    );
  }

  getCategories(): string[] {
    return [
      'chemistry',
      'economics',
      'literature',
      'peace',
      'physics',
      'medicine'
    ];
  }
}