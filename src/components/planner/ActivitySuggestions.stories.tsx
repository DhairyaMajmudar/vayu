import type { Meta, StoryObj } from "@storybook/react";
import type { ActivitySuggestion } from "@/constants";
import { ActivitySuggestions } from "./ActivitySuggestions";

const meta = {
  title: "Components/Planner/ActivitySuggestions",
  component: ActivitySuggestions,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    selectedDuration: {
      control: { type: "select" },
      options: [2, 3, 4],
      description:
        "The duration of the weekend (2 = Regular, 3 = Long, 4 = Extended)",
    },
    activities: {
      control: "object",
      description: "Array of activity suggestions to display",
    },
    onActivitySelect: {
      action: "activity-selected",
      description: "Callback function when an activity is selected",
    },
  },
} satisfies Meta<typeof ActivitySuggestions>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockActivities: ActivitySuggestion[] = [
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
    id: "city-exploration",
    title: "City Museum Tour",
    description: "Visit local museums and cultural attractions",
    category: "travel",
    duration: 3,
    allDay: true,
  },
  {
    id: "family-picnic",
    title: "Family Picnic",
    description: "Organize a outdoor picnic with family members",
    category: "family",
    duration: 2,
    allDay: false,
  },
  {
    id: "work-project",
    title: "Side Project",
    description: "Work on that personal coding project you've been putting off",
    category: "work",
    duration: 4,
    allDay: false,
  },
];

const longWeekendActivities: ActivitySuggestion[] = [
  {
    id: "weekend-getaway",
    title: "Weekend Getaway",
    description: "Plan a short trip to a nearby city or countryside",
    category: "travel",
    duration: 3,
    allDay: true,
  },
  {
    id: "home-renovation",
    title: "Home Improvement Project",
    description: "Tackle that DIY project you've been planning",
    category: "personal",
    duration: 3,
    allDay: false,
  },
  {
    id: "skill-learning",
    title: "Learn New Skill",
    description: "Take an intensive course or workshop",
    category: "personal",
    duration: 3,
    allDay: false,
  },
];

const extendedWeekendActivities: ActivitySuggestion[] = [
  {
    id: "mini-vacation",
    title: "Mini Vacation",
    description: "Take a 4-day trip to explore a new destination",
    category: "travel",
    duration: 4,
    allDay: true,
  },
  {
    id: "intensive-project",
    title: "Intensive Project",
    description: "Complete a major personal or work project",
    category: "work",
    duration: 4,
    allDay: false,
  },
];

export const RegularWeekend: Story = {
  args: {
    activities: mockActivities.filter((activity) => activity.duration <= 2),
    onActivitySelect: () => console.log("activity-selected"),
    selectedDuration: 2,
  },
};

export const LongWeekend: Story = {
  args: {
    activities: longWeekendActivities,
    onActivitySelect: () => console.log("activity-selected"),
    selectedDuration: 3,
  },
};

export const ExtendedWeekend: Story = {
  args: {
    activities: extendedWeekendActivities,
    onActivitySelect: () => console.log("activity-selected"),
    selectedDuration: 4,
  },
};

export const MixedCategories: Story = {
  args: {
    activities: mockActivities,
    onActivitySelect: () => console.log("activity-selected"),
    selectedDuration: 2,
  },
};

export const EmptyState: Story = {
  args: {
    activities: [],
    onActivitySelect: () => console.log("activity-selected"),
    selectedDuration: 2,
  },
};

export const SingleActivity: Story = {
  args: {
    activities: [mockActivities[0]],
    onActivitySelect: () => console.log("activity-selected"),
    selectedDuration: 2,
  },
};

export const LongDescriptions: Story = {
  args: {
    activities: [
      {
        id: "complex-activity",
        title: "Very Long Activity Title That Might Wrap",
        description:
          "This is a very long description that demonstrates how the component handles text overflow and wrapping. It should be truncated with ellipsis after a couple of lines to maintain the layout integrity.",
        category: "other",
        duration: 2,
        allDay: false,
      },
      {
        id: "another-long",
        title: "Another Activity",
        description:
          "Another activity with a reasonable length description that fits well within the component boundaries.",
        category: "personal",
        duration: 2,
        allDay: false,
      },
    ],
    onActivitySelect: () => console.log("activity-selected"),
    selectedDuration: 2,
  },
};
