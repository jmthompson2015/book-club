const R = require("../node_modules/ramda/dist/ramda.js");

const FileWriter = require("../util/FileWriter.js");
const WikiUtils = require("../util/WikiUtilities.js");

const Person = require("../artifact/Person.js");

const Comparator = require("../model/Comparator.js");
const Formatter = require("../model/Formatter.js");

const OUTPUT_FILE = "MasterPersonList.txt";
const HEADERS = ["Person"];
const TABLE_CLASS = "wikitable sortable";

const createRow = (useSearch) => (personKey) => {
  const value1 = Formatter.createPersonText([personKey], useSearch);
  const cells = R.map(WikiUtils.cell, [value1]);

  return WikiUtils.row(cells);
};

const MasterBookList = {
  report: (useSearch) => {
    const personKeys = Person.keys();
    personKeys.sort(Comparator.comparePersonKey);
    const rows = R.map(createRow(useSearch), personKeys);

    return WikiUtils.table(HEADERS, rows, TABLE_CLASS);
  },
};

const useSearchString = process.argv.length > 2 ? process.argv[2] : "false";
const useSearch = useSearchString === "true";
const content = MasterBookList.report(useSearch);
FileWriter.writeFile(OUTPUT_FILE, content);
