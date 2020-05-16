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

QUnit.test("compareByMeeting() no meeting", (assert) => {
  // Setup.
  const book1 = Book.properties[Book.GONE_GIRL];
  const book2 = Book.properties[Book.THE_BLACK_ECHO];
  const compareByMeeting = WikiUtils.compareByMeeting(true);

  // Run / Verify.
  assert.equal(compareByMeeting(book1, book1), 0);
  assert.equal(compareByMeeting(book1, book2), 1);

  assert.equal(compareByMeeting(book2, book1), -1);
  assert.equal(compareByMeeting(book2, book2), 0);
});

QUnit.test("compareByTitle()", (assert) => {
  // Setup.
  const book1 = Book.properties[Book.FORCE_OF_NATURE_2018];
  const book2 = Book.properties[Book.THE_ESCAPE_ROOM];
  const book3 = Book.properties[Book.THE_SILENT_PATIENT];

  // Run / Verify.
  assert.equal(WikiUtils.compareByTitle(book1, book1), 0);
  assert.equal(WikiUtils.compareByTitle(book1, book2), 1);
  assert.equal(WikiUtils.compareByTitle(book1, book3), -1);

  assert.equal(WikiUtils.compareByTitle(book2, book1), -1);
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
    '<table style="border:0px; padding:0px; width:100%;"><tr><td style="border:0px; padding:0px;">Gone Girl</td><td style="border:0px; padding:0px; float: right;"><table style="border:0px; padding:0px;"><tr><td style="border:0px; padding:0px;">[[Image:DouglasCountyLibraries418.png|20px|link=https://dcl.bibliocommons.com/item/show/1033248114]]</td><td style="border:0px; padding:0px;">[[Image:LibraryThing180.png|20px|link=https://www.librarything.com/work/11234211]]</td></tr></table></td></tr></table>'
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
    '<table style="border:0px; padding:0px; width:100%;"><tr><td style="border:0px; padding:0px;">Ben Affleck</td><td style="border:0px; padding:0px; float: right;"><table style="border:0px; padding:0px;"><tr><td style="border:0px; padding:0px;">[[Image:IMDb256.png|20px|link=https://www.imdb.com/title/nm0000255]]</td><td style="border:0px; padding:0px;">[[Image:Wikipedia128.png|20px|link=https://en.wikipedia.org/wiki/Ben_Affleck]]</td></tr></table></td></tr></table> <table style="border:0px; padding:0px; width:100%;"><tr><td style="border:0px; padding:0px;">Rosamund Pike</td><td style="border:0px; padding:0px; float: right;"><table style="border:0px; padding:0px;"><tr><td style="border:0px; padding:0px;">[[Image:IMDb256.png|20px|link=https://www.imdb.com/title/nm0683253]]</td><td style="border:0px; padding:0px;">[[Image:Wikipedia128.png|20px|link=https://en.wikipedia.org/wiki/Rosamund_Pike]]</td></tr></table></td></tr></table>'
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
    '<table style="border:0px; padding:0px; width:100%;"><tr><td style="border:0px; padding:0px;">Gone Girl (2014)</td><td style="border:0px; padding:0px; float: right;"><table style="border:0px; padding:0px;"><tr><td style="border:0px; padding:0px;">[[Image:IMDb256.png|20px|link=https://www.imdb.com/title/tt2267998]]</td></tr></table></td></tr></table>'
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
    'data-sort-value="Child, Lee"| <table style="border:0px; padding:0px; width:100%;"><tr><td style="border:0px; padding:0px;">Lee Child</td><td style="border:0px; padding:0px; float: right;"><table style="border:0px; padding:0px;"><tr><td style="border:0px; padding:0px;">[[Image:IMDb256.png|20px|link=https://www.imdb.com/title/nm1676193]]</td><td style="border:0px; padding:0px;">[[Image:Wikipedia128.png|20px|link=https://en.wikipedia.org/wiki/Lee_Child]]</td></tr></table></td></tr></table>'
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
    '<table style="border:0px; padding:0px; width:100%;"><tr><td style="border:0px; padding:0px;">Midsomer Murders (1997-?)</td><td style="border:0px; padding:0px; float: right;"><table style="border:0px; padding:0px;"><tr><td style="border:0px; padding:0px;">[[Image:IMDb256.png|20px|link=https://www.imdb.com/title/tt0118401]]</td></tr></table></td></tr></table>'
  );
});

const WikiUtilitiesTest = {};
module.exports = WikiUtilitiesTest;
