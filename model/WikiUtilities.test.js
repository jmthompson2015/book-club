/* eslint no-console: ["error", { allow: ["log"] }] */

const QUnit = require("../node_modules/qunit/qunit/qunit.js");

const Book = require("../artifact/Book.js");
const Movie = require("../artifact/Movie.js");
const Person = require("../artifact/Person.js");
const TVSeries = require("../artifact/TVSeries.js");

const WikiUtils = require("./WikiUtilities.js");

QUnit.module("WikiUtilities");

QUnit.test("compareByMeeting()", (assert) => {
  // Setup.
  const book1 = Book.properties[Book.FORCE_OF_NATURE_2018];
  const book2 = Book.properties[Book.THE_ESCAPE_ROOM];
  const book3 = Book.properties[Book.THE_SILENT_PATIENT];
  const compareByMeeting = WikiUtils.compareByMeeting(true);

  // Run / Verify.
  assert.equal(compareByMeeting(book1, book1), 0);
  assert.equal(compareByMeeting(book1, book2), -1);
  assert.equal(compareByMeeting(book1, book3), -1);

  assert.equal(compareByMeeting(book2, book1), 1);
  assert.equal(compareByMeeting(book2, book2), 0);
  assert.equal(compareByMeeting(book2, book3), -1);

  assert.equal(compareByMeeting(book3, book1), 1);
  assert.equal(compareByMeeting(book3, book2), 1);
  assert.equal(compareByMeeting(book3, book3), 0);
});

QUnit.test("compareByTitle()", (assert) => {
  // Setup.
  const book1 = Book.properties[Book.FORCE_OF_NATURE_2018];
  const book2 = Book.properties[Book.THE_ESCAPE_ROOM];
  const book3 = Book.properties[Book.THE_SILENT_PATIENT];

  // Run / Verify.
  assert.equal(WikiUtils.compareByTitle(book1, book1), 0);
  assert.equal(WikiUtils.compareByTitle(book1, book2), -1);
  assert.equal(WikiUtils.compareByTitle(book1, book3), -1);

  assert.equal(WikiUtils.compareByTitle(book2, book1), 1);
  assert.equal(WikiUtils.compareByTitle(book2, book2), 0);
  assert.equal(WikiUtils.compareByTitle(book2, book3), -1);

  assert.equal(WikiUtils.compareByTitle(book3, book1), 1);
  assert.equal(WikiUtils.compareByTitle(book3, book2), 1);
  assert.equal(WikiUtils.compareByTitle(book3, book3), 0);
});

QUnit.test("createBookText() undefined", (assert) => {
  // Setup.
  const book = undefined;

  // Run.
  const result = WikiUtils.createBookText(book);

  // Verify.
  assert.equal(result, "", `result = :${result}:`);
});

QUnit.test("createBookText()", (assert) => {
  // Setup.
  const book = Book.properties[Book.GONE_GIRL];

  // Run.
  const result = WikiUtils.createBookText(book);

  // Verify.
  assert.ok(result);
  assert.equal(
    result,
    "[https://dcl.bibliocommons.com/item/show/1033248114 Gone Girl]"
  );
});

QUnit.test("createCastText() undefined", (assert) => {
  // Setup.
  const castKeys = undefined;

  // Run.
  const result = WikiUtils.createCastText(castKeys);

  // Verify.
  assert.equal(result, "", `result = :${result}:`);
});

QUnit.test("createCastText()", (assert) => {
  // Setup.
  const movie = Movie.properties[Movie.GONE_GIRL];

  // Run.
  const result = WikiUtils.createCastText(movie.castKeys);

  // Verify.
  assert.ok(result);
  assert.equal(
    result,
    "[https://en.wikipedia.org/wiki/Ben_Affleck Ben Affleck], [https://en.wikipedia.org/wiki/Rosamund_Pike Rosamund Pike]"
  );
});

QUnit.test("createMeetingText1() undefined", (assert) => {
  // Setup.
  const meeting = undefined;

  // Run.
  const result = WikiUtils.createMeetingText1(meeting);

  // Verify.
  assert.equal(result, "", `result = :${result}:`);
});

QUnit.test("createMeetingText1()", (assert) => {
  // Setup.
  const book = Book.properties[Book.FORCE_OF_NATURE_2018];
  const { meeting } = book;

  // Run.
  const result = WikiUtils.createMeetingText1(meeting);

  // Verify.
  assert.ok(result);
  assert.equal(result, "[[2020.01.27 Meeting Notes | 2020.01.27]]");
});

QUnit.test("createMeetingText2() undefined", (assert) => {
  // Setup.
  const meeting = undefined;

  // Run.
  const result = WikiUtils.createMeetingText2(meeting);

  // Verify.
  assert.equal(result, "", `result = :${result}:`);
});

QUnit.test("createMeetingText2()", (assert) => {
  // Setup.
  const book = Book.properties[Book.FORCE_OF_NATURE_2018];
  const { meeting } = book;

  // Run.
  const result = WikiUtils.createMeetingText2(meeting);

  // Verify.
  assert.ok(result);
  assert.equal(result, "[[2020.01.27 Meeting Notes]]");
});

QUnit.test("createMovieText() undefined", (assert) => {
  // Setup.
  const movie = undefined;

  // Run.
  const result = WikiUtils.createMovieText(movie);

  // Verify.
  assert.equal(result, "");
});

QUnit.test("createMovieText()", (assert) => {
  // Setup.
  const movie = Movie.properties[Movie.GONE_GIRL];

  // Run.
  const result = WikiUtils.createMovieText(movie);

  // Verify.
  assert.ok(result);
  assert.equal(
    result,
    "[https://www.imdb.com/title/tt2267998 Gone Girl (2014)]"
  );
});

QUnit.test("createPersonText() undefined", (assert) => {
  // Setup.
  const person = undefined;

  // Run.
  const result = WikiUtils.createPersonText(person);

  // Verify.
  // assert.ok(result);
  assert.equal(result, "", `result = :${result}:`);
});

QUnit.test("createPersonText()", (assert) => {
  // Setup.
  const person = Person.properties[Person.LEE_CHILD];

  // Run.
  const result = WikiUtils.createPersonText(person);

  // Verify.
  assert.ok(result);
  assert.equal(
    result,
    'data-sort-value="Child, Lee"| [https://en.wikipedia.org/wiki/Lee_Child Lee Child]'
  );
});

QUnit.test("createTVSeriesText() undefined", (assert) => {
  // Setup.
  const tvSeries = undefined;

  // Run.
  const result = WikiUtils.createTVSeriesText(tvSeries);

  // Verify.
  assert.equal(result, "");
});

QUnit.test("createTVSeriesText()", (assert) => {
  // Setup.
  const tvSeries = TVSeries.properties[TVSeries.MIDSOMER_MURDERS];

  // Run.
  const result = WikiUtils.createTVSeriesText(tvSeries);

  // Verify.
  assert.ok(result);
  assert.equal(
    result,
    "[https://www.imdb.com/title/tt0118401 Midsomer Murders (1997-?)]"
  );
});

const WikiUtilitiesTest = {};
module.exports = WikiUtilitiesTest;
