const Comparator = {};

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
Comparator.compareByMeeting = (ascending) => (bookA, bookB) => {
  const meetingA = bookA.meeting || "";
  const meetingB = bookB.meeting || "";
  const factor = ascending ? 1 : -1;
  let answer = -factor;

  if (meetingA === meetingB) {
    answer = 0;
  } else if (meetingA > meetingB) {
    answer = factor;
  }

  if (answer === 0) {
    answer = Comparator.compareByTitle(bookA, bookB);
  }

  return answer;
};

Comparator.compareByTitle = (itemA, itemB) => {
  const titleA = trimTitle(itemA);
  const titleB = trimTitle(itemB);

  let answer = -1;

  if (titleA === titleB) {
    answer = 0;
  } else if (titleA > titleB) {
    answer = 1;
  }

  return answer;
};

Object.freeze(Comparator);

module.exports = Comparator;
