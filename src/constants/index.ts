import type Event from "react-big-calendar";

export type EventCategory = "personal" | "work" | "travel" | "family" | "other";

export type ActivitySuggestion = {
  id: string;
  title: string;
  description: string;
  category: EventCategory;
  duration: 2 | 3 | 4;
  allDay: boolean;
};

export interface MyEvent extends Event {
  title: string;
  start: Date;
  end: Date;
  isHoliday?: boolean;
  isLongWeekend?: boolean;
  isPotential?: boolean;
  description?: string;
  category?: EventCategory;
  allDay?: boolean;
}

export const activitySuggestions: ActivitySuggestion[] = [
  {
    id: "movie-marathon",
    title: "Movie Marathon",
    description:
      "Binge-watch your favorite movie series with snacks and cozy vibes",
    category: "personal",
    duration: 2,
    allDay: false,
  },
  {
    id: "local-hike",
    title: "Local Hiking Trail",
    description: "Explore nearby hiking trails and enjoy nature",
    category: "personal",
    duration: 2,
    allDay: false,
  },
  {
    id: "cooking-experiment",
    title: "Cooking New Recipe",
    description: "Try making a complex dish you've never attempted before",
    category: "personal",
    duration: 2,
    allDay: false,
  },
  {
    id: "weekend-getaway",
    title: "Weekend Getaway",
    description: "Short trip to a nearby destination for relaxation",
    category: "travel",
    duration: 3,
    allDay: true,
  },
  {
    id: "home-renovation",
    title: "Home DIY Project",
    description: "Tackle that home improvement project you've been postponing",
    category: "personal",
    duration: 3,
    allDay: false,
  },
  {
    id: "skill-learning",
    title: "Learn New Skill",
    description:
      "Dedicate time to learning something new like guitar, painting, or coding",
    category: "personal",
    duration: 3,
    allDay: false,
  },
  {
    id: "international-trip",
    title: "International Trip",
    description: "Plan a short international vacation to explore a new country",
    category: "travel",
    duration: 4,
    allDay: true,
  },
  {
    id: "camping-adventure",
    title: "Camping Adventure",
    description:
      "Multi-day camping trip with hiking, fishing, and outdoor activities",
    category: "travel",
    duration: 4,
    allDay: true,
  },
  {
    id: "workshop-retreat",
    title: "Workshop/Retreat",
    description:
      "Attend a professional development workshop or wellness retreat",
    category: "work",
    duration: 4,
    allDay: true,
  },
];

export const indianHolidays = [
  {
    title: "Republic Day",
    start: new Date(2025, 0, 26),
    end: new Date(2025, 0, 26),
    isHoliday: true,
  },
  {
    title: "Holi",
    start: new Date(2025, 2, 14),
    end: new Date(2025, 2, 14),
    isHoliday: true,
  },
  {
    title: "Ram Navami",
    start: new Date(2025, 3, 7),
    end: new Date(2025, 3, 7),
    isHoliday: true,
  },
  {
    title: "Good Friday",
    start: new Date(2025, 3, 18),
    end: new Date(2025, 3, 18),
    isHoliday: true,
  },
  {
    title: "Buddha Purnima",
    start: new Date(2025, 4, 13),
    end: new Date(2025, 4, 13),
    isHoliday: true,
  },
  {
    title: "Eid al-Fitr",
    start: new Date(2025, 4, 24),
    end: new Date(2025, 4, 24),
    isHoliday: true,
  },
  {
    title: "Independence Day",
    start: new Date(2025, 7, 15),
    end: new Date(2025, 7, 15),
    isHoliday: true,
  },
  {
    title: "Gandhi Jayanti",
    start: new Date(2025, 9, 2),
    end: new Date(2025, 9, 2),
    isHoliday: true,
  },
  {
    title: "Dussehra",
    start: new Date(2025, 9, 30),
    end: new Date(2025, 9, 30),
    isHoliday: true,
  },
  {
    title: "Diwali",
    start: new Date(2025, 10, 19),
    end: new Date(2025, 10, 19),
    isHoliday: true,
  },
  {
    title: "Christmas",
    start: new Date(2025, 11, 25),
    end: new Date(2025, 11, 25),
    isHoliday: true,
  },
] as MyEvent[];

export const categories = [
  {
    value: "personal",
    label: "Personal",
    color: "bg-blue-100 text-blue-800 ",
  },
  {
    value: "work",
    label: "Work",
    color: "bg-green-100 text-green-800 ",
  },
  {
    value: "travel",
    label: "Travel",
    color: "bg-amber-100 text-amber-800 ",
  },
  {
    value: "family",
    label: "Family",
    color: "bg-rose-100 text-rose-800 ",
  },
  {
    value: "other",
    label: "Other",
    color: "bg-gray-100 text-gray-800 ",
  },
];
