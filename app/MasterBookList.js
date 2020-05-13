const R = require("../node_modules/ramda/dist/ramda.js");

const FileWriter = require("../util/FileWriter.js");

const Book = require("../artifact/Book.js");
const Person = require("../artifact/Person.js");

const WikiUtils = require("../model/WikiUtilities.js");

const OUTPUT_FILE = "MasterBookList.txt";
const TABLE_PREFIX = `{| class="wikitable sortable"
!Meeting
!Book
!Author`;
const TABLE_SUFFIX = `
|}`;

const createRow = (book, author) => `
|-
| ${WikiUtils.createMeetingText1(book)}
| ${WikiUtils.createBookText(book)}
| ${WikiUtils.createPersonText(author)}`;

const MasterBookList = {
  report: () => {
    const books = Book.values();
    books.sort(WikiUtils.compareByMeeting(false));
    const reduceFunction = (accum, book) => {
      const author = Person.properties[book.authorKey];

      return `${accum}${createRow(book, author)}`;
    };

    const tableRows = R.reduce(reduceFunction, "", books);

    return `${TABLE_PREFIX}${tableRows}${TABLE_SUFFIX}`;
  },
};

const content = MasterBookList.report();
FileWriter.writeFile(OUTPUT_FILE, content);
