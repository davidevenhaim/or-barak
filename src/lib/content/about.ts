import { OR_CONSTANTS } from "../constants/or.constants";
import { getEmailLink, getWhatsappLink } from "../utils/links.utils";

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: "1999",
    title: "The Premiere",
    description:
      "Born. The production budget was low, but the potential was high."
  },
  {
    year: "2002",
    title: "First Festival Award ",
    description:
      "Won the talent show in my Kindergarten for my self-produced puppet show exploring the complex socio-economic dynamics of the playground. Budget was tight, but vision was clear."
  },
  {
    year: "2009",
    title: "Creative Differences",
    description:
      'Suspended for the first time. Apparently, yelling "CUT!" in the middle of a history class is "disrespectful." I just felt the scene had pacing issues.'
  },
  {
    year: "2012",
    title: "VP of Street Marketing",
    description:
      'Landed my first job distributing pizza flyers. Spearheaded a high-volume, direct-to-consumer print campaign. Key takeaway: "Brand awareness" mostly involves strangers avoiding eye contact.'
  },
  {
    year: "2012 – 2018",
    title: "Unscripted Chaos",
    description:
      "Six seasons of high school drama, unscripted adventures, and sleepless nights. A low-budget production featuring questionable fashion choices, first loves, broken hearts and a soundtrack played way too loud."
  },
  {
    year: "2018 - 2020",
    title: "Act II: The Shift ",
    description:
      "Pre-Military Program & IDF Service, The ultimate crash course in adulthood"
  },
  {
    year: "2020 – 2021",
    title: "Narrative Control",
    description:
      "Started to work at a bookstore and rose to Branch Manager. My first true lesson in production: coordinating inventory, managing staff, and realizing that finding the right story for the right person is an art form."
  },
  {
    year: "2021 – 2023",
    title: "Quality Control",
    description:
      "Dived into the startup world. Started as a tester, rose to Operations Manager and QA Team Lead. I spent two years hunting for bugs and logic errors, proof that I’ve always had an obsessively sharp eye for detail."
  },
  {
    year: "2023 – Present",
    title: "The Feature Presentation",
    description:
      "Founded LightVision Studios - The rehearsals are over. I went all in - dedicating every waking hour to art, production, and storytelling. No Plan B, just pure VISION."
  }
];

export const socialLinks = [
  {
    name: "contact_social_instagram",
    href: OR_CONSTANTS.INSTAGRAM,
    icon: "mdi:instagram"
  },
  {
    name: "contact_social_whatsapp",
    href: getWhatsappLink(OR_CONSTANTS.WHATSAPP),
    icon: "mdi:whatsapp"
  },
  {
    name: "contact_social_email",
    href: getEmailLink(OR_CONSTANTS.EMAIL),
    icon: "mdi:email-outline"
  }
];
