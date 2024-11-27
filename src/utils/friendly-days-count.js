export function friendlyDaysCount(inputDate) {
  const today = new Date();
  const date = new Date(inputDate);

  // Calculate the difference in days
  const diffInTime = date.setHours(0, 0, 0, 0) - today.setHours(0, 0, 0, 0);
  const diffInDays = Math.round(diffInTime / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) return "Today";
  if (diffInDays === 1) return "Tomorrow";
  if (diffInDays === -1) return "Yesterday";
  if (diffInDays > 1) return `${diffInDays} days later`;
  return `${Math.abs(diffInDays)} days ago`;
}
