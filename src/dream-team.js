module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    return members.map(item => typeof(item)==='string' ? item.trim()[0].toUpperCase() : '').sort().join('');
  }
  return false;
};
