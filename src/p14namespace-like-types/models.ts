export type Models = {
  User: { id: string; name: string };
  Product: { sku: string; price: number };
};

export type UserModel = Models["User"];
export type ProductModel = Models["Product"];

const u: UserModel = { id: "u1", name: "A" };
console.log("[Q14] user=", u);

const p: ProductModel = { sku: "SKU-1", price: 99 };
console.log("[Q14] product=", p);

// const badUser: UserModel = { id: "u2" };
// const badProduct: ProductModel = { sku: "SKU-2", price: "91" };
