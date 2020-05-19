const R = require("../node_modules/ramda/dist/ramda.js");

const FileWriter = require("../util/FileWriter.js");
const WikiUtils = require("../util/WikiUtilities.js");

const Book = require("../artifact/Book.js");

const Comparator = require("../model/Comparator.js");
const Formatter = require("../model/Formatter.js");

const OUTPUT_FILE = "MostReadAuthorsList.txt";
const HEADERS = ["Author", "Book Count"];
const TABLE_CLASS = "wikitable sortable";

const MostReadAuthorsList = {
  report: () => {
    const keyToBooks = Book.authorKeyToBooks(true);
    const reduceFunction = (accum, key) => {
      const myBooks = keyToBooks[key];

      return R.assoc(key, myBooks.length, accum);
    };
    const keyToCount = R.reduce(reduceFunction, {}, Object.keys(keyToBooks));
    const keys = R.filter(
      (key) => keyToCount[key] > 1,
      Object.keys(keyToCount)
    );
    keys.sort(Comparator.compareByCount(keyToCount));
    const mapFunction = (key) => {
      const value1 = Formatter.createPersonText(key);
      const value2 = keyToCount[key];
      const cell1 = WikiUtils.cell(value1);
      const cell2 = WikiUtils.cell(value2, "text-align:right;");

      return WikiUtils.row([cell1, cell2]);
    };
    const rows = R.map(mapFunction, keys);

    return WikiUtils.table(HEADERS, rows, TABLE_CLASS);
  },
};

const content = MostReadAuthorsList.report();
FileWriter.writeFile(OUTPUT_FILE, content);
