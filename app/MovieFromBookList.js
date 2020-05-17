const R = require("../node_modules/ramda/dist/ramda.js");

const FileWriter = require("../util/FileWriter.js");

const Book = require("../artifact/Book.js");
const Movie = require("../artifact/Movie.js");

const WikiUtils = require("../model/WikiUtilities.js");

const OUTPUT_FILE = "MovieFromBookList.txt";
const TABLE_PREFIX = `{| class="wikitable sortable"
!Movie
!Cast
!Meeting
!Book
!Author`;
const TABLE_SUFFIX = `
|}`;

const createRow = (movie, book) => `
|-
| ${WikiUtils.createMovieText(movie)}
| ${movie ? WikiUtils.createPersonText(movie.castKeys) : ""}
| ${book ? WikiUtils.createMeetingText1(book.meeting) : ""}
| ${WikiUtils.createBookText(book)}
| ${book ? WikiUtils.createPersonText(book.authorKey) : ""}`;

const MovieFromBookList = {
  report: () => {
    const movies = Movie.valuesWithBook();
    movies.sort(WikiUtils.compareByTitle);
    const reduceFunction = (accum, movie) => {
      const book = Book.properties[movie.bookKey];

      return `${accum}${createRow(movie, book)}`;
    };

    const tableRows = R.reduce(reduceFunction, "", movies);

    return `${TABLE_PREFIX}${tableRows}${TABLE_SUFFIX}`;
  },
};

const content = MovieFromBookList.report();
FileWriter.writeFile(OUTPUT_FILE, content);
