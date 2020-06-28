const R = require("../node_modules/ramda/dist/ramda.js");

const Person = require("./Person.js");
const Series = require("./Series.js");
const SeriesEntry = require("./SeriesEntry.js");

const TVSeries = {
  A_FATAL_INVERSION: "aFatalInversion",
  BOSCH: "bosch",
  BROADCHURCH: "broadchurch",
  DEFENDING_JACOB: "defendingJacob",
  DEXTER: "dexter",
  DOCTOR_FOSTER: "doctorFoster",
  HAPPY_VALLEY: "happyValley",
  HINTERLAND: "hinterland",
  MALICE_AFORETHOUGHT: "maliceAforethought",
  MARCELLA: "marcella",
  MIDSOMER_MURDERS: "midsomerMurders",
  NATIONAL_TREASURE: "nationalTreasure",
  NATIONAL_TREASURE_KIRI: "nationalTreasureKiri",
  OZARK: "ozark",
  PEAKY_BLINDERS: "peakyBlinders",
  POIROT: "poirot",
  SAFE: "safe",
  SHARP_OBJECTS: "sharpObjects",
  THE_ADVENTURES_OF_SHERLOCK_HOLMES: "theAdventuresOfSherlockHolmes",
  THE_FALL: "theFall",
  THE_FIVE: "theFive",
  THE_STRANGER: "theStranger",
  WIRE_IN_THE_BLOOD: "wireInTheBlood",
  YOU: "you",

  properties: {
    aFatalInversion: {
      title: "A Fatal Inversion (1992)",
      series: [SeriesEntry.create(Series.A_FATAL_INVERSION)],
      imdb: "title/tt0102126",
      key: "aFatalInversion",
    },
    bosch: {
      title: "Bosch (2014-?)",
      castKeys: [Person.TITUS_WELLIVER, Person.JAMIE_HECTOR],
      series: [SeriesEntry.create(Series.HARRY_BOSCH)],
      imdb: "title/tt3502248",
      key: "bosch",
    },
    broadchurch: {
      title: "Broadchurch (2013-2017)",
      castKeys: [
        Person.DAVID_TENNANT,
        Person.OLIVIA_COLMAN,
        Person.JODIE_WHITTAKER,
      ],
      creatorKeys: [Person.CHRIS_CHIBNALL],
      series: [SeriesEntry.create(Series.BROADCHURCH)],
      dcl: "1210369114",
      imdb: "title/tt2249364",
      wiki: "Broadchurch",
      key: "broadchurch",
    },
    defendingJacob: {
      title: "Defending Jacob (2020)",
      castKeys: [Person.CHRIS_EVANS, Person.MICHELLE_DOCKERY],
      series: [SeriesEntry.create(Series.DEFENDING_JACOB)],
      imdb: "title/tt2304589",
      key: "defendingJacob",
    },
    dexter: {
      title: "Dexter (2006-2013)",
      castKeys: [Person.MICHAEL_C_HALL, Person.JENNIFER_CARPENTER],
      series: [SeriesEntry.create(Series.DEXTER)],
      imdb: "title/tt0773262",
      key: "dexter",
    },
    doctorFoster: {
      title: "Doctor Foster (2015-?)",
      castKeys: [Person.SURANNE_JONES, Person.BERTIE_CARVEL],
      imdb: "title/tt4602768",
      key: "doctorFoster",
    },
    happyValley: {
      title: "Happy Valley (2014-?)",
      castKeys: [Person.SARAH_LANCASHIRE, Person.JAMES_NORTON],
      creatorKeys: [Person.SALLY_WAINWRIGHT],
      imdb: "title/tt3428912",
      key: "happyValley",
    },
    hinterland: {
      title: "Hinterland (2013-2016)",
      castKeys: [Person.RICHARD_HARRINGTON],
      imdb: "title/tt2575968",
      wiki: "Hinterland_(TV_series)",
      key: "hinterland",
    },
    maliceAforethought: {
      title: "Malice Aforethought (1979)",
      castKeys: [Person.HYWEL_BENNETT],
      creatorKeys: [Person.CYRIL_COKE],
      series: [SeriesEntry.create(Series.MALICE_AFORETHOUGHT)],
      imdb: "title/tt0162096",
      key: "maliceAforethought",
    },
    marcella: {
      title: "Marcella (2016-?)",
      castKeys: [Person.ANNA_FRIEL],
      creatorKeys: [Person.HANS_ROSENFELDT],
      imdb: "title/tt5269594",
      wiki: "Marcella_(TV_series)",
      key: "marcella",
    },
    midsomerMurders: {
      title: "Midsomer Murders (1997-?)",
      castKeys: [Person.JOHN_NETTLES, Person.NEIL_DUDGEON],
      series: [SeriesEntry.create(Series.CHIEF_INSPECTOR_BARNABY_MYSTERIES)],
      imdb: "title/tt0118401",
      key: "midsomerMurders",
    },
    nationalTreasure: {
      title: "National Treasure (2016)",
      castKeys: [Person.ROBBIE_COLTRANE],
      imdb: "title/tt5571524",
      key: "nationalTreasure",
    },
    nationalTreasureKiri: {
      title: "National Treasure: Kiri (2018)",
      castKeys: [Person.SARAH_LANCASHIRE],
      imdb: "title/tt7157494",
      key: "nationalTreasureKiri",
    },
    ozark: {
      title: "Ozark (2017-?)",
      castKeys: [Person.JASON_BATEMAN, Person.LAURA_LINNEY],
      imdb: "title/tt5071412",
      wiki: "Ozark_(TV_series)",
      key: "ozark",
    },
    peakyBlinders: {
      title: "Peaky Blinders (2013-?)",
      castKeys: [Person.CILLIAN_MURPHY],
      imdb: "title/tt2442560",
      wiki: "Peaky_Blinders_(TV_series)",
      key: "peakyBlinders",
    },
    poirot: {
      title: "Poirot (1989-2013)",
      castKeys: [Person.DAVID_SUCHET, Person.HUGH_FRASER],
      series: [SeriesEntry.create(Series.HERCULE_POIROT)],
      imdb: "title/tt0094525",
      key: "poirot",
    },
    safe: {
      title: "Safe (2018)",
      castKeys: [Person.MICHAEL_C_HALL],
      creatorKeys: [Person.HARLAN_COBEN],
      imdb: "title/tt7902072",
      key: "safe",
    },
    sharpObjects: {
      title: "Sharp Objects (2018)",
      castKeys: [Person.AMY_ADAMS, Person.PATRICIA_CLARKSON],
      series: [SeriesEntry.create(Series.SHARP_OBJECTS)],
      imdb: "title/tt2649356",
      key: "sharpObjects",
    },
    theAdventuresOfSherlockHolmes: {
      title: "The Adventures of Sherlock Holmes (1984-1994)",
      castKeys: [
        Person.JEREMY_BRETT,
        Person.DAVID_BURKE,
        Person.EDWARD_HARDWICKE,
      ],
      series: [SeriesEntry.create(Series.SHERLOCK_HOLMES)],
      imdb: "title/tt0086661",
      key: "theAdventuresOfSherlockHolmes",
    },
    theFall: {
      title: "The Fall (2013-2016)",
      castKeys: [Person.GILLIAN_ANDERSON, Person.JAMIE_DORNAN],
      creatorKeys: [Person.ALLAN_CUBITT],
      imdb: "title/tt2294189",
      key: "theFall",
    },
    theFive: {
      title: "The Five (2016)",
      creatorKeys: [Person.HARLAN_COBEN],
      imdb: "title/tt4370528",
      key: "theFive",
    },
    theStranger: {
      title: "The Stranger (2020-?)",
      castKeys: [Person.RICHARD_ARMITAGE],
      creatorKeys: [Person.HARLAN_COBEN],
      imdb: "title/tt9698480",
      key: "theStranger",
    },
    wireInTheBlood: {
      title: "Wire in the Blood (2002-2009)",
      castKeys: [Person.ROBSON_GREEN],
      imdb: "title/tt0337792",
      key: "wireInTheBlood",
    },
    you: {
      title: "You (2018-?)",
      castKeys: [Person.PENN_BADGLEY],
      creatorKeys: [Person.GREG_BERLANTI],
      series: [SeriesEntry.create(Series.YOU)],
      imdb: "title/tt7335184",
      key: "you",
    },
  },
};

TVSeries.keys = () => Object.keys(TVSeries.properties);

TVSeries.values = () => Object.values(TVSeries.properties);

// /////////////////////////////////////////////////////////////////////////////
TVSeries.valuesWithSeries = () => {
  const tvSerieses = TVSeries.values();
  const filterFunction = (tvSeries) => tvSeries.series !== undefined;

  return R.filter(filterFunction, tvSerieses);
};

TVSeries.valuesWithoutSeries = () => {
  const tvSerieses = TVSeries.values();
  const filterFunction = (tvSeries) => tvSeries.series === undefined;

  return R.filter(filterFunction, tvSerieses);
};

Object.freeze(TVSeries);

module.exports = TVSeries;
