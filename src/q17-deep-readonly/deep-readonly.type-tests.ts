import type { DeepReadonly } from "./deep-readonly.js";

 
/**
 * Type-level test helpers (compile-time).
 */
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;

type Expect<T extends true> = T;

/* ------------------------------- */
/* Example from prompt             */
/* ------------------------------- */

type Input = {
  nested: { value: number; meta: { ok: boolean } };
  items: { id: string }[];
  fn: (x: number) => string;
};

type Output = DeepReadonly<Input>;

type Expected = {
  readonly nested: {
    readonly value: number;
    readonly meta: { readonly ok: boolean };
  };
  readonly items: ReadonlyArray<{ readonly id: string }>;
  readonly fn: (x: number) => string;
};

type Test_ExpectedShape = Expect<Equal<Output, Expected>>;

/* ------------------------------- */
/* Extra coverage                  */
/* ------------------------------- */

// primitives unchanged
type Test_Number = Expect<Equal<DeepReadonly<number>, number>>;
type Test_String = Expect<Equal<DeepReadonly<string>, string>>;
type Test_Null = Expect<Equal<DeepReadonly<null>, null>>;
type Test_Undefined = Expect<Equal<DeepReadonly<undefined>, undefined>>;

// functions unchanged
type Fn = (a: number) => { x: number };
type Test_FunctionUnchanged = Expect<Equal<DeepReadonly<Fn>, Fn>>;

// arrays deep readonly
type ArrIn = { n: number }[];
type ArrOut = DeepReadonly<ArrIn>;
type ArrExpected = ReadonlyArray<{ readonly n: number }>;
type Test_Array = Expect<Equal<ArrOut, ArrExpected>>;

/* ------------------------------- */
/* Mutation should fail (prompt)   */
/* ------------------------------- */

declare const x: DeepReadonly<{ nested: { value: number }; arr: { n: number }[] }>;

// @ts-expect-error Cannot assign to 'value' because it is a read-only property.
x.nested.value = 2;

// @ts-expect-error Property 'push' does not exist on type 'readonly { readonly n: number; }[]'
x.arr.push({ n: 1 });

// @ts-expect-error Cannot assign to 'n' because it is a read-only property.
x.arr[0].n = 10;