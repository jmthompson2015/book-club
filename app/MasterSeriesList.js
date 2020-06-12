const R = require("../node_modules/ramda/dist/ramda.js");

const FileWriter = require("../util/FileWriter.js");
const WikiUtils = require("../util/WikiUtilities.js");

const Series = require("../artifact/Series.js");

const BookUtils = require("../model/BookUtilities.js");
const Comparator = require("../model/Comparator.js");
const Formatter = require("../model/Formatter.js");

const OUTPUT_FILE = "MasterSeriesList.txt";
const HEADERS = ["Series", "Author"];
const TABLE_CLASS = "wikitable sortable";

const createRow = (series) => {
  const authorKey = BookUtils.determineAuthor(series.key);

  const value1 = Formatter.createBookText(series);
  const value2 = Formatter.createPersonText(authorKey);

  const values = [value1, value2];
  const cells = R.map(WikiUtils.cell, values);

  return WikiUtils.row(cells);
};

const MasterBookList = {
  report: () => {
    const series = Series.values();
    series.sort(Comparator.compareByTitle);
    const rows = R.map(createRow, series);

    return WikiUtils.table(HEADERS, rows, TABLE_CLASS);
  },
};

const content = MasterBookList.report();
FileWriter.writeFile(OUTPUT_FILE, content);
