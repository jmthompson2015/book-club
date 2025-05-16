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
    '<div style="display: table; width:100%;"><div style="display: table-row;"><div style="display: table-cell; vertical-align: middle;">Gone Girl</div><div style="display: table-cell; float: right;"><div style="display: flex; flex-wrap: wrap; justify-content: flex-end;"><div style="display: table-cell;">[[Image:DouglasCountyLibraries.png|20px|link=https://dcl.bibliocommons.com/item/show/1033248114|Douglas County Libraries]]</div></div></div></div></div>',
  );
});

QUnit.test("createBookText() use search", (assert) => {
  // Setup.
  const book = Book.properties[Book.GONE_GIRL];

  // Run.
  const result = Formatter.createBookText(book, true);

  // Verify.
  assert.ok(result);
  assert.equal(
    result,
    '<div style="display: table; width:100%;"><div style="display: table-row;"><div style="display: table-cell; vertical-align: middle;">Gone Girl</div><div style="display: table-cell; float: right;"><div style="display: flex; flex-wrap: wrap; justify-content: flex-end;"><div style="display: table-cell;">[[Image:DouglasCountyLibraries.png|20px|link=https://dcl.bibliocommons.com/item/show/1033248114|Douglas County Libraries]]</div><div style="display: table-cell;">[[Image:Goodreads_2.png|20px|link=https://www.goodreads.com/search?q=Gone+Girl|Goodreads]]</div></div></div></div></div>',
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
    '<div style="display: table; width:100%;"><div style="display: table-row;"><div style="display: table-cell; vertical-align: middle;">Gone Girl (2014)</div><div style="display: table-cell; float: right;"><div style="display: flex; flex-wrap: wrap; justify-content: flex-end;"><div style="display: table-cell;">[[Image:IMDb.png|20px|link=https://www.imdb.com/title/tt2267998|Internet Movie Database]]</div></div></div></div></div>',
  );
});

QUnit.test("createMovieText() use search", (assert) => {
  // Setup.
  const movie = Movie.properties[Movie.GONE_GIRL];

  // Run.
  const result = Formatter.createMovieText(movie, true);

  // Verify.
  assert.ok(result);
  assert.equal(
    result,
    '<div style="display: table; width:100%;"><div style="display: table-row;"><div style="display: table-cell; vertical-align: middle;">Gone Girl (2014)</div><div style="display: table-cell; float: right;"><div style="display: flex; flex-wrap: wrap; justify-content: flex-end;"><div style="display: table-cell;">[[Image:DouglasCountyLibraries_2.png|20px|link=https://dcl.bibliocommons.com/v2/search?searchType=smart&query=Gone+Girl+(2014)|Douglas County Libraries]]</div><div style="display: table-cell;">[[Image:Goodreads_2.png|20px|link=https://www.goodreads.com/search?q=Gone+Girl+(2014)|Goodreads]]</div><div style="display: table-cell;">[[Image:IMDb.png|20px|link=https://www.imdb.com/title/tt2267998|Internet Movie Database]]</div></div></div></div></div>',
  );
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
  const person = [Person.LEE_CHILD];

  // Run.
  const result = Formatter.createPersonText(person);

  // Verify.
  assert.ok(result);
  assert.equal(
    result,
    'data-sort-value="Child, Lee"| <div style="display: table; width:100%;"><div style="display: table-row;"><div style="display: table-cell; vertical-align: middle;">Lee Child</div><div style="display: table-cell; float: right;"><div style="display: flex; flex-wrap: wrap; justify-content: flex-end;"><div style="display: table-cell;">[[Image:Goodreads.png|20px|link=https://www.goodreads.com/author/show/5091.Lee_Child|Goodreads]]</div><div style="display: table-cell;">[[Image:IMDb.png|20px|link=https://www.imdb.com/name/nm1676193|Internet Movie Database]]</div><div style="display: table-cell;">[[Image:Wikipedia.png|20px|link=https://en.wikipedia.org/wiki/Lee_Child|Wikipedia]]</div></div></div></div></div>',
  );
});

