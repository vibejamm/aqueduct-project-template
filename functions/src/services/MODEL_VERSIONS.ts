/**
 * Model Version Governance
 * Approved AI models for this project
 * 
 * Changes require approval token: npm run generate:model-token
 */

export const MODELS = {
  FAST_PRIMARY: 'gemini-3.0-flash',
  FAST_FALLBACK: 'gemini-2.5-flash',
  REASONING_PRIMARY: 'gemini-3.0-pro',
  REASONING_FALLBACK: 'gemini-2.5-pro',
} as const;

export type ModelRole = 'fast' | 'reasoning';

export function getModel(role: ModelRole, useFallback: boolean = false): string {
  if (role === 'fast') {
    return useFallback ? MODELS.FAST_FALLBACK : MODELS.FAST_PRIMARY;
  }
  return useFallback ? MODELS.REASONING_FALLBACK : MODELS.REASONING_PRIMARY;
}