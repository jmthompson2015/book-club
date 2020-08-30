const QUnit = require("../node_modules/qunit/qunit/qunit.js");

const Book = require("../artifact/Book.js");
const Person = require("../artifact/Person.js");
const Series = require("../artifact/Series.js");

const UrlGenerator = require("./UrlGenerator.js");

QUnit.module("UrlGenerator");

QUnit.test("dclSearchUrl()", (assert) => {
  // Setup.
  const item = { title: "Something Something" };

  // Run.
  const result = UrlGenerator.dclSearchUrl(item);

  // Verify.
  assert.equal(
    result,
    "https://dcl.bibliocommons.com/v2/search?searchType=smart&query=Something+Something",
    `result = :${result}:`
  );
});

QUnit.test("dclSearchUrl() null", (assert) => {
  // Setup.
  const item = Series.properties[Series.GAIL_H_SUGGESTS];

  // Run.
  const result = UrlGenerator.dclSearchUrl(item);

  // Verify.
  assert.equal(result, null, `result = :${result}:`);
});

QUnit.test("dclUrl()", (assert) => {
  // Setup.
  const item = Book.properties[Book.THE_LOST_MAN];

  // Run.
  const result = UrlGenerator.dclUrl(item);

  // Verify.
  assert.equal(
    result,
    "https://dcl.bibliocommons.com/item/show/1523223114",
    `result = :${result}:`
  );
});

QUnit.test("goodreadsSearchUrl()", (assert) => {
  // Setup.
  const item = { title: "Something Something" };

  // Run.
  const result = UrlGenerator.goodreadsSearchUrl(item);

  // Verify.
  assert.equal(
    result,
    "https://www.goodreads.com/search?q=Something+Something",
    `result = :${result}:`
  );
});

QUnit.test("goodreadsUrl()", (assert) => {
  // Setup.
  const item = Book.properties[Book.A_SIMPLE_PLAN];

  // Run.
  const result = UrlGenerator.goodreadsUrl(item);

  // Verify.
  assert.equal(
    result,
    "https://www.goodreads.com/book/show/21727.A_Simple_Plan",
    `result = :${result}:`
  );
});

QUnit.test("imdbSearchUrl() null", (assert) => {
  // Setup.
  const item = { title: "Something Something" };

  // Run.
  const result = UrlGenerator.imdbSearchUrl(item);

  // Verify.
  assert.equal(
    result,
    "https://www.imdb.com/find?s=all&q=Something+Something",
    `result = :${result}:`
  );
});

QUnit.test("imdbUrl()", (assert) => {
  // Setup.
  const item = Person.properties[Person.ANTHONY_HOROWITZ];

  // Run.
  const result = UrlGenerator.imdbUrl(item);

  // Verify.
  assert.equal(
    result,
    "https://www.imdb.com/name/nm0395275",
    `result = :${result}:`
  );
});

QUnit.test("libraryThingSearchUrl()", (assert) => {
  // Setup.
  const item = { title: "Something Something" };

  // Run.
  const result = UrlGenerator.libraryThingSearchUrl(item);

  // Verify.
  assert.equal(
    result,
    "https://www.librarything.com/search.php?search=Something+Something",
    `result = :${result}:`
  );
});

QUnit.test("libraryThingUrl()", (assert) => {
  // Setup.
  const item = Book.properties[Book.THE_LOST_MAN];

  // Run.
  const result = UrlGenerator.libraryThingUrl(item);

  // Verify.
  assert.equal(
    result,
    "https://www.librarything.com/work/21919798",
    `result = :${result}:`
  );
});

QUnit.test("wikipediaSearchUrl() null", (assert) => {
  // Setup.
  const item = { title: "Something Something" };

  // Run.
  const result = UrlGenerator.wikipediaSearchUrl(item);

  // Verify.
  assert.equal(
    result,
    "https://en.wikipedia.org/wiki/Something_Something",
    `result = :${result}:`
  );
});

QUnit.test("wikipediaUrl()", (assert) => {
  // Setup.
  const item = Person.properties[Person.ANTHONY_HOROWITZ];

  // Run.
  const result = UrlGenerator.wikipediaUrl(item);

  // Verify.
  assert.equal(
    result,
    "https://en.wikipedia.org/wiki/Anthony_Horowitz",
    `result = :${result}:`
  );
});

const UrlGeneratorTest = {};
module.exports = UrlGeneratorTest;
