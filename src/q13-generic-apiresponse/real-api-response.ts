/* -------------------------------------- */
/* 4) Realistic example: fetch user (mock) */
/* -------------------------------------- */

import { ApiResponse, getOrThrow } from "./api-response.js";

type User = {
  id: string;
  name: string;
};

/**
 * This simulates a real API call.
 * In real life, this would be `fetch(...)` or axios call.
 */
function fetchUserById(userId: string): ApiResponse<User> {
  // Pretend database
  const db: Record<string, User> = {
    u1: { id: "u1", name: "A" },
    u2: { id: "u2", name: "B" },
  };

  const user = db[userId];

  if (user) {
    // ✅ Real "success" response shape
    return { ok: true, data: user };
  }

  // ❌ Real "error" response shape
  return { ok: false, error: `User not found: ${userId}` };
}

// ---- Using getOrThrow with real response ----

try {
  const response = fetchUserById("u1");
  console.log("API response : ", response);
  const user = getOrThrow(response);
  console.log("[Q13] fetched user =", user);
} catch (e) {
  console.log("[Q13] fetch u1 failed =", e instanceof Error ? e.message : e);
}
