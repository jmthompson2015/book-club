const R = require("../node_modules/ramda/dist/ramda.js");

const FileWriter = require("../util/FileWriter.js");

const Book = require("../artifact/Book.js");
const Person = require("../artifact/Person.js");
const TVSeries = require("../artifact/TVSeries.js");

const WikiUtils = require("../model/WikiUtilities.js");

const OUTPUT_FILE = "MasterTVSeriesList.txt";
const TABLE_PREFIX = `{| class="wikitable sortable"
!TV Series
!Cast
!Meeting
!Book
!Author`;
const TABLE_SUFFIX = `
|}`;

const createRow = (tvSeries, book, author) => `
|-
| ${WikiUtils.createTVSeriesText(tvSeries)}
| ${tvSeries ? WikiUtils.createCastText(tvSeries.castKeys) : ""}
| ${book ? WikiUtils.createMeetingText1(book.meeting) : ""}
| ${WikiUtils.createBookText(book)}
| ${WikiUtils.createPersonText(author)}`;

const MasterTVSeriesList = {
  report: () => {
    const tvSerieses = TVSeries.values();
    tvSerieses.sort(WikiUtils.compareByTitle);
    const reduceFunction = (accum, tvSeries) => {
      const book = Book.properties[tvSeries.bookKey];
      const author = book ? Person.properties[book.authorKey] : null;

      return `${accum}${createRow(tvSeries, book, author)}`;
    };

    const tableRows = R.reduce(reduceFunction, "", tvSerieses);

    return `${TABLE_PREFIX}${tableRows}${TABLE_SUFFIX}`;
  },
};

const content = MasterTVSeriesList.report();
FileWriter.writeFile(OUTPUT_FILE, content);
