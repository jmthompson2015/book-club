const R = require("../node_modules/ramda/dist/ramda.js");

const FileWriter = require("../util/FileWriter.js");

const Book = require("../artifact/Book.js");

const WikiUtils = require("../model/WikiUtilities.js");

const OUTPUT_FILE = "MasterBookList.txt";
const TABLE_PREFIX = `{| class="wikitable sortable"
!Meeting
!Book
!Author
!Series`;
const TABLE_SUFFIX = `
|}`;

const createRow = (book) => `
|-
| ${book ? WikiUtils.createMeetingText1(book.meeting) : ""}
| ${WikiUtils.createBookText(book)}
| ${book ? WikiUtils.createPersonText(book.authorKey) : ""}
| ${book ? WikiUtils.createSeriesText(book.series) : ""}`;

const MasterBookList = {
  report: () => {
    const books = Book.values();
    books.sort(WikiUtils.compareByMeeting(false));
    const reduceFunction = (accum, book) => `${accum}${createRow(book)}`;
    const tableRows = R.reduce(reduceFunction, "", books);

    return `${TABLE_PREFIX}${tableRows}${TABLE_SUFFIX}`;
  },
};

const content = MasterBookList.report();
FileWriter.writeFile(OUTPUT_FILE, content);
