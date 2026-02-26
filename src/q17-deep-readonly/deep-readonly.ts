/**
 * Q17: DeepReadonly<T>
 * Requirements:
 * - Nested objects become readonly at every depth
 * - Arrays become ReadonlyArray and element types also deep-readonly
 * - Functions remain unchanged
 * - Primitives remain unchanged
 */
export type DeepReadonly<T> =
  // 1) Functions remain unchanged
  T extends (...args: any[]) => any
    ? T
    : // 2) Arrays & tuples -> ReadonlyArray of DeepReadonly elements
    T extends readonly (infer U)[]
      ? ReadonlyArray<DeepReadonly<U>>
      : // 3) Objects -> readonly mapped type recursively
      T extends object
        ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
        : // 4) Primitives -> unchanged
          T;

/**
 * Runtime helper: deepFreeze(value)
 * - This is OPTIONAL, just for runtime safety & demo logs.
 * - Type DeepReadonly<T> is compile-time only.
 */
export function deepFreeze<T>(value: T): T {
  if (value === null || value === undefined) return value;

  const t = typeof value;

  // primitives + functions are returned as-is
  if (t !== "object") return value;

  // prevent repeated freezing
  if (Object.isFrozen(value)) return value;

  Object.freeze(value);

  // Freeze nested values
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const obj: any = value;
  for (const key of Object.keys(obj)) {
    deepFreeze(obj[key]);
  }

  return value;
}

/**
 * Minimal logger
 */
export function log(title: string, data: unknown): void {
  console.log(`[Q17][LOG] ${title}`);
  console.log(data);
}