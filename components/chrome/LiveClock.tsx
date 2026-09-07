"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.DateTimeFormat("fr-FR", {
  timeZone: "Europe/Paris",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

export function LiveClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    setTime(formatter.format(new Date()));
    const id = setInterval(() => setTime(formatter.format(new Date())), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="mono" suppressHydrationWarning>
      PARIS — {time ?? "--:--:--"}
    </span>
  );
}
