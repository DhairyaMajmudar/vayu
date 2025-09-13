import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from "./Logo";

const meta = {
  title: "Components/Home/Logo",
  component: Logo,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithCustomStyle: Story = {
  args: {
    className: "scale-125",
  },
  parameters: {
    docs: {
      description: {
        story: "Logo with custom scaling applied via className prop.",
      },
    },
  },
};
