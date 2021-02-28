const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(current) {
  if (typeof(current) === 'string' && 0 < current <= MODERN_ACTIVITY) {
    return Math.ln(current/MODERN_ACTIVITY) / (0.693/HALF_LIFE_PERIOD)
  } 
  return false;
};
