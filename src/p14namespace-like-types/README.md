## 14) Namespace-like Types — Interview Assignment

### Objective

`type Models = { User: ..., Product: ... }` বানাও, তারপর `Models["User"]` ব্যবহার দেখাও।

### Requirements

1. `Models` contains at least 2 models
2. Use indexed access to extract a model type

### Example (Expected Behavior)

```ts
type Models = {
  User: { id: string; name: string };
  Product: { sku: string; price: number };
};

type U = Models["User"]; // {id,name}
```

### Concepts Being Tested

* indexed access types

### Deliverables

* Models type + extraction examples
