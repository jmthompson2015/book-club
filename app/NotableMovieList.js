const R = require("../node_modules/ramda/dist/ramda.js");

const FileWriter = require("../util/FileWriter.js");

const Movie = require("../artifact/Movie.js");
const Person = require("../artifact/Person.js");

const WikiUtils = require("../model/WikiUtilities.js");

const OUTPUT_FILE = "NotableMovieList.txt";
const TABLE_PREFIX = `{| class="wikitable sortable"
!Movie
!Director
!Writer
!Cast`;
const TABLE_SUFFIX = `
|}`;

const createRow = (movie, director, writer) => `
|-
| ${WikiUtils.createMovieText(movie)}
| ${WikiUtils.createPersonText(director)}
| ${WikiUtils.createPersonText(writer)}
| ${movie ? WikiUtils.createCastText(movie.castKeys) : ""}`;

const NotableMovieList = {
  report: () => {
    const movies = Movie.valuesWithoutBook();
    movies.sort(WikiUtils.compareByTitle);
    const reduceFunction = (accum, movie) => {
      const director = Person.properties[movie.directorKey];
      const writer = Person.properties[movie.writerKey];

      return `${accum}${createRow(movie, director, writer)}`;
    };

    const tableRows = R.reduce(reduceFunction, "", movies);

    return `${TABLE_PREFIX}${tableRows}${TABLE_SUFFIX}`;
  },
};

const content = NotableMovieList.report();
FileWriter.writeFile(OUTPUT_FILE, content);
