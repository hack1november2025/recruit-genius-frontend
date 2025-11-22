# Recruit Genius Frontend - Docker Deployment

## Quick Start

1. **Start the application:**
   ```bash
   ./docker-start.sh
   ```

2. **Access the application:**
   - Frontend: http://localhost:3000
   - Landing Page: http://localhost:3000
   - Dashboard: http://localhost:3000/app

**Note:** The frontend requires a backend API to be running. Make sure your backend is available at the configured URL (default: http://localhost:8000).

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
# Frontend logs
docker-compose logs -f frontend
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

The frontend communicates with a separate backend API service (not included in this Docker setup).

## Environment Variables

Configure in `.env.local` file:

```env
# Backend API URL
NEXT_PUBLIC_API_URL=http://localhost:8000

# Environment
NODE_ENV=production
```

## Production Notes

- Frontend runs in standalone mode for optimal performance
- Service restarts automatically unless stopped
- Multi-stage Docker build minimizes image size
- Non-root user (nextjs) for security

## Troubleshooting

### Port conflicts
If port 3000 is in use, update the port mapping in `docker-compose.yaml`:

```yaml
ports:
  - "3001:3000"  # Change 3001 to your preferred port
```

### Build failures
Clear Docker cache and rebuild:
```bash
docker system prune -a
./docker-start.sh
```

### Connection issues
Ensure the frontend service is running:
```bash
docker-compose ps
```

### Backend API not accessible
1. Verify backend is running
2. Check `NEXT_PUBLIC_API_URL` in `.env.local`
3. Ensure network connectivity between frontend and backend

### View detailed logs
```bash
docker-compose logs -f frontend
```
