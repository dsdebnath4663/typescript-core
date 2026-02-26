
/**
 * Q10) Readonly Enforcement
 * Goal:
 * - Show readonly mutation fails (compile error)
 * - Fix it by creating a new object (immutable update)
 */

type User = {
  readonly id: string; // readonly enforced
  name: string;
};

const u: User = { id: "u1", name: "A" };

console.log("[Q10] before =", u);

/**
 * FAIL PATH (compile-time): mutation should not be allowed.
 * Keep inside `if (false)` so it never runs at runtime but still triggers
 * the readonly error for the type checker.
 */
if (false) {
  // @ts-expect-error Cannot assign to 'id' because it is a read-only property.
  u.id = "x";
}

/**
 * FIX PATH: immutable update (create a new object)
 */
const u2: User = { ...u, id: "u2" };

console.log("[Q10] after (u)  =", u);
console.log("[Q10] after (u2) =", u2);


