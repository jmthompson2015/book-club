const WIKI_PREFIX = "https://en.wikipedia.org/wiki/";

const Person = {
  AGATHA_CHRISTIE: "agathaChristie",
  AJ_FINN: "ajFinn",
  ALAN_BRADLEY: "alanBradley",
  ALEX_MARWOOD: "alexMarwood",
  ALEX_MICHAELIDES: "alexMichaelides",
  ALEXANDER_MCCALL_SMITH: "alexanderMcCallSmith",
  ALICE_BLANCHARD: "aliceBlanchard",
  AMY_ADAMS: "amyAdams",
  ANTHONY_HOROWITZ: "anthonyHorowitz",
  ARTHUR_CONAN_DOYLE: "arthurConanDoyle",
  BA_PARIS: "baParis",
  BEN_AFFLECK: "benAffleck",
  BRIDGET_FONDA: "bridgetFonda",
  CAROLINE_GRAHAM: "carolineGraham",
  CAZ_FREAR: "cazFrear",
  CHB_KITCHIN: "chbKitchin",
  CHELSEA_CAIN: "chelseaCain",
  CHEVY_STEVENS: "chevyStevens",
  CHRIS_PAVONE: "chrisPavone",
  CJ_BOX: "cjBox",
  CLARE_MACKINTOSH: "clareMackintosh",
  COBIE_SMULDERS: "cobieSmulders",
  DANIEL_SILVA: "danielSilva",
  DASHIELL_HAMMETT: "dashiellHammett",
  DAVID_BALDACCI: "davidBaldacci",
  DAVID_ROSENFELT: "davidRosenfelt",
  DELIA_OWENS: "deliaOwens",
  DENNIS_LEHANE: "dennisLehane",
  DOMINIC_SMITH: "dominicSmith",
  EDNA_BUCHANAN: "ednaBuchanan",
  ELLERY_QUEEN: "elleryQueen",
  EMELIE_SCHEPP: "emelieSchepp",
  ERIC_BANA: "ericBana",
  GABRIEL_BYRNE: "gabrielByrne",
  GENEVIEVE_OREILLY: "genevieveOReilly",
  GEORGETTE_HEYER: "georgetteHeyer",
  GILLIAN_FLYNN: "gillianFlynn",
  GREGG_HURWITZ: "greggHurwitz",
  GREG_ILES: "gregIles",
  HARLAN_COBEN: "harlanCoben",
  HARVEY_KEITEL: "harveyKeitel",
  JAMES_PATTERSON: "jamesPatterson",
  JANE_HARPER: "janeHarper",
  JEFF_LINDSAY: "jeffLindsay",
  JEFFERY_DEAVER: "jefferyDeaver",
  JENNIFER_CARPENTER: "jenniferCarpenter",
  JOHN_GRISHAM: "johnGrisham",
  JOHN_HART: "johnHart",
  JOHN_LESCROART: "johnLescroart",
  JOHN_NETTLES: "johnNettles",
  JOHN_SANDFORD: "johnSandford",
  JONATHAN_KELLERMAN: "jonathanKellerman",
  JO_NESBO: "joNesbo",
  KARIN_SLAUGHTER: "karinSlaughter",
  KATE_ATKINSON: "kateAtkinson",
  KATHY_REICHS: "kathyReichs",
  KIMBERLY_MCCREIGHT: "kimberlyMcCreight",
  LAURA_LIPPMAN: "lauraLippman",
  LEE_CHILD: "leeChild",
  LENA_OLIN: "lenaOlin",
  LIANE_MORIARTY: "lianeMoriarty",
  LINWOOD_BARCLAY: "linwoodBarclay",
  LISA_BLACK: "lisaBlack",
  LISA_JACKSON: "lisaJackson",
  LISA_JEWELL: "lisaJewell",
  LISA_SCOTTOLINE: "lisaScottoline",
  LISA_UNGER: "lisaUnger",
  LOUISE_PENNY: "louisePenny",
  LUC_BESSON: "lucBesson",
  MARY_KUBICA: "maryKubica",
  MAVIS_DORIEL_HAY: "mavisDorielHay",
  MC_BEATON: "mcBeaton",
  MEGAN_GOLDIN: "meganGoldin",
  MEG_GARDINER: "megGardiner",
  MICHAEL_C_HALL: "michaelCHall",
  MICHAEL_CONNELLY: "michaelConnelly",
  MICHELE_SCOTT: "micheleScott",
  NEIL_DUDGEON: "neilDudgeon",
  NGAIO_MARSH: "ngaioMarsh",
  NICCI_FRENCH: "nicciFrench",
  OWEN_LAUKKANEN: "owenLaukkanen",
  PATRICIA_CLARKSON: "patriciaClarkson",
  PETER_SWANSON: "peterSwanson",
  ROBERT_CRAIS: "robertCrais",
  ROBERT_GALBRAITH: "robertGalbraith",
  ROGER_HOBBS: "rogerHobbs",
  ROSAMUND_PIKE: "rosamundPike",
  RUTH_WARE: "ruthWare",
  SANDRA_BROWN: "sandraBrown",
  SHARI_LAPENA: "shariLapena",
  SIMON_BECKETT: "simonBeckett",
  SIMON_BRETT: "simonBrett",
  STEPHEN_J_CANNELL: "stephenJCannell",
  STEPHEN_WHITE: "stephenWhite",
  STIEG_LARSSON: "stiegLarsson",
  STUART_WOODS: "stuartWoods",
  TANA_FRENCH: "tanaFrench",
  TED_DEKKER: "tedDekker",
  TESS_GERRITSEN: "tessGerritsen",
  TOM_CRUISE: "tomCruise",
  WILLIAM_LANDAY: "williamLanday",

  properties: {
    agathaChristie: {
      first: "Agatha",
      last: "Christie",
      wiki: "Agatha_Christie",
    },
    ajFinn: { first: "A.J.", last: "Finn", wiki: "A._J._Finn" },
    alanBradley: {
      first: "Alan",
      last: "Bradley",
      wiki: "Alan_Bradley_(writer)",
    },
    alexMarwood: { first: "Alex", last: "Marwood", wiki: "Serena_Mackesy" },
    alexMichaelides: {
      first: "Alex",
      last: "Michaelides",
      wiki: "Alex_Michaelides",
    },
    alexanderMcCallSmith: {
      first: "Alexander",
      middle: "McCall",
      last: "Smith",
      wiki: "Alexander_McCall_Smith",
    },
    aliceBlanchard: {
      first: "Alice",
      last: "Blanchard",
      wiki: "Alice_Blanchard",
    },
    amyAdams: { first: "Amy", last: "Adams" },
    anthonyHorowitz: {
      first: "Anthony",
      last: "Horowitz",
      wiki: "Anthony_Horowitz",
    },
    arthurConanDoyle: {
      first: "Arthur",
      middle: "Conan",
      last: "Doyle",
      wiki: "Arthur_Conan_Doyle",
    },
    baParis: { first: "B.A.", last: "Paris" },
    benAffleck: { first: "Ben", last: "Affleck", wiki: "Ben_Affleck" },
    bridgetFonda: { first: "Bridget", last: "Fonda", wiki: "Bridget_Fonda" },
    carolineGraham: {
      first: "Caroline",
      last: "Graham",
      wiki: "Caroline_Graham",
    },
    cazFrear: { first: "Caz", last: "Frear" },
    chbKitchin: { first: "C.H.B.", last: "Kitchin", wiki: "C._H._B._Kitchin" },
    chelseaCain: { first: "Chelsea", last: "Cain", wiki: "Chelsea_Cain" },
    chevyStevens: { first: "Chevy", last: "Stevens", wiki: "Chevy_Stevens" },
    chrisPavone: { first: "Chris", last: "Pavone", wiki: "Chris_Pavone" },
    cjBox: { first: "C.J.", last: "Box", wiki: "C._J._Box" },
    clareMackintosh: {
      first: "Clare",
      last: "Mackintosh",
      wiki: "Clare_Mackintosh",
    },
    cobieSmulders: { first: "Cobie", last: "Smulders", wiki: "Cobie_Smulders" },
    danielSilva: {
      first: "Daniel",
      last: "Silva",
      wiki: "Daniel_Silva_(novelist)",
    },
    dashiellHammett: {
      first: "Dashiell",
      last: "Hammett",
      wiki: "Dashiell_Hammett",
    },
    davidBaldacci: { first: "David", last: "Baldacci", wiki: "David_Baldacci" },
    davidRosenfelt: {
      first: "David",
      last: "Rosenfelt",
      wiki: "David_Rosenfelt",
    },
    deliaOwens: { first: "Delia", last: "Owens", wiki: "Delia_Owens" },
    dennisLehane: { first: "Dennis", last: "Lehane", wiki: "Dennis_Lehane" },
    dominicSmith: {
      first: "Dominic",
      last: "Smith",
      wiki: "Dominic_Smith_(author)",
    },
    ednaBuchanan: { first: "Edna", last: "Buchanan", wiki: "Edna_Buchanan" },
    elleryQueen: { first: "Ellery", last: "Queen", wiki: "Ellery_Queen" },
    emelieSchepp: { first: "Emelie", last: "Schepp", wiki: "Emelie_Schepp" },
    ericBana: { first: "Eric", last: "Bana", wiki: "Eric_Bana" },
    gabrielByrne: { first: "Gabriel", last: "Byrne", wiki: "Gabriel_Byrne" },
    genevieveOReilly: {
      first: "Genevieve",
      last: "O'Reilly",
      wiki: "Genevieve_O%27Reilly",
    },
    georgetteHeyer: {
      first: "Georgette",
      last: "Heyer",
      wiki: "Georgette_Heyer",
    },
    gillianFlynn: { first: "Gillian", last: "Flynn", wiki: "Gillian_Flynn" },
    greggHurwitz: { first: "Gregg", last: "Hurwitz", wiki: "Gregg_Hurwitz" },
    gregIles: { first: "Greg", last: "Iles", wiki: "Greg_Iles" },
    harlanCoben: { first: "Harlan", last: "Coben", wiki: "Harlan_Coben" },
    harveyKeitel: { first: "Harvey", last: "Keitel", wiki: "Harvey_Keitel" },
    jamesPatterson: {
      first: "James",
      last: "Patterson",
      wiki: "James_Patterson",
    },
    janeHarper: { first: "Jane", last: "Harper", wiki: "Jane_Harper" },
    jeffLindsay: {
      first: "Jeff",
      last: "Lindsay",
      wiki: "Jeff_Lindsay_(writer)",
    },
    jefferyDeaver: { first: "Jeffery", last: "Deaver", wiki: "Jeffery_Deaver" },
    jenniferCarpenter: { first: "Jennifer", last: "Carpenter" },
    johnGrisham: { first: "John", last: "Grisham", wiki: "John_Grisham" },
    johnHart: { first: "John", last: "Hart", wiki: "John_Hart_(author)" },
    johnLescroart: { first: "John", last: "Lescroart", wiki: "John_Lescroart" },
    johnNettles: { first: "John", last: "Nettles" },
    johnSandford: {
      first: "John",
      last: "Sandford",
      wiki: "John_Sandford_(novelist)",
    },
    jonathanKellerman: {
      first: "Jonathan",
      last: "Kellerman",
      wiki: "Jonathan_Kellerman",
    },
    joNesbo: { first: "Jo", last: "Nesbø", wiki: "Jo_Nesbø" },
    karinSlaughter: {
      first: "Karin",
      last: "Slaughter",
      wiki: "Karin_Slaughter",
    },
    kateAtkinson: { first: "Kate", last: "Atkinson", wiki: "Kate_Atkinson" },
    kathyReichs: { first: "Kathy", last: "Reichs", wiki: "Kathy_Reichs" },
    kimberlyMcCreight: {
      first: "Kimberly",
      last: "McCreight",
      wiki: "Kimberly_McCreight",
    },
    lauraLippman: { first: "Laura", last: "Lippman", wiki: "Laura_Lippman" },
    leeChild: { first: "Lee", last: "Child", wiki: "Lee_Child" },
    lenaOlin: { first: "Lena", last: "Olin", wiki: "Lena_Olin" },
    lianeMoriarty: { first: "Liane", last: "Moriarty", wiki: "Liane_Moriarty" },
    linwoodBarclay: {
      first: "Linwood",
      last: "Barclay",
      wiki: "Linwood_Barclay",
    },
    lisaBlack: { first: "Lisa", last: "Black" },
    lisaJackson: {
      first: "Lisa",
      last: "Jackson",
      wiki: "Lisa_Jackson_(author)",
    },
    lisaJewell: { first: "Lisa", last: "Jewell", wiki: "Lisa_Jewell" },
    lisaScottoline: {
      first: "Lisa",
      last: "Scottoline",
      wiki: "Lisa_Scottoline",
    },
    lisaUnger: { first: "Lisa", last: "Unger", wiki: "Lisa_Unger" },
    louisePenny: { first: "Louise", last: "Penny", wiki: "Louise_Penny" },
    lucBesson: { first: "Luc", last: "Besson", wiki: "Luc_Besson" },
    maryKubica: { first: "Mary", last: "Kubica" },
    mavisDorielHay: {
      first: "Mavis",
      middle: "Doriel",
      last: "Hay",
      wiki: "Mavis_Doriel_Hay",
    },
    mcBeaton: { first: "M.C.", last: "Beaton", wiki: "Marion_Chesney" },
    meganGoldin: { first: "Megan", last: "Goldin" },
    megGardiner: { first: "Meg", last: "Gardiner", wiki: "Meg_Gardiner" },
    michaelCHall: { first: "Michael", middle: "C.", last: "Hall" },
    michaelConnelly: {
      first: "Michael",
      last: "Connelly",
      wiki: "Michael_Connelly",
    },
    micheleScott: { first: "Michele", last: "Scott" },
    neilDudgeon: { first: "Neil", last: "Dudgeon" },
    ngaioMarsh: { first: "Ngaio", last: "Marsh", wiki: "Ngaio_Marsh" },
    nicciFrench: { first: "Nicci", last: "French", wiki: "Nicci_French" },
    owenLaukkanen: { first: "Owen", last: "Laukkanen", wiki: "Owen_Laukkanen" },
    patriciaClarkson: { first: "Patricia", last: "Clarkson" },
    peterSwanson: { first: "Peter", last: "Swanson", wiki: "Peter_Swanson" },
    robertGalbraith: {
      first: "Robert",
      last: "Galbraith",
      wiki: "J._K._Rowling#Cormoran_Strike",
    },
    robertCrais: { first: "Robert", last: "Crais", wiki: "Robert_Crais" },
    rogerHobbs: { first: "Roger", last: "Hobbs", wiki: "Roger_Hobbs" },
    rosamundPike: { first: "Rosamund", last: "Pike", wiki: "Rosamund_Pike" },
    ruthWare: { first: "Ruth", last: "Ware", wiki: "Ruth_Ware" },
    sandraBrown: { first: "Sandra", last: "Brown", wiki: "Sandra_Brown" },
    shariLapena: { first: "Shari", last: "Lapena", wiki: "Shari_Lapena" },
    simonBeckett: { first: "Simon", last: "Beckett", wiki: "Simon_Beckett" },
    simonBrett: { first: "Simon", last: "Brett", wiki: "Simon_Brett" },
    stephenJCannell: {
      first: "Stephen",
      middle: "J.",
      last: "Cannell",
      wiki: "Stephen_J._Cannell",
    },
    stephenWhite: {
      first: "Stephen",
      last: "White",
      wiki: "Stephen_White_(author)",
    },
    stiegLarsson: { first: "Stieg", last: "Larsson", wiki: "Stieg_Larsson" },
    stuartWoods: { first: "Stuart", last: "Woods", wiki: "Stuart_Woods" },
    tanaFrench: { first: "Tana", last: "French", wiki: "Tana_French" },
    tedDekker: { first: "Ted", last: "Dekker", wiki: "Ted_Dekker" },
    tessGerritsen: { first: "Tess", last: "Gerritsen", wiki: "Tess_Gerritsen" },
    tomCruise: { first: "Tom", last: "Cruise", wiki: "Tom_Cruise" },
    williamLanday: { first: "William", last: "Landay", wiki: "William_Landay" },
  },
};

Person.keys = () => Object.keys(Person.properties);

Person.values = () => Object.values(Person.properties);

// /////////////////////////////////////////////////////////////////////////////
Person.wikiUrl = (person) =>
  person.wiki ? `${WIKI_PREFIX}${person.wiki}` : null;

Object.freeze(Person);

module.exports = Person;
