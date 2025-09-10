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

## Getting Started with Docker

This project is also fully containerized, allowing you to run the development and production environments without needing to manage Node.js or dependencies on your local machine.

**Prerequisites:** Docker and Docker Compose must be installed.

### 1. Local Development Environment

To start the development server with hot-reloading, follow these steps from the root directory of the `nextjs-boilerplate` project.

**A. One-Time Dependency Install**

First, you need to install all monorepo dependencies inside a dedicated Docker volume. This is a one-time command:

```bash
docker-compose run --rm web npm install
```
*(You only need to run this command again if you change dependencies in `package.json`)*

**B. Start the Development Server**

After the dependencies are installed, you can start the development server:

```bash
docker-compose up
```
The web application will be available at `http://localhost:3000`.

### 2. Building the Production Image

To build the final, optimized production Docker image, run the following command from the root directory of the `nextjs-boilerplate` project:

```bash
docker build -t your-image-name:v1.0.0 -f apps/web/Dockerfile .
```

This creates a portable image of your application that is ready for deployment.

### 3. Running the Production Image

After building the image and transferring it to your server, you can run it as a container.

**A. Create a Production Environment File**

On your server (e.g., UAT or Prod), create a file named `prod.env`. This file will contain your environment-specific configuration.

```bash
# prod.env
NODE_ENV=production
# Add other variables like database URLs or API keys here
# NEXT_PUBLIC_API_URL=https://api.production.example.com
```

**B. Run the Container**

Use the `docker run` command to start your application. This command runs the container in detached mode (`-d`) and gives it a name for easy reference.

```bash
docker run -d --rm --name my-prod-app --env-file ./prod.env -p 3000:3000 your-image-name:v1.0.0
```

**C. Managing the Container**

- **Check status:** `docker ps`
- **View logs:** `docker logs my-prod-app`
- **Stop the container:** `docker stop my-prod-app`

## Local Testing with Kubernetes (Minikube)

You can test the full Kubernetes deployment on your local machine using Minikube.

**Prerequisites:** Minikube and kubectl must be installed.

1.  **Start Minikube:**
    `minikube start`

2.  **Point Docker to Minikube's Environment:**
    This command ensures that when you build an image, it's available inside the Minikube cluster without needing a remote registry.
    `eval $(minikube docker-env)`

3.  **Build the Image:**
    From the project root, build your image with a simple name.
    `docker build -t my-demo-web:v1.0.0 -f apps/web/Dockerfile .`

4.  **Configure for Local Test:**
    For local testing, you need to edit `kubernetes/deployment.yaml`. Change the `image` to the name you used above (`my-demo-web:v1.0.0`) and set `imagePullPolicy` to `Never`.

5.  **Deploy to Minikube:**
    Apply all the Kubernetes configuration files.
    `kubectl apply -f kubernetes/`

6.  **Access Your Application:**
    Use the minikube command to open a tunnel to your service.
    `minikube service webapp-service`

7.  **Cleanup:**
    When you're done, delete the resources from your cluster and unset the docker environment variables.
    `kubectl delete -f kubernetes/`
    `eval $(minikube docker-env -u)`


## Common Commands

All commands should be run from the root of the monorepo.

- `npm run dev`: Start the development servers for all apps.
- `npm run build`: Build all apps and packages in the project.
- `npm run lint`: Run ESLint and Stylelint across the entire project.
- `npm run format`: Format all code with Prettier.