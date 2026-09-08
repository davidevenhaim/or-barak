"use client";

import { useEffect, useState } from "react";

/**
 * `null` on the server and during hydration (unknown — render both
 * breakpoint variants and let CSS pick), then the live match once mounted.
 * Never reads matchMedia during render, so server and client markup agree.
 */
export function useMediaQuery(query: string): boolean | null {
  const [matches, setMatches] = useState<boolean | null>(null);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const update = () => setMatches(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, [query]);

  return matches;
}
