const Book = require("../artifact/Book.js");
const Series = require("../artifact/Series.js");

const BookUtilities = {};

BookUtilities.authorForBook = (bookKey) => {
  const book = Book.properties[bookKey];

  return book ? book.authorKeys : null;
};

BookUtilities.authorForSeries = (seriesKey) => {
  const series = Series.properties[seriesKey];
  let answer;

  if (series) {
    if ("authorKeys" in series) {
      answer = series.authorKeys;
    } else {
      const books = Book.valuesBySeries(seriesKey);

      answer = books.length > 0 ? books[0].authorKeys : null;
    }
  }

  return answer;
};

BookUtilities.determineAuthor = (seriesOrBookKey) =>
  BookUtilities.authorForSeries(seriesOrBookKey) ||
  BookUtilities.authorForBook(seriesOrBookKey);

Object.freeze(BookUtilities);

module.exports = BookUtilities;
