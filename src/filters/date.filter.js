export default function dateFilter(value, filter = "time") {
  const options = {};

  if (filter.includes("date")) {
    options.day = "2-digit";
    options.month = "long";
    options.year = "numeric";
  }
  if (filter.includes("time")) {
    options.hour = "2-digit";
    options.minute = "2-digit";
    options.second = "2-digit";
  }

  return new Intl.DateTimeFormat(options).format(new Date(value));
}
