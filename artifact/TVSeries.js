const R = require("../node_modules/ramda/dist/ramda.js");

const Person = require("./Person.js");
const Series = require("./Series.js");

const TVSeries = {
  BOSCH: "bosch",
  DEXTER: "dexter",
  HAPPY_VALLEY: "happyValley",
  MIDSOMER_MURDERS: "midsomerMurders",
  POIROT: "poirot",
  SHARP_OBJECTS: "sharpObjects",
  THE_ADVENTURES_OF_SHERLOCK_HOLMES: "theAdventuresOfSherlockHolmes",
  THE_FALL: "theFall",
  WIRE_IN_THE_BLOOD: "wireInTheBlood",

  properties: {
    bosch: {
      title: "Bosch (2014-?)",
      castKeys: [Person.TITUS_WELLIVER, Person.JAMIE_HECTOR],
      seriesKey: Series.HARRY_BOSCH,
      imdb: "title/tt3502248",
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
      imdb: "title/tt3428912",
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
      imdb: "title/tt0086661",
    },
    theFall: {
      title: "The Fall (2013-2016)",
      castKeys: [Person.GILLIAN_ANDERSON, Person.JAMIE_DORNAN],
      imdb: "title/tt2294189",
    },
    wireInTheBlood: {
      title: "Wire in the Blood (2002-2009)",
      castKeys: [Person.ROBSON_GREEN],
      imdb: "title/tt0337792",
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
