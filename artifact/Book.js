const R = require("../node_modules/ramda/dist/ramda.js");

const Person = require("./Person.js");

const DCL_PREFIX = "https://dcl.bibliocommons.com/item/show/";

const Book = {
  A_CHRISTMAS_PARTY: "aChristmasParty",
  A_MAN_LAY_DEAD: "aManLayDead",
  AND_THEN_THERE_WERE_NONE: "andThenThereWereNone",
  A_STUDY_IN_SCARLET: "aStudyInScarlet",
  A_TAP_ON_THE_WINDOW: "aTapOnTheWindow",
  A_WANTED_MAN: "aWantedMan",
  BLOOD_ON_SNOW: "bloodOnSnow",
  BRING_ME_BACK: "bringMeBack",
  CAMINO_WINDS: "caminoWinds",
  CHASING_DARKNESS: "chasingDarkness",
  CHRISTMAS_CRIMES_AT_PUZZEL_MANOR: "christmasCrimesAtPuzzelManor",
  CRAZY_LOVE_YOU: "crazyLoveYou",
  CRIME_AT_CHRISTMAS: "crimeAtChristmas",
  CRIME_SCENE: "crimeScene",
  DARKLY_DREAMING_DEXTER: "darklyDreamingDexter",
  DARK_SACRED_NIGHT: "darkSacredNight",
  DEFENDING_JACOB: "defendingJacob",
  DEXTER_IS_DELICIOUS: "dexterIsDelicious",
  EIGHT_PERFECT_MURDERS: "eightPerfectMurders",
  EVERY_LAST_LIE: "everyLastLie",
  FOOL_ME_ONCE: "foolMeOnce",
  FORCE_OF_NATURE_2012: "forceOfNature2012",
  FORCE_OF_NATURE_2018: "forceOfNature2018",
  GHOSTMAN: "ghostman",
  GONE_GIRL: "goneGirl",
  HEAT_LIGHTNING: "heatLightning",
  HELLBENT: "hellbent",
  HOME: "home",
  ID_KNOW_YOU_ANYWHERE: "idKnowYouAnywhere",
  I_KNOW_A_SECRET: "iKnowASecret",
  IN_A_DARK_DARK_WOOD: "inADarkDarkWood",
  INK_AND_BONE: "inkAndBone",
  IN_THE_BLOOD: "inTheBlood",
  IRON_HOUSE: "ironHouse",
  I_SEE_YOU: "iSeeYou",
  KILL_FEE: "killFee",
  LETHAL_WHITE: "lethalWhite",
  LIVE_BY_NIGHT: "liveByNight",
  MAGPIE_MURDERS: "magpieMurders",
  MAKE_ME: "makeMe",
  MARKED_FOR_LIFE: "markedForLife",
  MEAN_STREAK: "meanStreak",
  MISSING_YOU: "missingYou",
  NEVER_GO_BACK: "neverGoBack",
  NINE_PERFECT_STRANGERS: "ninePerfectStrangers",
  ONE_KICK: "oneKick",
  ONE_SHOT: "oneShot",
  ORPHAN_X: "orphanX",
  PERSONAL: "personal",
  PHANTOM: "phantom",
  PIECES_OF_HER: "piecesOfHer",
  RECONSTRUCTING_AMELIA: "reconstructingAmelia",
  REDEMPTION_ROAD: "redemptionRoad",
  SHARP_OBJECTS: "sharpObjects",
  SIX_YEARS: "sixYears",
  STAY_CLOSE: "stayClose",
  STONE_COLD: "stoneCold",
  SUSPECT: "suspect",
  SWEET_LITTLE_LIES: "sweetLittleLies",
  SYCAMORE_ROW: "sycamoreRow",
  THAT_NIGHT: "thatNight",
  THE_BLACK_WIDOW: "theBlackWidow",
  THE_BRASS_VERDICT: "theBrassVerdict",
  THE_COUPLE_NEXT_DOOR: "theCoupleNextDoor",
  THE_CROSSING: "theCrossing",
  THE_DEATH_OF_MRS_WESTAWAY: "theDeathOfMrsWestaway",
  THE_DEPARTMENT_OF_SENSITIVE_CRIMES: "theDepartmentOfSensitiveCrimes",
  THE_DRY: "theDry",
  THE_ENGLISH_SPY: "theEnglishSpy",
  THE_ESCAPE_ROOM: "theEscapeRoom",
  THE_EXPATS: "theExpats",
  THE_FALLEN: "theFallen",
  THE_FAMILY_UPSTAIRS: "theFamilyUpstairs",
  THE_FIFTH_WITNESS: "theFifthWitness",
  THE_GODS_OF_GUILT: "theGodsOfGuilt",
  THE_GREEK_COFFIN_MYSTERY: "theGreekCoffinMystery",
  THE_GUILTY: "theGuilty",
  THE_HEIST: "theHeist",
  THE_HUSH: "theHush",
  THE_KILLER_NEXT_DOOR: "theKillerNextDoor",
  THE_KILLINGS_AT_BADGERS_DRIFT: "theKillingsAtBadgersDrift",
  THE_LAST_CHILD: "theLastChild",
  THE_LAST_PAINTING_OF_SARA_DE_VOS: "theLastPaintingOfSaraDeVos",
  THE_LATE_SHOW: "theLateShow",
  THE_LEOPARD: "theLeopard",
  THE_LOST_MAN: "theLostMan",
  THE_MOST_DANGEROUS_THING: "theMostDangerousThing",
  THE_MYSTERIOUS_AFFAIR_AT_STYLES: "theMysteriousAffairAtStyles",
  THE_NIGHT_SEASON: "theNightSeason",
  THE_NOWHERE_MAN: "theNowhereMan",
  THE_PROMISE: "thePromise",
  THE_REMBRANDT_AFFAIR: "theRembrandtAffair",
  THE_REVERSAL: "theReversal",
  THE_SANTA_KLAUS_MURDER: "theSantaKlausMurder",
  THE_SHADOW_TRACER: "theShadowTracer",
  THE_SILENT_PATIENT: "theSilentPatient",
  THE_SNOWMAN: "theSnowman",
  THE_STRANGER: "theStranger",
  THE_TRAVELERS: "theTravelers",
  THE_TURN_OF_THE_KEY: "theTurnOfTheKey",
  THE_WATCHMAN: "theWatchman",
  THE_WITCH_ELM: "theWitchElm",
  THE_WOMAN_IN_CABIN_10: "theWomanInCabin10",
  THE_WOMAN_IN_THE_WINDOW: "theWomanInTheWindow",
  THE_WORD_IS_MURDER: "theWordIsMurder",
  THE_WRONG_SIDE_OF_GOODBYE: "theWrongSideOfGoodbye",
  TWO_KINDS_OF_TRUTH: "twoKindsOfTruth",
  UNDER_MY_SKIN: "underMySkin",
  VANISHING_GAMES: "vanishingGames",
  VICTIMS: "victims",
  WAITING_FOR_WEDNESDAY: "waitingForWednesday",
  WHERE_THE_CRAWDADS_SING: "whereTheCrawdadsSing",

  properties: {
    aChristmasParty: {
      title: "A Christmas Party",
      authorKey: Person.GEORGETTE_HEYER,
      meeting: "2017.12.15",
      dcl: "1444035114",
    },
    aManLayDead: {
      title: "A Man Lay Dead",
      authorKey: Person.NGAIO_MARSH,
      series: "Inspector Alleyn #1",
      meeting: "2015.12.17",
      dcl: "1294793114",
    },
    andThenThereWereNone: {
      title: "And Then There Were None",
      authorKey: Person.AGATHA_CHRISTIE,
      meeting: "2014.12.18",
      dcl: "1063049114",
    },
    aStudyInScarlet: {
      title: "A Study in Scarlet",
      authorKey: Person.ARTHUR_CONAN_DOYLE,
      series: "Sherlock Holmes #1",
      meeting: "2012.02.27",
    },
    aTapOnTheWindow: {
      title: "A Tap on the Window",
      authorKey: Person.LINWOOD_BARCLAY,
      meeting: "2014.04.28",
      dcl: "1153565114",
    },
    aWantedMan: {
      title: "A Wanted Man",
      authorKey: Person.LEE_CHILD,
      series: "Jack Reacher #17",
      meeting: "2014.03.24",
      dcl: "1054861114",
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
    chasingDarkness: {
      title: "Chasing Darkness",
      authorKey: Person.ROBERT_CRAIS,
      series: "Elvis Cole #12",
      meeting: "2013.05.20",
      dcl: "861205114",
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
      dcl: "656271114",
    },
    darkSacredNight: {
      title: "Dark Sacred Night",
      authorKey: Person.MICHAEL_CONNELLY,
      series: "Renee Ballard #2, Harry Bosch #21",
      dcl: "1475392114",
      meeting: "2019.06.24",
    },
    defendingJacob: {
      title: "Defending Jacob",
      authorKey: Person.WILLIAM_LANDAY,
      meeting: "2013.06.24",
      dcl: "1021979114",
    },
    dexterIsDelicious: {
      title: "Dexter is Delicious",
      authorKey: Person.JEFF_LINDSAY,
      series: "Dexter #5",
      meeting: "2012.05.29",
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
    forceOfNature2012: {
      title: "Force of Nature (2012)",
      authorKey: Person.CJ_BOX,
      series: "Joe Picket #12",
      meeting: "2012.11.26",
    },
    forceOfNature2018: {
      title: "Force of Nature (2018)",
      authorKey: Person.JANE_HARPER,
      series: "Aaron Falk #2",
      dcl: "1430689114",
      meeting: "2020.01.27",
    },
    ghostman: {
      title: "Ghostman",
      authorKey: Person.ROGER_HOBBS,
      series: "Ghostman #1",
      meeting: "2014.07.28",
      dcl: "1218653114",
    },
    goneGirl: {
      title: "Gone Girl",
      authorKey: Person.GILLIAN_FLYNN,
      dcl: "1033248114",
    },
    heatLightning: {
      title: "Heat Lightning",
      authorKey: Person.JOHN_SANDFORD,
      series: "Virgil Flowers #2",
      meeting: "2012/04.23",
    },
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
    idKnowYouAnywhere: {
      title: "I'd Know You Anywhere",
      authorKey: Person.LAURA_LIPPMAN,
      meeting: "2012.01.23",
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
    ironHouse: {
      title: "Iron House",
      authorKey: Person.JOHN_HART,
      meeting: "2013.08.26",
      dcl: "993819114",
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
      series: "Stevens & Windermere #3",
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
    liveByNight: {
      title: "Live by Night",
      authorKey: Person.DENNIS_LEHANE,
      series: "Coughlin #2",
      meeting: "2014.06.23",
      dcl: "1060297114",
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
      series: "Jack Reacher #20",
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
    missingYou: {
      title: "Missing You",
      authorKey: Person.HARLAN_COBEN,
      meeting: "2014.10.27",
      dcl: "1615407114",
    },
    neverGoBack: {
      title: "Never Go Back",
      authorKey: Person.LEE_CHILD,
      dcl: "1137507114",
    },
    ninePerfectStrangers: {
      title: "Nine Perfect Strangers",
      authorKey: Person.LIANE_MORIARTY,
      dcl: "1518027114",
      meeting: "2020.10.26",
    },
    oneKick: {
      title: "One Kick",
      authorKey: Person.CHELSEA_CAIN,
      series: "Kick Lannigan #1",
      meeting: "2015.07.27",
      dcl: "1211996114",
    },
    oneShot: {
      title: "One Shot",
      authorKey: Person.LEE_CHILD,
      dcl: "962840114",
    },
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
      series: "Jack Reacher #19",
      meeting: "2015.08.24",
      dcl: "1381470114",
    },
    phantom: {
      title: "Phantom",
      authorKey: Person.JO_NESBO,
      series: "Harry Hole #9",
      meeting: "2013.11.25",
      dcl: "1061473114",
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
      dcl: "767353114",
    },
    sixYears: {
      title: "Six Years",
      authorKey: Person.HARLAN_COBEN,
      meeting: "2013.09.23",
      dcl: "1134102114",
    },
    stayClose: {
      title: "Stay Close",
      authorKey: Person.HARLAN_COBEN,
      meeting: "2013.01.28",
      dcl: "1022395114",
    },
    stoneCold: {
      title: "Stone Cold",
      authorKey: Person.CJ_BOX,
      series: "Joe Pickett #14",
      meeting: "2015.09.28",
      dcl: "1180990114",
    },
    suspect: {
      title: "Suspect",
      authorKey: Person.ROBERT_CRAIS,
      meeting: "2014.01.27",
      dcl: "1087642114",
    },
    sweetLittleLies: {
      title: "Sweet Little Lies",
      authorKey: Person.CAZ_FREAR,
      series: "Cat Kinsella #1",
      dcl: "1466868114",
      meeting: "2019.11.18",
    },
    sycamoreRow: {
      title: "Sycamore Row",
      authorKey: Person.JOHN_GRISHAM,
      series: "Jake Brigance #2",
      meeting: "2014.11.24",
      dcl: "1151120114",
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
    theBrassVerdict: {
      title: "The Brass Verdict",
      authorKey: Person.MICHAEL_CONNELLY,
      series: "Mickey Haller #2, Harry Bosch #14",
      meeting: "2012.03.26",
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
      series: "Harry Bosch #18",
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
    theExpats: {
      title: "The Expats",
      authorKey: Person.CHRIS_PAVONE,
      meeting: "2014.02.24",
      dcl: "1028931114",
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
    theFifthWitness: {
      title: "The Fifth Witness",
      authorKey: Person.MICHAEL_CONNELLY,
      series: "Mickey Haller #4",
      meeting: "2013.04.22",
      dcl: "985297114",
    },
    theGodsOfGuilt: {
      title: "The Gods Of Guilt",
      authorKey: Person.MICHAEL_CONNELLY,
      series: "Mickey Haller #5",
      meeting: "2015.02.23",
      dcl: "1154561114",
    },
    theGreekCoffinMystery: {
      title: "The Greek Coffin Mystery",
      authorKey: Person.ELLERY_QUEEN,
      series: "Ellery Queen #4",
      meeting: "2015.11.23",
      dcl: "1294792114",
    },
    theGuilty: {
      title: "The Guilty",
      authorKey: Person.DAVID_BALDACCI,
      series: "Will Robie #4",
      meeting: "2016.08.22",
      dcl: "1277015114",
    },
    theHeist: {
      title: "The Heist",
      authorKey: Person.DANIEL_SILVA,
      series: "Gabriel Allon #14",
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
    theKillingsAtBadgersDrift: {
      title: "The Killings at Badger's Drift",
      authorKey: Person.CAROLINE_GRAHAM,
      series: "Barnaby #1",
    },
    theLastChild: {
      title: "The Last Child",
      authorKey: Person.JOHN_HART,
      series: "Johnny Merrimon #1",
      meeting: "2012.07.23",
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
    theLeopard: {
      title: "The Leopard",
      authorKey: Person.JO_NESBO,
      series: "Harry Hole #8",
      meeting: "2013.03.25",
      dcl: "1020521114",
    },
    theLostMan: {
      title: "The Lost Man",
      authorKey: Person.JANE_HARPER,
      dcl: "1523223114",
      meeting: "2020.05.20",
    },
    theMostDangerousThing: {
      title: "The Most Dangerous Thing",
      authorKey: Person.LAURA_LIPPMAN,
      meeting: "2012.08.27",
    },
    theMysteriousAffairAtStyles: {
      title: "The Mysterious Affair at Styles",
      authorKey: Person.AGATHA_CHRISTIE,
      series: "Hercule Poirot #1",
      meeting: "2013.12.16",
      dcl: "783597114",
    },
    theNightSeason: {
      title: "The Night Season",
      authorKey: Person.CHELSEA_CAIN,
      series: "Gretchen Lowell #4",
      meeting: "2012.10.22",
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
      series: "Elvis Cole #14, Joe Pike #5",
      meeting: "2016.07.25",
      dcl: "1224417114",
    },
    theRembrandtAffair: {
      title: "The Rembrandt Affair",
      authorKey: Person.DANIEL_SILVA,
      series: "Gabriel Allon #10",
      meeting: "2013.02.25",
      dcl: "956553114",
    },
    theReversal: {
      title: "The Reversal",
      authorKey: Person.MICHAEL_CONNELLY,
      series: "Mickey Haller #3",
      meeting: "2012.12.17",
    },
    theSantaKlausMurder: {
      title: "The Santa Klaus Murder",
      authorKey: Person.MAVIS_DORIEL_HAY,
      meeting: "2019.12.13",
    },
    theShadowTracer: {
      title: "The Shadow Tracer",
      authorKey: Person.MEG_GARDINER,
      meeting: "2014.05.19",
      dcl: "1129797114",
    },
    theSilentPatient: {
      title: "The Silent Patient",
      authorKey: Person.ALEX_MICHAELIDES,
      dcl: "1531671114",
      meeting: "2020.03.23",
    },
    theSnowman: {
      title: "The Snowman",
      authorKey: Person.JO_NESBO,
      series: "Harry Hole #7",
      meeting: "2012.06.25",
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
    theWatchman: {
      title: "The Watchman",
      authorKey: Person.ROBERT_CRAIS,
      series: "Joe Pike #1",
      meeting: "2012.09.24",
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
      series: "Ghostman #2",
      meeting: "2016.05.23",
      dcl: "1283492114",
    },
    victims: {
      title: "Victims",
      authorKey: Person.JONATHAN_KELLERMAN,
      series: "Alex Delaware #27",
      meeting: "2013.07.22",
      dcl: "1030014114",
    },
    waitingForWednesday: {
      title: "Waiting for Wednesday",
      authorKey: Person.NICCI_FRENCH,
      series: "Frieda Klein #3",
      meeting: "2014.09.22",
      dcl: "1185773114",
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
