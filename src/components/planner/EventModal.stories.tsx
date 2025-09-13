import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { EventModal } from "./EventModal";

const meta = {
  title: "Components/Planner/EventModal",
  component: EventModal,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "Controls the visibility of the modal",
    },
    onClose: {
      action: "closed",
      description: "Callback function when modal is closed",
    },
    onSave: {
      action: "saved",
      description: "Callback function when event is saved",
    },
    onDelete: {
      action: "deleted",
      description: "Callback function when event is deleted",
    },
    event: {
      control: "object",
      description: "Existing event data for editing",
    },
    startDate: {
      control: "date",
      description: "Default start date for new events",
    },
    endDate: {
      control: "date",
      description: "Default end date for new events",
    },
  },
} satisfies Meta<typeof EventModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NewEvent: Story = {
  args: {
    isOpen: true,
    onClose: action("onClose"),
    onSave: action("onSave"),
    startDate: new Date(2025, 9, 15),
    endDate: new Date(2025, 9, 15),
  },
  name: "New Event",
};

export const EditEvent: Story = {
  args: {
    isOpen: true,
    onClose: action("onClose"),
    onSave: action("onSave"),
    onDelete: action("onDelete"),
    event: {
      title: "Team Meeting",
      start: new Date(2025, 9, 15, 9, 0),
      end: new Date(2025, 9, 15, 10, 0),
      description: "Weekly team standup meeting",
      category: "work",
      allDay: false,
    },
  },
  name: "Edit Event",
};

export const PersonalEvent: Story = {
  args: {
    isOpen: true,
    onClose: action("onClose"),
    onSave: action("onSave"),
    onDelete: action("onDelete"),
    event: {
      title: "Morning Workout",
      start: new Date(2025, 9, 16, 6, 0),
      end: new Date(2025, 9, 16, 7, 30),
      description: "Daily exercise routine",
      category: "personal",
      allDay: false,
    },
  },
  name: "Personal Event",
};

export const EventWithLongDescriptionAndName: Story = {
  args: {
    isOpen: true,
    onClose: action("onClose"),
    onSave: action("onSave"),
    onDelete: action("onDelete"),
    event: {
      title: "Annual Company Retreat Very Very Long Named Stroybook",
      start: new Date(2025, 9, 25, 9, 0),
      end: new Date(2025, 9, 25, 17, 0),
      description:
        "This is our annual company retreat where we'll have team building activities, strategic planning sessions, and a lot of fun activities. We'll start with breakfast at 9 AM, followed by various workshops and end with a dinner party.",
      category: "work",
      allDay: false,
    },
  },
  name: "Event with Long Description and Name",
};

export const ModalClosed: Story = {
  args: {
    isOpen: false,
    onClose: action("onClose"),
    onSave: action("onSave"),
    startDate: new Date(2025, 9, 15),
    endDate: new Date(2025, 9, 15),
  },
  name: "Modal Closed",
};
