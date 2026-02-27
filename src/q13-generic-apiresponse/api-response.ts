import { get } from "node:http";

export interface ApiResponse<T> {
  ok: boolean;
  data?: T;
  error?: string;
}

export function getOrThrow<T>(r: ApiResponse<T>): T {
  if (r.ok === true && r.data !== undefined) {
    console.log("valid data: ", r.data);
    return r.data;
  }
  if (r.ok === false) {
    throw new Error(r.error ?? "Unknown error (ok=false)");
  }
  throw new Error("Response ok=true কিন্তু data missing");
}

const r1: ApiResponse<number> = { ok: true, data: 1 };
console.log("[Q13] r1 result =", getOrThrow(r1));
