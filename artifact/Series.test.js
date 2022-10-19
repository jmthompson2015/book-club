const QUnit = require("../node_modules/qunit/qunit/qunit.js");
const R = require("../node_modules/ramda/dist/ramda.js");

const Series = require("./Series.js");

QUnit.module("Series");

QUnit.skip("keys and values", (assert) => {
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

QUnit.skip("Series.keys()", (assert) => {
  // Run.
  const result = Series.keys();

  // Verify.
  assert.ok(result);
  assert.equal(result.length, 82);
  assert.equal(R.head(result), Series.A_FATAL_INVERSION);
  assert.equal(R.last(result), Series.YOU);
});

const SeriesTest = {};
module.exports = SeriesTest;
