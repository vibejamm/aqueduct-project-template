# Deployment Architecture

## Overview

Your Aqueduct project uses **Firebase Hosting + Firebase Functions** for deployment. This architecture provides:

- ✅ Serverless backend (no servers to manage)
- ✅ Global CDN (fast content delivery)
- ✅ Auto-scaling (handle traffic spikes)
- ✅ Pay-per-use pricing (cost efficient)
- ✅ Firebase Emulator for local development

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                     USER BROWSER                             │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ↓
┌─────────────────────────────────────────────────────────────┐
│              FIREBASE HOSTING (CDN)                          │
│              https://your-project.web.app                    │
├─────────────────────────────────────────────────────────────┤
│  • React SPA (built via Vite)                               │
│  • Static Assets                                             │
│  • Service Worker for offline support                        │
└──────────────────┬──────────────────────────────────────────┘
                   │
                   ↓
┌─────────────────────────────────────────────────────────────┐
│           FIREBASE FUNCTIONS (Node 20)                       │
│           Region: us-central1                                │
├─────────────────────────────────────────────────────────────┤
│  • HTTP endpoints                                            │
│  • Firestore triggers                                        │
│  • Scheduled jobs                                            │
│  • Custom server logic                                       │
└──────────────────┬──────────────────────────────────────────┘
                   │
                   ↓
┌─────────────────────────────────────────────────────────────┐
│              SHARED BACKENDS                                 │
├─────────────────────────────────────────────────────────────┤
│  • Firestore (Database)                                     │
│  • Firebase Storage (Images/Files)                          │
│  • Firebase Remote Config                                    │
│  • Vertex AI (Gemini models)                                │
│  • Secret Manager (API keys)                                │
└─────────────────────────────────────────────────────────────┘
```

## What Goes Where

### Firebase Hosting

**Purpose**: Primary frontend delivery

**Contains**:
- ✅ React SPA (`/dist` folder from Vite build)
- ✅ Static assets (JS bundles, CSS, images)
- ✅ Service worker

**Deployment**:
```bash
npm run build
firebase deploy --only hosting
```

### Firebase Functions

**Purpose**: Serverless backend

**Contains**:
- ✅ HTTP endpoints
- ✅ Firestore triggers
- ✅ Scheduled jobs
- ✅ Custom logic

**Deployment**:
```bash
cd functions
npm run build
firebase deploy --only functions
```

**Runtime**: Node.js 20

## Deployment Pipeline

### GitHub Actions Workflows

**Quality Gate** (`.github/workflows/quality-gate.yml`)
- Runs on every pull request
- Lint, unit tests, security checks
- Must pass before merging

**CD Pipeline** (`.github/workflows/cd-pipeline.yml`)
- Runs on push to main
- Deploy to Firebase Hosting + Functions
- Run E2E tests against staging
- Deploy to production

### Deployment Commands

```bash
# Deploy everything
firebase deploy

# Deploy only hosting
firebase deploy --only hosting

# Deploy only functions
firebase deploy --only functions

# Deploy specific function
firebase deploy --only functions:myFunction
```

## Environment Management

### Production
- Deployed from main branch
- All checks must pass
- Monitored and logged

### Staging
- Dedicated staging environment
- Firebase Functions with staging config
- E2E tests before production

## Monitoring & Logs

```bash
# View logs
firebase functions:log

# Or use Firebase Console
firebase open hosting
firebase open functions
```

---

**Last Updated**: 2026-01-28