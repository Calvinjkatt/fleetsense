export function isFilled(value: string | undefined): value is string {
  return Boolean(value?.trim() && !value.includes('[PLACEHOLDER]'));
}
