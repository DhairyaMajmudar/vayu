"use client";

import { useState } from "react";
import { Header, UpcomingWeekends } from "@/components";
import { Info } from "@/components/icons";

import { WeekendCalendar } from "@/components/planner/WeekendCalendar";
import { findUpcomingLongWeekends } from "@/lib";

const buttonItems = [
  {
    id: 1,
    text: "Regular Weekend (2 days)",
    day: 2,
  },
  {
    id: 2,
    text: "Long Weekend (3 days)",
    day: 3,
  },
  {
    id: 3,
    text: "Extended Weekend (4 days)",
    day: 4,
  },
];

const longWeekends = findUpcomingLongWeekends();

export default function PlannerPage() {
  const [planDuration, setPlanDuration] = useState<number>(2);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="mb-6 ">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
              <h1 className="text-3xl font-bold text-gray-900">
                Weekend Planner
              </h1>

              <div className="mt-4 flex flex-wrap gap-2 sm:mt-0">
                {buttonItems.map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    className={`rounded-md px-4 py-1.5 text-sm font-medium transition-colors ${
                      planDuration === item.day
                        ? "bg-indigo-600 text-white shadow-sm"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                    onClick={() => setPlanDuration(item.day)}
                  >
                    {item.text}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-md bg-blue-50 p-4">
              <div className="flex">
                <div className="shrink-0">
                  <Info className="h-5 w-5 text-blue-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">
                    Planning Tips
                  </h3>
                  <div className="mt-2 text-sm text-blue-700">
                    <p>
                      Red events are Indian holidays. Purple events are
                      potential long weekends. Click on any day to add your own
                      events to your calendar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            <div className="lg:col-span-3">
              <div className="h-[600px] rounded-md border border-gray-200 bg-white p-4 shadow-sm">
                <WeekendCalendar />
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="space-y-6">
                <UpcomingWeekends longWeekends={longWeekends} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
