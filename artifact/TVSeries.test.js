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
  const forEachFunction = (tvSeries) => {
    if (Object.prototype.hasOwnProperty.call(tvSeries, "bookKey")) {
      const book = Book.properties[tvSeries.bookKey];
      assert.ok(
        book,
        `Missing book for tvSeries.title = ${tvSeries.title} tvSeries.bookKey = ${tvSeries.bookKey}`,
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
  const forEachFunction = (tvSeries) => {
    if (Object.prototype.hasOwnProperty.call(tvSeries, "castKeys")) {
      tvSeries.castKeys.forEach((castKey, i) => {
        const person = Person.properties[castKey];
        assert.ok(
          person,
          `Missing cast ${i} for tvSeries.title = ${tvSeries.title} castKey = ${castKey}`,
        );
      });
    }
  };
  R.forEach(forEachFunction, result);
});

QUnit.test("directorKeys", (assert) => {
  // Run.
  const result = TVSeries.values();

  // Verify.
  assert.ok(result);
  const forEachFunction = (tvSeries) => {
    if (Object.prototype.hasOwnProperty.call(tvSeries, "directorKeys")) {
      const person = Person.properties[tvSeries.directorKeys];
      assert.ok(
        person,
        `Missing director for tvSeries.title = ${tvSeries.title}` +
          ` tvSeries.directorKeys = ${tvSeries.directorKeys}`,
      );
    }
  };
  R.forEach(forEachFunction, result);
});

QUnit.test("key", (assert) => {
  // Run.
  const result = TVSeries.values();

  // Verify.
  assert.ok(result);
  const forEachFunction = (tvSeries) => {
    assert.ok(
      tvSeries.key,
      `Missing key for tvSeries.title = ${tvSeries.title} tvSeries.key = ${tvSeries.key}`,
    );
  };
  R.forEach(forEachFunction, result);
});

QUnit.test("title", (assert) => {
  // Run.
  const result = TVSeries.values();

  // Verify.
  assert.ok(result);
  const forEachFunction = (tvSeries) => {
    assert.ok(
      tvSeries.title,
      `Missing title for tvSeries.key = ${tvSeries.key} tvSeries.title = ${tvSeries.title}`,
    );
  };
  R.forEach(forEachFunction, result);
});

QUnit.test("writerKeys", (assert) => {
  // Run.
  const result = TVSeries.values();

  // Verify.
  assert.ok(result);
  const forEachFunction = (tvSeries) => {
    if (Object.prototype.hasOwnProperty.call(tvSeries, "writerKeys")) {
      const person = Person.properties[tvSeries.writerKeys];
      assert.ok(
        person,
        `Missing writer for tvSeries.title = ${tvSeries.title} tvSeries.bookKey = ${tvSeries.bookKey}`,
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
  assert.equal(result.length, 33);
  assert.equal(R.head(result), TVSeries.AGATHA_RAISIN);
  assert.equal(R.last(result), TVSeries.YOU);
});

const TVSeriesTest = {};
module.exports = TVSeriesTest;
