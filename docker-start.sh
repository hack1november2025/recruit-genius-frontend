#!/bin/bash
# Quick start script for Docker deployment

set -e

echo "🚀 Recruit Genius Frontend - Docker Quick Start"
echo "================================================"

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if Docker Compose is installed
if ! docker compose version &> /dev/null && ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

# Use docker compose or docker-compose (prefer docker compose)
DOCKER_COMPOSE="docker compose"
if ! docker compose version &> /dev/null; then
    DOCKER_COMPOSE="docker-compose"
fi

# Check if .env.local file exists (optional for frontend)
if [ ! -f .env.local ]; then
    echo "⚠️  .env.local not found. Creating with default values..."
    cat > .env.local << EOF
# Backend API URL
NEXT_PUBLIC_API_URL=http://localhost:8000

# Environment
NODE_ENV=production
EOF
    echo "✅ Created .env.local with default values"
    echo "   You can edit it to customize the backend API URL"
fi

echo ""
echo "🔨 Building Docker images..."
$DOCKER_COMPOSE build

echo ""
echo "🚀 Starting services..."
$DOCKER_COMPOSE up -d

echo ""
echo "⏳ Waiting for frontend to be ready..."
sleep 3

# Wait for frontend to be ready
echo "Checking frontend availability..."
MAX_RETRIES=30
RETRY_COUNT=0
while [ $RETRY_COUNT -lt $MAX_RETRIES ]; do
    if curl -sf http://localhost:3000 > /dev/null 2>&1; then
        echo "✅ Frontend is ready!"
        break
    fi
    RETRY_COUNT=$((RETRY_COUNT + 1))
    echo "⏳ Waiting for frontend... ($RETRY_COUNT/$MAX_RETRIES)"
    sleep 2
done

if [ $RETRY_COUNT -eq $MAX_RETRIES ]; then
    echo "❌ Frontend failed to start. Check logs with: $DOCKER_COMPOSE logs frontend"
    exit 1
fi

echo ""
echo "✨ Success! Frontend is running."
echo ""
echo "📍 Access Points:"
echo "   - Frontend: http://localhost:3000"
echo "   - Landing Page: http://localhost:3000"
echo "   - Dashboard: http://localhost:3000/app"
echo ""
echo "📊 View logs:"
echo "   $DOCKER_COMPOSE logs -f frontend"
echo ""
echo "🛑 Stop services:"
echo "   $DOCKER_COMPOSE down"
echo ""
echo "📝 Note: Make sure your backend API is running at the configured URL"
echo "   (default: http://localhost:8000)"
echo ""
echo "================================================"
