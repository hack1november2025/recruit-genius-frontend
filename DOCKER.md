# Recruit Genius - Docker Deployment

## Quick Start

1. **Copy environment file:**
   ```bash
   cp .env.example .env
   ```

2. **Start the application:**
   ```bash
   ./docker-start.sh
   ```

3. **Access the application:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000
   - API Docs: http://localhost:8000/docs

## Docker Commands

### Start services
```bash
docker-compose up -d
```

### Stop services
```bash
docker-compose down
```

### View logs
```bash
# All services
docker-compose logs -f

# Frontend only
docker-compose logs -f frontend

# Backend only
docker-compose logs -f backend
```

### Rebuild services
```bash
docker-compose build --no-cache
docker-compose up -d
```

### Clean up everything
```bash
docker-compose down -v
```

## Architecture

The Docker setup includes:
- **Frontend**: Next.js application (port 3000)
- **Backend**: FastAPI application (port 8000)
- **Database**: PostgreSQL (port 5432)

All services communicate via a Docker bridge network.

## Environment Variables

Configure in `.env` file:

```env
# Frontend
NEXT_PUBLIC_API_URL=http://localhost:8000

# Backend
DATABASE_URL=postgresql://user:password@db:5432/recruit_genius
ENVIRONMENT=production

# Database
POSTGRES_USER=user
POSTGRES_PASSWORD=password
POSTGRES_DB=recruit_genius
```

## Production Notes

- Frontend runs in standalone mode for optimal performance
- All services restart automatically unless stopped
- Volumes persist data between container restarts
- Multi-stage Docker build minimizes image size

## Troubleshooting

### Port conflicts
If ports 3000, 8000, or 5432 are in use, update the port mappings in `docker-compose.yaml`.

### Build failures
Clear Docker cache and rebuild:
```bash
docker system prune -a
./docker-start.sh
```

### Connection issues
Ensure all services are running:
```bash
docker-compose ps
```