QUnit.test("createPersonText() use search", (assert) => {
  // Setup.
  const person = [Person.LEE_CHILD];

  // Run.
  const result = Formatter.createPersonText(person, true);

  // Verify.
  assert.ok(result);
  assert.equal(
    result,
    'data-sort-value="Child, Lee"| <div style="display: table; width:100%;"><div style="display: table-row;"><div style="display: table-cell; vertical-align: middle;">Lee Child</div><div style="display: table-cell; float: right;"><div style="display: flex; flex-wrap: wrap; justify-content: flex-end;"><div style="display: table-cell;">[[Image:DouglasCountyLibraries_2.png|20px|link=https://dcl.bibliocommons.com/v2/search?searchType=smart&query=Lee+Child|Douglas County Libraries]]</div><div style="display: table-cell;">[[Image:Goodreads.png|20px|link=https://www.goodreads.com/author/show/5091.Lee_Child|Goodreads]]</div><div style="display: table-cell;">[[Image:IMDb.png|20px|link=https://www.imdb.com/name/nm1676193|Internet Movie Database]]</div><div style="display: table-cell;">[[Image:Wikipedia.png|20px|link=https://en.wikipedia.org/wiki/Lee_Child|Wikipedia]]</div></div></div></div></div>',
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
    'data-sort-value="Child, Lee"| <div style="display: table; width:100%;"><div style="display: table-row;"><div style="display: table-cell; vertical-align: middle;">Lee Child</div><div style="display: table-cell; float: right;"><div style="display: flex; flex-wrap: wrap; justify-content: flex-end;"><div style="display: table-cell;">[[Image:Goodreads.png|20px|link=https://www.goodreads.com/author/show/5091.Lee_Child|Goodreads]]</div><div style="display: table-cell;">[[Image:IMDb.png|20px|link=https://www.imdb.com/name/nm1676193|Internet Movie Database]]</div><div style="display: table-cell;">[[Image:Wikipedia.png|20px|link=https://en.wikipedia.org/wiki/Lee_Child|Wikipedia]]</div></div></div></div></div> <div style="display: table; width:100%;"><div style="display: table-row;"><div style="display: table-cell; vertical-align: middle;">Jane Harper</div><div style="display: table-cell; float: right;"><div style="display: flex; flex-wrap: wrap; justify-content: flex-end;"><div style="display: table-cell;">[[Image:Goodreads.png|20px|link=https://www.goodreads.com/author/show/556546.Jane_Harper|Goodreads]]</div><div style="display: table-cell;">[[Image:IMDb.png|20px|link=https://www.imdb.com/name/nm7681091|Internet Movie Database]]</div><div style="display: table-cell;">[[Image:Wikipedia.png|20px|link=https://en.wikipedia.org/wiki/Jane_Harper|Wikipedia]]</div></div></div></div></div>',
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
    '<div style="display: table; width:100%;"><div style="display: table-row;"><div style="display: table-cell; vertical-align: middle;">Jack Reacher #12</div><div style="display: table-cell; float: right;"><div style="display: flex; flex-wrap: wrap; justify-content: flex-end;"><div style="display: table-cell;">[[Image:Goodreads.png|20px|link=https://www.goodreads.com/series/40549-jack-reacher|Goodreads]]</div><div style="display: table-cell;">[[Image:Wikipedia.png|20px|link=https://en.wikipedia.org/wiki/Jack_Reacher|Wikipedia]]</div></div></div></div></div>',
  );
});

QUnit.test("createSeriesText() use search", (assert) => {
  // Setup.
  const series = [{ key: Series.JACK_REACHER, entry: 12 }];

  // Run.
  const result = Formatter.createSeriesText(series, true);

  // Verify.
  assert.ok(result);
  assert.equal(
    result,
    '<div style="display: table; width:100%;"><div style="display: table-row;"><div style="display: table-cell; vertical-align: middle;">Jack Reacher #12</div><div style="display: table-cell; float: right;"><div style="display: flex; flex-wrap: wrap; justify-content: flex-end;"><div style="display: table-cell;">[[Image:DouglasCountyLibraries_2.png|20px|link=https://dcl.bibliocommons.com/v2/search?searchType=smart&query=Jack+Reacher|Douglas County Libraries]]</div><div style="display: table-cell;">[[Image:Goodreads.png|20px|link=https://www.goodreads.com/series/40549-jack-reacher|Goodreads]]</div><div style="display: table-cell;">[[Image:Wikipedia.png|20px|link=https://en.wikipedia.org/wiki/Jack_Reacher|Wikipedia]]</div></div></div></div></div>',
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
    '<div style="display: table; width:100%;"><div style="display: table-row;"><div style="display: table-cell; vertical-align: middle;">Midsomer Murders (1997-?)</div><div style="display: table-cell; float: right;"><div style="display: flex; flex-wrap: wrap; justify-content: flex-end;"><div style="display: table-cell;">[[Image:IMDb.png|20px|link=https://www.imdb.com/title/tt0118401|Internet Movie Database]]</div></div></div></div></div>',
  );
});

QUnit.test("createTVSeriesText() use search", (assert) => {
  // Setup.
  const tvSeries = TVSeries.properties[TVSeries.MIDSOMER_MURDERS];

  // Run.
  const result = Formatter.createTVSeriesText(tvSeries, true);

  // Verify.
  assert.ok(result);
  assert.equal(
    result,
    '<div style="display: table; width:100%;"><div style="display: table-row;"><div style="display: table-cell; vertical-align: middle;">Midsomer Murders (1997-?)</div><div style="display: table-cell; float: right;"><div style="display: flex; flex-wrap: wrap; justify-content: flex-end;"><div style="display: table-cell;">[[Image:DouglasCountyLibraries_2.png|20px|link=https://dcl.bibliocommons.com/v2/search?searchType=smart&query=Midsomer+Murders+(1997-?)|Douglas County Libraries]]</div><div style="display: table-cell;">[[Image:Goodreads_2.png|20px|link=https://www.goodreads.com/search?q=Midsomer+Murders+(1997-?)|Goodreads]]</div><div style="display: table-cell;">[[Image:IMDb.png|20px|link=https://www.imdb.com/title/tt0118401|Internet Movie Database]]</div></div></div></div></div>',
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
    '<div style="display: flex; flex-wrap: wrap; justify-content: flex-end;"><div style="display: table-cell;">[[Image:Goodreads.png|20px|link=https://www.goodreads.com/author/show/12470.Michael_Connelly|Goodreads]]</div><div style="display: table-cell;">[[Image:IMDb.png|20px|link=https://www.imdb.com/name/nm0175093|Internet Movie Database]]</div><div style="display: table-cell;">[[Image:Wikipedia.png|20px|link=https://en.wikipedia.org/wiki/Michael_Connelly|Wikipedia]]</div></div>',
    `result = :${result}:`,
  );
});

const FormatterTest = {};
module.exports = FormatterTest;
