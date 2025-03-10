## Installation

To set up the project locally, run the following commands:

```bash
git clone <repository-url>
cd movie-review-app
npm install
```

## Usage

To start the development server, use:

```bash
npm run dev
```
## Project Structure

- `src/`: Contains the source code of the application.
  - `components/`: Reusable UI components.
    - `Button.jsx`: A customizable button component.
    - `MovieCard.jsx`: A component to display movie details.
    - `Rating.jsx`: A rating component with a star-based interface and toast notifications for feedback.
  - `screens/`: Higher-level components that represent different views of the application.
    - `Home.jsx`: The home screen displaying a list of movies.
  - `service/`: Service functions to interact with the API.
    - `api.service.js`: Functions to fetch, create, update, delete, and add reviews for movies.
  - `main.jsx`: The entry point of the application.
- `public/`: Contains public assets like images and index.html.
- `README.md`: Project documentation.

## Scripts Documentation

- `dev`: Starts the development server.
- `build`: Builds the application for production.
- `lint`: Lints the code using ESLint.
- `preview`: Previews the built application.

## Configuration Files Documentation

### .npmrc

Configures npm to use the official registry.

```ini
registry=https://registry.npmjs.org/
```

### eslint.config.js

Configures ESLint for JavaScript and JSX files, including React-specific rules and plugins.

- **Rules**:
  - `no-unused-vars`: Enforces no unused variables.
  - `react-refresh/only-export-components`: Warns if only export components are used with React Refresh.


## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Contributing

We welcome contributions! Please follow the guidelines in the CONTRIBUTING.md file.
