export function getLastArrayItem<T>(arr: T[]): T | null {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }

  return arr[arr.length - 1];
}

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const shortMonthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

function leftPadZero(value: number): string {
  if (value < 10) {
    return `0${value}`;
  }

  return value.toString();
}

export function getFormattedDate(date: Date, isShortMonthName?: boolean): string {
  let result = monthNames[date.getMonth()];

  if (isShortMonthName) {
    result = shortMonthNames[date.getMonth()];
  }

  result += ` ${date.getDate()},`;
  result += ` ${date.getFullYear()}`;
  result += ` ${leftPadZero(date.getHours())}:${leftPadZero(date.getMinutes())}:${leftPadZero(date.getSeconds())}`;

  return result;
}

export function getTime(date: Date): string {
  return `${leftPadZero(date.getHours())}:${leftPadZero(date.getMinutes())}`;
}
