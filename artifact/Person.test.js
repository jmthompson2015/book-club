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
  const length = 122;
  assert.equal(result.length, length);
  assert.equal(R.head(result), Person.AGATHA_CHRISTIE);
  assert.equal(R.last(result), Person.WILLIAM_LANDAY);
});

const PersonTest = {};
module.exports = PersonTest;
