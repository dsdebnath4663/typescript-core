export type Result<T, E> = { ok: true; data: T } | { ok: false; error: E };

export function unwrap<T, E>(r: Result<T, E>): T {
  if (r.ok === true) {
    return r.data;
  }
  const msg = typeof r.error === "string" ? r.error : JSON.stringify(r.error);
  throw new Error(msg);
}
console.log("[Q15] unwrap ok =", unwrap({ ok: true, data: 1 }));
try {
  console.log("[Q15] unwrap fail =", unwrap({ ok: false, error: "Nope" }));
} catch (e) {
  console.log("[Q15] threw =", e instanceof Error ? e.message : e);
}

try {
  console.log(
    unwrap({
      ok: false,
      error: { code: 404, message: "Not found" },
    }),
  );
} catch (e) {
  console.log("[Q15] threw =", e instanceof Error ? e.message : e);
}