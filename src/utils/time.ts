export function getMonthYear() {
  const now = new Date();
  const currentMonth = now.getMonth() + 1; // Adding 1 because getMonth() is zero-based
  const currentYear = now.getFullYear();

  let prevMonth = currentMonth - 1;
  let prevYear = currentYear;

  // Adjust for January (0)
  if (prevMonth === 0) {
    prevMonth = 12;
    prevYear -= 1;
  }

  return {
    currentMonthYear: `${currentYear}-${currentMonth.toString().padStart(2, "0")}`,
    previousMonthYear: `${prevYear}-${prevMonth.toString().padStart(2, "0")}`
  };
}

export function extractMonthYear(dateString : string) {
  const parts = dateString.split('-');
  const month = parseInt(parts[1], 10);
  const year = parseInt(parts[0], 10);
  return { month, year };
}

export function getDatesOfMonth(year: number, month: number) {
  const dates = [];
  const date = new Date(year, month , 1); // Subtract 1 to make the month zero-based

  while (date.getMonth() === month ) { // Also adjust the condition to be zero-based
    dates.push(new Date(date)); // Push a copy of the date into the array
    date.setDate(date.getDate() + 1); // Increment the day
  }

  return dates;
}
