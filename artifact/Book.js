const R = require("../node_modules/ramda/dist/ramda.js");

const Person = require("./Person.js");

const DCL_PREFIX = "https://dcl.bibliocommons.com/item/show/";

const Book = {
  A_CHRISTMAS_PARTY: "aChristmasParty",
  A_MAN_LAY_DEAD: "aManLayDead",
  BLOOD_ON_SNOW: "bloodOnSnow",
  BRING_ME_BACK: "bringMeBack",
  CAMINO_WINDS: "caminoWinds",
  CHRISTMAS_CRIMES_AT_PUZZEL_MANOR: "christmasCrimesAtPuzzelManor",
  CRAZY_LOVE_YOU: "crazyLoveYou",
  CRIME_AT_CHRISTMAS: "crimeAtChristmas",
  CRIME_SCENE: "crimeScene",
  DARKLY_DREAMING_DEXTER: "darklyDreamingDexter",
  DARK_SACRED_NIGHT: "darkSacredNight",
  EIGHT_PERFECT_MURDERS: "eightPerfectMurders",
  EVERY_LAST_LIE: "everyLastLie",
  FOOL_ME_ONCE: "foolMeOnce",
  FORCE_OF_NATURE: "forceOfNature",
  GONE_GIRL: "goneGirl",
  HELLBENT: "hellbent",
  HOME: "home",
  I_KNOW_A_SECRET: "iKnowASecret",
  IN_A_DARK_DARK_WOOD: "inADarkDarkWood",
  INK_AND_BONE: "inkAndBone",
  IN_THE_BLOOD: "inTheBlood",
  I_SEE_YOU: "iSeeYou",
  KILL_FEE: "killFee",
  LETHAL_WHITE: "lethalWhite",
  MAGPIE_MURDERS: "magpieMurders",
  MAKE_ME: "makeMe",
  MARKED_FOR_LIFE: "markedForLife",
  MEAN_STREAK: "meanStreak",
  NEVER_GO_BACK: "neverGoBack",
  NINE_PERFECT_STRANGERS: "ninePerfectStrangers",
  ONE_KICK: "oneKick",
  ONE_SHOT: "oneShot",
  ORPHAN_X: "orphanX",
  PERSONAL: "personal",
  PIECES_OF_HER: "piecesOfHer",
  RECONSTRUCTING_AMELIA: "reconstructingAmelia",
  REDEMPTION_ROAD: "redemptionRoad",
  SHARP_OBJECTS: "sharpObjects",
  STONE_COLD: "stoneCold",
  SWEET_LITTLE_LIES: "sweetLittleLies",
  THAT_NIGHT: "thatNight",
  THE_BLACK_WIDOW: "theBlackWidow",
  THE_COUPLE_NEXT_DOOR: "theCoupleNextDoor",
  THE_CROSSING: "theCrossing",
  THE_DEATH_OF_MRS_WESTAWAY: "theDeathOfMrsWestaway",
  THE_DEPARTMENT_OF_SENSITIVE_CRIMES: "theDepartmentOfSensitiveCrimes",
  THE_DRY: "theDry",
  THE_ENGLISH_SPY: "theEnglishSpy",
  THE_ESCAPE_ROOM: "theEscapeRoom",
  THE_FALLEN: "theFallen",
  THE_FAMILY_UPSTAIRS: "theFamilyUpstairs",
  THE_GODS_OF_GUILT: "theGodsOfGuilt",
  THE_GREEK_COFFIN_MYSTERY: "theGreekCoffinMystery",
  THE_GUILTY: "theGuilty",
  THE_HEIST: "theHeist",
  THE_HUSH: "theHush",
  THE_KILLER_NEXT_DOOR: "theKillerNextDoor",
  THE_LAST_PAINTING_OF_SARA_DE_VOS: "theLastPaintingOfSaraDeVos",
  THE_LATE_SHOW: "theLateShow",
  THE_LOST_MAN: "theLostMan",
  THE_NOWHERE_MAN: "theNowhereMan",
  THE_PROMISE: "thePromise",
  THE_SANTA_KLAUS_MURDER: "theSantaKlausMurder",
  THE_SILENT_PATIENT: "theSilentPatient",
  THE_STRANGER: "theStranger",
  THE_TRAVELERS: "theTravelers",
  THE_TURN_OF_THE_KEY: "theTurnOfTheKey",
  THE_WITCH_ELM: "theWitchElm",
  THE_WOMAN_IN_CABIN_10: "theWomanInCabin10",
  THE_WOMAN_IN_THE_WINDOW: "theWomanInTheWindow",
  THE_WORD_IS_MURDER: "theWordIsMurder",
  THE_WRONG_SIDE_OF_GOODBYE: "theWrongSideOfGoodbye",
  TWO_KINDS_OF_TRUTH: "twoKindsOfTruth",
  UNDER_MY_SKIN: "underMySkin",
  VANISHING_GAMES: "vanishingGames",
  WHERE_THE_CRAWDADS_SING: "whereTheCrawdadsSing",

  properties: {
    aChristmasParty: {
      title: "A Christmas Party",
      authorKey: Person.GEORGETTE_HEYER,
      meeting: "2017.12.15",
    },
    aManLayDead: {
      title: "A Man Lay Dead",
      authorKey: Person.NGAIO_MARSH,
      series: "Inspector Alleyn 1",
      meeting: "2015.12.17",
      dcl: "1294793114",
    },
    bloodOnSnow: {
      title: "Blood On Snow",
      authorKey: Person.JO_NESBO,
      meeting: "2016.01.25",
      dcl: "1251107114",
    },
    bringMeBack: {
      title: "Bring Me Back",
      authorKey: Person.BA_PARIS,
      dcl: "1446735114",
      meeting: "2019.02.25",
    },
    caminoWinds: {
      title: "Camino Winds",
      authorKey: Person.JOHN_GRISHAM,
      series: "Camino Island #2",
      dcl: "1636922114",
      meeting: "2020.09.28",
    },
    christmasCrimesAtPuzzelManor: {
      title: "Christmas Crimes at Puzzel Manor",
      authorKey: Person.SIMON_BRETT,
      meeting: "2018.12.14",
    },
    crazyLoveYou: {
      title: "Crazy Love You",
      authorKey: Person.LISA_UNGER,
      meeting: "2016.02.22",
      dcl: "1251088114",
    },
    crimeAtChristmas: {
      title: "Crime at Christmas",
      authorKey: Person.CHB_KITCHIN,
      series: "Malcolm Warren #2",
      meeting: "2020.12.18",
    },
    crimeScene: {
      title: "Crime Scene",
      authorKey: Person.JONATHAN_KELLERMAN,
      series: "Clay Edison #1",
      meeting: "2018.05.21",
      dcl: "1407385114",
    },
    darklyDreamingDexter: {
      title: "Darkly Dreaming Dexter",
      authorKey: Person.JEFF_LINDSAY,
      series: "Dexter #1",
    },
    darkSacredNight: {
      title: "Dark Sacred Night",
      authorKey: Person.MICHAEL_CONNELLY,
      series: "Renee Ballard #2, Harry Bosch #21",
      dcl: "1475392114",
      meeting: "2019.06.24",
    },
    eightPerfectMurders: {
      title: "Eight Perfect Murders",
      authorKey: Person.PETER_SWANSON,
      series: "Malcolm Kershaw #1",
      dcl: "1615636114",
      meeting: "2020.06.22",
    },
    everyLastLie: {
      title: "Every Last Lie",
      authorKey: Person.MARY_KUBICA,
      meeting: "2018.01.22",
      dcl: "1387222114",
    },
    foolMeOnce: {
      title: "Fool Me Once",
      authorKey: Person.HARLAN_COBEN,
      dcl: "1300151114",
      meeting: "2017.02.27",
    },
    forceOfNature: {
      title: "Force of Nature",
      authorKey: Person.JANE_HARPER,
      series: "Aaron Falk #2",
      dcl: "1430689114",
      meeting: "2020.01.27",
    },
    goneGirl: { title: "Gone Girl", authorKey: Person.GILLIAN_FLYNN },
    hellbent: {
      title: "Hellbent",
      authorKey: Person.GREGG_HURWITZ,
      series: "Evan Smoak #3",
      meeting: "2018.06.25",
      dcl: "1431233114",
    },
    home: {
      title: "Home",
      authorKey: Person.HARLAN_COBEN,
      series: "Myron Bolitar #11",
      meeting: "2017.10.23",
      dcl: "1330605114",
    },
    iKnowASecret: {
      title: "I Know a Secret",
      authorKey: Person.TESS_GERRITSEN,
      series: "Rizzoli & Isles #12",
      meeting: "2018.07.23",
      dcl: "1407387114",
    },
    inADarkDarkWood: {
      title: "In a Dark, Dark Wood",
      authorKey: Person.RUTH_WARE,
      meeting: "2017.08.28",
      dcl: "1278756114",
    },
    inkAndBone: {
      title: "Ink & Bone",
      authorKey: Person.LISA_UNGER,
      meeting: "2016.12.15",
      dcl: "1578361114",
    },
    inTheBlood: {
      title: "In The Blood",
      authorKey: Person.LISA_UNGER,
      meeting: "2015.05.18",
      dcl: "1176076114",
    },
    iSeeYou: {
      title: "I See You",
      authorKey: Person.CLARE_MACKINTOSH,
      meeting: "2018.02.26",
      dcl: "1384268114",
    },
    killFee: {
      title: "Kill Fee",
      authorKey: Person.OWEN_LAUKKANEN,
      series: "Stevens & Windermere 3",
      meeting: "2015.04.27",
      dcl: "1180980114",
    },
    lethalWhite: {
      title: "Lethal White",
      authorKey: Person.ROBERT_GALBRAITH,
      series: "Cormoran Strike #4",
      dcl: "1493220114",
      meeting: "2019.10.28",
    },
    magpieMurders: {
      title: "Magpie Murders",
      authorKey: Person.ANTHONY_HOROWITZ,
      meeting: "2018.09.24",
      dcl: "1387233114",
    },
    makeMe: {
      title: "Make Me",
      authorKey: Person.LEE_CHILD,
      series: "Jack Reacher 20",
      meeting: "2016.06.27",
      dcl: "1311811114",
    },
    markedForLife: {
      title: "Marked for Life",
      authorKey: Person.EMELIE_SCHEPP,
      series: "Jana Berzelius #1",
      meeting: "2017.03.27",
      dcl: "1329705114",
    },
    meanStreak: {
      title: "Mean Streak",
      authorKey: Person.SANDRA_BROWN,
      meeting: "2015.01.26",
      dcl: "1215092114",
    },
    neverGoBack: { title: "Never Go Back", authorKey: Person.LEE_CHILD },
    ninePerfectStrangers: {
      title: "Nine Perfect Strangers",
      authorKey: Person.LIANE_MORIARTY,
      dcl: "1518027114",
      meeting: "2020.10.26",
    },
    oneKick: {
      title: "One Kick",
      authorKey: Person.CHELSEA_CAIN,
      series: "Kick Lannigan 1",
      meeting: "2015.07.27",
      dcl: "1211996114",
    },
    oneShot: { title: "One Shot", authorKey: Person.LEE_CHILD },
    orphanX: {
      title: "Orphan X",
      authorKey: Person.GREGG_HURWITZ,
      series: "Evan Smoak #1",
      meeting: "2017.05.22",
      dcl: "1613028114",
    },
    personal: {
      title: "Personal",
      authorKey: Person.LEE_CHILD,
      series: "Jack Reacher 19",
      meeting: "2015.08.24",
      dcl: "1381470114",
    },
    piecesOfHer: {
      title: "Pieces of Her",
      authorKey: Person.KARIN_SLAUGHTER,
      dcl: "1460952114",
      meeting: "2019.07.22",
    },
    reconstructingAmelia: {
      title: "Reconstructing Amelia",
      authorKey: Person.KIMBERLY_MCCREIGHT,
      meeting: "2015.03.23",
      dcl: "1093239114",
    },
    redemptionRoad: {
      title: "Redemption Road",
      authorKey: Person.JOHN_HART,
      meeting: "2016.11.28",
      dcl: "1316552114",
    },
    sharpObjects: {
      title: "Sharp Objects",
      authorKey: Person.GILLIAN_FLYNN,
    },
    stoneCold: {
      title: "Stone Cold",
      authorKey: Person.CJ_BOX,
      series: "Joe Pickett 14",
      meeting: "2015.09.28",
      dcl: "1180990114",
    },
    sweetLittleLies: {
      title: "Sweet Little Lies",
      authorKey: Person.CAZ_FREAR,
      series: "Cat Kinsella #1",
      dcl: "1466868114",
      meeting: "2019.11.18",
    },
    thatNight: {
      title: "That Night",
      authorKey: Person.CHEVY_STEVENS,
      meeting: "2015.06.22",
      dcl: "1189725114",
    },
    theBlackWidow: {
      title: "The Black Widow",
      authorKey: Person.DANIEL_SILVA,
      series: "Gabriel Allon #16",
      meeting: "2017.06.26",
      dcl: "1317748114",
    },
    theCoupleNextDoor: {
      title: "The Couple Next Door",
      authorKey: Person.SHARI_LAPENA,
      meeting: "2018.03.26",
      dcl: "1348740114",
    },
    theCrossing: {
      title: "The Crossing",
      authorKey: Person.MICHAEL_CONNELLY,
      series: "Harry Bosch 18",
      meeting: "2016.09.26",
      dcl: "1277014114",
    },
    theDeathOfMrsWestaway: {
      title: "The Death of Mrs. Westaway",
      authorKey: Person.RUTH_WARE,
      dcl: "1446736114",
      meeting: "2019.08.26",
    },
    theDepartmentOfSensitiveCrimes: {
      title: "The Department of Sensitive Crimes",
      authorKey: Person.ALEXANDER_MCCALL_SMITH,
      series: "Detective Varg #1",
      dcl: "1535041114",
      meeting: "2020.07.27",
    },
    theDry: {
      title: "The Dry",
      authorKey: Person.JANE_HARPER,
      series: "Aaron Falk #1",
      dcl: "1364617114",
      meeting: "2019.03.25",
    },
    theEnglishSpy: {
      title: "The English Spy",
      authorKey: Person.DANIEL_SILVA,
      series: "Gabriel Allon #15",
      meeting: "2017.04.24",
      dcl: "1466247114",
    },
    theEscapeRoom: {
      title: "The Escape Room",
      authorKey: Person.MEGAN_GOLDIN,
      dcl: "1565306114",
      meeting: "2020.02.24",
    },
    theFallen: {
      title: "The Fallen",
      authorKey: Person.DAVID_BALDACCI,
      series: "Amos Decker #4",
      dcl: "1441565114",
      meeting: "2019.01.28",
    },
    theFamilyUpstairs: {
      title: "The Family Upstairs",
      authorKey: Person.LISA_JEWELL,
      dcl: "1595383114",
      meeting: "2020.08.24",
    },
    theGodsOfGuilt: {
      title: "The Gods Of Guilt",
      authorKey: Person.MICHAEL_CONNELLY,
      series: "Mickey Haller 5",
      meeting: "2015.02.23",
      dcl: "1154561114",
    },
    theGreekCoffinMystery: {
      title: "The Greek Coffin Mystery",
      authorKey: Person.ELLERY_QUEEN,
      series: "Ellery Queen 4",
      meeting: "2015.11.23",
      dcl: "1294792114",
    },
    theGuilty: {
      title: "The Guilty",
      authorKey: Person.DAVID_BALDACCI,
      series: "Will Robie 4",
      meeting: "2016.08.22",
      dcl: "1277015114",
    },
    theHeist: {
      title: "The Heist",
      authorKey: Person.DANIEL_SILVA,
      series: "Gabriel Allon 14",
      meeting: "2015.10.26",
      dcl: "1211991114",
    },
    theHush: {
      title: "The Hush",
      authorKey: Person.JOHN_HART,
      series: "Johnny Merrimon #2",
      meeting: "2018.10.22",
      dcl: "1431235114",
    },
    theKillerNextDoor: {
      title: "The Killer Next Door",
      authorKey: Person.ALEX_MARWOOD,
      meeting: "2016.03.28",
      dcl: "1233151114",
    },
    theLastPaintingOfSaraDeVos: {
      title: "The Last Painting of Sara de Vos",
      authorKey: Person.DOMINIC_SMITH,
      meeting: "2017.01.23",
      dcl: "1305320114",
    },
    theLateShow: {
      title: "The Late Show",
      authorKey: Person.MICHAEL_CONNELLY,
      series: "Renee Ballard #1",
      meeting: "2018.04.23",
      dcl: "1402219114",
    },
    theLostMan: {
      title: "The Lost Man",
      authorKey: Person.JANE_HARPER,
      dcl: "1523223114",
      meeting: "2020.05.20",
    },
    theNowhereMan: {
      title: "The Nowhere Man",
      authorKey: Person.GREGG_HURWITZ,
      series: "Evan Smoak #2",
      meeting: "2017.11.27",
      dcl: "1364629114",
    },
    thePromise: {
      title: "The Promise",
      authorKey: Person.ROBERT_CRAIS,
      series: "Elvis Cole 14, Joe Pike 5",
      meeting: "2016.07.25",
      dcl: "1224417114",
    },
    theSantaKlausMurder: {
      title: "The Santa Klaus Murder",
      authorKey: Person.MAVIS_DORIEL_HAY,
      meeting: "2019.12.13",
    },
    theSilentPatient: {
      title: "The Silent Patient",
      authorKey: Person.ALEX_MICHAELIDES,
      dcl: "1531671114",
      meeting: "2020.03.23",
    },
    theStranger: {
      title: "The Stranger",
      authorKey: Person.HARLAN_COBEN,
      meeting: "2016.04.25",
      dcl: "1245665114",
    },
    theTravelers: {
      title: "The Travelers",
      authorKey: Person.CHRIS_PAVONE,
      meeting: "2016.10.24",
      dcl: "1300055114",
    },
    theTurnOfTheKey: {
      title: "The Turn of the Key",
      authorKey: Person.RUTH_WARE,
      dcl: "1576431114",
      meeting: "2020.11.16",
    },
    theWitchElm: {
      title: "The Witch Elm",
      authorKey: Person.TANA_FRENCH,
      dcl: "1483240114",
      meeting: "2019.05.20",
    },
    theWomanInCabin10: {
      title: "The Woman in Cabin 10",
      authorKey: Person.RUTH_WARE,
      meeting: "2017.07.24",
      dcl: "1317758114",
    },
    theWomanInTheWindow: {
      title: "The Woman in the Window",
      authorKey: Person.AJ_FINN,
      meeting: "2018.11.26",
      dcl: "1430700114",
    },
    theWordIsMurder: {
      title: "The Word is Murder",
      authorKey: Person.ANTHONY_HOROWITZ,
      dcl: "1456731114",
      meeting: "2020.04.27",
    },
    theWrongSideOfGoodbye: {
      title: "The Wrong Side of Goodbye",
      authorKey: Person.MICHAEL_CONNELLY,
      series: "Harry Bosch #19",
      meeting: "2017.09.25",
      dcl: "1337567114",
    },
    twoKindsOfTruth: {
      title: "Two Kinds of Truth",
      authorKey: Person.MICHAEL_CONNELLY,
      series: "Harry Bosch #22",
      meeting: "2018.08.27",
      dcl: "1412693114",
    },
    underMySkin: {
      title: "Under My Skin",
      authorKey: Person.LISA_UNGER,
      dcl: "1483237114",
      meeting: "2019.04.22",
    },
    vanishingGames: {
      title: "Vanishing Games",
      authorKey: Person.ROGER_HOBBS,
      series: "Jack the Ghostman 2",
      meeting: "2016.05.23",
      dcl: "1283492114",
    },
    whereTheCrawdadsSing: {
      title: "Where the Crawdads Sing",
      authorKey: Person.DELIA_OWENS,
      dcl: "1485412114",
      meeting: "2019.09.23",
    },
  },
};

Book.keys = () => Object.keys(Book.properties);

Book.values = () => Object.values(Book.properties);

// /////////////////////////////////////////////////////////////////////////////
Book.byYear = (year) => {
  const books = Object.values(Book.properties);
  const filterFunction = (book) => {
    const year0 = book.meeting ? parseInt(book.meeting.substring(0, 4), 10) : 0;

    return year0 === year;
  };

  return R.filter(filterFunction, books);
};

Book.dclUrl = (book) => (book.dcl ? `${DCL_PREFIX}${book.dcl}` : null);

Object.freeze(Book);

module.exports = Book;
