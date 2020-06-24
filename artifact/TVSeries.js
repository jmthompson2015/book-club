const R = require("../node_modules/ramda/dist/ramda.js");

const Person = require("./Person.js");
const Series = require("./Series.js");

const TVSeries = {
  BOSCH: "bosch",
  DEFENDING_JACOB: "defendingJacob",
  DEXTER: "dexter",
  HAPPY_VALLEY: "happyValley",
  MALICE_AFORETHOUGHT: "maliceAforethought",
  MIDSOMER_MURDERS: "midsomerMurders",
  POIROT: "poirot",
  SAFE: "safe",
  SHARP_OBJECTS: "sharpObjects",
  THE_ADVENTURES_OF_SHERLOCK_HOLMES: "theAdventuresOfSherlockHolmes",
  THE_FALL: "theFall",
  THE_FIVE: "theFive",
  WIRE_IN_THE_BLOOD: "wireInTheBlood",
  YOU: "you",

  properties: {
    bosch: {
      title: "Bosch (2014-?)",
      castKeys: [Person.TITUS_WELLIVER, Person.JAMIE_HECTOR],
      seriesKey: Series.HARRY_BOSCH,
      imdb: "title/tt3502248",
    },
    defendingJacob: {
      title: "Defending Jacob (2020)",
      castKeys: [Person.CHRIS_EVANS, Person.MICHELLE_DOCKERY],
      seriesKey: Series.DEFENDING_JACOB,
      imdb: "title/tt2304589",
    },
    dexter: {
      title: "Dexter (2006-2013)",
      castKeys: [Person.MICHAEL_C_HALL, Person.JENNIFER_CARPENTER],
      seriesKey: Series.DEXTER,
      imdb: "title/tt0773262",
    },
    happyValley: {
      title: "Happy Valley (2014-?)",
      castKeys: [Person.SARAH_LANCASHIRE, Person.JAMES_NORTON],
      creatorKeys: [Person.SALLY_WAINWRIGHT],
      imdb: "title/tt3428912",
    },
    maliceAforethought: {
      title: "Malice Aforethought (1979)",
      castKeys: [Person.HYWEL_BENNETT],
      creatorKeys: [Person.CYRIL_COKE],
      seriesKey: Series.MALICE_AFORETHOUGHT,
      imdb: "title/tt0162096",
    },
    midsomerMurders: {
      title: "Midsomer Murders (1997-?)",
      castKeys: [Person.JOHN_NETTLES, Person.NEIL_DUDGEON],
      seriesKey: Series.CHIEF_INSPECTOR_BARNABY_MYSTERIES,
      imdb: "title/tt0118401",
    },
    poirot: {
      title: "Poirot (1989-2013)",
      castKeys: [Person.DAVID_SUCHET, Person.HUGH_FRASER],
      seriesKey: Series.HERCULE_POIROT,
      imdb: "title/tt0094525",
    },
    safe: {
      title: "Safe (2018)",
      castKeys: [Person.MICHAEL_C_HALL],
      creatorKeys: [Person.HARLAN_COBEN],
      imdb: "title/tt7902072",
    },
    sharpObjects: {
      title: "Sharp Objects (2018)",
      castKeys: [Person.AMY_ADAMS, Person.PATRICIA_CLARKSON],
      seriesKey: Series.SHARP_OBJECTS,
      imdb: "title/tt2649356",
    },
    theAdventuresOfSherlockHolmes: {
      title: "The Adventures of Sherlock Holmes (1984-1994)",
      castKeys: [
        Person.JEREMY_BRETT,
        Person.DAVID_BURKE,
        Person.EDWARD_HARDWICKE,
      ],
      seriesKey: Series.SHERLOCK_HOLMES,
      imdb: "title/tt0086661",
    },
    theFall: {
      title: "The Fall (2013-2016)",
      castKeys: [Person.GILLIAN_ANDERSON, Person.JAMIE_DORNAN],
      creatorKeys: [Person.ALLAN_CUBITT],
      imdb: "title/tt2294189",
    },
    theFive: {
      title: "The Five (2016)",
      creatorKeys: [Person.HARLAN_COBEN],
      imdb: "title/tt4370528",
    },
    wireInTheBlood: {
      title: "Wire in the Blood (2002-2009)",
      castKeys: [Person.ROBSON_GREEN],
      imdb: "title/tt0337792",
    },
    you: {
      title: "You (2018-?)",
      castKeys: [Person.PENN_BADGLEY],
      creatorKeys: [Person.GREG_BERLANTI],
      imdb: "title/tt7335184",
    },
  },
};

TVSeries.keys = () => Object.keys(TVSeries.properties);

TVSeries.values = () => Object.values(TVSeries.properties);

// /////////////////////////////////////////////////////////////////////////////
TVSeries.valuesWithSeries = () => {
  const tvSerieses = TVSeries.values();
  const filterFunction = (tvSeries) => tvSeries.seriesKey !== undefined;

  return R.filter(filterFunction, tvSerieses);
};

TVSeries.valuesWithoutSeries = () => {
  const tvSerieses = TVSeries.values();
  const filterFunction = (tvSeries) => tvSeries.seriesKey === undefined;

  return R.filter(filterFunction, tvSerieses);
};

Object.freeze(TVSeries);

module.exports = TVSeries;
