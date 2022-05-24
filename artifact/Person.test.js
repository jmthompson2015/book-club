/* eslint no-console: ["error", { allow: ["log"] }] */

const QUnit = require("../node_modules/qunit/qunit/qunit.js");
const R = require("../node_modules/ramda/dist/ramda.js");

const Person = require("./Person.js");

QUnit.module("Person");

QUnit.test("keys and values", (assert) => {
  // Run.
  const result = Person.keys();
  const ownPropertyNames = Object.getOwnPropertyNames(Person);

  // Verify.
  const forEachFunction1 = (key) => {
    const key2 = Person[key];

    if (key !== "properties" && typeof key2 === "string") {
      assert.ok(Person.properties[key2], `Missing value for key = ${key}`);
    }
  };
  R.forEach(forEachFunction1, ownPropertyNames);

  const forEachFunction2 = (value) => {
    const p = ownPropertyNames.filter((key) => Person[key] === value);
    assert.equal(p.length, 1, `Missing key for value = ${value}`);
  };
  R.forEach(forEachFunction2, result);
});

QUnit.test("Person.keys()", (assert) => {
  // Run.
  const result = Person.keys();

  // Verify.
  assert.ok(result);
  assert.equal(result.length, 211);
  assert.equal(R.head(result), Person.AA_MILNE);
  assert.equal(R.last(result), Person.WILLY_RUSSELL);
});

QUnit.test("createLabel() undefined", (assert) => {
  // Setup.
  const person = undefined;

  // Run.
  const result = Person.createLabel(person);

  // Verify.
  assert.equal(result, "", `result = :${result}:`);
});

QUnit.test("createLabel() first last", (assert) => {
  // Setup.
  const person = { first: "Lee", last: "Child" };

  // Run.
  const result = Person.createLabel(person);

  // Verify.
  assert.equal(result, "Lee Child", `result = :${result}:`);
});

QUnit.test("createLabel() first middle last", (assert) => {
  // Setup.
  const person = { first: "James", middle: "M.", last: "Cain" };

  // Run.
  const result = Person.createLabel(person);

  // Verify.
  assert.equal(result, "James M. Cain", `result = :${result}:`);
});

QUnit.test("createLabel() last", (assert) => {
  // Setup.
  const person = { last: "Boileau-Narcejac" };

  // Run.
  const result = Person.createLabel(person);

  // Verify.
  assert.equal(result, "Boileau-Narcejac", `result = :${result}:`);
});

const PersonTest = {};
module.exports = PersonTest;
