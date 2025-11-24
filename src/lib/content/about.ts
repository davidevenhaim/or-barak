export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: 1999,
    title: "The Premiere",
    description:
      "Born. The production budget was low, but the potential was high."
  },
  {
    year: 2008,
    title: "Creative Differences",
    description:
      'Suspended from school for the first time. Critics called it "rebellious"; I called it "method acting".'
  },
  {
    year: 2015,
    title: "First Production",
    description:
      "Directed my first short film. Learned that passion beats budget every time."
  },
  {
    year: 2020,
    title: "LightVision",
    description:
      "Founded LightVision. Started bridging the gap between creative vision and strategic execution."
  },
  {
    year: 2024,
    title: "New Horizons",
    description:
      "Expanding into new creative territories. The story continues to evolve."
  }
];
