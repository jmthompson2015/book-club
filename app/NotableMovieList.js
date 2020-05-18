const R = require("../node_modules/ramda/dist/ramda.js");

const FileWriter = require("../util/FileWriter.js");
const WikiUtils = require("../util/WikiUtilities.js");

const Movie = require("../artifact/Movie.js");

const Comparator = require("../model/Comparator.js");
const Formatter = require("../model/Formatter.js");

const OUTPUT_FILE = "NotableMovieList.txt";
const HEADERS = ["Movie", "Director", "Writer", "Cast"];
const TABLE_CLASS = "wikitable sortable";

const createRow = (movie) => {
  const value1 = Formatter.createMovieText(movie);
  const value2 = movie ? Formatter.createPersonText(movie.directorKey) : "";
  const value3 = movie ? Formatter.createPersonText(movie.writerKey) : "";
  const value4 = movie ? Formatter.createPersonText(movie.castKeys) : "";

  const values = [value1, value2, value3, value4];
  const cells = R.map(WikiUtils.cell, values);

  return WikiUtils.row(cells);
};

const NotableMovieList = {
  report: () => {
    const movies = Movie.valuesWithoutBook();
    movies.sort(Comparator.compareByTitle);
    const rows = R.map(createRow, movies);

    return WikiUtils.table(HEADERS, rows, TABLE_CLASS);
  },
};

const content = NotableMovieList.report();
FileWriter.writeFile(OUTPUT_FILE, content);
