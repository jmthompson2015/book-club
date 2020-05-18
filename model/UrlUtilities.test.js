const QUnit = require("../node_modules/qunit/qunit/qunit.js");

const Book = require("../artifact/Book.js");
const Person = require("../artifact/Person.js");

const WikiUtils = require("./UrlUtilities.js");

QUnit.module("UrlUtilities");

QUnit.test("dclUrl()", (assert) => {
  // Setup.
  const item = Book.properties[Book.THE_LOST_MAN];

  // Run.
  const result = WikiUtils.dclUrl(item);

  // Verify.
  assert.equal(
    result,
    "https://dcl.bibliocommons.com/item/show/1523223114",
    `result = :${result}:`
  );
});

QUnit.test("imdbUrl()", (assert) => {
  // Setup.
  const item = Person.properties[Person.ANTHONY_HOROWITZ];

  // Run.
  const result = WikiUtils.imdbUrl(item);

  // Verify.
  assert.equal(
    result,
    "https://www.imdb.com/name/nm0395275",
    `result = :${result}:`
  );
});

QUnit.test("libraryThingUrl()", (assert) => {
  // Setup.
  const item = Book.properties[Book.THE_LOST_MAN];

  // Run.
  const result = WikiUtils.libraryThingUrl(item);

  // Verify.
  assert.equal(
    result,
    "https://www.librarything.com/work/21919798",
    `result = :${result}:`
  );
});

QUnit.test("wikipediaUrl()", (assert) => {
  // Setup.
  const item = Person.properties[Person.ANTHONY_HOROWITZ];

  // Run.
  const result = WikiUtils.wikipediaUrl(item);

  // Verify.
  assert.equal(
    result,
    "https://en.wikipedia.org/wiki/Anthony_Horowitz",
    `result = :${result}:`
  );
});

const UrlUtilitiesTest = {};
module.exports = UrlUtilitiesTest;
