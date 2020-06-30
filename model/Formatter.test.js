const QUnit = require("../node_modules/qunit/qunit/qunit.js");

const Book = require("../artifact/Book.js");
const Movie = require("../artifact/Movie.js");
const Person = require("../artifact/Person.js");
const Series = require("../artifact/Series.js");
const TVSeries = require("../artifact/TVSeries.js");

const Formatter = require("./Formatter.js");

QUnit.module("Formatter");

QUnit.test("createBookText() undefined", (assert) => {
  // Setup.
  const book = undefined;

  // Run.
  const result = Formatter.createBookText(book);

  // Verify.
  assert.equal(result, "", `result = :${result}:`);
});

QUnit.test("createBookText()", (assert) => {
  // Setup.
  const book = Book.properties[Book.GONE_GIRL];

  // Run.
  const result = Formatter.createBookText(book);

  // Verify.
  assert.ok(result);
  assert.equal(
    result,
    '<table style="width:100%;"><tr><td style="border:0px; padding:0px;">Gone Girl</td><td style="border:0px; padding:0px; float: right;"><table><tr><td style="border:0px; padding:0px;">[[Image:DouglasCountyLibraries418.png|20px|link=https://dcl.bibliocommons.com/item/show/1033248114|Douglas County Libraries]]</td><td style="border:0px; padding:0px;">[[Image:LibraryThing180.png|20px|link=https://www.librarything.com/work/11234211|LibraryThing]]</td></tr></table></td></tr></table>'
  );
});

QUnit.test("createMeetingText1() undefined", (assert) => {
  // Setup.
  const meeting = undefined;

  // Run.
  const result = Formatter.createMeetingText1(meeting);

  // Verify.
  assert.equal(result, "", `result = :${result}:`);
});

QUnit.test("createMeetingText1()", (assert) => {
  // Setup.
  const book = Book.properties[Book.FORCE_OF_NATURE_2018];
  const { meeting } = book;

  // Run.
  const result = Formatter.createMeetingText1(meeting);

  // Verify.
  assert.ok(result);
  assert.equal(result, "[[2020.01.27 Meeting Notes | 2020.01.27]]");
});

QUnit.test("createMeetingText2() undefined", (assert) => {
  // Setup.
  const meeting = undefined;

  // Run.
  const result = Formatter.createMeetingText2(meeting);

  // Verify.
  assert.equal(result, "", `result = :${result}:`);
});

QUnit.test("createMeetingText2()", (assert) => {
  // Setup.
  const book = Book.properties[Book.FORCE_OF_NATURE_2018];
  const { meeting } = book;

  // Run.
  const result = Formatter.createMeetingText2(meeting);

  // Verify.
  assert.ok(result);
  assert.equal(result, "[[2020.01.27 Meeting Notes]]");
});

QUnit.test("createMovieText() undefined", (assert) => {
  // Setup.
  const movie = undefined;

  // Run.
  const result = Formatter.createMovieText(movie);

  // Verify.
  assert.equal(result, "");
});

QUnit.test("createMovieText()", (assert) => {
  // Setup.
  const movie = Movie.properties[Movie.GONE_GIRL];

  // Run.
  const result = Formatter.createMovieText(movie);

  // Verify.
  assert.ok(result);
  assert.equal(
    result,
    '<table style="width:100%;"><tr><td style="border:0px; padding:0px;">Gone Girl (2014)</td><td style="border:0px; padding:0px; float: right;"><table><tr><td style="border:0px; padding:0px;">[[Image:IMDb256.png|20px|link=https://www.imdb.com/title/tt2267998|Internet Movie Database]]</td></tr></table></td></tr></table>'
  );
});

QUnit.test("createPersonLabel() undefined", (assert) => {
  // Setup.
  const person = undefined;

  // Run.
  const result = Formatter.createPersonLabel(person);

  // Verify.
  assert.equal(result, "", `result = :${result}:`);
});

QUnit.test("createPersonLabel() first last", (assert) => {
  // Setup.
  const person = { first: "Lee", last: "Child" };

  // Run.
  const result = Formatter.createPersonLabel(person);

  // Verify.
  assert.equal(result, "Lee Child", `result = :${result}:`);
});

QUnit.test("createPersonLabel() first middle last", (assert) => {
  // Setup.
  const person = { first: "James", middle: "M.", last: "Cain" };

  // Run.
  const result = Formatter.createPersonLabel(person);

  // Verify.
  assert.equal(result, "James M. Cain", `result = :${result}:`);
});

QUnit.test("createPersonLabel() last", (assert) => {
  // Setup.
  const person = { last: "Boileau-Narcejac" };

  // Run.
  const result = Formatter.createPersonLabel(person);

  // Verify.
  assert.equal(result, "Boileau-Narcejac", `result = :${result}:`);
});

QUnit.test("createPersonText() undefined", (assert) => {
  // Setup.
  const person = undefined;

  // Run.
  const result = Formatter.createPersonText(person);

  // Verify.
  assert.equal(result, "", `result = :${result}:`);
});

