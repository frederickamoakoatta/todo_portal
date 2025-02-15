# Todo Portal

## Overview
This project is a **Todo Portal** for developers integrating with the **[Todo Service APIs](https://github.com/frederickamoakoatta/todo_service)**. The portal provides an interface to:

- **Obtain a JWT token** via AWS Cognito for API authentication.
- **Visualize the developer's todo database**, displaying all data stored via the Todo Service API.

Built using **Vite, React, and TypeScript**, this portal ensures a fast and efficient development experience.

## Features
- **Authentication with AWS Cognito** to retrieve and manage JWT tokens.
- **Todo Database Viewer** displaying all items added via the Todo Service API.

## Tech Stack
- **Frontend:** Vite + React + TypeScript + Tailwind
- **State Management & Data Fetching:** React Query
- **Authentication:** AWS Cognito
- **Testing:** React Testing Library (RTL) & Vitest

## Getting Started

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS recommended)
- [Yarn](https://yarnpkg.com/) or npm

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/todo-portal.git
   cd todo-portal
   ```

2. Install dependencies:
   ```sh
   yarn install  # or npm install
   ```

### Running the Development Server
To start the Vite development server:
```sh
  yarn dev  # or npm run dev
```
The portal will be available at `http://localhost:5173/`.

### Building for Production
To generate an optimized production build:
```sh
yarn build  # or npm run build
```

### Running Tests
Run unit and integration tests with:
```sh
yarn test  # or npm test
```

## Contributing
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m "Add feature"`
4. Push to branch: `git push origin feature-name`
5. Open a Pull Request.

## License
This project is licensed under the **MIT License** and developed by **Frederick Amoako-Atta**.

---

### 🚀 Happy Coding!

