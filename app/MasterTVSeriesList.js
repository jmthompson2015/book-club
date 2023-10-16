const R = require("../node_modules/ramda/dist/ramda.js");

const FileWriter = require("../util/FileWriter.js");
const WikiUtils = require("../util/WikiUtilities.js");

const TVSeries = require("../artifact/TVSeries.js");

const BookUtils = require("../model/BookUtilities.js");
const Comparator = require("../model/Comparator.js");
const Formatter = require("../model/Formatter.js");

const OUTPUT_FILE = "MasterTVSeriesList.wiki";
const HEADERS = ["TV Series", "Creator", "Cast", "Book Series", "Author"];
const TABLE_CLASS = "wikitable sortable";

const createRow = (useSearch) => (tvSeries) => {
  const authorKeys = tvSeries
    ? BookUtils.authorForSeriesArray(tvSeries.series)
    : undefined;

  const value1 = Formatter.createTVSeriesText(tvSeries, useSearch);
  const value2 = tvSeries
    ? Formatter.createPersonText(tvSeries.creatorKeys, useSearch)
    : "";
  const value3 = tvSeries
    ? Formatter.createPersonText(tvSeries.castKeys, useSearch)
    : "";
  const value4 = tvSeries
    ? Formatter.createSeriesText(tvSeries.series, useSearch)
    : "";
  const value5 = Formatter.createPersonText(authorKeys, useSearch);

  const values = [value1, value2, value3, value4, value5];
  const cells = R.map(WikiUtils.cell, values);

  return WikiUtils.row(cells);
};

const MasterTVSeriesList = {
  report: (useSearch) => {
    const tvSerieses = TVSeries.values();
    tvSerieses.sort(Comparator.compareByTitle);
    const rows = R.map(createRow(useSearch), tvSerieses);

    return WikiUtils.table(HEADERS, rows, TABLE_CLASS);
  },
};

const useSearchString = process.argv.length > 2 ? process.argv[2] : "false";
const useSearch = useSearchString === "true";
const content = MasterTVSeriesList.report(useSearch);
FileWriter.writeFile(OUTPUT_FILE, content);
