const R = require("../node_modules/ramda/dist/ramda.js");

const FileWriter = require("../util/FileWriter.js");
const WikiUtils = require("../util/WikiUtilities.js");

const Book = require("../artifact/Book.js");

const Comparator = require("../model/Comparator.js");
const Formatter = require("../model/Formatter.js");

const HEADERS = ["Date", "Book", "Author", "Series", "Meeting Notes"];
const TABLE_CLASS = "wikitable sortable";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const createDate = (meeting) => {
  const index1 = meeting.indexOf(".");
  const index2 = meeting.lastIndexOf(".");
  const monthNumber = meeting.substring(index1 + 1, index2);
  const day = meeting.substring(index2 + 1);

  return `${MONTHS[monthNumber - 1]} ${day}`;
};

const createNavigationTable = (year) => {
  const previous = `Case Files ${year - 1}`;
  const next = `Case Files ${year + 1}`;
  const cell1 = WikiUtils.cell(
    `[[${previous} | &larr; ${previous}]]`,
    "text-align: left;"
  );
  const cell2 = WikiUtils.cell(
    `[[${next} | ${next} &rarr;]]`,
    "text-align: right;"
  );
  const row = cell1 + cell2;
  const style2 = "width: 100%;";

  return WikiUtils.table(null, [row], null, style2);
};

const createRow = (useSearch) => (book) => {
  const value1 = book ? createDate(book.meeting) : "";
  const value2 = Formatter.createBookText(book, useSearch);
  const value3 = book
    ? Formatter.createPersonText(book.authorKeys, useSearch)
    : "";
  const value4 = book ? Formatter.createSeriesText(book.series, useSearch) : "";
  const value5 = book ? Formatter.createMeetingText2(book.meeting) : "";

  const values = [value1, value2, value3, value4, value5];
  const cells = R.map(WikiUtils.cell, values);

  return WikiUtils.row(cells);
};

const CaseFiles = {
  report: (useSearch, year) => {
    const books = Book.valuesByYear(year);
    books.sort(Comparator.compareByMeeting(true));
    const rows = R.map(createRow(useSearch), books);

    return `${WikiUtils.table(HEADERS, rows, TABLE_CLASS)}

${createNavigationTable(year)}
`;
  },
};

const useSearchString = process.argv.length > 2 ? process.argv[2] : "false";
const useSearch = useSearchString === "true";
const year = process.argv.length > 3 ? parseInt(process.argv[3], 10) : 2020;
const content = CaseFiles.report(useSearch, year);
const outputFile = `CaseFiles${year}.txt`;
FileWriter.writeFile(outputFile, content);
