const R = require("../node_modules/ramda/dist/ramda.js");

const FileWriter = require("../util/FileWriter.js");

const Person = require("../artifact/Person.js");
const Series = require("../artifact/Series.js");
const TVSeries = require("../artifact/TVSeries.js");

const WikiUtils = require("../model/WikiUtilities.js");

const OUTPUT_FILE = "TVSeriesFromBookList.txt";
const TABLE_PREFIX = `{| class="wikitable sortable"
!TV Series
!Cast
!Book Series
!Author`;
const TABLE_SUFFIX = `
|}`;

const createRow = (tvSeries, series, author) => `
|-
| ${WikiUtils.createTVSeriesText(tvSeries)}
| ${tvSeries ? WikiUtils.createCastText(tvSeries.castKeys) : ""}
| ${series ? WikiUtils.createSeriesText(series) : ""}
| ${WikiUtils.createPersonText(author)}`;

const TVSeriesFromBookList = {
  report: () => {
    const tvSerieses = TVSeries.valuesWithSeries();
    tvSerieses.sort(WikiUtils.compareByTitle);
    const reduceFunction = (accum, tvSeries) => {
      const series = Series.properties[tvSeries.seriesKey];
      const author = Person.properties[series.authorKey];

      return `${accum}${createRow(tvSeries, series, author)}`;
    };

    const tableRows = R.reduce(reduceFunction, "", tvSerieses);

    return `${TABLE_PREFIX}${tableRows}${TABLE_SUFFIX}`;
  },
};

const content = TVSeriesFromBookList.report();
FileWriter.writeFile(OUTPUT_FILE, content);
