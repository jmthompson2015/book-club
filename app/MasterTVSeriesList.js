const R = require("../node_modules/ramda/dist/ramda.js");

const FileWriter = require("../util/FileWriter.js");

const Person = require("../artifact/Person.js");
const Series = require("../artifact/Series.js");
const TVSeries = require("../artifact/TVSeries.js");

const WikiUtils = require("../model/WikiUtilities.js");

const OUTPUT_FILE = "MasterTVSeriesList.txt";
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

const MasterTVSeriesList = {
  report: () => {
    const tvSerieses = TVSeries.values();
    tvSerieses.sort(WikiUtils.compareByTitle);
    const reduceFunction = (accum, tvSeries) => {
      const series = Series.properties[tvSeries.seriesKey];
      const author = series ? Person.properties[series.authorKey] : null;

      return `${accum}${createRow(tvSeries, series, author)}`;
    };

    const tableRows = R.reduce(reduceFunction, "", tvSerieses);

    return `${TABLE_PREFIX}${tableRows}${TABLE_SUFFIX}`;
  },
};

const content = MasterTVSeriesList.report();
FileWriter.writeFile(OUTPUT_FILE, content);
