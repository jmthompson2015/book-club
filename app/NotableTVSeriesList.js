const R = require("../node_modules/ramda/dist/ramda.js");

const FileWriter = require("../util/FileWriter.js");

const TVSeries = require("../artifact/TVSeries.js");

const WikiUtils = require("../model/WikiUtilities.js");

const OUTPUT_FILE = "NotableTVSeriesList.txt";
const TABLE_PREFIX = `{| class="wikitable sortable"
!TV Series
!Cast`;
const TABLE_SUFFIX = `
|}`;

const createRow = (tvSeries) => `
|-
| ${WikiUtils.createTVSeriesText(tvSeries)}
| ${tvSeries ? WikiUtils.createCastText(tvSeries.castKeys) : ""}`;

const NotableTVSeriesList = {
  report: () => {
    const tvSerieses = TVSeries.valuesWithoutSeries();
    tvSerieses.sort(WikiUtils.compareByTitle);
    const reduceFunction = (accum, tvSeries) => {
      return `${accum}${createRow(tvSeries)}`;
    };

    const tableRows = R.reduce(reduceFunction, "", tvSerieses);

    return `${TABLE_PREFIX}${tableRows}${TABLE_SUFFIX}`;
  },
};

const content = NotableTVSeriesList.report();
FileWriter.writeFile(OUTPUT_FILE, content);
