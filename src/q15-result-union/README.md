15) Result<T,E> Union — Interview Assignment

### Objective

`type Result<T,E> = {ok:true;data:T} | {ok:false;error:E}` এবং `unwrap()` implement করো।

### Requirements

1. `unwrap(r)` returns `data` when ok
2. else throws with error message

### Example (Expected Behavior)

```ts
unwrap({ ok: true, data: 1 }); // 1
unwrap({ ok: false, error: "Nope" }); // throws
```

### Concepts Being Tested

* discriminated union
* narrowing
* runtime error handling

### Deliverables

* `Result<T,E>` + `unwrap()` + examples