## 16) Exact Type Helper — Interview Assignment

### Objective

Helper type `Exact<T, Shape>` বানাও যাতে function arg এ extra keys forbid করা যায়।

### Requirements

1. `Exact<Actual, Shape>` should fail if `Actual` has keys not in `Shape`
2. Use it in a function signature to enforce “no extra props”

### Example (Expected Behavior)

```ts
type Shape = { id: string; name: string };

declare function acceptExact<T>(x: Exact<T, Shape>): void;

acceptExact({ id: "u1", name: "A" });           // ✅
acceptExact({ id: "u1", name: "A", role: "x" }); // ❌
```

### Notes / Edge Cases

* Mention limitations briefly (TypeScript structural typing, inference quirks).

### Concepts Being Tested

* advanced types
* key exclusion / conditional typing

### Deliverables

* `Exact<>` type
* function example + short limitation note