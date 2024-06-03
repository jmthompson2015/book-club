const R = require("../node_modules/ramda/dist/ramda.js");

const Series = {
  AARON_FALK: "Aaron Falk",
  A_FATAL_INVERSION: "aFatalInversion",
  AGATHA_RAISIN: "Agatha Raisin",
  ALEX_DELAWARE: "alexDelaware",
  AMOS_DECKER: "amosDecker",
  ANDY_CARPENTER: "andyCarpenter",
  BROADCHURCH: "broadchurch",
  CAMINO_ISLAND: "caminoIsland",
  CAT_KINSELLA: "catKinsella",
  CHIEF_INSPECTOR_ARMAND_GAMACHE: "chiefInspectorArmandGamache",
  CHIEF_INSPECTOR_BARNABY_MYSTERIES: "chiefInspectorBarnabyMysteries",
  CHRISTINA_Z_SUGGESTS: "christinaZSuggests",
  CLAY_EDISON: "clayEdison",
  CORMORAN_STRIKE: "cormoranStrike",
  DAVID_HUNTER: "davidHunter",
  DEFENDING_JACOB: "defendingJacob",
  DETECTIVE_DANIEL_HAWTHORNE: "Detective Daniel Hawthorne",
  DETECTIVE_ELIN_WARNER: "Detective Elin Warner",
  DETECTIVE_LEW_KIRBY: "Detective Lew Kirby",
  DETECTIVE_VARG: "detectiveVarg",
  DEXTER: "dexter",
  DISMAS_HARDY: "dismasHardy",
  DR_ALAN_GREGORY: "drAlanGregory",
  ELLERY_QUEEN: "elleryQueen",
  ELVIS_COLE: "elvisCole",
  EVAN_SMOAK: "evanSmoak",
  FATHER_BROWN: "fatherBrown",
  FLAVIA_DE_LUCE: "flaviaDeLuce",
  FRIEDA_KLEIN: "friedaKlein",
  GABRIEL_ALLON: "gabrielAllon",
  GAIL_H_SUGGESTS: "gailHSuggests",
  GEORGIA: "georgia",
  GHOSTMAN: "ghostman",
  GRETCHEN_LOWELL: "gretchenLowell",
  HAMISH_MACBETH: "hamishMacbeth",
  HANNIBAL_LECTER: "hannibalLecter",
  HARRY_BOSCH: "harryBosch",
  HARRY_HOLE: "harryHole",
  HERCULE_POIROT: "herculePoirot",
  HOROWITZS_HOLMES: "Horowitz's Holmes",
  INSPECTOR_REBUS: "inspectorRebus",
  JACK_MCEVOY: "jackMcevoy",
  JACK_REACHER: "Jack Reacher",
  JAKE_BRIGANCE: "jakeBrigance",
  JANA_BERZELIUS: "janaBerzelius",
  JO_BECKETT: "joBeckett",
  JOE_COUGHLIN: "joeCoughlin",
  JOE_PICKETT: "joePickett",
  JOE_PIKE: "joePike",
  JOHNNY_MERRIMON: "johnnyMerrimon",
  KICK_LANNIGAN: "kickLannigan",
  KINDLE_COUNTY: "kindleCounty",
  LINCOLN_RHYME: "lincolnRhyme",
  LUCAS_DAVENPORT: "lucasDavenport",
  MALCOLM_WARREN: "malcolmWarren",
  MALICE_AFORETHOUGHT: "maliceAforethought",
  MICKEY_HALLER: "mickeyHaller",
  MILLENNIUM: "millennium",
  MOLLY_THE_MAID: "Molly the Maid",
  MYRON_BOLITAR: "myronBolitar",
  NEW_HERCULE_POIROT: "newHerculePoirot",
  ODD_THOMAS: "oddThomas",
  PERFECT_MURDERS_LIST: "perfectMurdersList",
  PETER_SWANSON_SUGGESTS: "peterSwansonSuggests",
  RACHEL_KRALL: "Rachel Krall",
  RACHEL_WALLING: "rachelWalling",
  RENEE_BALLARD: "reneeBallard",
  RICHARD_JURY: "Richard Jury",
  RIZZOLI_AND_ISLES: "rizzoliAndIsles",
  RODERICK_ALLEYN: "roderickAlleyn",
  SHANE_SCULLY: "shaneScully",
  SHARP_OBJECTS: "sharpObjects",
  SHERLOCK_HOLMES: "sherlockHolmes",
  STEVENS_AND_WINDERMERE: "stevensAndWindermere",
  STONE_BARRINGTON: "stoneBarrington",
  SUBURBAN_DICKS: "Suburban Dicks",
  SYDNEY_ROSE_PARNELL: "sydneyRoseParnell",
  TEMPERANCE_BRENNAN: "temperanceBrennan",
  THE_CAMEL_CLUB: "theCamelClub",
  THE_NO_1_LADIES_DETECTIVE_AGENCY: "theNo1LadiesDetectiveAgency",
  THURSDAY_MURDER_CLUB: "Thursday Murder Club",
  VIRGIL_FLOWERS: "virgilFlowers",
  WILDE: "wilde",
  WILL_ROBIE: "willRobie",
  WINDSOR_HORNE_LOCKWOOD_III: "Windsor Horne Lockwood III",
  WINE_LOVERS_MYSTERIES: "wineLoversMysteries",
  YOU: "you",
};

