const R = require("../node_modules/ramda/dist/ramda.js");

const FileWriter = require("../util/FileWriter.js");

const Movie = require("../artifact/Movie.js");

const Comparator = require("../model/Comparator.js");
const WikiUtils = require("../model/WikiUtilities.js");

const OUTPUT_FILE = "NotableMovieList.txt";
const TABLE_PREFIX = `{| class="wikitable sortable"
!Movie
!Director
!Writer
!Cast`;
const TABLE_SUFFIX = `
|}`;

const createRow = (movie) => `
|-
| ${WikiUtils.createMovieText(movie)}
| ${movie ? WikiUtils.createPersonText(movie.directorKey) : ""}
| ${movie ? WikiUtils.createPersonText(movie.writerKey) : ""}
| ${movie ? WikiUtils.createPersonText(movie.castKeys) : ""}`;

const NotableMovieList = {
  report: () => {
    const movies = Movie.valuesWithoutBook();
    movies.sort(Comparator.compareByTitle);
    const reduceFunction = (accum, movie) => `${accum}${createRow(movie)}`;
    const tableRows = R.reduce(reduceFunction, "", movies);

    return `${TABLE_PREFIX}${tableRows}${TABLE_SUFFIX}`;
  },
};

const content = NotableMovieList.report();
FileWriter.writeFile(OUTPUT_FILE, content);
