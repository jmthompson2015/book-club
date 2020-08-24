/* eslint no-console: ["error", { allow: ["log"] }] */

const QUnit = require("../node_modules/qunit/qunit/qunit.js");
const R = require("../node_modules/ramda/dist/ramda.js");

const Book = require("./Book.js");
const Movie = require("./Movie.js");
const Person = require("./Person.js");

QUnit.module("Movie");

QUnit.test("bookKey", (assert) => {
  // Run.
  const result = Movie.values();

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
  const result = Movie.values();

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

QUnit.test("directorKeys", (assert) => {
  // Run.
  const result = Movie.values();

  // Verify.
  assert.ok(result);
  const forEachFunction = (movie) => {
    if (Object.prototype.hasOwnProperty.call(movie, "directorKeys")) {
      const person = Person.properties[movie.directorKeys];
      assert.ok(
        person,
        `Missing director for movie.title = ${movie.title} movie.directorKeys = ${movie.directorKeys}`
      );
    }
  };
  R.forEach(forEachFunction, result);
});

QUnit.test("writerKeys", (assert) => {
  // Run.
  const result = Movie.values();

  // Verify.
  assert.ok(result);
  const forEachFunction = (movie) => {
    if (Object.prototype.hasOwnProperty.call(movie, "writerKeys")) {
      const person = Person.properties[movie.writerKeys];
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
  const result = Movie.keys();
  const ownPropertyNames = Object.getOwnPropertyNames(Movie);

  // Verify.
  const forEachFunction1 = (key) => {
    const key2 = Movie[key];

    if (key !== "properties" && typeof key2 === "string") {
      assert.ok(Movie.properties[key2], `Missing value for key = ${key}`);
    }
  };
  R.forEach(forEachFunction1, ownPropertyNames);

  const forEachFunction2 = (value) => {
    const p = ownPropertyNames.filter((key) => Movie[key] === value);
    assert.equal(p.length, 1, `Missing key for value = ${value}`);
  };
  R.forEach(forEachFunction2, result);
});

QUnit.test("Movie.keys()", (assert) => {
  // Run.
  const result = Movie.keys();

  // Verify.
  assert.ok(result);
  assert.equal(result.length, 23);
  assert.equal(R.head(result), Movie.A_SIMPLE_PLAN);
  assert.equal(R.last(result), Movie.VERTIGO);
});

const MovieTest = {};
module.exports = MovieTest;
