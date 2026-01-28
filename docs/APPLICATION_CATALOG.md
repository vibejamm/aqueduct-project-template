# Application Catalog

## Overview

This document serves as the registry of all features, services, and components in this application.

## Section 1: Domain Model

[Describe your core domain and entities here]

**Example**: 
- User: Represents an authenticated user with permissions
- Project: Top-level container for user's work
- Item: Domain entity specific to your application

---

## Section 2: Features

### Feature: [Feature Name]
- **Status**: Planning | In Development | Stable | Archived
- **Owner**: [Team/Person]
- **Location**: `src/features/[feature]`
- **Description**: [What it does]
- **Dependencies**: [Other features it depends on]
- **Tests**: `e2e/[feature].spec.ts`
- **Related Routes**: [/path/to/feature]

---

### Feature: [Another Feature]
- **Status**: 
- **Owner**: 
- **Location**: 
- **Description**: 
- **Dependencies**: 
- **Tests**: 
- **Related Routes**: 

---

## Section 3: Services

### Service: [Service Name]
- **Location**: `functions/src/services/[service]`
- **Purpose**: [What it does]
- **Firebase Integration**: 
  - Collections: `[collection-name]`
  - Storage paths: `[bucket-path]`
  - Functions: `[function-names]`

---

### Service: Authentication
- **Location**: `functions/src/services/auth`
- **Purpose**: User authentication and authorization
- **Firebase Integration**: 
  - Collections: `users`, `roles`
  - Functions: `authorizeRequest`

---

## Section 4: Architecture Decisions

### Decision: [Decision Title]
- **When**: [Date]
- **Context**: [Why this decision was needed]
- **Decision**: [What was chosen]
- **Consequences**: [Trade-offs and implications]

---

### Decision: Firebase-Only Architecture
- **When**: 2026-01-28
- **Context**: Needed simpler, more scalable deployment
- **Decision**: Use Firebase Hosting + Functions instead of separate Cloud Run
- **Consequences**: Reduced operational overhead, faster deployments, pay-per-use pricing

---

## Section 5: Data Model

### Collection: [Collection Name]

```typescript
interface [DocumentType] {
  id: string;
  // Add fields here
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

---

## Updating This Document

Every time you add a feature, service, or make an architectural decision, update this catalog:

1. Add the feature/service with status, location, and dependencies
2. Describe what it does
3. Link to test files
4. Update architecture decisions if needed

**Enforcement**: Pre-commit Phase 2 (Catalog Conflict Search) checks for conflicts when you add code changes.

---

**Last Updated**: [Date]  
**Maintainer**: [Team/Person]