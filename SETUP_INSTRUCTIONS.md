# Using This Template

## 1. Create Your Project from Template

```bash
git clone https://github.com/vibejamm/aqueduct-project-template.git my-project
cd my-project
rm -rf .git  # Remove template git history
git init     # Start fresh
git add -A
git commit -m "Type: chore
Scope: initialization

Initialize project from Aqueduct template"
```

## 2. Customize These Files

Edit these files with your project details:

- **README.md** - Your project description and getting started
- **package.json** - Your project name, version, and dependencies
- **.env.example** - Your Firebase configuration variables
- **src/firebase.ts** - Your Firebase credentials
- **docs/APPLICATION_CATALOG.md** - Your features and services

Optional:
- **docs/AGENT_RULES.md** - Add project-specific rules if needed

## 3. Setup Firebase

```bash
npm install
cd functions && npm install && cd ..
firebase init --project=your-firebase-project
```

This will create `firebase.json` with your project configuration.

## 4. Test Locally

```bash
# Terminal 1: Start Firebase emulator
firebase emulators:start

# Terminal 2: Start development server
npm run dev
```

Visit: http://localhost:5173

## 5. First Commit

```bash
git add -A
git commit -m "Type: chore
Scope: initialization

Bootstrap project from Aqueduct template

## What Changed
- Updated README.md with project description
- Updated package.json with project name
- Configured Firebase project

## Why
- Customize template for new project

## Verification
- npm run dev starts without errors
- firebase emulators:start runs successfully"

git remote add origin https://github.com/your-org/your-project.git
git push -u origin main
```

## 6. Verify Governance Setup

Run these commands to verify everything is working:

```bash
# Run pre-commit checks
npm run check:doc-review
npm run check:governance

# Run linting
npm run lint

# Run tests
npm test
```

## What You Get

✅ Production-ready Firebase setup  
✅ Pre-commit governance (5-phase validation)  
✅ Model version protection (approval tokens)  
✅ E2E testing framework (Playwright)  
✅ Local development (Firebase Emulator)  
✅ Full documentation  
✅ CI/CD pipelines (Quality Gate, Staging, Production)  

## Key Governance Rules

1. **All commits** go through 5-phase pre-commit validation
2. **CHANGELOG.md** must be updated for every commit
3. **MODEL_VERSIONS.ts** requires approval token to change
4. **Tests required** for feature changes
5. **E2E tests** must pass before production deployment

## Support

See docs/ for comprehensive guides:

- **[GOVERNANCE_SYSTEM.md](docs/GOVERNANCE_SYSTEM.md)** - How governance works
- **[LOCAL_DEVELOPMENT_GUIDE.md](docs/LOCAL_DEVELOPMENT_GUIDE.md)** - Local setup help
- **[DEPLOYMENT_ARCHITECTURE.md](docs/DEPLOYMENT_ARCHITECTURE.md)** - How deployment works
- **[AGENT_RULES.md](docs/AGENT_RULES.md)** - Guidelines for AI agents
- **[APPLICATION_CATALOG.md](docs/APPLICATION_CATALOG.md)** - Feature registry

---

Ready to ship! 🚀