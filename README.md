# Vue Template (Vite + Tailwind + Playwright + Docker + K8s)

[![license: Proprietary](https://img.shields.io/badge/License-Proprietary-red.svg)](./LICENSE)
[![version](https://img.shields.io/github/package-json/v/AlensAleksandrs/Vue.tmpl?filename=package.json)](https://github.com/AlensAleksandrs/ForumsKubs/blob/main/package.json)

A modern starter template for Vue 3 applications built with Vite.  
It comes with TailwindCSS, Vitest, Playwright, GitHub Actions CI/CD, Dockerfile, and Kubernetes deployment manifests out of the box.

---

### Table of contents

- [Installation](#installation)
  - [Development](#development)
  - [Testing](#testing)
  - [Deployment](#deployment)
- [Features](#features)
- [License](#license)
- [Links](#links)

---

## Installation

### 🛠️ Development stage

**Prerequisites:**

- [Node.js](https://nodejs.org/en/download) (v20.x recommended)
- [Vite](https://vitejs.dev/guide/)
- [Docker](https://docs.docker.com/get-docker/)
- [Kubernetes CLI](https://kubernetes.io/docs/tasks/tools/)

#### 1. Install dependencies

```bash
npm install
```

#### 2. Start the development script

```bash
npm run dev
```

This will:

- Watch your `src/` directory for changes
- Host a local development server at `http://localhost:5173`

#### 3. Build for production

```bash
npm run build
```

#### 3. Linting and formatting

The repository comes with pre-configured tools (triggered automatically upon commit via Husky hooks):

- `ESLint` - enforces JavaScript/TypeScript + Vue conventions
- `OXLint` - ultra-fast JavaScript/TypeScript linter
- `Prettier` - formats JSON, JS, TS, MD, and Vue files
- `Stylelint` - enforces CSS/Tailwind conventions

You can also run them manually:

```bash
npx oxlint "src/**/*.{js,ts,vue}"
npx eslint "src/**/*.{js,ts,vue}"
npx prettier --write .
npx stylelint "src/**/*.{css,vue}"
```

### 🧪 Testing

This template ships with Vitest (unit tests) and Playwright (E2E tests).

- Run unit tests with:

```bash
npm run test:unit
```

- Run end-to-end tests with:

```bash
npm run test:e2e
```

GitHub Actions workflow runs linting, unit tests, e2e tests, and Docker builds automatically on push.

### 🚀 Deployment

**Docker**
Build and run the Docker image:

```bash
docker build -t (name_of_project) .
docker run -p 8080:80 (name_of_project)
```

**Kubernetes**
A sample `deployment.yaml` is included:

```bash
kubectl apply -f k8s/deployment.yaml
```

Pair with a `Service` for production.

#### ✅ Done!

## Features

- Vue 3 + Vite + TailwindCSS
- Preconfigured unit + e2e testing
- GitHub Actions CI/CD with lint, test, Docker build
- Dockerfile with multi-stage build (Node → Nginx)
- Kubernetes manifests for deployment

## License

This software is proprietary and all rights are reserved. It is not licensed under any open source license and may not be copied, modified, or distributed
without explicit permission from the copyright holder. For details, see the LICENSE file in this repository.

## Links

- [Vite Documentation](https://vitejs.dev/guide/)
- [VueJS Documentation](https://vuejs.org/)
- [TailwindCSS Documentation](https://tailwindcss.com)
- [Vitest](https://vitest.dev/)
- [Playwright](https://playwright.dev/)

---

Developed by [Alens Aleksandrs Čerņa](https://www.alens.lv)
