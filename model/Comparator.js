const Person = require("../artifact/Person.js");

const Comparator = {};

const personLabel = (person) => {
  let answer;

  if (person.middle) {
    answer = `${person.last}, ${person.first} ${person.middle}`;
  } else {
    answer = `${person.last}, ${person.first}`;
  }

  return answer;
};

const trimTitle = (item) => {
  let answer = null;

  if (item) {
    answer = item.title.trim();

    if (answer.startsWith("A ")) {
      answer = answer.substring("A ".length);
    } else if (answer.startsWith("The ")) {
      answer = answer.substring("The ".length);
    }
  }

  return answer;
};

// /////////////////////////////////////////////////////////////////////////////
Comparator.compareByCount = (keyToCount) => (keyA, keyB) => {
  const countA = keyToCount[keyA];
  const countB = keyToCount[keyB];
  let answer = Comparator.compareString(false)(countA, countB);

  if (answer === 0) {
    if (Person.properties[keyA]) {
      answer = Comparator.comparePersonKey(keyA, keyB);
    } else {
      answer = Comparator.compareString(true)(keyA, keyB);
    }
  }

  return answer;
};

Comparator.compareByMeeting = (ascending) => (bookA, bookB) => {
  const meetingA = bookA.meeting || "";
  const meetingB = bookB.meeting || "";
  let answer = Comparator.compareString(ascending)(meetingA, meetingB);

  if (answer === 0) {
    answer = Comparator.compareByTitle(bookA, bookB);
  }

  return answer;
};

Comparator.comparePersonKey = (keyA, keyB) => {
  const labelA = personLabel(Person.properties[keyA]);
  const labelB = personLabel(Person.properties[keyB]);

  return Comparator.compareString(true)(labelA, labelB);
};

Comparator.compareString = (ascending) => (stringA, stringB) => {
  const factor = ascending ? 1 : -1;
  let answer = -factor;

  if (stringA === stringB) {
    answer = 0;
  } else if (stringA > stringB) {
    answer = factor;
  }

  return answer;
};

Comparator.compareByTitle = (itemA, itemB) => {
  const titleA = trimTitle(itemA);
  const titleB = trimTitle(itemB);

  return Comparator.compareString(true)(titleA, titleB);
};

Object.freeze(Comparator);

module.exports = Comparator;
