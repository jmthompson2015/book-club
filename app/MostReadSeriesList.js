const R = require("../node_modules/ramda/dist/ramda.js");

const FileWriter = require("../util/FileWriter.js");
const WikiUtils = require("../util/WikiUtilities.js");

const Book = require("../artifact/Book.js");
const Series = require("../artifact/Series.js");

const Comparator = require("../model/Comparator.js");
const Formatter = require("../model/Formatter.js");

const OUTPUT_FILE = "MostReadSeriesList.txt";
const HEADERS = ["Series", "Book Count"];
const TABLE_CLASS = "wikitable sortable";

const MostReadSeriesList = {
  report: () => {
    const keyToBooks = Book.seriesKeyToBooks(true);
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
      const series = Series.properties[key];
      const value1 = Formatter.createSeriesText(series);
      const value2 = keyToCount[key];
      const cell1 = WikiUtils.cell(value1);
      const cell2 = WikiUtils.cell(value2, "text-align:right;");

      return WikiUtils.row([cell1, cell2]);
    };
    const rows = R.map(mapFunction, keys);

    return WikiUtils.table(HEADERS, rows, TABLE_CLASS);
  },
};

const content = MostReadSeriesList.report();
FileWriter.writeFile(OUTPUT_FILE, content);
