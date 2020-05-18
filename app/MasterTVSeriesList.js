const R = require("../node_modules/ramda/dist/ramda.js");

const FileWriter = require("../util/FileWriter.js");
const WikiUtils = require("../util/WikiUtilities.js");

const Series = require("../artifact/Series.js");
const TVSeries = require("../artifact/TVSeries.js");

const Comparator = require("../model/Comparator.js");
const Formatter = require("../model/Formatter.js");

const OUTPUT_FILE = "MasterTVSeriesList.txt";
const HEADERS = ["TV Series", "Cast", "Book Series", "Author"];
const TABLE_CLASS = "wikitable sortable";

const createRow = (tvSeries) => {
  const series = tvSeries ? Series.properties[tvSeries.seriesKey] : undefined;

  const value1 = Formatter.createTVSeriesText(tvSeries);
  const value2 = tvSeries ? Formatter.createPersonText(tvSeries.castKeys) : "";
  const value3 = Formatter.createSeriesText(series);
  const value4 = series ? Formatter.createPersonText(series.authorKey) : "";

  const values = [value1, value2, value3, value4];
  const cells = R.map(WikiUtils.cell, values);

  return WikiUtils.row(cells);
};

const MasterTVSeriesList = {
  report: () => {
    const tvSerieses = TVSeries.values();
    tvSerieses.sort(Comparator.compareByTitle);
    const rows = R.map(createRow, tvSerieses);

    return WikiUtils.table(HEADERS, rows, TABLE_CLASS);
  },
};

const content = MasterTVSeriesList.report();
FileWriter.writeFile(OUTPUT_FILE, content);
