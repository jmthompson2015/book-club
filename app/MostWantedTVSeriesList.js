const R = require("../node_modules/ramda/dist/ramda.js");

const FileWriter = require("../util/FileWriter.js");
const WikiUtils = require("../util/WikiUtilities.js");

const Series = require("../artifact/Series.js");
const TVSeries = require("../artifact/TVSeries.js");

const Comparator = require("../model/Comparator.js");
const Formatter = require("../model/Formatter.js");

const OUTPUT_FILE = "MostWantedTVSeriesList.txt";
const HEADERS1 = ["TV Series", "Cast", "Book Series", "Author"];
const HEADERS2 = ["TV Series", "Cast"];
const TABLE_CLASS = "wikitable sortable";

const createRow1 = (tvSeries) => {
  const series = tvSeries ? Series.properties[tvSeries.seriesKey] : undefined;

  const value1 = Formatter.createTVSeriesText(tvSeries);
  const value2 = tvSeries ? Formatter.createPersonText(tvSeries.castKeys) : "";
  const value3 = Formatter.createSeriesText(series);
  const value4 = series ? Formatter.createPersonText(series.authorKey) : "";

  const values = [value1, value2, value3, value4];
  const cells = R.map(WikiUtils.cell, values);

  return WikiUtils.row(cells);
};

const createRow2 = (tvSeries) => {
  const value1 = Formatter.createTVSeriesText(tvSeries);
  const value2 = tvSeries ? Formatter.createPersonText(tvSeries.castKeys) : "";

  const values = [value1, value2];
  const cells = R.map(WikiUtils.cell, values);

  return WikiUtils.row(cells);
};

const MostWantedTVSeriesList = {
  report1: () => {
    const tvSerieses = TVSeries.valuesWithSeries();
    tvSerieses.sort(Comparator.compareByTitle);
    const rows = R.map(createRow1, tvSerieses);

    return WikiUtils.table(HEADERS1, rows, TABLE_CLASS);
  },
  report2: () => {
    const tvSerieses = TVSeries.valuesWithoutSeries();
    tvSerieses.sort(Comparator.compareByTitle);
    const rows = R.map(createRow2, tvSerieses);

    return WikiUtils.table(HEADERS2, rows, TABLE_CLASS);
  },
};

const content1 = MostWantedTVSeriesList.report1();
const content2 = MostWantedTVSeriesList.report2();
FileWriter.writeFile(
  OUTPUT_FILE,
  `__TOC__
==TV Series Made from Mystery Books==
${content1}

==Other TV Series Mentioned in Club==
${content2}
`
);
