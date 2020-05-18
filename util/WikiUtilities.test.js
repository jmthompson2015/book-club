const QUnit = require("../node_modules/qunit/qunit/qunit.js");

const WikiUtils = require("./WikiUtilities.js");

QUnit.module("WikiUtilities");

QUnit.test("cell()", (assert) => {
  // Setup.
  const content = "Jack Reacher";
  const style = "font-weight: bold;";

  // Run.
  const result = WikiUtils.cell(content, style);

  // Verify.
  assert.ok(result, "result !== undefined");
  assert.equal(
    result,
    '| style="font-weight: bold;" | Jack Reacher\n',
    `result = :${result}:`
  );
});

QUnit.test("headerCell()", (assert) => {
  // Setup.
  const content = "Author";
  const style = "font-weight: bold;";

  // Run.
  const result = WikiUtils.headerCell(content, style);

  // Verify.
  assert.ok(result, "result !== undefined");
  assert.equal(
    result,
    '! style="font-weight: bold;" |Author\n',
    `result = :${result}:`
  );
});

QUnit.test("row()", (assert) => {
  // Setup.
  const cells = [WikiUtils.cell("Jack Reacher"), WikiUtils.cell("Lee Child")];
  const style = "padding: 0px;";

  // Run.
  const result = WikiUtils.row(cells, style);

  // Verify.
  assert.ok(result, "result !== undefined");
  assert.equal(
    result,
    '|- style="padding: 0px;"\n| Jack Reacher\n| Lee Child\n',
    `result = :${result}:`
  );
});

QUnit.test("table()", (assert) => {
  // Setup.
  const headers = ["One", "Two", "Three"];
  const cells = [
    WikiUtils.cell("Jack Reacher"),
    WikiUtils.cell("Lee Child"),
    WikiUtils.cell(3),
  ];
  const rows = [WikiUtils.row(cells)];
  const aClass = "wikitable sortable";

  // Run.
  const result = WikiUtils.table(headers, rows, aClass);

  // Verify.
  assert.ok(result, "result !== undefined");
  assert.equal(
    result,
    '{| class="wikitable sortable"\n!One\n!Two\n!Three\n|-\n| Jack Reacher\n| Lee Child\n| 3\n|}',
    `result = :${result}:`
  );
});

const WikiUtilitiesTest = {};
module.exports = WikiUtilitiesTest;
