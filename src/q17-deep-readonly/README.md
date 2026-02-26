
## 17) DeepReadonly Utility — Interview Assignment

### Objective  
Implement a generic utility type `DeepReadonly<T>` that makes a type **recursively readonly**.

### Requirements  
1. **Nested objects become readonly** at every depth.  
2. **Arrays become `ReadonlyArray`** and their element types are also deep-readonly.  
3. **Functions remain unchanged** (do not transform callable types).  
4. **Primitives remain unchanged**.

### Example (Expected Behavior)

```ts
type Input = {
  nested: { value: number; meta: { ok: boolean } };
  items: { id: string }[];
  fn: (x: number) => string;
};

type Output = DeepReadonly<Input>;

/*
Output should behave like:
{
  readonly nested: { readonly value: number; readonly meta: { readonly ok: boolean } };
  readonly items: ReadonlyArray<{ readonly id: string }>;
  readonly fn: (x: number) => string; // unchanged
}
*/
```

### Mutation Should Fail (TypeScript errors expected)

```ts
declare const x: DeepReadonly<{ nested: { value: number }; arr: { n: number }[] }>;

x.nested.value = 2;   // ❌ error
x.arr.push({ n: 1 }); // ❌ error
x.arr[0].n = 10;      // ❌ error
```

### Concepts Being Tested  
- Conditional types  
- Mapped types  
- Recursive type definitions  
- Special-casing arrays and functions  

### Deliverables  
- `DeepReadonly<T>` implementation  
- A few example/type tests showing it works  

---