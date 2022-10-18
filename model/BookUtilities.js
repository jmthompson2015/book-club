const R = require("../node_modules/ramda/dist/ramda.js");

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
      const books = BookUtilities.valuesBySeries(seriesKey);

      answer = books.length > 0 ? books[0].authorKeys : null;
    }
  }

  return answer;
};

BookUtilities.determineAuthor = (seriesOrBookKey) =>
  BookUtilities.authorForSeries(seriesOrBookKey) ||
  BookUtilities.authorForBook(seriesOrBookKey);

BookUtilities.authorForSeriesArray = (series) => {
  let answer;

  if (series) {
    const reduceFunction = (accum, seriesObj) => {
      const authorKey = BookUtilities.determineAuthor(seriesObj.key);

      return authorKey || accum;
    };

    answer = R.reduce(reduceFunction, [], series);
  }

  return answer;
};

const seriesKeys = (book) =>
  book && book.series ? R.map(R.prop("key"), book.series) : [];

BookUtilities.authorKeyToBooks = (isMeeting = false) => {
  const books = isMeeting ? BookUtilities.valuesWithMeeting() : Book.values();
  const putBook = (accum, authorKey, book) => {
    const oldBooks = accum[authorKey] || [];
    const newBooks = R.append(book, oldBooks);

    return R.assoc(authorKey, newBooks, accum);
  };
  const reduceFunction = (accum, book) => {
    const { authorKeys } = book;
    const reduceFunction2 = (accum2, key) => putBook(accum2, key, book);

    return R.reduce(reduceFunction2, accum, authorKeys);
  };

  return R.reduce(reduceFunction, {}, books);
};

BookUtilities.seriesKeyToBooks = (isMeeting = false) => {
  const books = isMeeting ? BookUtilities.valuesWithMeeting() : Book.values();
  const putBook = (accum, series, book) => {
    const oldBooks = accum[series.key] || [];
    const newBooks = R.append(book, oldBooks);

    return R.assoc(series.key, newBooks, accum);
  };
  const reduceFunction = (accum, book) => {
    const { series } = book;
    let answer = accum;

    if (series) {
      const reduceFunction2 = (accum2, key) => putBook(accum2, key, book);
      answer = R.reduce(reduceFunction2, accum, series);
    }

    return answer;
  };

  return R.reduce(reduceFunction, {}, books);
};

BookUtilities.valuesBySeries = (seriesKey) => {
  let answer = [];

  if (seriesKey) {
    const books = Object.values(Book.properties);
    const filterFunction = (book) => seriesKeys(book).includes(seriesKey);
    answer = R.filter(filterFunction, books);
  }

  return answer;
};

BookUtilities.valuesByYear = (year) => {
  const books = Object.values(Book.properties);
  const filterFunction = (book) => {
    const year0 = book.meeting ? parseInt(book.meeting.substring(0, 4), 10) : 0;

    return year0 === year;
  };

  return R.filter(filterFunction, books);
};

BookUtilities.valuesWithMeeting = () => {
  const books = Object.values(Book.properties);
  const filterFunction = (book) => !R.isNil(book.meeting);

  return R.filter(filterFunction, books);
};

BookUtilities.valuesWithoutMeeting = () => {
  const books = Object.values(Book.properties);
  const filterFunction = (book) => R.isNil(book.meeting);

  return R.filter(filterFunction, books);
};

Object.freeze(BookUtilities);

module.exports = BookUtilities;
