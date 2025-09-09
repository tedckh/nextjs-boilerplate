# Next.js Monorepo Boilerplate

This is a professional boilerplate for building full-stack applications, structured as a high-performance monorepo using [Turborepo](https://turbo.build/). It comes pre-configured with a full suite of tools to ensure code quality, consistency, and a great developer experience.

## Features

- **Framework**: Next.js 15 & React 19
- **Language**: TypeScript
- **Monorepo**: High-performance builds with [Turborepo](https://turbo.build/)
- **Styling**: SCSS with a centralized design token system (`_colors.scss`, `_typography.scss`)
- **Code Quality**:
  - **ESLint**: For JavaScript/TypeScript linting
  - **Prettier**: For consistent code formatting
  - **Stylelint**: For SCSS linting and best practices
- **Developer Experience**:
  - VS Code settings for automatic formatting on save.
  - A `.nvmrc` file to enforce a consistent Node.js version.

## Project Structure

This boilerplate uses a workspace structure to manage the application and any shared packages.

- `apps/web`: The main Next.js web application.
  - `src/app`: The main application routes and pages.
  - `src/components`: Reusable React components.
    - `layout/`: Components for the overall page structure (Header, Footer).
    - `ui/`: General-purpose UI components (Hero, Features, Buttons).
  - `src/styles`: Shared SCSS partials for design tokens (colors, typography).
- `packages/`: A dedicated directory for your shared code (e.g., `api-client`, shared hooks).

## Getting Started

### 1. Use the Correct Node.js Version

This project specifies a Node.js version in the `.nvmrc` file. If you have `nvm` (Node Version Manager) installed, you can switch to the correct version by running this command from the root directory:

```bash
nvm use
```

### 2. Install Dependencies

Install all dependencies for the entire monorepo using `npm`:

```bash
npm install
```

### 3. Run the Development Server

To start the development server for the web application, run the following command from the root of the project:

```bash
npm run dev
```

This will start the Next.js app in development mode, typically accessible at `http://localhost:3000`.

## Common Commands

All commands should be run from the root of the monorepo.

- `npm run dev`: Start the development servers for all apps.
- `npm run build`: Build all apps and packages in the project.
- `npm run lint`: Run ESLint and Stylelint across the entire project.
- `npm run format`: Format all code with Prettier.