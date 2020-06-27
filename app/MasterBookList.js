const R = require("../node_modules/ramda/dist/ramda.js");

const FileWriter = require("../util/FileWriter.js");
const WikiUtils = require("../util/WikiUtilities.js");

const Book = require("../artifact/Book.js");

const Comparator = require("../model/Comparator.js");
const Formatter = require("../model/Formatter.js");

const OUTPUT_FILE = "MasterBookList.txt";
const HEADERS = ["Meeting", "Book", "Author", "Series"];
const TABLE_CLASS = "wikitable sortable";

const createRow = (book) => {
  const value1 = book ? Formatter.createMeetingText1(book.meeting) : "";
  const value2 = Formatter.createBookText(book);
  const value3 = book ? Formatter.createPersonText(book.authorKeys) : "";
  const value4 = book ? Formatter.createSeriesText(book.series) : "";

  const values = [value1, value2, value3, value4];
  const cells = R.map(WikiUtils.cell, values);

  return WikiUtils.row(cells);
};

const MasterBookList = {
  report: () => {
    const books = Book.values();
    books.sort(Comparator.compareByMeeting(false));
    const rows = R.map(createRow, books);

    return WikiUtils.table(HEADERS, rows, TABLE_CLASS);
  },
};

const content = MasterBookList.report();
FileWriter.writeFile(OUTPUT_FILE, content);
