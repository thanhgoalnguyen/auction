#!/bin/sh

echo "Installing dependencies..."
npm install

echo "Starting Vite development server..."
exec npm run dev -- --host 0.0.0.0 