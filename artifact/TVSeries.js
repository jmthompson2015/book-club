const R = require("../node_modules/ramda/dist/ramda.js");

const Person = require("./Person.js");
const Series = require("./Series.js");
const SeriesEntry = require("./SeriesEntry.js");

const TVSeries = {
  A_FATAL_INVERSION: "aFatalInversion",
  AGATHA_RAISIN: "agatha raisin",
  BLOOD_AND_TREASURE: "bloodAndTreasure",
  BOSCH: "bosch",
  BROADCHURCH: "broadchurch",
  DARK: "dark",
  DEFENDING_JACOB: "defendingJacob",
  DEXTER: "dexter",
  DOCTOR_FOSTER: "doctorFoster",
  FATHER_BROWN_1974: "fatherBrown1974",
  FATHER_BROWN_2013: "fatherBrown2013",
  HANNIBAL: "hannibal",
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
  REBUS: "rebus",
  SAFE: "safe",
  SHARP_OBJECTS: "sharpObjects",
  THE_ADVENTURES_OF_SHERLOCK_HOLMES: "theAdventuresOfSherlockHolmes",
  THE_FALL: "theFall",
  THE_FIVE: "theFive",
  THE_NO_1_LADIES_DETECTIVE_AGENCY: "theNo1LadiesDetectiveAgency",
  THE_STRANGER: "theStranger",
  THE_VICAR_OF_DIBLEY: "theVicarOfDibley",
  WIRE_IN_THE_BLOOD: "wireInTheBlood",
  YOU: "you",

  properties: {
    aFatalInversion: {
      title: "A Fatal Inversion (1992)",
      series: [SeriesEntry.create(Series.A_FATAL_INVERSION)],
      imdb: "title/tt0102126",
      key: "aFatalInversion",
    },
    "agatha raisin": {
      title: "Agatha Raisin",
      series: [SeriesEntry.create(Series.AGATHA_RAISIN)],
      imdb: "title/tt5015548",
      lt: "nseries/179232/Agatha-Raisin-TV-Series",
      key: "agatha raisin",
    },
    bloodAndTreasure: {
      title: "Blood & Treasure (2019-?)",
      castKeys: [Person.MATT_BARR],
      imdb: "title/tt7712598",
      wiki: "Blood_%26_Treasure",
      key: "bloodAndTreasure",
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
      series: [
        SeriesEntry.create(Series.BROADCHURCH),
        SeriesEntry.create(Series.CHRISTINA_Z_SUGGESTS, 2),
      ],
      dcl: "1210369114",
      imdb: "title/tt2249364",
      wiki: "Broadchurch",
      key: "broadchurch",
    },
    dark: {
      title: "Dark (2017)",
      castKeys: [Person.LOUIS_HOFMANN],
      imdb: "title/tt5753856",
      wiki: "Dark_(TV_series)",
      key: "dark",
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
      series: [SeriesEntry.create(Series.CHRISTINA_Z_SUGGESTS, 4)],
      imdb: "title/tt4602768",
      key: "doctorFoster",
    },
    fatherBrown1974: {
      title: "Father Brown (1974)",
      castKeys: [Person.KENNETH_MORE],
      series: [SeriesEntry.create(Series.FATHER_BROWN)],
      imdb: "title/tt0069582",
      key: "fatherBrown1974",
    },
    fatherBrown2013: {
      title: "Father Brown (2013-?)",
      castKeys: [Person.MARK_WILLIAMS],
      series: [SeriesEntry.create(Series.FATHER_BROWN)],
      imdb: "title/tt2215842",
      key: "fatherBrown2013",
    },
    hannibal: {
      title: "Hannibal (2013-2015)",
      castKeys: [Person.HUGH_DANCY, Person.MADS_MIKKELSEN],
      series: [SeriesEntry.create(Series.HANNIBAL_LECTER)],
      imdb: "title/tt2243973",
      key: "hannibal",
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
      series: [SeriesEntry.create(Series.CHRISTINA_Z_SUGGESTS, 1)],
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
      series: [SeriesEntry.create(Series.CHRISTINA_Z_SUGGESTS, 3)],
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
      series: [SeriesEntry.create(Series.CHRISTINA_Z_SUGGESTS, 5)],
      imdb: "title/tt5571524",
      key: "nationalTreasure",
    },
    nationalTreasureKiri: {
      title: "National Treasure: Kiri (2018)",
      castKeys: [Person.SARAH_LANCASHIRE],
      series: [SeriesEntry.create(Series.CHRISTINA_Z_SUGGESTS, 6)],
      imdb: "title/tt7157494",
      key: "nationalTreasureKiri",
    },
    ozark: {
      title: "Ozark (2017-?)",
      castKeys: [Person.JASON_BATEMAN, Person.LAURA_LINNEY],
      series: [SeriesEntry.create(Series.CHRISTINA_Z_SUGGESTS, 9)],
      imdb: "title/tt5071412",
      wiki: "Ozark_(TV_series)",
      key: "ozark",
    },
    peakyBlinders: {
      title: "Peaky Blinders (2013-?)",
      castKeys: [Person.CILLIAN_MURPHY],
      series: [SeriesEntry.create(Series.CHRISTINA_Z_SUGGESTS, 10)],
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
    rebus: {
      title: "Rebus (2000-2004)",
      castKeys: [Person.KEN_STOTT],
      series: [SeriesEntry.create(Series.INSPECTOR_REBUS)],
      imdb: "title/tt0867015",
      wiki: "Rebus_(TV_series)",
      key: "rebus",
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
    theNo1LadiesDetectiveAgency: {
      title: "The No. 1 Ladies' Detective Agency (2008-2009)",
      castKeys: [Person.JILL_SCOTT],
      series: [SeriesEntry.create(Series.THE_NO_1_LADIES_DETECTIVE_AGENCY)],
      imdb: "title/tt1356380",
      wiki: "The_No._1_Ladies%27_Detective_Agency_(TV_series)",
      key: "theNo1LadiesDetectiveAgency",
    },
    theStranger: {
      title: "The Stranger (2020-?)",
      castKeys: [Person.RICHARD_ARMITAGE],
      creatorKeys: [Person.HARLAN_COBEN],
      series: [SeriesEntry.create(Series.CHRISTINA_Z_SUGGESTS, 7)],
      imdb: "title/tt9698480",
      key: "theStranger",
    },
    theVicarOfDibley: {
      title: "The Vicar of Dibley (1994-2015)",
      castKeys: [Person.DAWN_FRENCH],
      dcl: "1669345114",
      imdb: "title/tt0108981",
      wiki: "The_Vicar_of_Dibley",
      key: "theVicarOfDibley",
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
