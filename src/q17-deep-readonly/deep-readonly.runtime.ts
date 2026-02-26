import { deepFreeze, log, type DeepReadonly } from "./deep-readonly.js";

 
type Input = {
  nested: { value: number; meta: { ok: boolean } };
  items: { id: string }[];
  fn: (x: number) => string;
};

function main(): void {
  const data: Input = {
    nested: { value: 10, meta: { ok: true } },
    items: [{ id: "a" }, { id: "b" }],
    fn: (n) => `value=${n}`,
  };

  log("Before freeze", data);

  // runtime freeze + compile-time DeepReadonly view
  const frozen = deepFreeze(data) as DeepReadonly<Input>;

  log("After freeze", frozen);
  log("fn(5) result", frozen.fn(5));
}

main();
