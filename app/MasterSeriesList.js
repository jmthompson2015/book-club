const R = require("../node_modules/ramda/dist/ramda.js");

const FileWriter = require("../util/FileWriter.js");
const WikiUtils = require("../util/WikiUtilities.js");

const Series = require("../artifact/Series.js");

const BookUtils = require("../model/BookUtilities.js");
const Comparator = require("../model/Comparator.js");
const Formatter = require("../model/Formatter.js");
const SeriesUtilities = require("../model/SeriesUtilities.js");

const OUTPUT_FILE = "MasterSeriesList.wiki";
const HEADERS = ["Series", "Author"];
const TABLE_CLASS = "wikitable sortable";

const createRow = (useSearch) => (series) => {
  const authorKeys = BookUtils.determineAuthor(series.key);

  const value1 = Formatter.createBookText(series, useSearch);
  const value2 = Formatter.createPersonText(authorKeys, useSearch);

  const values = [value1, value2];
  const cells = R.map(WikiUtils.cell, values);

  return WikiUtils.row(cells);
};

const MasterSeriesList = {
  report: (useSearch) => {
    const series = SeriesUtilities.valuesWithMeeting();
    series.sort(Comparator.compareByTitle);
    const rows = R.map(createRow(useSearch), series);

    return WikiUtils.table(HEADERS, rows, TABLE_CLASS);
  },
};

const useSearchString = process.argv.length > 2 ? process.argv[2] : "false";
const useSearch = useSearchString === "true";
const content = MasterSeriesList.report(useSearch);
FileWriter.writeFile(OUTPUT_FILE, content);
