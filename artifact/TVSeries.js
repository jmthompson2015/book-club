const R = require("../node_modules/ramda/dist/ramda.js");

const Book = require("./Book.js");
const Person = require("./Person.js");

const IMDB_PREFIX = "https://www.imdb.com/title/";

const TVSeries = {
  DEXTER: "dexter",
  MIDSOMER_MURDERS: "midsomerMurders",
  SHARP_OBJECTS: "sharpObjects",

  properties: {
    dexter: {
      title: "Dexter (2006-2013)",
      castKeys: [Person.MICHAEL_C_HALL, Person.JENNIFER_CARPENTER],
      bookKey: Book.DARKLY_DREAMING_DEXTER,
      imdb: "tt0773262",
    },
    midsomerMurders: {
      title: "Midsomer Murders (1997-?)",
      castKeys: [Person.JOHN_NETTLES, Person.NEIL_DUDGEON],
      bookKey: Book.THE_KILLINGS_AT_BADGERS_DRIFT,
      imdb: "tt0118401",
    },
    sharpObjects: {
      title: "Sharp Objects (2018)",
      castKeys: [Person.AMY_ADAMS, Person.PATRICIA_CLARKSON],
      bookKey: Book.SHARP_OBJECTS,
      imdb: "tt2649356",
    },
  },
};

TVSeries.keys = () => Object.keys(TVSeries.properties);

TVSeries.values = () => Object.values(TVSeries.properties);

// /////////////////////////////////////////////////////////////////////////////
TVSeries.imdbUrl = (tvShow) =>
  tvShow.imdb ? `${IMDB_PREFIX}${tvShow.imdb}` : null;

TVSeries.withBook = () => {
  const movies = TVSeries.values();
  const filterFunction = (movie) => movie.bookKey !== undefined;

  return R.filter(filterFunction, movies);
};

Object.freeze(TVSeries);

module.exports = TVSeries;
