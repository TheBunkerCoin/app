export function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

export function invariant(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

export function noop(): void {
  // intentionally empty
}

export function clamp(value: number, min: number, max: number): number {
  if (Number.isNaN(value) || Number.isNaN(min) || Number.isNaN(max)) {
    return value;
  }
  if (min > max) {
    return value;
  }
  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
}


