const QUnit = require("../node_modules/qunit/qunit/qunit.js");
const R = require("../node_modules/ramda/dist/ramda.js");

const PersonUtilities = require("./PersonUtilities.js");

QUnit.module("PersonUtilities");

QUnit.test("createLabel() undefined", (assert) => {
  // Setup.
  const person = undefined;

  // Run.
  const result = PersonUtilities.createLabel(person);

  // Verify.
  assert.equal(result, "", `result = :${result}:`);
});

QUnit.test("createLabel() first last", (assert) => {
  // Setup.
  const person = { first: "Lee", last: "Child" };

  // Run.
  const result = PersonUtilities.createLabel(person);

  // Verify.
  assert.equal(result, "Lee Child", `result = :${result}:`);
});

QUnit.test("createLabel() first middle last", (assert) => {
  // Setup.
  const person = { first: "James", middle: "M.", last: "Cain" };

  // Run.
  const result = PersonUtilities.createLabel(person);

  // Verify.
  assert.equal(result, "James M. Cain", `result = :${result}:`);
});

QUnit.test("createLabel() last", (assert) => {
  // Setup.
  const person = { last: "Boileau-Narcejac" };

  // Run.
  const result = PersonUtilities.createLabel(person);

  // Verify.
  assert.equal(result, "Boileau-Narcejac", `result = :${result}:`);
});

QUnit.test("keysWithMeeting()", (assert) => {
  // Run.
  const result = PersonUtilities.keysWithMeeting();

  // Verify.
  assert.ok(result);
  assert.equal(result.length, 112);
  const personHead = R.head(result);
  assert.ok(personHead);
  assert.equal(personHead, "S.C. Lalli");
  const personLast = R.last(result);
  assert.ok(personLast);
  assert.equal(personLast, "simonBeckett");
});

QUnit.test("valuesWithMeeting()", (assert) => {
  // Run.
  const result = PersonUtilities.valuesWithMeeting();

  // Verify.
  assert.ok(result);
  assert.equal(result.length, 112);
  const personHead = R.head(result);
  assert.ok(personHead);
  assert.equal(personHead.first, "Agatha");
  assert.equal(personHead.last, "Christie");
  const personLast = R.last(result);
  assert.ok(personLast);
  assert.equal(personLast.first, "William");
  assert.equal(personLast.last, "Landay");
});

const PersonUtilitiesTest = {};
module.exports = PersonUtilitiesTest;
