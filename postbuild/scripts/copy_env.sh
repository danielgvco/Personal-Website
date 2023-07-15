#!/bin/bash

if [ -f ".env.local" ]; then
  exit 0
fi

# Copy .env.example to .env.local
cp .env.example .env.local
