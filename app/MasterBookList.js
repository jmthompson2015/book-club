const R = require("../node_modules/ramda/dist/ramda.js");

const FileWriter = require("../util/FileWriter.js");
const WikiUtils = require("../util/WikiUtilities.js");

const Book = require("../artifact/Book.js");

const Comparator = require("../model/Comparator.js");
const Formatter = require("../model/Formatter.js");

const OUTPUT_FILE = "MasterBookList.txt";
const HEADERS = ["Meeting", "Book", "Author", "Series"];
const TABLE_CLASS = "wikitable sortable";

const createRow = (useSearch) => (book) => {
  const value1 = book ? Formatter.createMeetingText1(book.meeting) : "";
  const value2 = Formatter.createBookText(book, useSearch);
  const value3 = book
    ? Formatter.createPersonText(book.authorKeys, useSearch)
    : "";
  const value4 = book ? Formatter.createSeriesText(book.series, useSearch) : "";

  const values = [value1, value2, value3, value4];
  const cells = R.map(WikiUtils.cell, values);

  return WikiUtils.row(cells);
};

const MasterBookList = {
  report: (useSearch) => {
    const books = Book.values();
    books.sort(Comparator.compareByMeeting(false));
    const rows = R.map(createRow(useSearch), books);

    return WikiUtils.table(HEADERS, rows, TABLE_CLASS);
  },
};

const useSearchString = process.argv.length > 2 ? process.argv[2] : "false";
const useSearch = useSearchString === "true";
const content = MasterBookList.report(useSearch);
FileWriter.writeFile(OUTPUT_FILE, content);
