const QUnit = require("../node_modules/qunit/qunit/qunit.js");

const SeriesEntry = require("./SeriesEntry.js");

QUnit.module("SeriesEntry");

const PROPS = ["key", "entry"];

const createTestData = () => SeriesEntry.create(1, 2);

QUnit.test("create()", (assert) => {
  // Run.
  const series = createTestData();

  // Verify.
  PROPS.forEach((prop, i) => {
    assert.equal(series[prop], i + 1);
  });
});

const SeriesEntryTest = {};
module.exports = SeriesEntryTest;
