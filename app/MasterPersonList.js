const R = require("../node_modules/ramda/dist/ramda.js");

const FileWriter = require("../util/FileWriter.js");
const WikiUtils = require("../util/WikiUtilities.js");

const Person = require("../artifact/Person.js");

const Comparator = require("../model/Comparator.js");
const Formatter = require("../model/Formatter.js");

const OUTPUT_FILE = "MasterPersonList.txt";
const HEADERS = ["Person"];
const TABLE_CLASS = "wikitable sortable";

const createRow = (personKey) => {
  const value1 = Formatter.createPersonText([personKey]);
  const cells = R.map(WikiUtils.cell, [value1]);

  return WikiUtils.row(cells);
};

const MasterBookList = {
  report: () => {
    const personKeys = Person.keys();
    personKeys.sort(Comparator.comparePersonKey);
    const rows = R.map(createRow, personKeys);

    return WikiUtils.table(HEADERS, rows, TABLE_CLASS);
  },
};

const content = MasterBookList.report();
FileWriter.writeFile(OUTPUT_FILE, content);
