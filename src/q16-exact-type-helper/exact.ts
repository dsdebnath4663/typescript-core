

export type Exact<Actual, Shape> = Actual extends Shape
  ? Actual & Record<Exclude<keyof Actual, keyof Shape>, never>
    : never;
  
type Shape = { id: string; name: string };
export function acceptExact<T>(x: Exact<T, Shape>): void {

  console.log("[Q16] accepted =", x);
}
