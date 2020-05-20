const Person = require("./Person.js");

const Series = {
  AARON_FALK: "aaronFalk",
  ALEX_DELAWARE: "alexDelaware",
  AMOS_DECKER: "amosDecker",
  ANDY_CARPENTER: "andyCarpenter",
  CAMINO_ISLAND: "caminoIsland",
  CAT_KINSELLA: "catKinsella",
  CHIEF_INSPECTOR_ARMAND_GAMACHE: "chiefInspectorArmandGamache",
  CHIEF_INSPECTOR_BARNABY_MYSTERIES: "chiefInspectorBarnabyMysteries",
  CLAY_EDISON: "clayEdison",
  CORMORAN_STRIKE: "cormoranStrike",
  DAVID_HUNTER: "davidHunter",
  DETECTIVE_VARG: "detectiveVarg",
  DEXTER: "dexter",
  DISMAS_HARDY: "dismasHardy",
  DR_ALAN_GREGORY: "drAlanGregory",
  ELLERY_QUEEN: "elleryQueen",
  ELVIS_COLE: "elvisCole",
  EVAN_SMOAK: "evanSmoak",
  FLAVIA_DE_LUCE: "flaviaDeLuce",
  FRIEDA_KLEIN: "friedaKlein",
  GABRIEL_ALLON: "gabrielAllon",
  GEORGIA: "georgia",
  GHOSTMAN: "ghostman",
  GRETCHEN_LOWELL: "gretchenLowell",
  HAMISH_MACBETH: "hamishMacbeth",
  HARRY_BOSCH: "harryBosch",
  HARRY_HOLE: "harryHole",
  HERCULE_POIROT: "herculePoirot",
  JACK_REACHER: "jackReacher",
  JAKE_BRIGANCE: "jakeBrigance",
  JANA_BERZELIUS: "janaBerzelius",
  JO_BECKETT: "joBeckett",
  JOE_COUGHLIN: "joeCoughlin",
  JOE_PICKETT: "joePickett",
  JOE_PIKE: "joePike",
  JOHNNY_MERRIMON: "johnnyMerrimon",
  KICK_LANNIGAN: "kickLannigan",
  LINCOLN_RHYME: "lincolnRhyme",
  LUCAS_DAVENPORT: "lucasDavenport",
  MALCOLM_WARREN: "malcolmWarren",
  MICKEY_HALLER: "mickeyHaller",
  MILLENNIUM: "millennium",
  MYRON_BOLITAR: "myronBolitar",
  ODD_THOMAS: "oddThomas",
  RENEE_BALLARD: "reneeBallard",
  RIZZOLI_AND_ISLES: "rizzoliAndIsles",
  RODERICK_ALLEYN: "roderickAlleyn",
  SHANE_SCULLY: "shaneScully",
  SHARP_OBJECTS: "sharpObjects",
  SHERLOCK_HOLMES: "sherlockHolmes",
  STEVENS_AND_WINDERMERE: "stevensAndWindermere",
  STONE_BARRINGTON: "stoneBarrington",
  TEMPERANCE_BRENNAN: "temperanceBrennan",
  THE_CAMEL_CLUB: "theCamelClub",
  VIRGIL_FLOWERS: "virgilFlowers",
  WILL_ROBIE: "willRobie",
  WINE_LOVERS_MYSTERIES: "wineLoversMysteries",

  properties: {
    aaronFalk: { title: "Aaron Falk", lt: "series/Aaron+Falk" },
    alexDelaware: { title: "Alex Delaware", lt: "series/Alex+Delaware" },
    amosDecker: { title: "Amos Decker", lt: "series/Amos+Decker" },
    andyCarpenter: { title: "Andy Carpenter", lt: "series/Andy+Carpenter" },
    caminoIsland: { title: "Camino Island", lt: "series/Camino+Island" },
    catKinsella: { title: "Cat Kinsella", lt: "series/Cat+Kinsella" },
    chiefInspectorArmandGamache: {
      title: "Chief Inspector Armand Gamache",
      lt: "series/Chief+Inspector+Armand+Gamache",
    },
    chiefInspectorBarnabyMysteries: {
      title: "Chief Inspector Barnaby Mysteries",
      authorKey: Person.CAROLINE_GRAHAM,
      lt: "series/Chief+Inspector+Barnaby+Mysteries",
    },
    clayEdison: { title: "Clay Edison", lt: "series/Clay+Edison" },
    cormoranStrike: { title: "Cormoran Strike", lt: "series/Cormoran+Strike" },
    davidHunter: { title: "David Hunter", lt: "series/David+Hunter" },
    detectiveVarg: { title: "Detective Varg", lt: "series/Detective+Varg" },
    dexter: {
      title: "Dexter",
      authorKey: Person.JEFF_LINDSAY,
      lt: "series/Dexter",
    },
    dismasHardy: { title: "Dismas Hardy", lt: "series/Dismas+Hardy" },
    drAlanGregory: { title: "Dr. Alan Gregory", lt: "series/Dr.+Alan+Gregory" },
    elleryQueen: { title: "Ellery Queen", lt: "series/Ellery+Queen" },
    elvisCole: { title: "Elvis Cole", lt: "series/Elvis+Cole" },
    evanSmoak: { title: "Evan Smoak", lt: "series/Evan+Smoak" },
    flaviaDeLuce: { title: "Flavia de Luce", lt: "series/Flavia+de+Luce" },
    friedaKlein: { title: "Frieda Klein", lt: "series/Frieda+Klein" },
    gabrielAllon: { title: "Gabriel Allon", lt: "series/Gabriel+Allon" },
    georgia: { title: "Georgia", lt: "series/Georgia" },
    ghostman: { title: "Ghostman", lt: "series/Ghostman" },
    gretchenLowell: { title: "Gretchen Lowell", lt: "series/Gretchen+Lowell" },
    hamishMacbeth: { title: "Hamish Macbeth", lt: "series/Hamish+Macbeth" },
    harryBosch: {
      title: "Harry Bosch",
      authorKey: Person.MICHAEL_CONNELLY,
      lt: "series/Harry+Bosch",
    },
    harryHole: { title: "Harry Hole", lt: "series/Harry+Hole" },
    herculePoirot: {
      title: "Hercule Poirot",
      authorKey: Person.AGATHA_CHRISTIE,
      lt: "series/Hercule+Poirot",
    },
    jackReacher: { title: "Jack Reacher", lt: "series/Jack+Reacher" },
    jakeBrigance: { title: "Jake Brigance", lt: "series/Jake+Brigance" },
    janaBerzelius: { title: "Jana Berzelius", lt: "series/Jana+Berzelius" },
    joBeckett: { title: "Jo Beckett", lt: "series/Jo+Beckett" },
    joeCoughlin: { title: "Joe Coughlin", lt: "series/Joe+Coughlin" },
    joePickett: { title: "Joe Pickett", lt: "series/Joe+Pickett" },
    joePike: { title: "Joe Pike", lt: "series/Joe+Pike" },
    johnnyMerrimon: { title: "Johnny Merrimon" },
    kickLannigan: { title: "Kick Lannigan", lt: "series/Kick+Lannigan" },
    lincolnRhyme: { title: "Lincoln Rhyme", lt: "series/Lincoln+Rhyme" },
    lucasDavenport: { title: "Lucas Davenport", lt: "series/Lucas+Davenport" },
    malcolmWarren: { title: "Malcolm Warren", lt: "series/Malcolm+Warren" },
    mickeyHaller: { title: "Mickey Haller", lt: "series/Mickey+Haller" },
    millennium: { title: "Millennium", lt: "series/Millennium" },
    myronBolitar: { title: "Myron Bolitar", lt: "series/Myron+Bolitar" },
    oddThomas: { title: "Odd Thomas", lt: "series/Odd+Thomas" },
    reneeBallard: { title: "Renée Ballard", lt: "series/Renée+Ballard" },
    rizzoliAndIsles: {
      title: "Rizzoli & Isles",
      lt: "series/Rizzoli+%2526+Isles",
    },
    roderickAlleyn: { title: "Roderick Alleyn", lt: "series/Roderick+Alleyn" },
    shaneScully: { title: "Shane Scully", lt: "series/Shane+Scully" },
    sharpObjects: {
      title: "Sharp Objects",
      authorKey: Person.GILLIAN_FLYNN,
      lt: "work/1117152",
    },
    sherlockHolmes: { title: "Sherlock Holmes", lt: "series/Sherlock+Holmes" },
    stevensAndWindermere: {
      title: "Stevens & Windermere",
      lt: "series/Stevens+and+Windermere",
    },
    stoneBarrington: {
      title: "Stone Barrington",
      lt: "series/Stone+Barrington",
    },
    temperanceBrennan: {
      title: "Temperance Brennan",
      lt: "series/Temperance+Brennan",
    },
    theCamelClub: { title: "The Camel Club", lt: "series/The+Camel+Club" },
    virgilFlowers: { title: "Virgil Flowers", lt: "series/Virgil+Flowers" },
    willRobie: { title: "Will Robie", lt: "series/Will+Robie" },
    wineLoversMysteries: {
      title: "Wine Lovers Mysteries",
      lt: "series/Wine+Lovers+Mysteries",
    },
  },
};

Series.keys = () => Object.keys(Series.properties);

Series.values = () => Object.values(Series.properties);

Object.freeze(Series);

module.exports = Series;
