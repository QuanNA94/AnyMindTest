# Dashboard Project

## Features

- **Real-time Cryptocurrency Data**: View the latest cryptocurrency prices and market trends
- **News Feed**: Stay updated with the latest news related to finance and cryptocurrency
- **Error Handling**: Graceful error handling with user-friendly error pages

## Project Structure

The project follows a modular architecture:

src/
├── assets/                 # Static assets like images and icons
├── components/             # Shared UI components
│   ├── common/             # Common UI elements
│   ├── errors/             # Error handling components
│   └── layouts/            # Layout components
├── modules/                # Feature modules
│   └── DashboardModule/
│       ├── components/     # Module-specific components
│       ├── hooks/          # Module-specific hooks
│       └── types/          # Module-specific types
├── pages/                  # Page components that use modules
├── services/               # API services
├── types/                  # Shared TypeScript types
└── utils/                  # Utility functions


- `frontend/`:          Contains the frontend code
  - `src/`:             Source code
    - `assets/`:        Static assets like images and icons
    - `components/`:    Shared UI components
    - `modules/`:       Feature modules
    - `pages/`:         Page components that use modules
    - `services/`:      API services
    - `types/`:         Shared TypeScript types
    - `utils/`:         Utility functions

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone git@github.com:QuanNA94/AnyMindTest.git
cd frontend 

npm install
# or
yarn install

npm start
# or
yarn start
```

## Potential Improvements

- Implement GraphQL with Apollo Client in the frontend and Apollo Server in the backend for better data synchronization.
- Enhance routing by creating a dedicated routes folder for better organization of multiple routes.
- Adopt atomic design methodology for more scalable and maintainable UI component architecture.
- Could split components into smaller as filter/search rather than using directly.
