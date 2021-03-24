module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (!date.getTime()) return false;
  if (date.getMonth() === 0 || date.getMonth() === 1 || date.getMonth() === 11) return 'winter';
  if (1 < date.getMonth() && date.getMonth() < 5) return 'spring';
  if (4 < date.getMonth() && date.getMonth() < 8) return 'summer';
  if (7 < date.getMonth() && date.getMonth() < 11) return 'autumn';
};
