const R = require("../node_modules/ramda/dist/ramda.js");

const FileWriter = require("../util/FileWriter.js");
const WikiUtils = require("../util/WikiUtilities.js");

const Book = require("../artifact/Book.js");

const Comparator = require("../model/Comparator.js");
const Formatter = require("../model/Formatter.js");

const OUTPUT_FILE = "MostWantedBooksList.txt";
const HEADERS = ["Book", "Author", "Series"];
const TABLE_CLASS = "wikitable sortable";

const createRow = (useSearch) => (book) => {
  const value1 = Formatter.createTVSeriesText(book, useSearch);
  const value2 = book
    ? Formatter.createPersonText(book.authorKeys, useSearch)
    : "";
  const value3 = book ? Formatter.createSeriesText(book.series, useSearch) : "";

  const values = [value1, value2, value3];
  const cells = R.map(WikiUtils.cell, values);

  return WikiUtils.row(cells);
};

const MostWantedBooksList = {
  report: (useSearch) => {
    const books = Book.valuesWithoutMeeting();
    books.sort(Comparator.compareByTitle);
    const rows = R.map(createRow(useSearch), books);

    return WikiUtils.table(HEADERS, rows, TABLE_CLASS);
  },
};

const useSearchString = process.argv.length > 2 ? process.argv[2] : "false";
const useSearch = useSearchString === "true";
const content = MostWantedBooksList.report(useSearch);
FileWriter.writeFile(OUTPUT_FILE, content);
