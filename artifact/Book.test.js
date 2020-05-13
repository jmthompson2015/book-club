/* eslint no-console: ["error", { allow: ["log"] }] */

const Book = require("./Book.js");
const Person = require("./Person.js");
const QUnit = require("../node_modules/qunit/qunit/qunit.js");

QUnit.module("Book");

QUnit.test("authorKey", (assert) => {
  // Run.
  const result = Book.values();

  // Verify.
  assert.ok(result);
  result.forEach((book) => {
    const author = Person.properties[book.authorKey];
    assert.ok(
      author,
      `Missing author for book.title = ${book.title} book.authorKey = ${book.authorKey}`
    );
  });
});

QUnit.test("keys and values", (assert) => {
  // Run.
  const result = Book.keys();
  const ownPropertyNames = Object.getOwnPropertyNames(Book);

  // Verify.
  ownPropertyNames.forEach((key) => {
    const key2 = Book[key];

    if (key !== "properties" && typeof key2 === "string") {
      assert.ok(Book.properties[key2], `Missing value for key = ${key}`);
    }
  });

  result.forEach((value) => {
    const p = ownPropertyNames.filter((key) => Book[key] === value);
    assert.equal(p.length, 1, `Missing key for value = ${value}`);
  });
});

QUnit.test("Book.keys()", (assert) => {
  // Run.
  const result = Book.keys();

  // Verify.
  assert.ok(result);
  const length = 72;
  assert.equal(result.length, length);
  assert.equal(result[0], Book.A_CHRISTMAS_PARTY);
  assert.equal(result[length - 1], Book.WHERE_THE_CRAWDADS_SING);
});

const BookTest = {};
module.exports = BookTest;
