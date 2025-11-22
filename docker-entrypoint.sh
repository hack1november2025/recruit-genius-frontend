#!/bin/bash
set -e

echo "🚀 Starting Recruit Genius Frontend..."
echo "======================================"

# Check if backend API is available (optional)
if [ -n "$NEXT_PUBLIC_API_URL" ]; then
    echo "📡 Backend API configured at: $NEXT_PUBLIC_API_URL"
fi

echo "✅ Frontend is ready!"
echo "🌐 Starting Next.js server..."

exec "$@"
