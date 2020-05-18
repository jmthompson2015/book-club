const R = require("../node_modules/ramda/dist/ramda.js");

const FileWriter = require("../util/FileWriter.js");

const Book = require("../artifact/Book.js");
const Movie = require("../artifact/Movie.js");

const Comparator = require("../model/Comparator.js");
const Formatter = require("../model/Formatter.js");

const OUTPUT_FILE = "MasterMovieList.txt";
const TABLE_PREFIX = `{| class="wikitable sortable"
!Movie
!Writer
!Cast
!Meeting
!Book
!Author`;
const TABLE_SUFFIX = `
|}`;

const createRow = (movie, book) => `
|-
| ${Formatter.createMovieText(movie)}
| ${movie ? Formatter.createPersonText(movie.writerKey) : ""}
| ${movie ? Formatter.createPersonText(movie.castKeys) : ""}
| ${book ? Formatter.createMeetingText1(book.meeting) : ""}
| ${Formatter.createBookText(book)}
| ${book ? Formatter.createPersonText(book.authorKey) : ""}`;

const MasterMovieList = {
  report: () => {
    const movies = Movie.values();
    movies.sort(Comparator.compareByTitle);
    const reduceFunction = (accum, movie) => {
      const book = Book.properties[movie.bookKey];

      return `${accum}${createRow(movie, book)}`;
    };

    const tableRows = R.reduce(reduceFunction, "", movies);

    return `${TABLE_PREFIX}${tableRows}${TABLE_SUFFIX}`;
  },
};

const content = MasterMovieList.report();
FileWriter.writeFile(OUTPUT_FILE, content);
