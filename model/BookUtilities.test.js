const QUnit = require("../node_modules/qunit/qunit/qunit.js");

const Book = require("../artifact/Book.js");
const Person = require("../artifact/Person.js");
const Series = require("../artifact/Series.js");

const BookUtilities = require("./BookUtilities.js");

QUnit.module("BookUtilities");

QUnit.test("authorForBook()", (assert) => {
  // Setup.
  const bookKey = Book.MAKE_ME;

  // Run.
  const result = BookUtilities.authorForBook(bookKey);

  // Verify.
  assert.ok(result);
  assert.equal(result, Person.LEE_CHILD);
});

QUnit.test("authorForSeries()", (assert) => {
  // Setup.
  const seriesKey = Series.JACK_REACHER;

  // Run.
  const result = BookUtilities.authorForSeries(seriesKey);

  // Verify.
  assert.ok(result);
  assert.equal(result, Person.LEE_CHILD);
});

QUnit.test("determineAuthor()", (assert) => {
  // Run / Verify.
  assert.equal(BookUtilities.determineAuthor(Book.MAKE_ME), Person.LEE_CHILD);
  assert.equal(
    BookUtilities.determineAuthor(Series.JACK_REACHER),
    Person.LEE_CHILD
  );
  assert.equal(
    BookUtilities.determineAuthor(Series.SHARP_OBJECTS),
    Person.GILLIAN_FLYNN
  );
});

const BookUtilitiesTest = {};
module.exports = BookUtilitiesTest;
