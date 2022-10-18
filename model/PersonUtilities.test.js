const QUnit = require("../node_modules/qunit/qunit/qunit.js");

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

const PersonUtilitiesTest = {};
module.exports = PersonUtilitiesTest;
