const findTheOldest = function (people) {
  const currentYear = new Date().getFullYear();

  return people.reduce((oldest, person) => {
    const age = (person.yearOfDeath || currentYear) - person.yearOfBirth;
    const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;

    if (age > oldestAge) {
      return person;
    } else {
      return oldest;
    }
  });
};

// Do not edit below this line
module.exports = findTheOldest;
