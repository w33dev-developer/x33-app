#!/bin/bash

# This file starts up the X33 App server by running migrations and then starting the executable
echo "[X33 App] performing migrations..."
pnpm prisma migrate deploy

# Actually start the application
node /app/app/server/index.mjs
