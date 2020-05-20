const QUnit = require("../node_modules/qunit/qunit/qunit.js");
const R = require("../node_modules/ramda/dist/ramda.js");

const Series = require("./Series.js");

QUnit.module("Series");

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
  const length = 57;
  assert.equal(result.length, length);
  assert.equal(R.head(result), Series.AARON_FALK);
  assert.equal(R.last(result), Series.WINE_LOVERS_MYSTERIES);
});

const SeriesTest = {};
module.exports = SeriesTest;
