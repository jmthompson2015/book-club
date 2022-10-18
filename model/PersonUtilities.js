const PersonUtilities = {};

PersonUtilities.createLabel = (person) => {
  let answer = "";

  if (person) {
    if (person.first) {
      answer += person.first;
    }

    if (person.middle) {
      if (answer.length > 0) {
        answer += " ";
      }

      answer += person.middle;
    }

    if (person.last) {
      if (answer.length > 0) {
        answer += " ";
      }

      answer += person.last;
    }
  }

  return answer;
};

Object.freeze(PersonUtilities);

module.exports = PersonUtilities;
