import React, { useState, useEffect, useCallback } from "react";
import Sidebar from "../components/Sidebar/Sidebar";

const DAY_LABELS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

const getWeekDays = (referenceDate) => {
  const date = new Date(referenceDate);
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -6 : 1);
  const monday = new Date(date);
  monday.setDate(diff);
  monday.setHours(0, 0, 0, 0);
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return d;
  });
};

const isSameDay = (a, b) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

const formatTime = (dateTimeStr) => {
  if (!dateTimeStr) return null;
  return new Date(dateTimeStr).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};

const CalendarScreen = () => {
  const [weekOffset, setWeekOffset] = useState(0);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const today = new Date();
  const reference = new Date(today);
  reference.setDate(today.getDate() + weekOffset * 7);
  const weekDays = getWeekDays(reference);

  const weekLabel = `${weekDays[0].toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
  })} — ${weekDays[6].toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })}`;

  const fetchEvents = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await window.electron.calendarGetEvents();
      setEvents(data);
    } catch (err) {
      setError(err.message ?? "Failed to load calendar.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const getEventsForDay = (day) =>
    events.filter((e) => {
      const str = e.start?.dateTime ?? e.start?.date;
      return str && isSameDay(new Date(str), day);
    });

  return (
    <div className="h-screen flex overflow-hidden bg-vector-bg text-vector-white font-terminal relative">
      <div className="scanline" />
      <Sidebar />

      <main className="flex-1 flex flex-col min-w-0 relative z-10 overflow-hidden">
        {/* Header */}
        <header className="h-14 border-b border-vector-blue flex items-center justify-between px-6 backdrop-blur-md bg-vector-bg/40 z-10 flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-vector-white/60 font-mono tracking-wider">
              CALENDAR
            </span>
            <span className="text-[10px] text-vector-blue font-bold">&gt;&gt;</span>
            <span className="text-[10px] text-vector-blue font-mono tracking-wider terminal-text">
              WEEKLY_VIEW
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setWeekOffset((o) => o - 1)}
              className="px-3 py-1 border border-vector-blue/30 text-vector-blue/60 hover:text-vector-blue hover:border-vector-blue text-[9px] font-mono tracking-widest transition-colors"
            >
              ◂ PREV
            </button>
            <span className="text-[8px] text-vector-blue/60 font-mono tracking-widest min-w-[160px] text-center">
              {weekLabel}
            </span>
            <button
              onClick={() => setWeekOffset((o) => o + 1)}
              className="px-3 py-1 border border-vector-blue/30 text-vector-blue/60 hover:text-vector-blue hover:border-vector-blue text-[9px] font-mono tracking-widest transition-colors"
            >
              NEXT ▸
            </button>
            <button
              onClick={() => setWeekOffset(0)}
              className="px-3 py-1 border border-vector-blue/20 bg-vector-blue/5 text-vector-blue text-[8px] font-mono tracking-widest hover:bg-vector-blue/10 transition-colors"
            >
              TODAY
            </button>
            <button
              onClick={fetchEvents}
              className="text-vector-blue/50 hover:text-vector-blue transition-colors"
              title="Refresh"
            >
              <span className="material-symbols-outlined text-[18px]">refresh</span>
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-hidden flex flex-col p-4 gap-3">
          {/* Day header row */}
          <div className="grid grid-cols-7 gap-2 flex-shrink-0">
            {weekDays.map((day, i) => {
              const isToday = isSameDay(day, today);
              return (
                <div
                  key={i}
                  className={`flex flex-col items-center py-3 border ${
                    isToday
                      ? "border-vector-blue bg-vector-blue/10"
                      : "border-vector-blue/20 bg-vector-bg/40"
                  }`}
                >
                  <span
                    className={`text-[8px] font-mono tracking-widest uppercase ${
                      isToday ? "text-vector-blue" : "text-vector-white/40"
                    }`}
                  >
                    {DAY_LABELS[i]}
                  </span>
                  <span
                    className={`text-xl font-bold font-mono mt-1 ${
                      isToday
                        ? "text-vector-blue terminal-text"
                        : "text-vector-white/70"
                    }`}
                  >
                    {String(day.getDate()).padStart(2, "0")}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Event columns */}
          {loading ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="flex flex-col items-center gap-3">
                <span className="material-symbols-outlined text-vector-blue text-3xl animate-spin">
                  progress_activity
                </span>
                <span className="text-[9px] text-vector-blue/60 font-mono tracking-widest uppercase">
                  FETCHING_CALENDAR_DATA...
                </span>
              </div>
            </div>
          ) : error ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="border border-red-500/30 bg-red-500/5 px-8 py-6 flex flex-col items-center gap-3">
                <span className="material-symbols-outlined text-red-400 text-2xl">
                  error
                </span>
                <p className="text-[9px] text-red-400 font-mono tracking-widest">
                  {error}
                </p>
                <button
                  onClick={fetchEvents}
                  className="px-4 py-2 border border-vector-blue/40 text-vector-blue text-[8px] font-mono tracking-widest hover:bg-vector-blue/10 transition-colors"
                >
                  RETRY
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-7 gap-2 flex-1 overflow-y-auto">
              {weekDays.map((day, i) => {
                const dayEvents = getEventsForDay(day);
                const isToday = isSameDay(day, today);
                return (
                  <div
                    key={i}
                    className={`flex flex-col gap-2 p-2 border ${
                      isToday
                        ? "border-vector-blue/30"
                        : "border-vector-blue/10"
                    } bg-vector-bg/20 min-h-0`}
                  >
                    {dayEvents.length === 0 ? (
                      <div className="flex-1 flex items-center justify-center py-8">
                        <span className="text-[7px] text-vector-white/10 font-mono tracking-widest [writing-mode:vertical-rl]">
                          NO_EVENTS
                        </span>
                      </div>
                    ) : (
                      dayEvents.map((event) => {
                        const startTime = formatTime(event.start?.dateTime);
                        const isAllDay = !event.start?.dateTime;
                        return (
                          <div
                            key={event.id}
                            className="border border-vector-blue/30 bg-vector-blue/5 hover:bg-vector-blue/10 p-2 cursor-pointer transition-colors group flex flex-col gap-1"
                          >
                            <span className="text-[7px] text-vector-blue/50 font-mono">
                              {isAllDay ? "ALL_DAY" : startTime}
                            </span>
                            <p className="text-[8px] text-vector-white group-hover:text-vector-blue transition-colors uppercase tracking-tight leading-tight line-clamp-3">
                              {event.summary ?? "UNTITLED_EVENT"}
                            </p>
                          </div>
                        );
                      })
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CalendarScreen;
