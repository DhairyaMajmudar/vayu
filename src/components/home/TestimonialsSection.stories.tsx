import type { Meta, StoryObj } from "@storybook/react";
import { TestimonialsSection } from "./TestimonialsSection";

const meta = {
  title: "Components/Home/TestimonialsSection",
  component: TestimonialsSection,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof TestimonialsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
