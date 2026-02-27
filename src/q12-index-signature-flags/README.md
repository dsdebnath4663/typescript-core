## 12) Index Signature Flags — Interview Assignment

### Objective

Feature flags model: `Record<string, boolean>` এবং `isEnabled(flags, "newUI")` implement করো।

### Requirements

1. `flags` is `Record<string, boolean>`
2. Missing key returns `false`

### Example (Expected Behavior)

```ts
const flags = { newUI: true };
isEnabled(flags, "newUI"); // true
isEnabled(flags, "x");     // false
```

### Concepts Being Tested

* `Record<>`
* index signature behavior

### Deliverables

* type + function + examples
