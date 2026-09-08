"use client";

import { useEffect, useState } from "react";

/**
 * `false` on the server and during hydration (so markup matches), then the
 * device's real prefers-reduced-motion setting once mounted. Unlike
 * framer-motion's useReducedMotion, this never reads matchMedia during render.
 */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return reduced;
}
