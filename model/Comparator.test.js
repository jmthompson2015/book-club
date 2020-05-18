const QUnit = require("../node_modules/qunit/qunit/qunit.js");

const Book = require("../artifact/Book.js");

const Comparator = require("./Comparator.js");

QUnit.module("Comparator");

QUnit.test("compareByMeeting()", (assert) => {
  // Setup.
  const book1 = Book.properties[Book.FORCE_OF_NATURE_2018];
  const book2 = Book.properties[Book.THE_ESCAPE_ROOM];
  const book3 = Book.properties[Book.THE_SILENT_PATIENT];
  const compareByMeeting = Comparator.compareByMeeting(true);

  // Run / Verify.
  assert.equal(compareByMeeting(book1, book1), 0);
  assert.equal(compareByMeeting(book1, book2), -1);
  assert.equal(compareByMeeting(book1, book3), -1);

  assert.equal(compareByMeeting(book2, book1), 1);
  assert.equal(compareByMeeting(book2, book2), 0);
  assert.equal(compareByMeeting(book2, book3), -1);

  assert.equal(compareByMeeting(book3, book1), 1);
  assert.equal(compareByMeeting(book3, book2), 1);
  assert.equal(compareByMeeting(book3, book3), 0);
});

QUnit.test("compareByMeeting() no meeting", (assert) => {
  // Setup.
  const book1 = Book.properties[Book.GONE_GIRL];
  const book2 = Book.properties[Book.THE_BLACK_ECHO];
  const compareByMeeting = Comparator.compareByMeeting(true);

  // Run / Verify.
  assert.equal(compareByMeeting(book1, book1), 0);
  assert.equal(compareByMeeting(book1, book2), 1);

  assert.equal(compareByMeeting(book2, book1), -1);
  assert.equal(compareByMeeting(book2, book2), 0);
});

QUnit.test("compareByTitle()", (assert) => {
  // Setup.
  const book1 = Book.properties[Book.FORCE_OF_NATURE_2018];
  const book2 = Book.properties[Book.THE_ESCAPE_ROOM];
  const book3 = Book.properties[Book.THE_SILENT_PATIENT];

  // Run / Verify.
  assert.equal(Comparator.compareByTitle(book1, book1), 0);
  assert.equal(Comparator.compareByTitle(book1, book2), 1);
  assert.equal(Comparator.compareByTitle(book1, book3), -1);

  assert.equal(Comparator.compareByTitle(book2, book1), -1);
  assert.equal(Comparator.compareByTitle(book2, book2), 0);
  assert.equal(Comparator.compareByTitle(book2, book3), -1);

  assert.equal(Comparator.compareByTitle(book3, book1), 1);
  assert.equal(Comparator.compareByTitle(book3, book2), 1);
  assert.equal(Comparator.compareByTitle(book3, book3), 0);
});

const ComparatorTest = {};
module.exports = ComparatorTest;
