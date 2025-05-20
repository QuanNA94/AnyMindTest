# AnyMind Test Project

This is a test project for AnyMind that demonstrates a backend API for aggregating and retrieving data from external sources.

## Project Structure

The project follows Clean Architecture principles with the following structure:

- `backend/`: Contains the backend API code
  - `src/`: Source code
    - `controllers/`: Handle HTTP requests and responses
    - `usecases/`: Contain business logic
    - `repositories/`: Handle data access
    - `entities/`: Define data models
    - `services/`: External API integrations
    - `config/`: Configuration files
    - `routes/`: API routes

## Features

- Fetch and aggregate data from external APIs (cryptocurrency and news)
- Store aggregated data in a PostgreSQL database
- Retrieve historical data with pagination

## API Endpoints

- `GET /`: Welcome message
- `GET /aggregated-data`: Fetch latest data from external APIs, save to database, and return
- `GET /historical-data?limit=10`: Retrieve historical data with optional limit parameter

## Technologies Used

- Node.js
- TypeScript
- Express.js
- TypeORM
- PostgreSQL
- Clean Architecture

## Setup Instructions

### Prerequisites

- Node.js (v14+)
- PostgreSQL
- npm or yarn

### Environment Variables

Copy the example environment file by running this command in the terminal:

- PORT=8080
- COINGECKO_API_BASE_URL=https://api.coingecko.com/api/v3
- NEWS_API_BASE_URL=https://newsapi.org/v2
- NEWS_API_KEY=your_news_api_key
- PLACEHOLDER_API_BASE_URL=https://jsonplaceholder.typicode.com

### Database Setup

1. Create a PostgreSQL database named `dbAnyMindTest`
2. Update database connection settings in `src/config/data-source.ts` if needed

### Installation

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start development server
npm run start:dev

```

- ### should use Graphql handle requests, eliminating over-fetching. Apollo Server using for schema management, caching, and real-time updates, besides that Apollo Clients offers UI updates, using query, mutation through hooks and supply TS integration effectively. 

