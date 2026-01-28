# Local Development Guide

## Overview

Your Aqueduct project uses **Firebase Hosting + Firebase Functions** with local emulation for development and staging environments.

## Prerequisites

- Node.js 20 or later
- npm 10 or later
- Firebase CLI (`npm install -g firebase-tools`)
- Git

## Quick Start

### 1. Install Dependencies

```bash
# Install project dependencies
npm install

# Install functions dependencies
cd functions
npm install
cd ..
```

### 2. Setup Firebase Local Emulator Suite

```bash
# Download emulators
firebase emulators:start --download-only

# Or run emulators directly (auto-downloads)
firebase emulators:start
```

This will:
- Start **Firestore emulator** on `localhost:8080`
- Start **Cloud Functions emulator** on `localhost:5001`
- Start **Firebase Hosting** on `localhost:5000`
- Start **Emulator UI** on `localhost:4000`

### 3. Start Development Environment

```bash
# Terminal 1: Start Firebase emulators
firebase emulators:start

# Terminal 2: Start Vite dev server
npm run dev

# Terminal 3: Watch functions compilation
cd functions
npm run build -- --watch
```

The app will be available at `http://localhost:5000`

## Environment Configuration

### .env.local (Development)

Create `.env.local` for development-specific overrides:

```env
# Firebase
VITE_FIREBASE_API_KEY=<your-dev-key>
VITE_STORAGE_BUCKET=your-project.appspot.com

# Emulators
VITE_USE_EMULATORS=true
VITE_FIRESTORE_EMULATOR_HOST=localhost:8080
VITE_FUNCTIONS_EMULATOR_HOST=localhost:5001

# Disable App Check for local development
VITE_RECAPTCHA_SITE_KEY=
```

## Running Tests

```bash
# Run all E2E tests
npm run test

# Run with headed browser
npm run test -- --headed

# Debug tests
npm run test -- --debug

# Run unit tests
npm run test:unit
```

## Troubleshooting

### Functions Not Updating

```bash
# Rebuild functions
cd functions && npm run build

# Restart emulators (Ctrl+C and re-run)
firebase emulators:start
```

### Firestore Connection Issues

```bash
# Check if emulator is running
curl http://localhost:8080

# If not, start with verbose logging
firebase emulators:start --debug
```

---

**Last Updated**: 2026-01-28