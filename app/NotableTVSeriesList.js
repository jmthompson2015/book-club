const R = require("../node_modules/ramda/dist/ramda.js");

const FileWriter = require("../util/FileWriter.js");
const WikiUtils = require("../util/WikiUtilities.js");

const TVSeries = require("../artifact/TVSeries.js");

const Comparator = require("../model/Comparator.js");
const Formatter = require("../model/Formatter.js");

const OUTPUT_FILE = "NotableTVSeriesList.txt";
const HEADERS = ["TV Series", "Cast"];
const TABLE_CLASS = "wikitable sortable";

const createRow = (tvSeries) => {
  const value1 = Formatter.createTVSeriesText(tvSeries);
  const value2 = tvSeries ? Formatter.createPersonText(tvSeries.castKeys) : "";

  const values = [value1, value2];
  const cells = R.map(WikiUtils.cell, values);

  return WikiUtils.row(cells);
};

const NotableTVSeriesList = {
  report: () => {
    const tvSerieses = TVSeries.valuesWithoutSeries();
    tvSerieses.sort(Comparator.compareByTitle);
    const rows = R.map(createRow, tvSerieses);

    return WikiUtils.table(HEADERS, rows, TABLE_CLASS);
  },
};

const content = NotableTVSeriesList.report();
FileWriter.writeFile(OUTPUT_FILE, content);
