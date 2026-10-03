# BharatJobs AI

AI-powered Indian job discovery platform focused on matching jobs by location, qualification, sector, and skills.

## Current MVP
- Search Indian jobs
- Filter by location and qualification
- Government vs private classification
- Job type and freshness filters
- AI-style match scores and explanations
- Responsive job discovery UI

## Production roadmap
1. FastAPI + PostgreSQL backend
2. Scheduled job ingestion
3. OpenRouter-powered classification and matching
4. Government and employer source adapters
5. User profiles and saved jobs
6. Docker deployment on Oracle Cloud

## Data sources
Production ingestion should use official APIs, RSS/public feeds, government portals, employer career feeds, or sources that explicitly permit automated access. LinkedIn and Indeed data should only be integrated through permitted APIs or licensed feeds.

## MVP
The current frontend uses a demo dataset so the product experience can be built before connecting live ingestion.