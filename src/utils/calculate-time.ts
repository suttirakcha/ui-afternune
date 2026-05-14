import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocate from "dayjs/plugin/updateLocale";
import utc from "dayjs/plugin/utc";
import "dayjs/locale/th";

dayjs.extend(relativeTime);
dayjs.extend(updateLocate);
dayjs.extend(utc);
dayjs.locale("en");

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

dayjs.updateLocale("th", {
  relativeTime: {
    future: "ในอีก %s",
    past: "%sที่ผ่านมา",
    s: "เมื่อสักครู่นี้",
    m: "1 นาที",
    mm: "%d นาที",
    h: "1 ชั่วโมง",
    hh: "%d ชั่วโมง",
    d: "1 วัน",
    dd: "%d วัน",
    M: "1 เดือน",
    MM: "%d เดือน",
    y: "1 ปี",
    yy: "%d ปี",
  },
});

export const calculateTime = (date: Date | string) => {
  const result = dayjs.utc(date).fromNow();
  return result.includes("Just now") ? "Just now" : result;
};

setInterval(calculateTime, 1000);
