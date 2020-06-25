const R = require("../node_modules/ramda/dist/ramda.js");

const Book = require("./Book.js");
const Person = require("./Person.js");

const Movie = {
  A_SIMPLE_PLAN: "aSimplePlan",
  DEATHTRAP: "deathtrap",
  DOUBLE_INDEMNITY: "doubleIndemnity",
  GONE_GIRL: "goneGirl",
  JACK_REACHER: "jackReacher",
  JACK_REACHER_NEVER_GO_BACK: "jackReacherNeverGoBack",
  KNIVES_OUT: "knivesOut",
  LES_DIABOLIQUES: "lesDiaboliques",
  MURDER_ON_THE_ORIENT_EXPRESS: "murderOnTheOrientExpress",
  POINT_OF_NO_RETURN: "pointOfNoReturn",
  STILL_LIFE: "stillLife",
  STRANGERS_ON_A_TRAIN: "strangersOnATrain",
  THE_AX: "theAx",
  THE_DEVIL_YOU_KNOW: "theDevilYouKnow",
  THE_DRY: "theDry",
  THE_LINCOLN_LAWYER: "theLincolnLawyer",
  THE_SILENT_PATIENT: "theSilentPatient",
  VERTIGO: "vertigo",

  properties: {
    aSimplePlan: {
      title: "A Simple Plan (1998)",
      directorKey: Person.SAM_RAIMI,
      castKeys: [Person.BILL_PAXTON, Person.BILLY_BOB_THORNTON],
      bookKey: Book.A_SIMPLE_PLAN,
      imdb: "title/tt0120324",
    },
    deathtrap: {
      title: "Deathtrap (1982)",
      directorKey: Person.SIDNEY_LUMET,
      writerKey: Person.IRA_LEVIN,
      castKeys: [Person.MICHAEL_CAINE, Person.CHRISTOPHER_REEVE],
      bookKey: Book.DEATHTRAP,
      imdb: "title/tt0083806",
    },
    doubleIndemnity: {
      title: "Double Indemnity (1944)",
      directorKey: Person.BILLY_WILDER,
      writerKey: Person.RAYMOND_CHANDLER,
      castKeys: [
        Person.FRED_MACMURRAY,
        Person.BARBARA_STANWYCK,
        Person.EDWARD_G_ROBINSON,
      ],
      bookKey: Book.DOUBLE_INDEMNITY,
      imdb: "title/tt0036775",
    },
    goneGirl: {
      title: "Gone Girl (2014)",
      writerKey: Person.GILLIAN_FLYNN,
      castKeys: [Person.BEN_AFFLECK, Person.ROSAMUND_PIKE],
      bookKey: Book.GONE_GIRL,
      imdb: "title/tt2267998",
    },
    jackReacher: {
      title: "Jack Reacher (2012)",
      castKeys: [Person.TOM_CRUISE, Person.ROSAMUND_PIKE],
      bookKey: Book.ONE_SHOT,
      imdb: "title/tt0790724",
    },
    jackReacherNeverGoBack: {
      title: "Jack Reacher: Never Go Back (2016)",
      castKeys: [Person.TOM_CRUISE, Person.COBIE_SMULDERS],
      bookKey: Book.NEVER_GO_BACK,
      imdb: "title/tt3393786",
    },
    knivesOut: {
      title: "Knives Out (2019)",
      directorKey: Person.RIAN_JOHNSON,
      writerKey: Person.RIAN_JOHNSON,
      castKeys: [Person.DANIEL_CRAIG, Person.CHRIS_EVANS],
      imdb: "title/tt8946378",
    },
    lesDiaboliques: {
      title: "Les Diaboliques (1955)",
      bookKey: Book.SHE_WHO_WAS_NO_MORE,
      imdb: "title/tt0046911",
    },
    murderOnTheOrientExpress: {
      title: "Murder on the Orient Express (2017)",
      castKeys: [Person.KENNETH_BRANAGH, Person.PENELOPE_CRUZ],
      bookKey: Book.MURDER_ON_THE_ORIENT_EXPRESS,
      imdb: "title/tt3402236",
    },
    pointOfNoReturn: {
      title: "Point of No Return (1993)",
      directorKey: Person.LUC_BESSON,
      castKeys: [
        Person.BRIDGET_FONDA,
        Person.GABRIEL_BYRNE,
        Person.HARVEY_KEITEL,
      ],
      imdb: "title/tt0107843",
    },
    stillLife: {
      title: "Still Life (TV 2013)",
      directorKey: Person.PETER_MOSS,
      writerKey: Person.LOUISE_PENNY,
      castKeys: [Person.NATHANIEL_PARKER],
      bookKey: Book.STILL_LIFE,
      imdb: "title/tt2225780",
    },
    strangersOnATrain: {
      title: "Strangers on a Train (1951)",
      directorKey: Person.ALFRED_HITCHCOCK,
      writerKey: Person.RAYMOND_CHANDLER,
      castKeys: [Person.FARLEY_GRANGER, Person.ROBERT_WALKER],
      bookKey: Book.STRANGERS_ON_A_TRAIN,
      imdb: "title/tt0044079",
    },
    theAx: {
      title: "The Ax (2005)",
      bookKey: Book.THE_AX,
      imdb: "title/tt0422015",
      wiki: "The_Axe_(film)",
    },
    theDevilYouKnow: {
      title: "The Devil You Know (2013)",
      directorKey: Person.JAMES_OAKLEY,
      writerKey: Person.ALEX_MICHAELIDES,
      castKeys: [Person.ROSAMUND_PIKE, Person.LENA_OLIN],
      imdb: "title/tt0463960",
    },
    theDry: {
      title: "The Dry (2012)",
      castKeys: [Person.ERIC_BANA, Person.GENEVIEVE_OREILLY],
      bookKey: Book.THE_DRY,
      imdb: "title/tt5144174",
    },
    theLincolnLawyer: {
      title: "The Lincoln Lawyer (2011)",
      castKeys: [Person.MATTHEW_MCCONAUGHEY, Person.MARISA_TOMEI],
      bookKey: Book.THE_LINCOLN_LAWYER,
      imdb: "title/tt1189340",
    },
    theSilentPatient: {
      title: "The Silent Patient (in development)",
      bookKey: Book.THE_SILENT_PATIENT,
      imdb: "title/tt9893218",
    },
    vertigo: {
      title: "Vertigo (1958)",
      directorKey: Person.ALFRED_HITCHCOCK,
      castKeys: [Person.JAMES_STEWART, Person.KIM_NOVAK],
      bookKey: Book.VERTIGO,
      imdb: "title/tt0052357",
    },
  },
};

Movie.keys = () => Object.keys(Movie.properties);

Movie.values = () => Object.values(Movie.properties);

// /////////////////////////////////////////////////////////////////////////////
Movie.valuesWithBook = () => {
  const movies = Movie.values();
  const filterFunction = (movie) => movie.bookKey !== undefined;

  return R.filter(filterFunction, movies);
};

Movie.valuesWithoutBook = () => {
  const movies = Movie.values();
  const filterFunction = (movie) => movie.bookKey === undefined;

  return R.filter(filterFunction, movies);
};

Object.freeze(Movie);

module.exports = Movie;
