/* eslint no-console: ["error", { allow: ["log"] }] */

const Person = require("./Person.js");
const QUnit = require("../node_modules/qunit/qunit/qunit.js");

QUnit.module("Person");

QUnit.test("keys and values", (assert) => {
  // Run.
  const result = Person.keys();
  const ownPropertyNames = Object.getOwnPropertyNames(Person);

  // Verify.
  ownPropertyNames.forEach((key) => {
    const key2 = Person[key];

    if (key !== "properties" && typeof key2 === "string") {
      assert.ok(Person.properties[key2], `Missing value for key = ${key}`);
    }
  });

  result.forEach((value) => {
    const p = ownPropertyNames.filter((key) => Person[key] === value);
    assert.equal(p.length, 1, `Missing key for value = ${value}`);
  });
});

QUnit.test("Person.keys()", (assert) => {
  // Run.
  const result = Person.keys();

  // Verify.
  assert.ok(result);
  const length = 49;
  assert.equal(result.length, length);
  assert.equal(result[0], Person.AJ_FINN);
  assert.equal(result[length - 1], Person.TESS_GERRITSEN);
});

const PersonTest = {};
module.exports = PersonTest;
