const QUnit = require("../node_modules/qunit/qunit/qunit.js");

const HtmlUtils = require("./HtmlUtilities.js");

QUnit.module("HtmlUtilities");

QUnit.test("cell()", (assert) => {
  // Setup.
  const content = "Jack Reacher";
  const style = "font-weight: bold;";

  // Run.
  const result = HtmlUtils.cell(content, style);

  // Verify.
  assert.ok(result, "result !== undefined");
  assert.equal(
    result,
    '<td style="font-weight: bold;">Jack Reacher</td>',
    `result = :${result}:`
  );
});

QUnit.test("row()", (assert) => {
  // Setup.
  const cells = ["<td>Jack Reacher</td>", "<td>Lee Child</td>"];
  const style = "padding: 0px;";

  // Run.
  const result = HtmlUtils.row(cells, style);

  // Verify.
  assert.ok(result, "result !== undefined");
  assert.equal(
    result,
    '<tr style="padding: 0px;"><td>Jack Reacher</td><td>Lee Child</td></tr>',
    `result = :${result}:`
  );
});

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
  const cells = [HtmlUtils.cell("Jack Reacher"), HtmlUtils.cell("Lee Child")];
  const rows = [HtmlUtils.row(cells)];
  const style = "border: 0px;";

  // Run.
  const result = HtmlUtils.table(rows, style);

  // Verify.
  assert.ok(result, "result !== undefined");
  assert.equal(
    result,
    '<table style="border: 0px;"><tr><td>Jack Reacher</td><td>Lee Child</td></tr></table>',
    `result = :${result}:`
  );
});

const HtmlUtilitiesTest = {};
module.exports = HtmlUtilitiesTest;
