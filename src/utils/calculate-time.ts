import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocate from "dayjs/plugin/updateLocale";
import utc from "dayjs/plugin/utc";

dayjs.extend(relativeTime);
dayjs.extend(updateLocate);
dayjs.extend(utc);

dayjs.updateLocale("en", {
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: "Just now",
    m: "1 minute",
    mm: "%d minutes",
    h: "1 hour",
    hh: "%d hours",
    d: "1 day",
    dd: "%d days",
    M: "1 month",
    MM: "%d months",
    y: "1 year",
    yy: "%d years",
  },
});

export const calculateTime = (date: Date | string) => {
  const result = dayjs.utc(date).fromNow();
  return result.includes("Just now") ? "Just now" : result;
};

setInterval(calculateTime, 1000);
