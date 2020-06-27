const R = require("../node_modules/ramda/dist/ramda.js");

const FileWriter = require("../util/FileWriter.js");
const WikiUtils = require("../util/WikiUtilities.js");

const Book = require("../artifact/Book.js");
const Movie = require("../artifact/Movie.js");

const Comparator = require("../model/Comparator.js");
const Formatter = require("../model/Formatter.js");

const OUTPUT_FILE = "MostWantedMoviesList.txt";
const HEADERS1 = ["Movie", "Cast", "Meeting", "Book", "Author"];
const HEADERS2 = ["Movie", "Director", "Writer", "Cast"];
const TABLE_CLASS = "wikitable sortable";

const createRow1 = (movie) => {
  const book = movie ? Book.properties[movie.bookKey] : undefined;

  const value1 = Formatter.createMovieText(movie);
  const value2 = movie ? Formatter.createPersonText(movie.castKeys) : "";
  const value3 = book ? Formatter.createMeetingText1(book.meeting) : "";
  const value4 = Formatter.createBookText(book);
  const value5 = book ? Formatter.createPersonText(book.authorKeys) : "";

  const values = [value1, value2, value3, value4, value5];
  const cells = R.map(WikiUtils.cell, values);

  return WikiUtils.row(cells);
};

const createRow2 = (movie) => {
  const value1 = Formatter.createMovieText(movie);
  const value2 = movie ? Formatter.createPersonText(movie.directorKey) : "";
  const value3 = movie ? Formatter.createPersonText(movie.writerKey) : "";
  const value4 = movie ? Formatter.createPersonText(movie.castKeys) : "";

  const values = [value1, value2, value3, value4];
  const cells = R.map(WikiUtils.cell, values);

  return WikiUtils.row(cells);
};

const MostWantedMoviesList = {
  report1: () => {
    const movies = Movie.valuesWithBook();
    movies.sort(Comparator.compareByTitle);
    const rows = R.map(createRow1, movies);

    return WikiUtils.table(HEADERS1, rows, TABLE_CLASS);
  },
  report2: () => {
    const movies = Movie.valuesWithoutBook();
    movies.sort(Comparator.compareByTitle);
    const rows = R.map(createRow2, movies);

    return WikiUtils.table(HEADERS2, rows, TABLE_CLASS);
  },
};

const content1 = MostWantedMoviesList.report1();
const content2 = MostWantedMoviesList.report2();
FileWriter.writeFile(
  OUTPUT_FILE,
  `__TOC__
==Movies Made from Mystery Books==
${content1}

==Other Movies Mentioned in Club==
${content2}
`
);
