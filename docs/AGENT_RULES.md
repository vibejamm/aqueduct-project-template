# Aqueduct Framework - Agent Rules

## Overview

These rules define how to work with your Aqueduct project using the governance system.

## Pre-Commit Governance (5 Phases)

### Phase 1: Documentation Review (BLOCKING)
- Review before committing: copilot-instructions.md, AGENT_RULES.md, APPLICATION_CATALOG.md
- Track via: git log (30-min window) or staged files
- Bypass: `SKIP_DOC_CHECK=1`

### Phase 2: Catalog Conflict Search (INFORMATIONAL)
- Search APPLICATION_CATALOG.md for existing functionality
- Identify: Potential duplicates or conflicts
- Decision: Proceed or consolidate

### Phase 3: Test Coverage (WARNING)
- Check: Unit tests, functionality tests, E2E tests present
- Verify: APPLICATION_CATALOG.md updated for features
- Verify: AGENT_RULES.md updated for workflows

### Phase 4: Governance Checks (BLOCKING)
- Validate: Commit message format (Type/Scope/Description)
- Validate: CHANGELOG.md entry
- Validate: Forbidden terms scan

### Phase 5: Forbidden Terms Scan (BLOCKING)
- Prevent: Hardcoded model IDs in production code
- Prevent: Hardcoded prompts in production code
- Whitelist: MODEL_VERSIONS.ts

## Commit Message Template

```
Type: feat
Scope: [component-name]
Issue: #123

## What Changed
- Description of changes

## Why
- Reason for change

## Where
- Files affected

## Verification
- How to verify it works
```

## CHANGELOG.md Requirements

Every commit must update CHANGELOG.md:

```markdown
## [Unreleased]

### Added
- **MyComponent**: Description (#123)
```

## Model Version Protection

Changes to MODEL_VERSIONS.ts require approval token:

```bash
npm run generate:model-token
```

Include token in commit message:
```
APPROVAL_TOKEN: mv-20260128225129-54f7c8110f74
```

## Testing Requirements

- Unit tests for services, utilities
- E2E tests for user workflows
- Tests must pass locally
- E2E tests run in CI/CD

## Best Practices

1. Review documentation files before committing
2. Write tests alongside code
3. Update APPLICATION_CATALOG.md for new features
4. Keep CHANGELOG.md current
5. Use descriptive commit messages
6. Reference issue numbers

---

**Last Updated**: 2026-01-28