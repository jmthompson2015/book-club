/* eslint no-console: "off" */

const R = require("../node_modules/ramda/dist/ramda.js");

const FileWriter = require("../util/FileWriter.js");

const Book = require("../artifact/Book.js");
const Person = require("../artifact/Person.js");
const Series = require("../artifact/Series.js");

const LINES = [
  // "January 23|Suburban Dicks|Fabian Nicieza|Suburban Dicks #1",
  // "February 27|Daisy Darker|Alice Feeney",
  // "March 27|Stay Awake|Megan Goldin",
  // "April 24|The It Girl|Ruth Ware",
  // "May 22|The Retreat|Sarah Pearse|Detective Elin Warner #2",
  // "June 26|The Lies I Tell|Julie Clark",
  // "July 24|The Bullet That Missed|Richard Osman|Thursday Murder Club #3",
  // "August 28|No Plan B|Lee Child and Andrew Child|Jack Reacher #27",
  // "September 25|Whatever Happened to Cathy Martin|Mim Eichmann",
  // "October 23|Are You Sara?|S.C. Lalli",
  // "November 27|Marple: Twelve New Mysteries",
  // "December 15|The Christmas Murder Game|Alexandra Benedict",
];

const YEAR = "2023";

const MONTH_TO_INDEX = {
  January: "01",
  February: "02",
  March: "03",
  April: "04",
  May: "05",
  June: "06",
  July: "07",
  August: "08",
  September: "09",
  October: "10",
  November: "11",
  December: "12",
};

const createMeeting = (string) => {
  const parts = string.split(" ");
  const monthIndex = MONTH_TO_INDEX[parts[0]];
  const day = parts[1].trim();

  return `${YEAR}.${monthIndex}.${day}`;
};

const parseLine = (line) => {
  const parts = line.split("|");

  const meeting = createMeeting(parts[0]);
  const title = parts[1].trim();
  const authorsString = R.isNil(parts[2]) ? undefined : parts[2].trim();
  const seriesString = R.isNil(parts[3]) ? undefined : parts[3].trim();

  // console.log(`title =         :${title}:`);
  // console.log(`authorsString = :${authorsString}:`);
  // console.log(`seriesString =  :${seriesString}:`);
  // console.log(`meeting =       :${meeting}:`);

  return { title, authorsString, seriesString, meeting };
};

const createBook = (title, authorsString, seriesString, meeting) => {
  let authorKeys;

  if (!R.isNil(authorsString)) {
    const authorParts = authorsString.split(" and ");
    const mapFunction = (author) => author.trim();
    authorKeys = R.map(mapFunction, authorParts);
  }

  let series;

  if (!R.isNil(seriesString)) {
    const seriesParts = seriesString.split("#");
    const seriesKey = seriesParts[0].trim();
    const seriesNum = seriesParts[1].trim();
    series = { key: seriesKey, entry: seriesNum };
  }

  return { title, authorKeys, series, meeting };
};

const createPerson = (author) => {
  const parts = author.split(" ");

  return {
    first: R.head(parts),
    middle: parts.length > 2 ? parts[1] : undefined,
    last: R.last(parts),
  };
};

const createSeries = (series) => {
  const parts = series.split("#");
  const title = parts[0].trim();

  return { title, key: title };
};

const maybeSet = (key, value, object) => {
  if (R.isNil(object[key])) {
    const object2 = object;
    object2[key] = value;
  }
};

const sortObject = (object) =>
  Object.keys(object)
    .sort()
    .reduce((accum, key) => {
      const accum2 = accum;
      accum2[key] = object[key];

      return accum2;
    }, {});

const newBookProps = { ...Book.properties };
const newPersonProps = { ...Person.properties };
const newSeriesProps = { ...Series.properties };

const processLine = (line) => {
  const { title, authorsString, seriesString, meeting } = parseLine(line);

  if (!R.isNil(authorsString)) {
    const authorParts = authorsString.split(" and ");
    const forEachFunction = (author) => {
      const personEntry = createPerson(author);
      console.log(
        `personEntry "${author}": ${JSON.stringify(personEntry, null, 2)}`
      );
      maybeSet(author, personEntry, newPersonProps);
    };
    authorParts.forEach(forEachFunction);
  }

  if (!R.isNil(seriesString)) {
    const seriesEntry = createSeries(seriesString);
    console.log(
      `seriesEntry "${seriesEntry.key}": ${JSON.stringify(
        seriesEntry,
        null,
        2
      )}`
    );
    maybeSet(seriesEntry.key, seriesEntry, newSeriesProps);
  }

  const bookEntry = createBook(title, authorsString, seriesString, meeting);
  console.log(
    `bookEntry "${bookEntry.title}": ${JSON.stringify(bookEntry, null, 2)}`
  );
  maybeSet(bookEntry.title, bookEntry, newBookProps);
};

LINES.forEach(processLine);

const newBook = R.assoc("properties", sortObject(newBookProps), Book);
const newPerson = R.assoc("properties", sortObject(newPersonProps), Person);
const newSeries = R.assoc("properties", sortObject(newSeriesProps), Series);

// /////////////////////////////////////////////////////////////////////////////
const BOOK_OUTPUT = "../artifact/Book.js";
const BOOK_HEADER = "const Book = ";
const BOOK_FOOTER =
  ";\n\n" +
  "Book.keys = () => Object.keys(Book.properties);\n\n" +
  "Book.values = () => Object.values(Book.properties);\n\n" +
  "Object.freeze(Book);\n\n" +
  "module.exports = Book;\n";
const bookContent =
  BOOK_HEADER + JSON.stringify(newBook, null, 2) + BOOK_FOOTER;
FileWriter.writeFile(BOOK_OUTPUT, bookContent);

const PERSON_OUTPUT = "../artifact/Person.js";
const PERSON_HEADER = "const Person = ";
const PERSON_FOOTER =
  ";\n\n" +
  "Person.keys = () => Object.keys(Person.properties);\n\n" +
  "Person.values = () => Object.values(Person.properties);\n\n" +
  "Object.freeze(Person);\n\n" +
  "module.exports = Person;\n";
const personContent =
  PERSON_HEADER + JSON.stringify(newPerson, null, 2) + PERSON_FOOTER;
FileWriter.writeFile(PERSON_OUTPUT, personContent);

const SERIES_OUTPUT = "../artifact/Series.js";
const SERIES_HEADER = "const Series = ";
const SERIES_FOOTER =
  ";\n\n" +
  "Series.keys = () => Object.keys(Series.properties);\n\n" +
  "Series.values = () => Object.values(Series.properties);\n\n" +
  "Object.freeze(Series);\n\n" +
  "module.exports = Series;\n";
const seriesContent =
  SERIES_HEADER + JSON.stringify(newSeries, null, 2) + SERIES_FOOTER;
FileWriter.writeFile(SERIES_OUTPUT, seriesContent);
