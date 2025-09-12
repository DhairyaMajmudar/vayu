"use client";

import { addMonths, format, isAfter } from "date-fns";
import { enUS } from "date-fns/locale";
import { useEffect, useState } from "react";
import { CalendarIcon } from "../icons";

type LongWeekend = {
  title: string;
  start: Date;
  end: Date;
  isLongWeekend?: boolean;
  isPotential?: boolean;
};

type UpcomingWeekendProps = {
  longWeekends: LongWeekend[];
};

export function UpcomingWeekends({ longWeekends }: UpcomingWeekendProps) {
  const [filteredWeekends, setFilteredWeekends] = useState<LongWeekend[]>([]);

  useEffect(() => {
    const today = new Date();
    const threeMonthsFromNow = addMonths(today, 3);

    const upcoming = longWeekends
      .filter(
        (weekend) =>
          isAfter(weekend.start, today) &&
          !isAfter(weekend.start, threeMonthsFromNow)
      )
      .sort((a, b) => a.start.getTime() - b.start.getTime());

    setFilteredWeekends(upcoming.slice(0, 3));
  }, [longWeekends]);

  if (filteredWeekends.length === 0) {
    return null;
  }

  return (
    <div className="mt-8 rounded-md bg-gradient-to-r from-blue-50 to-indigo-50 p-5">
      <h3 className="mb-3 text-lg font-medium text-gray-900">
        Upcoming Long Weekends
      </h3>

      <div className="space-y-4">
        {filteredWeekends.map((weekend, index) => (
          <div key={index} className="flex items-start">
            <div
              className={`mr-4 rounded-full p-2 ${
                weekend.isPotential
                  ? "bg-purple-100 text-purple-600"
                  : "bg-blue-100 text-blue-600"
              }`}
            >
              <CalendarIcon className="h-5 w-5" />
            </div>

            <div>
              <h4 className="font-medium text-gray-900">{weekend.title}</h4>
              <p className="text-sm text-gray-600">
                {format(weekend.start, "MMMM d", { locale: enUS })} -
                {format(weekend.end, "MMMM d, yyyy", { locale: enUS })}
              </p>
              {weekend.isPotential && (
                <p className="mt-1 text-xs text-purple-600">
                  Take a day off to make this a 4-day weekend!
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
