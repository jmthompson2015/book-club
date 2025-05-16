const QUnit = require("../node_modules/qunit/qunit/qunit.js");
const R = require("../node_modules/ramda/dist/ramda.js");

const SeriesUtilities = require("./SeriesUtilities.js");

QUnit.module("SeriesUtilities");

QUnit.test("keysWithMeeting()", (assert) => {
  // Run.
  const result = SeriesUtilities.keysWithMeeting();

  // Verify.
  assert.ok(result);
  assert.equal(result.length, 73);
  const personHead = R.head(result);
  assert.ok(personHead);
  assert.equal(personHead, "Rachel Krall");
  const personLast = R.last(result);
  assert.ok(personLast);
  assert.equal(personLast, "Windsor Horne Lockwood III");
});

QUnit.test("valuesWithMeeting()", (assert) => {
  // Run.
  const result = SeriesUtilities.valuesWithMeeting();

  // Verify.
  assert.ok(result);
  assert.equal(result.length, 73);
  const seriesHead = R.head(result);
  assert.ok(seriesHead);
  assert.equal(seriesHead.title, "Aaron Falk");
  const seriesLast = R.last(result);
  assert.ok(seriesLast);
  assert.equal(seriesLast.title, "Wine Lovers Mysteries");
});

const SeriesUtilitiesTest = {};
module.exports = SeriesUtilitiesTest;
