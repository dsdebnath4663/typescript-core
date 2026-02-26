## 11) Interface vs Type for Extensibility — Interview Assignment

### Objective

`interface Shape { area(): number }` এবং `type Shape2 = { area(): number }` বানাও এবং pros/cons explain করো।

### Requirements

1. `class Circle implements Shape` example
2. Short explanation: interface merging/extending vs type unions/intersections

### Example (Expected Behavior)

```ts
class Circle implements Shape {
  constructor(private r: number) {}
  area() {
    return Math.PI * this.r * this.r;
  }
}
```

### Concepts Being Tested

- `implements`
- contracts
- interface vs type tradeoffs

### Deliverables

- Shape + Shape2 + Circle + brief notes
