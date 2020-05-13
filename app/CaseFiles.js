const FileWriter = require("../util/FileWriter.js");

const Person = require("../artifact/Person.js");
const Book = require("../artifact/Book.js");

const WikiUtils = require("../model/WikiUtilities.js");

const TABLE_PREFIX = `{| class="wikitable sortable"
!Date
!Book
!Author
!Series
!Meeting Notes`;
const TABLE_SUFFIX = `
|}`;

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

  return `
{| style="width: 100%;"
| style="text-align: left;" | [[${previous} | &larr; ${previous}]]
| style="text-align: right;" | [[${next} | ${next} &rarr;]]
|}
`;
};

const createRow = (book, author) => `
|-
| ${createDate(book.meeting)}
| ${WikiUtils.createBookText(book)}
| ${WikiUtils.createPersonText(author)}
| ${book.series || ""}
| ${WikiUtils.createMeetingText2(book)}`;

const CaseFiles = {
  report: (year) => {
    const books = Book.byYear(year);
    books.sort(WikiUtils.compareByMeeting(true));
    const reduceFunction = (accum, book) => {
      const author = Person.properties[book.authorKey];

      return `${accum}${createRow(book, author)}`;
    };

    const tableRows = books.reduce(reduceFunction, "");

    return `${TABLE_PREFIX}${tableRows}${TABLE_SUFFIX}
${createNavigationTable(year)}`;
  },
};

const year = 2020;
const content = CaseFiles.report(year);
const outputFile = `CaseFiles${year}.txt`;
FileWriter.writeFile(outputFile, content);
