/*
 * Get a three letter month string from an integer.
 */

function getMonthStringFromInt(int: number) {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];

  return months[int];
}

/*
 * Add a leading zero to a single integer.
 */
function addLeadingZero(num: any) {
  num = num.toString();
  while (num.length < 2) num = '0' + num;
  return num;
}

/*
 * Format a blog post published date for a datetime
 * HTML element.
 */
export function formatPublishedDateForDateTime(dateString: string) {
  const timestamp = Date.parse(dateString);
  const date = new Date(timestamp);
  return `${date.getFullYear()}-${addLeadingZero(
    date.getMonth() + 1
  )}-${date.getDate()}`;
}

/*
 * Format a blog post published date for a human to read.
 * Output is e.g. 16 Feb 2020
 */
export function formatPublishedDateForDisplay(dateString: string) {
  const timestamp = Date.parse(dateString);
  const date = new Date(timestamp);
  return `${date.getDate()} ${getMonthStringFromInt(
    date.getMonth()
  )} ${date.getFullYear()}`;
}
