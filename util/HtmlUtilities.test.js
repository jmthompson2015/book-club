const QUnit = require("../node_modules/qunit/qunit/qunit.js");

const HtmlUtils = require("./HtmlUtilities.js");

QUnit.module("HtmlUtilities");

QUnit.test("span()", (assert) => {
  // Setup.
  const content = "Jack Reacher";
  const style = "font-weight: bold;";

  // Run.
  const result = HtmlUtils.span(content, style);

  // Verify.
  assert.ok(result, "result !== undefined");
  assert.equal(
    result,
    '<span style="font-weight: bold;">Jack Reacher</span>',
    `result = :${result}:`
  );
});

QUnit.test("table()", (assert) => {
  // Setup.
  const content = "<tr><td>Jack Reacher</td></tr>";
  const style = "border: 0px;";

  // Run.
  const result = HtmlUtils.table(content, style);

  // Verify.
  assert.ok(result, "result !== undefined");
  assert.equal(
    result,
    '<table style="border: 0px;"><tr><td>Jack Reacher</td></tr></table>',
    `result = :${result}:`
  );
});

QUnit.test("td()", (assert) => {
  // Setup.
  const content = "Jack Reacher";
  const style = "font-weight: bold;";

  // Run.
  const result = HtmlUtils.td(content, style);

  // Verify.
  assert.ok(result, "result !== undefined");
  assert.equal(
    result,
    '<td style="font-weight: bold;">Jack Reacher</td>',
    `result = :${result}:`
  );
});

QUnit.test("tr()", (assert) => {
  // Setup.
  const content = "<td>Jack Reacher</td>";
  const style = "padding: 0px;";

  // Run.
  const result = HtmlUtils.tr(content, style);

  // Verify.
  assert.ok(result, "result !== undefined");
  assert.equal(
    result,
    '<tr style="padding: 0px;"><td>Jack Reacher</td></tr>',
    `result = :${result}:`
  );
});

const HtmlUtilitiesTest = {};
module.exports = HtmlUtilitiesTest;
