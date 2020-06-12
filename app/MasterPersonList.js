const R = require("../node_modules/ramda/dist/ramda.js");

const FileWriter = require("../util/FileWriter.js");
const WikiUtils = require("../util/WikiUtilities.js");

const Person = require("../artifact/Person.js");

const Formatter = require("../model/Formatter.js");

const OUTPUT_FILE = "MasterPersonList.txt";
const HEADERS = ["Person"];
const TABLE_CLASS = "wikitable sortable";

const createRow = (person) => {
  const value1 = Formatter.createPersonText(person);

  const values = [value1];
  const cells = R.map(WikiUtils.cell, values);

  return WikiUtils.row(cells);
};

const MasterBookList = {
  report: () => {
    const persons = Person.values();
    const rows = R.map(createRow, persons);

    return WikiUtils.table(HEADERS, rows, TABLE_CLASS);
  },
};

const content = MasterBookList.report();
FileWriter.writeFile(OUTPUT_FILE, content);
