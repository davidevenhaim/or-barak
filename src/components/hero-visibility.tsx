"use client";

import { createContext, useContext, useMemo, useState } from "react";

/**
 * Where the landing-page hero is relative to the viewport. The hero reports
 * it; the navbar reads it to decide whether to show the tagline that
 * "migrates" out of the hero once it scrolls away.
 * "absent" = no hero on the current page (deep pages), so nothing migrates.
 */
export type HeroVisibility = "in-view" | "out-of-view" | "absent";

interface HeroVisibilityContextValue {
  heroVisibility: HeroVisibility;
  setHeroVisibility: (value: HeroVisibility) => void;
}

const HeroVisibilityContext = createContext<HeroVisibilityContextValue>({
  heroVisibility: "absent",
  setHeroVisibility: () => {}
});

export function HeroVisibilityProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [heroVisibility, setHeroVisibility] =
    useState<HeroVisibility>("absent");
  const value = useMemo(
    () => ({ heroVisibility, setHeroVisibility }),
    [heroVisibility]
  );
  return (
    <HeroVisibilityContext.Provider value={value}>
      {children}
    </HeroVisibilityContext.Provider>
  );
}

export function useHeroVisibility() {
  return useContext(HeroVisibilityContext);
}
