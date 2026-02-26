/**
 * Q9) Omit Sensitive Fields
 * Goal:
 * PublicUser = Omit<User, "email"> & { displayName: string }
 */

/** 1) Base User type (example) */
type User = {
  id: string;
  name: string;
  email: string; // sensitive
};

/** 2) PublicUser: remove email + add displayName */
export type PublicUser = Omit<User, "email"> & {
  displayName: string;
};

/** 3) Example usage */
const p: PublicUser = {
  id: "u1",
  name: "A",
  displayName: "A (u1)",
};

console.log("[Q9] PublicUser =", p);

/** 4) This should fail (email does not exist on PublicUser) */
// @ts-expect-error Property 'email' does not exist on type 'PublicUser'.
console.log(p.email);