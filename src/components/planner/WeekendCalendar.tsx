"use client";

import { useEffect, useState } from "react";
import { Calendar, type Event } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "@/styles/calendar.css";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import { type EventData, EventModal } from "./EventModal";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import { indianHolidays } from "@/constants";
import { eventStyleGetter, findUpcomingLongWeekends, localizer } from "@/lib";

interface MyEvent extends Event {
  title: string;
  start: Date;
  end: Date;
  isHoliday?: boolean;
  isLongWeekend?: boolean;
  isPotential?: boolean;
  description?: string;
  category?: "personal" | "work" | "travel" | "family" | "other";
  allDay?: boolean;
}

const DnDCalendar = withDragAndDrop(Calendar);

const longWeekends = findUpcomingLongWeekends();

interface WeekendCalendarProps {
  externalEventData?: EventData | null;
  onExternalEventProcessed?: () => void;
}

export function WeekendCalendar({
  externalEventData,
  onExternalEventProcessed,
}: WeekendCalendarProps = {}) {
  const [myEvents, setMyEvents] = useState<MyEvent[]>([
    ...(indianHolidays as MyEvent[]),
    ...(longWeekends as MyEvent[]),
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<MyEvent | null>(null);
  const [selectedRange, setSelectedRange] = useState<{
    start: Date;
    end: Date;
  } | null>(null);

  useEffect(() => {
    if (externalEventData) {
      setSelectedEvent(null);
      setSelectedRange(null);
      setModalOpen(true);
    }
  }, [externalEventData]);

  const handleSelectSlot = ({ start, end }: { start: Date; end: Date }) => {
    setSelectedEvent(null);
    setSelectedRange({ start, end });
    setModalOpen(true);
  };

  const handleSelectEvent = (event: Event) => {
    const myEvent = event as MyEvent;
    if (myEvent.isHoliday || myEvent.isLongWeekend || myEvent.isPotential)
      return;

    setSelectedEvent(myEvent);
    setSelectedRange(null);
    setModalOpen(true);
  };

  const handleSaveEvent = (eventData: EventData) => {
    if (selectedEvent) {
      setMyEvents(
        myEvents.map((event) =>
          event === selectedEvent ? { ...event, ...eventData } : event,
        ),
      );
    } else {
      setMyEvents([...myEvents, eventData as MyEvent]);
    }
    setModalOpen(false);

    if (externalEventData && onExternalEventProcessed) {
      onExternalEventProcessed();
    }
  };

  const handleDeleteEvent = () => {
    if (selectedEvent) {
      setMyEvents(myEvents.filter((event) => event !== selectedEvent));
    }
    setModalOpen(false);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedEvent(null);
    setSelectedRange(null);

    if (externalEventData && onExternalEventProcessed) {
      onExternalEventProcessed();
    }
  };

  const moveEvent = ({ event, start, end }: any) => {
    const myEvent = event as MyEvent;
    if (myEvent.isHoliday || myEvent.isLongWeekend || myEvent.isPotential)
      return;

    setMyEvents(
      myEvents.map((existingEvent) =>
        existingEvent === event
          ? { ...existingEvent, start, end }
          : existingEvent,
      ),
    );
  };

  return (
    <>
      <DnDCalendar
        localizer={localizer}
        events={myEvents}
        style={{ height: "100%" }}
        eventPropGetter={eventStyleGetter}
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
        onEventDrop={moveEvent}
        onEventResize={moveEvent}
        selectable
        resizable
        views={["month", "week"]}
        popup
        step={60}
        showMultiDayTimes
        components={{
          toolbar: CalendarToolbar,
        }}
      />

      <EventModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveEvent}
        onDelete={handleDeleteEvent}
        event={(selectedEvent as EventData) || externalEventData}
        startDate={selectedRange?.start}
        endDate={selectedRange?.end}
      />
    </>
  );
}

function CalendarToolbar({ label, onNavigate, onView, views }: any) {
  return (
    <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => onNavigate("TODAY")}
          className="rounded-md bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-500"
        >
          Today
        </button>
        <div className="flex rounded-md shadow-sm">
          <button
            type="button"
            onClick={() => onNavigate("PREV")}
            className="rounded-l-md border border-gray-300 bg-white px-3 py-1.5 text-sm"
          >
            &lt;
          </button>
          <button
            type="button"
            onClick={() => onNavigate("NEXT")}
            className="rounded-r-md border border-l-0 border-gray-300 bg-white px-3 py-1.5 text-sm"
          >
            &gt;
          </button>
        </div>
        <span className="text-lg font-semibold text-gray-900">{label}</span>
      </div>
      <div className="flex rounded-md shadow-sm">
        {views.map((view: string) => (
          <button
            type="button"
            key={view}
            onClick={() => onView(view)}
            className={`border border-gray-300 px-4 py-1.5 text-sm capitalize first:rounded-l-md last:rounded-r-md ${
              view === "month" ? "first:border-r-0" : "last:border-l-0"
            } ${
              view === "month"
                ? "bg-gray-50 font-medium text-gray-700"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            {view}
          </button>
        ))}
      </div>
    </div>
  );
}