Series.properties = {
  [Series.AARON_FALK]: {
    gr: "series/197462-aaron-falk",
    lt: "nseries/11845/Aaron-Falk",
  },
  [Series.AGATHA_RAISIN]: {
    gr: "series/41464-agatha-raisin",
    lt: "nseries/1968/Agatha-Raisin",
  },
  [Series.DETECTIVE_DANIEL_HAWTHORNE]: {
    gr: "series/238438-hawthorne-and-horowitz-mystery",
    lt: "nseries/26810/Hawthorne-Horowitz",
  },
  [Series.DETECTIVE_ELIN_WARNER]: {
    gr: "series/323928-detective-elin-warner",
    lt: "nseries/344807/Detective-Elin-Warner",
  },
  [Series.DETECTIVE_LEW_KIRBY]: {
    gr: "series/315611-detective-lew-kirby",
    lt: "nseries/326914/Detective-Lew-Kirby",
  },
  [Series.HOROWITZS_HOLMES]: {
    gr: "series/135888-horowitz-s-holmes",
    lt: "nseries/9776/Anthony-Horowitzs-Sherlock-Holmes",
  },
  [Series.JACK_REACHER]: {
    gr: "series/40549-jack-reacher",
    lt: "nseries/102/Jack-Reacher",
    wiki: "Jack_Reacher",
  },
  [Series.MOLLY_THE_MAID]: {
    gr: "series/370889-molly-the-maid",
    lt: "nseries/358839/Molly-the-Maid",
  },
  [Series.RACHEL_KRALL]: {
    gr: "series/357929-rachel-krall",
    lt: "nseries/360099/Rachel-Krall",
  },
  [Series.RICHARD_JURY]: {
    gr: "series/49632-richard-jury",
    lt: "nseries/2298/Richard-Jury",
  },
  [Series.SUBURBAN_DICKS]: {
    gr: "series/334785-suburban-dicks",
  },
  [Series.THURSDAY_MURDER_CLUB]: {
    gr: "series/299267-thursday-murder-club",
    lt: "nseries/315274/Thursday-Murder-Club",
  },
  [Series.WINDSOR_HORNE_LOCKWOOD_III]: {
    gr: "series/306765-windsor-horne-lockwood-iii",
    lt: "nseries/324513/Windsor-Horne-Lockwood-III",
  },
  aFatalInversion: {
    title: "A Fatal Inversion",
  },
  alexDelaware: {
    title: "Alex Delaware",
    lt: "series/Alex+Delaware",
  },
  amosDecker: {
    title: "Amos Decker",
    lt: "series/Amos+Decker",
  },
  andyCarpenter: {
    title: "Andy Carpenter",
    lt: "series/Andy+Carpenter",
  },
  broadchurch: {
    title: "Broadchurch",
    lt: "nseries/45966/Broadchurch",
  },
  caminoIsland: {
    title: "Camino Island",
    lt: "series/Camino+Island",
  },
  catKinsella: {
    title: "Cat Kinsella",
    lt: "series/Cat+Kinsella",
  },
  chiefInspectorArmandGamache: {
    title: "Chief Inspector Armand Gamache",
    lt: "series/Chief+Inspector+Armand+Gamache",
  },
  chiefInspectorBarnabyMysteries: {
    title: "Chief Inspector Barnaby Mysteries",
    lt: "series/Chief+Inspector+Barnaby+Mysteries",
  },
  christinaZSuggests: {
    title: "Christina Z. Suggests",
    authorKeys: null,
    useSearch: false,
  },
  clayEdison: {
    title: "Clay Edison",
    lt: "series/Clay+Edison",
  },
  cormoranStrike: {
    title: "Cormoran Strike",
    lt: "series/Cormoran+Strike",
  },
  davidHunter: {
    title: "David Hunter",
    lt: "series/David+Hunter",
  },
  defendingJacob: {
    title: "Defending Jacob",
    lt: "work/11491573",
  },
  detectiveVarg: {
    title: "Detective Varg",
    lt: "series/Detective+Varg",
  },
  dexter: {
    title: "Dexter",
    gr: "series/44928-dexter",
    lt: "series/Dexter",
  },
  dismasHardy: {
    title: "Dismas Hardy",
    lt: "series/Dismas+Hardy",
  },
  drAlanGregory: {
    title: "Dr. Alan Gregory",
    lt: "series/Dr.+Alan+Gregory",
  },
  elleryQueen: {
    title: "Ellery Queen",
    lt: "series/Ellery+Queen",
  },
  elvisCole: {
    title: "Elvis Cole",
    lt: "series/Elvis+Cole",
  },
  evanSmoak: {
    title: "Evan Smoak",
    lt: "series/Evan+Smoak",
  },
  fatherBrown: {
    title: "Father Brown",
    gr: "series/55609-father-brown",
    lt: "nseries/883/Father-Brown",
    wiki: "Father_Brown",
  },
  flaviaDeLuce: {
    title: "Flavia de Luce",
    lt: "series/Flavia+de+Luce",
  },
  friedaKlein: {
    title: "Frieda Klein",
    lt: "series/Frieda+Klein",
  },
  gabrielAllon: {
    title: "Gabriel Allon",
    lt: "series/Gabriel+Allon",
  },
  gailHSuggests: {
    title: "Gail H. Suggests",
    authorKeys: null,
    useSearch: false,
  },
  georgia: {
    title: "Georgia",
    lt: "series/Georgia",
  },
  ghostman: {
    title: "Ghostman",
    lt: "series/Ghostman",
  },
  gretchenLowell: {
    title: "Gretchen Lowell",
    lt: "series/Gretchen+Lowell",
  },
  hamishMacbeth: {
    title: "Hamish Macbeth",
    lt: "series/Hamish+Macbeth",
  },
  hannibalLecter: {
    title: "Hannibal Lecter",
    gr: "series/53252-hannibal-lecter",
    lt: "nseries/3221/Hannibal-Lecter-Series",
  },
  harryBosch: {
    title: "Harry Bosch",
    gr: "series/40769-harry-bosch",
    lt: "series/Harry+Bosch",
  },
  harryHole: {
    title: "Harry Hole",
    lt: "series/Harry+Hole",
  },
  herculePoirot: {
    title: "Hercule Poirot",
    lt: "series/Hercule+Poirot",
  },
  inspectorRebus: {
    title: "Inspector Rebus",
    gr: "series/42078-inspector-rebus",
    lt: "nseries/637/Inspector-Rebus",
    wiki: "Inspector_Rebus",
  },
  jackMcevoy: {
    title: "Jack McEvoy",
    gr: "series/40639-jack-mcevoy",
    lt: "nseries/1553/Jack-McEvoy",
  },
  jakeBrigance: {
    title: "Jake Brigance",
    lt: "series/Jake+Brigance",
  },
  janaBerzelius: {
    title: "Jana Berzelius",
    lt: "series/Jana+Berzelius",
  },
  joBeckett: {
    title: "Jo Beckett",
    lt: "series/Jo+Beckett",
  },
  joeCoughlin: {
    title: "Joe Coughlin",
    lt: "series/Joe+Coughlin",
  },
  joePickett: {
    title: "Joe Pickett",
    lt: "series/Joe+Pickett",
  },
  joePike: {
    title: "Joe Pike",
    lt: "series/Joe+Pike",
  },
  johnnyMerrimon: {
    title: "Johnny Merrimon",
  },
  kickLannigan: {
    title: "Kick Lannigan",
    lt: "series/Kick+Lannigan",
  },
  kindleCounty: {
    title: "Kindle County",
    gr: "series/52231-kindle-county-legal-thriller",
    lt: "nseries/2854/Kindle-County",
  },
  lincolnRhyme: {
    title: "Lincoln Rhyme",
    lt: "series/Lincoln+Rhyme",
  },
  lucasDavenport: {
    title: "Lucas Davenport",
    lt: "series/Lucas+Davenport",
  },
  malcolmWarren: {
    title: "Malcolm Warren",
    lt: "series/Malcolm+Warren",
  },
  maliceAforethought: {
    title: "Malice Aforethought",
    lt: "work/247583",
  },
  mickeyHaller: {
    title: "Mickey Haller",
    gr: "series/44303-mickey-haller",
    lt: "series/Mickey+Haller",
  },
  millennium: {
    title: "Millennium",
    gr: "series/44598-millennium",
    lt: "nseries/23/Millennium",
  },
  myronBolitar: {
    title: "Myron Bolitar",
    lt: "series/Myron+Bolitar",
  },
  newHerculePoirot: {
    title: "New Hercule Poirot",
    gr: "series/184795-new-hercule-poirot-mysteries",
    lt: "nseries/7511/New-Hercule-Poirot-Mysteries",
  },
  oddThomas: {
    title: "Odd Thomas",
    lt: "series/Odd+Thomas",
  },
  perfectMurdersList: {
    title: "Perfect Murders List",
    authorKeys: null,
    useSearch: false,
  },
  peterSwansonSuggests: {
    title: "Peter Swanson Suggests",
    authorKeys: null,
    useSearch: false,
  },
  rachelWalling: {
    title: "Rachel Walling",
    gr: "",
    lt: "nseries/1206/Rachel-Walling",
  },
  reneeBallard: {
    title: "Renée Ballard",
    lt: "series/Renée+Ballard",
  },
  rizzoliAndIsles: {
    title: "Rizzoli & Isles",
    lt: "series/Rizzoli+%2526+Isles",
  },
  roderickAlleyn: {
    title: "Roderick Alleyn",
    gr: "series/50710-roderick-alleyn",
    lt: "series/Roderick+Alleyn",
  },
  shaneScully: {
    title: "Shane Scully",
    lt: "series/Shane+Scully",
  },
  sharpObjects: {
    title: "Sharp Objects",
    lt: "work/1117152",
  },
  sherlockHolmes: {
    title: "Sherlock Holmes",
    lt: "series/Sherlock+Holmes",
  },
  stevensAndWindermere: {
    title: "Stevens & Windermere",
    lt: "series/Stevens+and+Windermere",
  },
  stoneBarrington: {
    title: "Stone Barrington",
    lt: "series/Stone+Barrington",
  },
  sydneyRoseParnell: {
    title: "Sydney Rose Parnell",
    lt: "nseries/48681/Sydney-Rose-Parnell",
  },
  temperanceBrennan: {
    title: "Temperance Brennan",
    lt: "series/Temperance+Brennan",
  },
  theCamelClub: {
    title: "The Camel Club",
    lt: "series/The+Camel+Club",
  },
  theNo1LadiesDetectiveAgency: {
    title: "The No. 1 Ladies' Detective Agency",
    lt: "nseries/197/The-No-1-Ladies-Detective-Agency",
    wiki: "The_No._1_Ladies%27_Detective_Agency",
  },
  virgilFlowers: {
    title: "Virgil Flowers",
    lt: "series/Virgil+Flowers",
  },
  wilde: {
    title: "Wilde",
    gr: "series/321974-wilde",
    lt: "nseries/332803/Wilde",
  },
  willRobie: {
    title: "Will Robie",
    lt: "series/Will+Robie",
  },
  wineLoversMysteries: {
    title: "Wine Lovers Mysteries",
    lt: "series/Wine+Lovers+Mysteries",
  },
  you: {
    title: "You",
    lt: "nseries/19732",
  },
};

Series.keys = () => Object.keys(Series.properties);

Series.values = () => Object.values(Series.properties);

{
  const forEachFunction = (key) => {
    const value = Series.properties[key];

    if (R.isNil(value.title)) {
      value.title = key;
    }

    if (R.isNil(value.key)) {
      value.key = key;
    }
  };
  R.forEach(forEachFunction, Series.keys());
}

Object.freeze(Series);

module.exports = Series;
