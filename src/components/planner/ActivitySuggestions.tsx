"use client";

import { PlusIcon } from "@heroicons/react/24/outline";
import type { ActivitySuggestion } from "@/constants";
import { getCategoryColor } from "@/lib";

type ActivitySuggestionsProps = {
  activities: ActivitySuggestion[];
  onActivitySelect: (activity: ActivitySuggestion) => void;
  selectedDuration: 2 | 3 | 4;
};

export function ActivitySuggestions({
  activities,
  onActivitySelect,
  selectedDuration,
}: ActivitySuggestionsProps) {
  const getDurationText = (duration: number) => {
    switch (duration) {
      case 2:
        return "Regular Weekend";
      case 3:
        return "Long Weekend";
      case 4:
        return "Extended Weekend";
      default:
        return "Weekend";
    }
  };

  if (activities.length === 0) {
    return (
      <div className="rounded-md bg-gradient-to-r from-green-50 to-emerald-50 p-5">
        No activites present
      </div>
    );
  }

  return (
    <div className="rounded-md bg-gradient-to-r from-green-50 to-emerald-50 p-5">
      <h3 className="mb-3 text-lg font-medium text-gray-900">
        {getDurationText(selectedDuration)} Activity Ideas
      </h3>
      <p className="mb-4 text-sm text-gray-600">
        Click + to add any activity to your calendar
      </p>

      <div className="space-y-3">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center justify-between rounded-lg bg-white p-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-start space-x-3 flex-1">
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-900 truncate">
                  {activity.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                  {activity.description}
                </p>
                <div className="flex items-center mt-2 space-x-2">
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${getCategoryColor(
                      activity.category,
                    )}`}
                  >
                    {activity.category}
                  </span>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => onActivitySelect(activity)}
              className="ml-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors duration-200 cursor-pointer"
              title={`Add ${activity.title} to calendar`}
            >
              <PlusIcon className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
