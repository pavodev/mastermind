function sum(a?: number, b?: number): number | undefined {
  if (a && b) return a + b;
  return undefined;
}

function subtract(a?: number, b?: number): number | undefined {
  if (a && b) return a - b;
  return undefined;
}

export { sum, subtract };
