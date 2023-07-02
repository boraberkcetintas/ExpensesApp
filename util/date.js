export function getFormattedDate(date) {
  return( `${date.getDate() < 10 ? "0" : ""}${date.getDate()}.${date.getMonth() < 10 ? "0" : ""}${date.getMonth() + 1}.${date.getFullYear()}`);
}