const R = require("../node_modules/ramda/dist/ramda.js");

const Book = require("./Book.js");
const Person = require("./Person.js");

const IMDB_PREFIX = "https://www.imdb.com/title/";

const Movie = {
  GONE_GIRL: "goneGirl",
  JACK_REACHER: "jackReacher",
  JACK_REACHER_NEVER_GO_BACK: "jackReacherNeverGoBack",
  POINT_OF_NO_RETURN: "pointOfNoReturn",
  THE_DEVIL_YOU_KNOW: "theDevilYouKnow",
  THE_DRY: "theDry",

  properties: {
    goneGirl: {
      title: "Gone Girl (2014)",
      castKeys: [Person.BEN_AFFLECK, Person.ROSAMUND_PIKE],
      bookKey: Book.GONE_GIRL,
      imdb: "tt2267998",
    },
    jackReacher: {
      title: "Jack Reacher (2012)",
      castKeys: [Person.TOM_CRUISE, Person.ROSAMUND_PIKE],
      bookKey: Book.ONE_SHOT,
      imdb: "tt0790724",
    },
    jackReacherNeverGoBack: {
      title: "Jack Reacher: Never Go Back (2016)",
      castKeys: [Person.TOM_CRUISE, Person.COBIE_SMULDERS],
      bookKey: Book.NEVER_GO_BACK,
      imdb: "tt3393786",
    },
    pointOfNoReturn: {
      title: "Point of No Return (1993)",
      directorKey: Person.LUC_BESSON,
      castKeys: [
        Person.BRIDGET_FONDA,
        Person.GABRIEL_BYRNE,
        Person.HARVEY_KEITEL,
      ],
      imdb: "tt0107843",
    },
    theDevilYouKnow: {
      title: "The Devil You Know (2013)",
      castKeys: [Person.ROSAMUND_PIKE, Person.LENA_OLIN],
      writerKey: Person.ALEX_MICHAELIDES,
      imdb: "tt0463960",
    },
    theDry: {
      title: "The Dry (2012)",
      castKeys: [Person.ERIC_BANA, Person.GENEVIEVE_OREILLY],
      bookKey: Book.THE_DRY,
      imdb: "tt5144174",
    },
  },
};

Movie.keys = () => Object.keys(Movie.properties);

Movie.values = () => Object.values(Movie.properties);

// /////////////////////////////////////////////////////////////////////////////
Movie.imdbUrl = (movie) => (movie.imdb ? `${IMDB_PREFIX}${movie.imdb}` : null);

Movie.withBook = () => {
  const movies = Movie.values();
  const filterFunction = (movie) => movie.bookKey !== undefined;

  return R.filter(filterFunction, movies);
};

Movie.withDirector = () => {
  const movies = Movie.values();
  const filterFunction = (movie) => movie.directorKey !== undefined;

  return R.filter(filterFunction, movies);
};

Movie.withWriter = () => {
  const movies = Movie.values();
  const filterFunction = (movie) => movie.writerKey !== undefined;

  return R.filter(filterFunction, movies);
};

Object.freeze(Movie);

module.exports = Movie;
