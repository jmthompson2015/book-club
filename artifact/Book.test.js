/* eslint no-console: ["error", { allow: ["log"] }] */
/* eslint no-underscore-dangle: ["error", { "allow": ["_206_BONES"] }] */

const QUnit = require("../node_modules/qunit/qunit/qunit.js");
const R = require("../node_modules/ramda/dist/ramda.js");

const Book = require("./Book.js");
const Person = require("./Person.js");

QUnit.module("Book");

QUnit.test("authorKey", (assert) => {
  // Run.
  const result = Book.values();

  // Verify.
  assert.ok(result);
  const forEachFunction = (book) => {
    assert.ok(book.authorKey, `book.authorKey = ${book.authorKey}`);
    if (!Array.isArray(book.authorKey)) {
      const author = Person.properties[book.authorKey];
      assert.ok(
        author,
        `Missing author for book.title = ${book.title} book.authorKey = ${book.authorKey}`
      );
    }
  };
  R.forEach(forEachFunction, result);
});

QUnit.test("keys and values", (assert) => {
  // Run.
  const result = Book.keys();
  const ownPropertyNames = Object.getOwnPropertyNames(Book);

  // Verify.
  const forEachFunction1 = (key) => {
    const key2 = Book[key];

    if (key !== "properties" && typeof key2 === "string") {
      assert.ok(Book.properties[key2], `Missing value for key = ${key}`);
    }
  };
  R.forEach(forEachFunction1, ownPropertyNames);

  const forEachFunction2 = (value) => {
    const p = ownPropertyNames.filter((key) => Book[key] === value);
    assert.equal(p.length, 1, `Missing key for value = ${value}`);
  };
  R.forEach(forEachFunction2, result);
});

QUnit.test("Book.keys()", (assert) => {
  // Run.
  const result = Book.keys();

  // Verify.
  assert.ok(result);
  const length = 169;
  assert.equal(result.length, length);
  assert.equal(R.head(result), Book._206_BONES);
  assert.equal(R.last(result), Book.WICKED_PREY);
});

const BookTest = {};
module.exports = BookTest;
