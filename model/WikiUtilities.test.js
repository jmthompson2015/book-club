const QUnit = require("../node_modules/qunit/qunit/qunit.js");

const Book = require("../artifact/Book.js");
const Movie = require("../artifact/Movie.js");
const Person = require("../artifact/Person.js");
const Series = require("../artifact/Series.js");
const TVSeries = require("../artifact/TVSeries.js");

const WikiUtils = require("./WikiUtilities.js");

QUnit.module("WikiUtilities");

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
    '<table style="border:0px; padding:0px; width:100%;"><tr><td style="border:0px; padding:0px;">Gone Girl</td><td style="border:0px; padding:0px; float: right;"><table style="border:0px; padding:0px;"><tr><td style="border:0px; padding:0px;">[[Image:DouglasCountyLibraries418.png|20px|link=https://dcl.bibliocommons.com/item/show/1033248114|Douglas County Libraries]]</td><td style="border:0px; padding:0px;">[[Image:LibraryThing180.png|20px|link=https://www.librarything.com/work/11234211|LibraryThing]]</td></tr></table></td></tr></table>'
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
    '<table style="border:0px; padding:0px; width:100%;"><tr><td style="border:0px; padding:0px;">Gone Girl (2014)</td><td style="border:0px; padding:0px; float: right;"><table style="border:0px; padding:0px;"><tr><td style="border:0px; padding:0px;">[[Image:IMDb256.png|20px|link=https://www.imdb.com/title/tt2267998|Internet Movie Database]]</td></tr></table></td></tr></table>'
  );
});

QUnit.test("createPersonText() undefined", (assert) => {
  // Setup.
  const person = undefined;

  // Run.
  const result = WikiUtils.createPersonText(person);

  // Verify.
  assert.equal(result, "", `result = :${result}:`);
});

QUnit.test("createPersonText()", (assert) => {
  // Setup.
  const person = Person.LEE_CHILD;

  // Run.
  const result = WikiUtils.createPersonText(person);

  // Verify.
  assert.ok(result);
  assert.equal(
    result,
    'data-sort-value="Child, Lee"| <table style="border:0px; padding:0px; width:100%;"><tr><td style="border:0px; padding:0px;">Lee Child</td><td style="border:0px; padding:0px; float: right;"><table style="border:0px; padding:0px;"><tr><td style="border:0px; padding:0px;">[[Image:IMDb256.png|20px|link=https://www.imdb.com/name/nm1676193|Internet Movie Database]]</td><td style="border:0px; padding:0px;">[[Image:LibraryThing180.png|20px|link=https://www.librarything.com/author/childlee|LibraryThing]]</td><td style="border:0px; padding:0px;">[[Image:Wikipedia128.png|20px|link=https://en.wikipedia.org/wiki/Lee_Child|Wikipedia]]</td></tr></table></td></tr></table>'
  );
});

QUnit.test("createPersonText() array", (assert) => {
  // Setup.
  const personKeys = [Person.LEE_CHILD, Person.JANE_HARPER];

  // Run.
  const result = WikiUtils.createPersonText(personKeys);

  // Verify.
  assert.ok(result);
  assert.equal(
    result,
    '<table style="border:0px; padding:0px; width:100%;"><tr><td style="border:0px; padding:0px;">Lee Child</td><td style="border:0px; padding:0px; float: right;"><table style="border:0px; padding:0px;"><tr><td style="border:0px; padding:0px;">[[Image:IMDb256.png|20px|link=https://www.imdb.com/name/nm1676193|Internet Movie Database]]</td><td style="border:0px; padding:0px;">[[Image:LibraryThing180.png|20px|link=https://www.librarything.com/author/childlee|LibraryThing]]</td><td style="border:0px; padding:0px;">[[Image:Wikipedia128.png|20px|link=https://en.wikipedia.org/wiki/Lee_Child|Wikipedia]]</td></tr></table></td></tr></table> <table style="border:0px; padding:0px; width:100%;"><tr><td style="border:0px; padding:0px;">Jane Harper</td><td style="border:0px; padding:0px; float: right;"><table style="border:0px; padding:0px;"><tr><td style="border:0px; padding:0px;">[[Image:LibraryThing180.png|20px|link=https://www.librarything.com/author/harperjane-1|LibraryThing]]</td><td style="border:0px; padding:0px;">[[Image:Wikipedia128.png|20px|link=https://en.wikipedia.org/wiki/Jane_Harper|Wikipedia]]</td></tr></table></td></tr></table>'
  );
});

QUnit.test("createSeriesText() undefined", (assert) => {
  // Setup.
  const seriesObj = undefined;

  // Run.
  const result = WikiUtils.createSeriesText(seriesObj);

  // Verify.
  assert.equal(result, "", `result = :${result}:`);
});

QUnit.test("createSeriesText()", (assert) => {
  // Setup.
  const seriesObj = { key: Series.JACK_REACHER, entry: 12 };

  // Run.
  const result = WikiUtils.createSeriesText(seriesObj);

  // Verify.
  assert.ok(result);
  assert.equal(
    result,
    '<table style="border:0px; padding:0px; width:100%;"><tr><td style="border:0px; padding:0px;">Jack Reacher #12</td><td style="border:0px; padding:0px; float: right;"><table style="border:0px; padding:0px;"><tr><td style="border:0px; padding:0px;">[[Image:LibraryThing180.png|20px|link=https://www.librarything.com/series/Jack+Reacher|LibraryThing]]</td></tr></table></td></tr></table>'
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
    '<table style="border:0px; padding:0px; width:100%;"><tr><td style="border:0px; padding:0px;">Midsomer Murders (1997-?)</td><td style="border:0px; padding:0px; float: right;"><table style="border:0px; padding:0px;"><tr><td style="border:0px; padding:0px;">[[Image:IMDb256.png|20px|link=https://www.imdb.com/title/tt0118401|Internet Movie Database]]</td></tr></table></td></tr></table>'
  );
});

const WikiUtilitiesTest = {};
module.exports = WikiUtilitiesTest;
