/**
 * ymdNow()
 * @returns {String} todays date formatted as YYYY-MM-DD
 */
function ymdNow() {
  const date = new Date();
  const year = () => date.getFullYear();
  const month = () => ((1 + date.getMonth()) / 10).toFixed(1).replace(".", "");
  const day = () => (date.getDate() / 10).toFixed(1).replace(".", "");
  return `${year()}-${month()}-${day()}`;
}

export { ymdNow };
