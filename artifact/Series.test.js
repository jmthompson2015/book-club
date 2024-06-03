const QUnit = require("../node_modules/qunit/qunit/qunit.js");
const R = require("../node_modules/ramda/dist/ramda.js");

const Series = require("./Series.js");

QUnit.module("Series");

QUnit.test("key", (assert) => {
  // Run.
  const result = Series.values();

  // Verify.
  assert.ok(result);
  const forEachFunction = (series) => {
    assert.ok(
      series.key,
      `Missing key for series.title = ${series.title} series.key = ${series.key}`,
    );
  };
  R.forEach(forEachFunction, result);
});

QUnit.test("title", (assert) => {
  // Run.
  const result = Series.values();

  // Verify.
  assert.ok(result);
  const forEachFunction = (series) => {
    assert.ok(
      series.title,
      `Missing title for series.key = ${series.key} series.title = ${series.title}`,
    );
  };
  R.forEach(forEachFunction, result);
});

QUnit.test("keys and values", (assert) => {
  // Run.
  const result = Series.keys();
  const ownPropertyNames = Object.getOwnPropertyNames(Series);

  // Verify.
  const forEachFunction1 = (key) => {
    const key2 = Series[key];

    if (key !== "properties" && typeof key2 === "string") {
      assert.ok(Series.properties[key2], `Missing value for key = ${key}`);
    }
  };
  R.forEach(forEachFunction1, ownPropertyNames);

  const forEachFunction2 = (value) => {
    const p = ownPropertyNames.filter((key) => Series[key] === value);
    assert.equal(p.length, 1, `Missing key for value = ${value}`);
  };
  R.forEach(forEachFunction2, result);
});

QUnit.test("Series.keys()", (assert) => {
  // Run.
  const result = Series.keys();

  // Verify.
  assert.ok(result);
  assert.equal(result.length, 87);
  assert.equal(R.head(result), Series.AARON_FALK);
  assert.equal(R.last(result), Series.YOU);
});

const SeriesTest = {};
module.exports = SeriesTest;
