const R = require("../node_modules/ramda/dist/ramda.js");

const Person = require("../artifact/Person.js");

const BookUtilities = require("./BookUtilities.js");

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

PersonUtilities.keysWithMeeting = () => {
  const authorKeyToBooks = BookUtilities.authorKeyToBooks(true);

  return Object.keys(authorKeyToBooks);
};

PersonUtilities.valuesWithMeeting = () => {
  const persons = Person.values();
  const authorKeyToBooks = BookUtilities.authorKeyToBooks(true);
  const filterFunction = (person) => !R.isNil(authorKeyToBooks[person.key]);

  return R.filter(filterFunction, persons);
};

Object.freeze(PersonUtilities);

module.exports = PersonUtilities;
