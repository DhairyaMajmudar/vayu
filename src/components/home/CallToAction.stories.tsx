import type { Meta, StoryObj } from "@storybook/react";
import { CallToAction } from "./CallToAction";

const meta = {
  title: "Components/Home/CallToAction",
  component: CallToAction,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof CallToAction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};