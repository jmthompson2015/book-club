/* eslint no-console: ["error", { allow: ["log"] }] */
/* eslint no-underscore-dangle: ["error", { "allow": ["_206_BONES"] }] */

const QUnit = require("../node_modules/qunit/qunit/qunit.js");
const R = require("../node_modules/ramda/dist/ramda.js");

const Book = require("./Book.js");
const Person = require("./Person.js");

QUnit.module("Book");

const verifyAuthor = (assert, title, authorKey) => {
  const author = Person.properties[authorKey];
  assert.ok(
    author,
    `Missing author for book.title = ${title} authorKey = ${authorKey}`,
  );
};

QUnit.test("authorKeys", (assert) => {
  // Run.
  const result = Book.values();

  // Verify.
  assert.ok(result);
  const forEachFunction = (book) => {
    assert.ok(book.authorKeys, `book.authorKeys = ${book.authorKeys}`);
    if (Array.isArray(book.authorKeys)) {
      const forEachFunction2 = (authorKey) => {
        verifyAuthor(assert, book.title, authorKey);
      };
      R.forEach(forEachFunction2, book.authorKeys);
    } else {
      verifyAuthor(assert, book.title, book.authorKeys);
    }
  };
  R.forEach(forEachFunction, result);
});

QUnit.test("key", (assert) => {
  // Run.
  const result = Book.values();

  // Verify.
  assert.ok(result);
  const forEachFunction = (book) => {
    assert.ok(
      book.key,
      `Missing key for book.title = ${book.title} book.key = ${book.key}`,
    );
  };
  R.forEach(forEachFunction, result);
});

QUnit.test("title", (assert) => {
  // Run.
  const result = Book.values();

  // Verify.
  assert.ok(result);
  const forEachFunction = (book) => {
    assert.ok(
      book.title,
      `Missing title for book.key = ${book.key} book.title = ${book.title}`,
    );
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
  assert.equal(result.length, 259);
  assert.equal(R.head(result), Book.ARE_YOU_SARA);
  assert.equal(R.last(result), Book.YOU);
});

const BookTest = {};
module.exports = BookTest;
