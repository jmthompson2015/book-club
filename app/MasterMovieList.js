const R = require("../node_modules/ramda/dist/ramda.js");

const FileWriter = require("../util/FileWriter.js");

const Book = require("../artifact/Book.js");
const Movie = require("../artifact/Movie.js");
const Person = require("../artifact/Person.js");

const WikiUtils = require("../model/WikiUtilities.js");

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

const createRow = (movie, writer, book, author) => `
|-
| ${WikiUtils.createMovieText(movie)}
| ${WikiUtils.createPersonText(writer)}
| ${movie ? WikiUtils.createCastText(movie.castKeys) : ""}
| ${book ? WikiUtils.createMeetingText1(book.meeting) : ""}
| ${WikiUtils.createBookText(book)}
| ${WikiUtils.createPersonText(author)}`;

const MasterMovieList = {
  report: () => {
    const movies = Movie.values();
    movies.sort(WikiUtils.compareByTitle);
    const reduceFunction = (accum, movie) => {
      const writer = Person.properties[movie.writerKey];
      const book = Book.properties[movie.bookKey];
      const author = book ? Person.properties[book.authorKey] : null;

      return `${accum}${createRow(movie, writer, book, author)}`;
    };

    const tableRows = R.reduce(reduceFunction, "", movies);

    return `${TABLE_PREFIX}${tableRows}${TABLE_SUFFIX}`;
  },
};

const content = MasterMovieList.report();
FileWriter.writeFile(OUTPUT_FILE, content);
