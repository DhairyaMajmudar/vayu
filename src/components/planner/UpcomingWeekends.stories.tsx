import type { Meta, StoryObj } from "@storybook/react";
import { UpcomingWeekends } from "./UpcomingWeekends";

const meta = {
  title: "Components/Planner/UpcomingWeekends",
  component: UpcomingWeekends,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    longWeekends: {
      control: "object",
      description: "Array of long weekend data to display",
    },
  },
} satisfies Meta<typeof UpcomingWeekends>;

export default meta;
type Story = StoryObj<typeof meta>;

const upcomingLongWeekends = [
  {
    title: "Dussehra Long Weekend",
    start: new Date(2025, 9, 30),
    end: new Date(2025, 10, 2),
    isLongWeekend: true,
  },
  {
    title: "Diwali Celebration",
    start: new Date(2025, 10, 19),
    end: new Date(2025, 10, 21),
    isLongWeekend: true,
  },
  {
    title: "Christmas Holiday",
    start: new Date(2025, 11, 25),
    end: new Date(2025, 11, 28),
    isLongWeekend: true,
  },
];

const potentialLongWeekends = [
  {
    title: "Gandhi Jayanti",
    start: new Date(2025, 9, 2),
    end: new Date(2025, 9, 5),
    isLongWeekend: true,
    isPotential: true,
  },
  {
    title: "Republic Day Weekend",
    start: new Date(2026, 0, 24),
    end: new Date(2026, 0, 26),
    isLongWeekend: true,
    isPotential: true,
  },
];

export const Default: Story = {
  args: {
    longWeekends: upcomingLongWeekends,
  },
  name: "Default",
};

export const WithPotentialWeekends: Story = {
  args: {
    longWeekends: [...upcomingLongWeekends, ...potentialLongWeekends],
  },
  name: "With Potential Weekends",
};

export const OnlyPotentialWeekends: Story = {
  args: {
    longWeekends: potentialLongWeekends,
  },
  name: "Only Potential Weekends",
};
