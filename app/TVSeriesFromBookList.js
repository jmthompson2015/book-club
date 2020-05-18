const R = require("../node_modules/ramda/dist/ramda.js");

const FileWriter = require("../util/FileWriter.js");

const Series = require("../artifact/Series.js");
const TVSeries = require("../artifact/TVSeries.js");

const Comparator = require("../model/Comparator.js");
const WikiUtils = require("../model/WikiUtilities.js");

const OUTPUT_FILE = "TVSeriesFromBookList.txt";
const TABLE_PREFIX = `{| class="wikitable sortable"
!TV Series
!Cast
!Book Series
!Author`;
const TABLE_SUFFIX = `
|}`;

const createRow = (tvSeries, series) => `
|-
| ${WikiUtils.createTVSeriesText(tvSeries)}
| ${tvSeries ? WikiUtils.createPersonText(tvSeries.castKeys) : ""}
| ${WikiUtils.createSeriesText(series)}
| ${series ? WikiUtils.createPersonText(series.authorKey) : ""}`;

const TVSeriesFromBookList = {
  report: () => {
    const tvSerieses = TVSeries.valuesWithSeries();
    tvSerieses.sort(Comparator.compareByTitle);
    const reduceFunction = (accum, tvSeries) => {
      const series = Series.properties[tvSeries.seriesKey];

      return `${accum}${createRow(tvSeries, series)}`;
    };

    const tableRows = R.reduce(reduceFunction, "", tvSerieses);

    return `${TABLE_PREFIX}${tableRows}${TABLE_SUFFIX}`;
  },
};

const content = TVSeriesFromBookList.report();
FileWriter.writeFile(OUTPUT_FILE, content);
