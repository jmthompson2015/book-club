const Book = require("../artifact/Book.js");
const Person = require("../artifact/Person.js");

const WikiUtilities = {};

WikiUtilities.compareByMeeting = (ascending) => (bookA, bookB) => {
  const meetingA = bookA.meeting || "";
  const meetingB = bookB.meeting || "";
  let answer = ascending ? -1 : 1;

  if (meetingA === meetingB) {
    answer = 0;
  } else if (meetingA > meetingB) {
    answer = ascending ? 1 : -1;
  }

  return answer;
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
  let answer = "";

  if (book.meeting) {
    answer = WikiUtilities.wikilink(
      `${book.meeting} Meeting Notes`,
      book.meeting
    );
  }

  return answer;
};

WikiUtilities.createMeetingText2 = (book) => {
  let answer = "";

  if (book.meeting) {
    answer = `[[${book.meeting} Meeting Notes]]`;
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
  const authorUrl = wikiUrl
    ? WikiUtilities.hyperlink(wikiUrl, authorLabel)
    : authorLabel;

  return `${authorPrefix} ${authorUrl}`;
};

WikiUtilities.hyperlink = (href, label) => `[${href} ${label}]`;

WikiUtilities.wikilink = (page, label) => `[[${page} | ${label}]]`;

Object.freeze(WikiUtilities);

module.exports = WikiUtilities;
