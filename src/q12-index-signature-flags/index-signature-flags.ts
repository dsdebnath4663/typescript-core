type Flags = Record<string, boolean>;

const flags: Flags = {
  newUI: true,
  darkMode: false,
};

function isEnabled(flags: Flags, key: string): boolean {
  // key না থাকলে undefined হবে, তাই false দিয়ে fallback
  return flags[key] ?? false;
}

console.log(isEnabled(flags, "newUI"));   // true
console.log(isEnabled(flags, "darkMode"));// false
console.log(isEnabled(flags, "x"));       // false (missing key)