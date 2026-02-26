## 10) Readonly Enforcement — Interview Assignment

### Objective

`readonly id` change attempt লিখে compile error দেখাও; fix by creating new object.

### Requirements

1. Demonstrate mutation fails
2. Show correct “immutable update” approach

### Example

```ts
const u: User = { id: "u1", name: "A" };
u.id = "x"; // ❌

const u2: User = { ...u, id: "u2" }; // ✅ (new object)
```

### Concepts Being Tested

- immutability mindset
- readonly

### Deliverables

- fail + fix snippet
