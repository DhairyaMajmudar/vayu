"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { categories } from "@/constants";

type EventModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (eventData: EventData) => void;
  event?: EventData | null;
  startDate?: Date;
  endDate?: Date;
};

type EventCategory = "personal" | "work" | "travel" | "family" | "other";

type Category = {
  value: EventCategory;
  label: string;
  color: string;
};

export type EventData = {
  title: string;
  start: Date;
  end: Date;
  description?: string;
  category?: EventCategory;
  allDay?: boolean;
};

export function EventModal({
  isOpen,
  onClose,
  onSave,
  event,
  startDate,
  endDate,
}: EventModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<EventData["category"]>("personal");
  const [allDay, setAllDay] = useState(true);

  useEffect(() => {
    if (isOpen) {
      if (event) {
        setTitle(event.title);
        setDescription(event.description || "");
        setCategory(event.category || "personal");
        setAllDay(event.allDay !== false);
      } else {
        setTitle("");
        setDescription("");
        setCategory("personal");
        setAllDay(true);
      }
    }
  }, [isOpen, event]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) return;

    onSave({
      title,
      description,
      category,
      start: event?.start || startDate || new Date(),
      end: event?.end || endDate || new Date(),
      allDay,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">
            {event ? "Edit Event" : "Add New Event"}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="event-title"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Event Title *
            </label>
            <input
              id="event-title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              placeholder="Add title"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="event-description"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="event-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              placeholder="Add description (optional)"
              rows={3}
            />
          </div>

          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => setCategory(cat.value as Category["value"])}
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    cat.color
                  } ${category === cat.value ? "ring-2 ring-offset-1" : ""}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="mb-1 flex items-center text-sm font-medium text-gray-700">
              <input
                type="checkbox"
                checked={allDay}
                onChange={(e) => setAllDay(e.target.checked)}
                className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              All day event
            </label>
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
