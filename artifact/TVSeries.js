const R = require("../node_modules/ramda/dist/ramda.js");

const Book = require("./Book.js");
const Person = require("./Person.js");

const TVSeries = {
  BOSCH: "bosch",
  DEXTER: "dexter",
  MIDSOMER_MURDERS: "midsomerMurders",
  POIROT: "poirot",
  SHARP_OBJECTS: "sharpObjects",

  properties: {
    bosch: {
      title: "Bosch (2014-?)",
      castKeys: [Person.TITUS_WELLIVER, Person.JAMIE_HECTOR],
      bookKey: Book.THE_BLACK_ECHO,
      imdb: "tt3502248",
    },
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
    poirot: {
      title: "Poirot (1989-2013)",
      castKeys: [Person.DAVID_SUCHET, Person.HUGH_FRASER],
      bookKey: Book.THE_MYSTERIOUS_AFFAIR_AT_STYLES,
      imdb: "tt0094525",
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
TVSeries.withBook = () => {
  const movies = TVSeries.values();
  const filterFunction = (movie) => movie.bookKey !== undefined;

  return R.filter(filterFunction, movies);
};

Object.freeze(TVSeries);

module.exports = TVSeries;
