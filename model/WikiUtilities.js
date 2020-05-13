const Book = require("../artifact/Book.js");
const Person = require("../artifact/Person.js");

const WikiUtilities = {};

WikiUtilities.compareByMeeting = (ascending) => (bookA, bookB) => {
  let answer = ascending ? -1 : 1;

  if (bookA.meeting === bookB.meeting) {
    answer = 0;
  } else if (bookA.meeting > bookB.meeting) {
    answer = ascending ? 1 : -1;
  }

  return answer;
};

WikiUtilities.createPersonText = (author) => {
  let authorPrefix;
  let authorLabel;

  if (author.middle) {
    authorPrefix = `data-sort-value="${author.last}, ${author.first} ${author.middle}"|`;
    authorLabel = `${author.first} ${author.middle} ${author.last}`;
  } else {
    authorPrefix = `data-sort-value="${author.last}, ${author.first}"|`;
    authorLabel = `${author.first} ${author.last}`;
  }

  const wikiUrl = Person.wikiUrl(author);
  const authorUrl = wikiUrl ? `[${wikiUrl} ${authorLabel}]` : authorLabel;

  return `${authorPrefix} ${authorUrl}`;
};

WikiUtilities.createBookText = (book) => {
  let bookPrefix = "";

  if (book.title.startsWith("A ")) {
    bookPrefix = `data-sort-value="${book.title.substring("A ".length)}"| `;
  } else if (book.title.startsWith("The ")) {
    bookPrefix = `data-sort-value="${book.title.substring("The ".length)}"| `;
  }

  const dclUrl = Book.dclUrl(book);
  const bookUrl = dclUrl ? `[${dclUrl} ${book.title}]` : book.title;

  return `${bookPrefix}${bookUrl}`;
};

WikiUtilities.createMeetingText1 = (book) => {
  const meetingLabel = book.meeting.substring(0, book.meeting.lastIndexOf("."));

  return `[[${book.meeting} Meeting Notes|${meetingLabel}]]`;
};

WikiUtilities.createMeetingText2 = (book) =>
  `[[${book.meeting} Meeting Notes]]`;

Object.freeze(WikiUtilities);

module.exports = WikiUtilities;
