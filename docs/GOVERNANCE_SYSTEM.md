# Pre-Commit and Commit Governance System

## Overview

This governance system ensures that all code changes include proper documentation, testing, and catalog updates. It runs automatically via Git hooks (Husky) on every commit.

## Pre-Commit Checks (Runs on `git add` + `git commit`)

The pre-commit hook runs **5 phases** of verification:

### Phase 1: Documentation Review Check ✅ **BLOCKING**
**Script**: `scripts/pre-commit-documentation-check.ts`

Verifies that agents have reviewed critical documentation:
1. `.github/copilot-instructions.md` - Core agent instructions
2. `docs/AGENT_RULES.md` - Agent SOPs and workflows  
3. `docs/APPLICATION_CATALOG.md` - System architecture and domain model

**Evidence Required**:
- File accessed in current session (last 30 minutes in git log)
- OR file is in staging area (being updated)
- OR emergency bypass: `SKIP_DOC_CHECK=1 git commit`

**Why**: Ensures agents refresh their knowledge before making changes

---

### Phase 2: Catalog Conflict Search ℹ️ **INFORMATIONAL**
**Script**: `scripts/pre-commit-catalog-search.ts`

Searches `APPLICATION_CATALOG.md` for:
- Preexisting functionality that might conflict
- Related components that need updates
- Dependencies that might be affected

**Searches for**:
- Component names from changed files
- Feature area terms (Curate, Catalog, Compose, Crosslist)
- Route patterns (for pages)

**Output**: Lists potential conflicts and related sections to review

**Why**: Prevents duplicate implementations and breaking changes

---

### Phase 3: Test Coverage & Documentation Verification ⚠️ **WARNING**
**Script**: `scripts/pre-commit-tests-and-docs.ts`

Checks that code changes include:

**Test Requirements**:
- Unit tests for services, utilities, hooks
- Functionality/integration tests for components, pages
- E2E tests for critical user flows

**Documentation Requirements**:
- New pages/features → Update `APPLICATION_CATALOG.md`
- Service/model changes → Update Domain Model section
- Workflow changes → Update `AGENT_RULES.md`
- GitHub Actions changes → Update `CI_CD_WORKFLOWS.md`

**Enforcement**: 
- Informational by default (warnings only)
- Set `REQUIRE_TESTS=1` to block commits without tests
- Set `SKIP_TEST_CHECK=1` to bypass

**Why**: Maintains test coverage and documentation completeness

---

### Phase 4: Governance Checks ✅ **BLOCKING**
**Script**: `scripts/pre-commit-check.js`

Ensures commit follows commit card template format:
- Type: (feat|fix|docs|refactor|test|chore)
- Scope: [component-name]
- What Changed / Why / Where / Verification sections

**Why**: Consistent commit messages

---

### Phase 5: Forbidden Terms Scan ✅ **BLOCKING**
**Script**: `scripts/scan-forbidden-terms.ts`

Scans code for forbidden model/API terms to prevent accidental usage.

**Why**: Enforces approved API patterns

---

## Commit Message Verification (Runs on `git commit`)

**Script**: `scripts/verify-commit-msg-enhanced.ts`

### Requirements for ALL Commits:

#### 1. Commit Message Format
Must follow commit card template:
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

#### 2. CHANGELOG.md Update ✅ **REQUIRED**
Every commit MUST update `CHANGELOG.md` under `[Unreleased]` section:

**Valid Change Types**:
- `### Added` - New features
- `### Changed` - Changes to existing functionality
- `### Fixed` - Bug fixes
- `### Removed` - Removed features
- `### Security` - Security improvements
- `### Deprecated` - Deprecation notices

**Entry Format**:
```markdown
### Added
- **Component**: Description of change (#123)
```

**Exceptions**:
- Merge commits automatically bypass
- Docs-only changes (all files in `docs/` or `*.md`) - optional

**Why**: Maintains change history for releases

---

## How to Use

### Normal Workflow

1. Make your changes
2. Review documentation files (required):
   ```bash
   # Open in editor to refresh knowledge
   code .github/copilot-instructions.md
   code docs/AGENT_RULES.md
   code docs/APPLICATION_CATALOG.md
   ```

3. Update tests if needed

4. Update `CHANGELOG.md`:
   ```markdown
   ## [Unreleased]
   
   ### Added
   - **MyComponent**: Description of what was added (#123)
   ```

5. Stage and commit:
   ```bash
   git add .
   git commit
   ```

6. Follow prompts from each phase

### Emergency Bypasses

**Skip documentation check**:
```bash
SKIP_DOC_CHECK=1 git commit
```

**Skip test verification**:
```bash
SKIP_TEST_CHECK=1 git commit
```

**Require tests**:
```bash
REQUIRE_TESTS=1 git commit
```

**Skip all hooks** (use sparingly):
```bash
git commit --no-verify
```

---

## Troubleshooting

### "No evidence of documentation access"

**Solution**: 
- Open and review the required documentation files
- Make a trivial edit (add/remove whitespace)
- Stage the file: `git add docs/AGENT_RULES.md`

### "CHANGELOG.md must be updated"

**Solution**:
Add your change to `CHANGELOG.md` under `[Unreleased]`:
```markdown
## [Unreleased]

### Fixed
- **Component**: Description (#123)
```

### "[Unreleased] section appears empty"

**Solution**: 
The [Unreleased] section needs at least one change type with content:
```markdown
## [Unreleased]

### Changed
- **Documentation**: Updated governance system
```

### "Missing test coverage"

**Solution**:
1. Add tests for your changes
2. Or set `SKIP_TEST_CHECK=1` temporarily
3. Or use `--no-verify` for emergency commits

---

**Last Updated**: 2026-01-28