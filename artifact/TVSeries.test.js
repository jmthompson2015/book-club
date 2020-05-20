/* eslint no-console: ["error", { allow: ["log"] }] */

const QUnit = require("../node_modules/qunit/qunit/qunit.js");
const R = require("../node_modules/ramda/dist/ramda.js");

const Book = require("./Book.js");
const TVSeries = require("./TVSeries.js");
const Person = require("./Person.js");

QUnit.module("TVSeries");

QUnit.test("bookKey", (assert) => {
  // Run.
  const result = TVSeries.values();

  // Verify.
  assert.ok(result);
  const forEachFunction = (movie) => {
    if (Object.prototype.hasOwnProperty.call(movie, "bookKey")) {
      const book = Book.properties[movie.bookKey];
      assert.ok(
        book,
        `Missing book for movie.title = ${movie.title} movie.bookKey = ${movie.bookKey}`
      );
    }
  };
  R.forEach(forEachFunction, result);
});

QUnit.test("castKeys", (assert) => {
  // Run.
  const result = TVSeries.values();

  // Verify.
  assert.ok(result);
  const forEachFunction = (movie) => {
    if (Object.prototype.hasOwnProperty.call(movie, "castKeys")) {
      movie.castKeys.forEach((castKey, i) => {
        const person = Person.properties[castKey];
        assert.ok(
          person,
          `Missing cast ${i} for movie.title = ${movie.title} castKey = ${castKey}`
        );
      });
    }
  };
  R.forEach(forEachFunction, result);
});

QUnit.test("directorKey", (assert) => {
  // Run.
  const result = TVSeries.values();

  // Verify.
  assert.ok(result);
  const forEachFunction = (movie) => {
    if (Object.prototype.hasOwnProperty.call(movie, "directorKey")) {
      const person = Person.properties[movie.directorKey];
      assert.ok(
        person,
        `Missing director for movie.title = ${movie.title} movie.directorKey = ${movie.directorKey}`
      );
    }
  };
  R.forEach(forEachFunction, result);
});

QUnit.test("writerKey", (assert) => {
  // Run.
  const result = TVSeries.values();

  // Verify.
  assert.ok(result);
  const forEachFunction = (movie) => {
    if (Object.prototype.hasOwnProperty.call(movie, "writerKey")) {
      const person = Person.properties[movie.writerKey];
      assert.ok(
        person,
        `Missing book for movie.title = ${movie.title} movie.bookKey = ${movie.bookKey}`
      );
    }
  };
  R.forEach(forEachFunction, result);
});

QUnit.test("keys and values", (assert) => {
  // Run.
  const result = TVSeries.keys();
  const ownPropertyNames = Object.getOwnPropertyNames(TVSeries);

  // Verify.
  const forEachFunction1 = (key) => {
    const key2 = TVSeries[key];

    if (key !== "properties" && typeof key2 === "string") {
      assert.ok(TVSeries.properties[key2], `Missing value for key = ${key}`);
    }
  };
  R.forEach(forEachFunction1, ownPropertyNames);

  const forEachFunction2 = (value) => {
    const p = ownPropertyNames.filter((key) => TVSeries[key] === value);
    assert.equal(p.length, 1, `Missing key for value = ${value}`);
  };
  R.forEach(forEachFunction2, result);
});

QUnit.test("TVSeries.keys()", (assert) => {
  // Run.
  const result = TVSeries.keys();

  // Verify.
  assert.ok(result);
  const length = 9;
  assert.equal(result.length, length);
  assert.equal(R.head(result), TVSeries.BOSCH);
  assert.equal(R.last(result), TVSeries.WIRE_IN_THE_BLOOD);
});

const TVSeriesTest = {};
module.exports = TVSeriesTest;
