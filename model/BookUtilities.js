const Book = require("../artifact/Book.js");

const BookUtilities = {};

BookUtilities.authorForBook = (bookKey) => {
  const book = Book.properties[bookKey];

  return book ? book.authorKey : null;
};

BookUtilities.authorForSeries = (seriesKey) => {
  const books = Book.valuesBySeries(seriesKey);

  return books.length > 0 ? books[0].authorKey : null;
};

BookUtilities.determineAuthor = (seriesOrBookKey) =>
  BookUtilities.authorForSeries(seriesOrBookKey) ||
  BookUtilities.authorForBook(seriesOrBookKey);

Object.freeze(BookUtilities);

module.exports = BookUtilities;
