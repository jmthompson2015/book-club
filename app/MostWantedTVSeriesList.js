const R = require("../node_modules/ramda/dist/ramda.js");

const FileWriter = require("../util/FileWriter.js");
const WikiUtils = require("../util/WikiUtilities.js");

const TVSeries = require("../artifact/TVSeries.js");

const BookUtils = require("../model/BookUtilities.js");
const Comparator = require("../model/Comparator.js");
const Formatter = require("../model/Formatter.js");

const OUTPUT_FILE = "MostWantedTVSeriesList.txt";
const HEADERS1 = ["TV Series", "Cast", "Book Series", "Author"];
const HEADERS2 = ["TV Series", "Creator", "Cast"];
const TABLE_CLASS = "wikitable sortable";

const createRow1 = (useSearch) => (tvSeries) => {
  const authorKeys = tvSeries
    ? BookUtils.authorForSeriesArray(tvSeries.series)
    : undefined;

  const value1 = Formatter.createTVSeriesText(tvSeries, useSearch);
  const value2 = tvSeries
    ? Formatter.createPersonText(tvSeries.castKeys, useSearch)
    : "";
  const value3 = tvSeries
    ? Formatter.createSeriesText(tvSeries.series, useSearch)
    : "";
  const value4 = Formatter.createPersonText(authorKeys, useSearch);

  const values = [value1, value2, value3, value4];
  const cells = R.map(WikiUtils.cell, values);

  return WikiUtils.row(cells);
};

const createRow2 = (useSearch) => (tvSeries) => {
  const value1 = Formatter.createTVSeriesText(tvSeries, useSearch);
  const value2 = tvSeries
    ? Formatter.createPersonText(tvSeries.creatorKeys, useSearch)
    : "";
  const value3 = tvSeries
    ? Formatter.createPersonText(tvSeries.castKeys, useSearch)
    : "";

  const values = [value1, value2, value3];
  const cells = R.map(WikiUtils.cell, values);

  return WikiUtils.row(cells);
};

const MostWantedTVSeriesList = {
  report1: (useSearch) => {
    const tvSerieses = TVSeries.valuesWithSeries();
    tvSerieses.sort(Comparator.compareByTitle);
    const rows = R.map(createRow1(useSearch), tvSerieses);

    return WikiUtils.table(HEADERS1, rows, TABLE_CLASS);
  },
  report2: (useSearch) => {
    const tvSerieses = TVSeries.valuesWithoutSeries();
    tvSerieses.sort(Comparator.compareByTitle);
    const rows = R.map(createRow2(useSearch), tvSerieses);

    return WikiUtils.table(HEADERS2, rows, TABLE_CLASS);
  },
};

const useSearchString = process.argv.length > 2 ? process.argv[2] : "false";
const useSearch = useSearchString === "true";
const content1 = MostWantedTVSeriesList.report1(useSearch);
const content2 = MostWantedTVSeriesList.report2(useSearch);
FileWriter.writeFile(
  OUTPUT_FILE,
  `__TOC__
==TV Series Made from Books==
${content1}

==Other TV Series Mentioned in Club==
${content2}
`
);