QUnit.test("createPersonText()", (assert) => {
  // Setup.
  const person = Person.LEE_CHILD;

  // Run.
  const result = Formatter.createPersonText(person);

  // Verify.
  assert.ok(result);
  assert.equal(
    result,
    'data-sort-value="Child, Lee"| <table style="width:100%;"><tr><td style="border:0px; padding:0px;">Lee Child</td><td style="border:0px; padding:0px; float: right;"><table><tr><td style="border:0px; padding:0px;">[[Image:IMDb256.png|20px|link=https://www.imdb.com/name/nm1676193|Internet Movie Database]]</td><td style="border:0px; padding:0px;">[[Image:LibraryThing180.png|20px|link=https://www.librarything.com/author/childlee|LibraryThing]]</td><td style="border:0px; padding:0px;">[[Image:Wikipedia128.png|20px|link=https://en.wikipedia.org/wiki/Lee_Child|Wikipedia]]</td></tr></table></td></tr></table>'
  );
});

QUnit.test("createPersonText() array", (assert) => {
  // Setup.
  const personKeys = [Person.LEE_CHILD, Person.JANE_HARPER];

  // Run.
  const result = Formatter.createPersonText(personKeys);

  // Verify.
  assert.ok(result);
  assert.equal(
    result,
    '<table style="width:100%;"><tr><td style="border:0px; padding:0px;">Lee Child</td><td style="border:0px; padding:0px; float: right;"><table><tr><td style="border:0px; padding:0px;">[[Image:IMDb256.png|20px|link=https://www.imdb.com/name/nm1676193|Internet Movie Database]]</td><td style="border:0px; padding:0px;">[[Image:LibraryThing180.png|20px|link=https://www.librarything.com/author/childlee|LibraryThing]]</td><td style="border:0px; padding:0px;">[[Image:Wikipedia128.png|20px|link=https://en.wikipedia.org/wiki/Lee_Child|Wikipedia]]</td></tr></table></td></tr></table> <table style="width:100%;"><tr><td style="border:0px; padding:0px;">Jane Harper</td><td style="border:0px; padding:0px; float: right;"><table><tr><td style="border:0px; padding:0px;">[[Image:IMDb256.png|20px|link=https://www.imdb.com/name/nm7681091|Internet Movie Database]]</td><td style="border:0px; padding:0px;">[[Image:LibraryThing180.png|20px|link=https://www.librarything.com/author/harperjane-1|LibraryThing]]</td><td style="border:0px; padding:0px;">[[Image:Wikipedia128.png|20px|link=https://en.wikipedia.org/wiki/Jane_Harper|Wikipedia]]</td></tr></table></td></tr></table>'
  );
});

QUnit.test("createSeriesText() undefined", (assert) => {
  // Setup.
  const seriesObj = undefined;

  // Run.
  const result = Formatter.createSeriesText(seriesObj);

  // Verify.
  assert.equal(result, "", `result = :${result}:`);
});

QUnit.test("createSeriesText()", (assert) => {
  // Setup.
  const series = [{ key: Series.JACK_REACHER, entry: 12 }];

  // Run.
  const result = Formatter.createSeriesText(series);

  // Verify.
  assert.ok(result);
  assert.equal(
    result,
    '<table style="width:100%;"><tr><td style="border:0px; padding:0px;">Jack Reacher #12</td><td style="border:0px; padding:0px; float: right;"><table><tr><td style="border:0px; padding:0px;">[[Image:LibraryThing180.png|20px|link=https://www.librarything.com/series/Jack+Reacher|LibraryThing]]</td></tr></table></td></tr></table>'
  );
});

QUnit.test("createTVSeriesText() undefined", (assert) => {
  // Setup.
  const tvSeries = undefined;

  // Run.
  const result = Formatter.createTVSeriesText(tvSeries);

  // Verify.
  assert.equal(result, "");
});

QUnit.test("createTVSeriesText()", (assert) => {
  // Setup.
  const tvSeries = TVSeries.properties[TVSeries.MIDSOMER_MURDERS];

  // Run.
  const result = Formatter.createTVSeriesText(tvSeries);

  // Verify.
  assert.ok(result);
  assert.equal(
    result,
    '<table style="width:100%;"><tr><td style="border:0px; padding:0px;">Midsomer Murders (1997-?)</td><td style="border:0px; padding:0px; float: right;"><table><tr><td style="border:0px; padding:0px;">[[Image:IMDb256.png|20px|link=https://www.imdb.com/title/tt0118401|Internet Movie Database]]</td></tr></table></td></tr></table>'
  );
});

QUnit.test("linkedImages()", (assert) => {
  // Setup.
  const person = Person.properties[Person.MICHAEL_CONNELLY];

  // Run.
  const result = Formatter.linkedImages(person);

  // Verify.
  assert.equal(
    result,
    '<table><tr><td style="border:0px; padding:0px;">[[Image:IMDb256.png|20px|link=https://www.imdb.com/name/nm0175093|Internet Movie Database]]</td><td style="border:0px; padding:0px;">[[Image:LibraryThing180.png|20px|link=https://www.librarything.com/author/connellymichael-1|LibraryThing]]</td><td style="border:0px; padding:0px;">[[Image:Wikipedia128.png|20px|link=https://en.wikipedia.org/wiki/Michael_Connelly|Wikipedia]]</td></tr></table>',
    `result = :${result}:`
  );
});

const FormatterTest = {};
module.exports = FormatterTest;
