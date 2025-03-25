# NobelPrizeExplorerAngular
This project is a web application built using Angular that allows users to explore Nobel Prize data. It provides a user-friendly interface to view Nobel Prize winners and their details.
## Features
- Display Nobel Prize winners with their names, birth dates, and countries.
- Filter Nobel Prize winners by category (Physics, Chemistry, Literature, Peace, etc.).
- View detailed information about each Nobel Prize winner, including their birth date, birth country, and share.
- Responsive design for optimal viewing on different devices.
## Technologies Used
- Angular: A popular JavaScript framework for building web applications.
- Angular Material: A UI component library for Angular that provides pre-designed components and styles.
- Nobel Prize API: An external API that provides Nobel Prize data.
## Installation
To run this project locally, follow these steps:
1. Clone the repository: `git clone
## Installation
To run this project locally, follow these steps:
1. Clone the repository: `git clone
2. Navigate to the project directory: `cd NobelPrizeExplorerAngular`

## Method 1: Running with Docker Compose

To build and run the project using Docker Compose, use the following command:

```bash
docker compose up --build
```

This command will build the Docker images and start the containers as defined in your `docker-compose.yml` file. Make sure you are in the root directory of the project where the `docker-compose.yml` file is located before running this command.

## Method 2: Running without Docker Compose
If you prefer not to use Docker Compose, you can follow these steps to run the project manually:
1. Install Angular CLI globally if you haven't already:
```bash
npm install -g @angular/cli
This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
