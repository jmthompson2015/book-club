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

const createRow1 = (useSearch) => (movie) => {
  const book = movie ? Book.properties[movie.bookKey] : undefined;

  const value1 = Formatter.createMovieText(movie, useSearch);
  const value2 = movie
    ? Formatter.createPersonText(movie.castKeys, useSearch)
    : "";
  const value3 = book ? Formatter.createMeetingText1(book.meeting) : "";
  const value4 = Formatter.createBookText(book, useSearch);
  const value5 = book
    ? Formatter.createPersonText(book.authorKeys, useSearch)
    : "";

  const values = [value1, value2, value3, value4, value5];
  const cells = R.map(WikiUtils.cell, values);

  return WikiUtils.row(cells);
};

const createRow2 = (useSearch) => (movie) => {
  const value1 = Formatter.createMovieText(movie, useSearch);
  const value2 = movie
    ? Formatter.createPersonText(movie.directorKeys, useSearch)
    : "";
  const value3 = movie
    ? Formatter.createPersonText(movie.writerKeys, useSearch)
    : "";
  const value4 = movie
    ? Formatter.createPersonText(movie.castKeys, useSearch)
    : "";

  const values = [value1, value2, value3, value4];
  const cells = R.map(WikiUtils.cell, values);

  return WikiUtils.row(cells);
};

const MostWantedMoviesList = {
  report1: (useSearch) => {
    const movies = Movie.valuesWithBook();
    movies.sort(Comparator.compareByTitle);
    const rows = R.map(createRow1(useSearch), movies);

    return WikiUtils.table(HEADERS1, rows, TABLE_CLASS);
  },
  report2: (useSearch) => {
    const movies = Movie.valuesWithoutBook();
    movies.sort(Comparator.compareByTitle);
    const rows = R.map(createRow2(useSearch), movies);

    return WikiUtils.table(HEADERS2, rows, TABLE_CLASS);
  },
};

const useSearchString = process.argv.length > 2 ? process.argv[2] : "false";
const useSearch = useSearchString === "true";
const content1 = MostWantedMoviesList.report1(useSearch);
const content2 = MostWantedMoviesList.report2(useSearch);
FileWriter.writeFile(
  OUTPUT_FILE,
  `__TOC__
==Movies Made from Books==
${content1}

==Other Movies Mentioned in Club==
${content2}
`
);
