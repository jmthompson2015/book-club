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

const createRow = (movie) => {
  const book = movie ? Book.properties[movie.bookKey] : undefined;

  const value1 = Formatter.createMovieText(movie);
  const value2 = movie ? Formatter.createPersonText(movie.writerKey) : "";
  const value3 = movie ? Formatter.createPersonText(movie.castKeys) : "";
  const value4 = book ? Formatter.createMeetingText1(book.meeting) : "";
  const value5 = Formatter.createBookText(book);
  const value6 = book ? Formatter.createPersonText(book.authorKeys) : "";

  const values = [value1, value2, value3, value4, value5, value6];
  const cells = R.map(WikiUtils.cell, values);

  return WikiUtils.row(cells);
};

const MasterMovieList = {
  report: () => {
    const movies = Movie.values();
    movies.sort(Comparator.compareByTitle);
    const rows = R.map(createRow, movies);

    return WikiUtils.table(HEADERS, rows, TABLE_CLASS);
  },
};

const content = MasterMovieList.report();
FileWriter.writeFile(OUTPUT_FILE, content);
