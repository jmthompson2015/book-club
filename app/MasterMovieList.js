const R = require("../node_modules/ramda/dist/ramda.js");

const FileWriter = require("../util/FileWriter.js");
const WikiUtils = require("../util/WikiUtilities.js");

const Book = require("../artifact/Book.js");
const Movie = require("../artifact/Movie.js");

const Comparator = require("../model/Comparator.js");
const Formatter = require("../model/Formatter.js");

const OUTPUT_FILE = "MasterMovieList.txt";
const HEADERS = ["Movie", "Writer", "Cast", "Meeting", "Book", "Author"];
const TABLE_CLASS = "wikitable sortable";

const createRow = (useSearch) => (movie) => {
  const book = movie ? Book.properties[movie.bookKey] : undefined;

  const value1 = Formatter.createMovieText(movie, useSearch);
  const value2 = movie
    ? Formatter.createPersonText(movie.writerKeys, useSearch)
    : "";
  const value3 = movie
    ? Formatter.createPersonText(movie.castKeys, useSearch)
    : "";
  const value4 = book ? Formatter.createMeetingText1(book.meeting) : "";
  const value5 = Formatter.createBookText(book, useSearch);
  const value6 = book
    ? Formatter.createPersonText(book.authorKeys, useSearch)
    : "";

  const values = [value1, value2, value3, value4, value5, value6];
  const cells = R.map(WikiUtils.cell, values);

  return WikiUtils.row(cells);
};

const MasterMovieList = {
  report: (useSearch) => {
    const movies = Movie.values();
    movies.sort(Comparator.compareByTitle);
    const rows = R.map(createRow(useSearch), movies);

    return WikiUtils.table(HEADERS, rows, TABLE_CLASS);
  },
};

const useSearchString = process.argv.length > 2 ? process.argv[2] : "false";
const useSearch = useSearchString === "true";
const content = MasterMovieList.report(useSearch);
FileWriter.writeFile(OUTPUT_FILE, content);
