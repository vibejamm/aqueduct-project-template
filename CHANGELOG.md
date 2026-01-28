# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-01-28

### Added
- **Development Tooling**: aqueduct-project-template.code-workspace for consistent IDE setup
- **TypeScript Configuration**: Enhanced tsconfig.json with 7 path aliases (@components, @hooks, @types, @services, @utils, @styles)
- **Compiler Options**: Added noUnusedLocals, sourceMap, declaration for better type safety
- **ESLint Configuration**: Tracked eslint.config.ts with Firefox and Playwright support
- **Docker Setup**: Tracked .dockerignore optimized for Firebase testing artifacts

### Changed
- **Improved DX**: Workspace includes Prettier, ESLint, Tailwind CSS, and Playwright extensions
- Synced improvements from curioSync v2.0.0 production app

---

## [1.0.0] - 2026-01-18

### Added
- Initial project setup

---

**Note**: Track all changes in this file per [docs/GOVERNANCE_SYSTEM.md](docs/GOVERNANCE_SYSTEM.md).
