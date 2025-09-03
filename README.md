# Next.js Monorepo Boilerplate

This is a professional boilerplate for building full-stack applications, structured as a high-performance monorepo using [Turborepo](https://turbo.build/).

It comes pre-configured with:
- Next.js
- React
- TypeScript
- ESLint
- Turborepo for intelligent, high-speed builds
- A `.nvmrc` file to enforce a consistent Node.js version

## Project Structure

This boilerplate uses a workspace structure to manage the application and any shared packages:

- `apps/web`: The main Next.js web application.
- `packages/`: A dedicated directory for your shared code (e.g., UI components, hooks, utility functions).

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
turbo dev
```

This will start the Next.js app in development mode, typically accessible at `http://localhost:3000`.

## Common Commands

All commands should be run from the root of the monorepo.

- `turbo dev`: Start the development servers for all apps.
- `turbo build`: Build all apps and packages in the project.
- `turbo lint`: Lint all the code in the project.
