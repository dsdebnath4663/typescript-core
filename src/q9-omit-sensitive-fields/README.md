
---

## 9) Omit Sensitive Fields — Interview Assignment

### Objective

`PublicUser = Omit<User, "email"> & { displayName: string }` বানাও।

### Requirements

1. `email` removed from public type
2. `displayName` added

### Example (Expected Behavior)

```ts
const p: PublicUser = { id: "u1", name: "A", displayName: "A (u1)" };
p.email; // ❌ should not exist
```

### Concepts Being Tested

* `Omit<>`
* intersection types

### Deliverables

* `PublicUser` type + example

---