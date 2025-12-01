import { type Video, type Partner, type QuickLink } from "@/components/home";
import { VideoCategory } from "@/components/home/video-slider";
import { routes } from "@/lib/constants/routes";

export const backgroundVideoUrl = `https://www.youtube.com/watch?v=zovzuZLY6G0`;

export const videos: Video[] = [
  {
    id: "2",
    title: "Boundaries - Short Film",
    description:
      "Trigger Alert: A short film about a personal experience related sexual harassment",
    videoUrl: "https://youtu.be/qNF-tdjnIs0",
    category: VideoCategory.DirectedFilmedEdited
  },
  {
    id: "1",
    title: "ABF2025",
    description:
      "Short documentary about the Academic Bridge Fellowship Program at UPenn.",
    videoUrl: "https://youtu.be/2e0jQjMLr7I",
    category: VideoCategory.DirectedFilmedEdited
  },
  {
    id: "3",
    title: "Nave Karni - Ben Adam",
    description: "A music video - the story of old and new",
    videoUrl: "https://www.youtu.be/U1DDEjH66jE",
    category: VideoCategory.HeadProducer
  }
];

export const partners: Partner[] = [
  {
    id: "1",
    name: "McDonald's",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/4f/McDonald's_Golden_Arches.svg"
  },
  {
    id: "2",
    name: "Ford",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg"
  },
  {
    id: "3",
    name: "Starbucks",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/sco/d/d3/Starbucks_Corporation_Logo_2011.svg"
  },
  {
    id: "4",
    name: "Nike",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
  },
  {
    id: "5",
    name: "Coca-Cola",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg"
  },
  {
    id: "6",
    name: "Toyota",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg"
  },
  {
    id: "7",
    name: "Amazon",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
  },
  {
    id: "8",
    name: "Adidas",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg"
  },
  {
    id: "9",
    name: "Pepsi",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a6/Pepsi_logo.svg"
  },
  {
    id: "10",
    name: "Tesla",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg"
  },
  {
    id: "11",
    name: "Shell",
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/6/6e/Shell_logo.svg"
  },
  {
    id: "12",
    name: "IKEA",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Ikea_logo.svg"
  },
  {
    id: "13",
    name: "Uber",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
  },
  {
    id: "14",
    name: "Heineken",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/61/Heineken_logo.svg"
  },
  {
    id: "15",
    name: "Samsung",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg"
  }
];

export const quickLinks: QuickLink[] = [
  {
    id: "1",
    title: "quicklinks_videography",
    description: "quicklinks_description_videography",
    href: routes.videography,
    icon: "lucide:video",
    color: "from-purple-500 to-purple-600"
  },
  {
    id: "2",
    title: "quicklinks_photography",
    description: "quicklinks_description_photography",
    href: routes.photography,
    icon: "lucide:camera",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: "3",
    title: "quicklinks_stories",
    description: "quicklinks_description_stories",
    href: routes.stories,
    icon: "lucide:book-open",
    color: "from-amber-500 to-amber-600"
  },
  {
    id: "4",
    title: "quicklinks_contact",
    description: "quicklinks_description_contact",
    href: routes.contact,
    icon: "lucide:mail",
    color: "from-green-500 to-green-600"
  }
];

export const videosSectionId = "videos";
