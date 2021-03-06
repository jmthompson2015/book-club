/* eslint no-console: ["error", { allow: ["log"] }] */
/* eslint no-underscore-dangle: ["error", { "allow": ["_206_BONES"] }] */

const QUnit = require("../node_modules/qunit/qunit/qunit.js");
const R = require("../node_modules/ramda/dist/ramda.js");

const Book = require("./Book.js");
const Person = require("./Person.js");
const Series = require("./Series.js");

QUnit.module("Book");

QUnit.test("authorKeys", (assert) => {
  // Run.
  const result = Book.values();

  // Verify.
  assert.ok(result);
  const forEachFunction = (book) => {
    assert.ok(book.authorKeys, `book.authorKeys = ${book.authorKeys}`);
    if (!Array.isArray(book.authorKeys)) {
      const author = Person.properties[book.authorKeys];
      assert.ok(
        author,
        `Missing author for book.title = ${book.title} book.authorKeys = ${book.authorKeys}`
      );
    }
  };
  R.forEach(forEachFunction, result);
});

QUnit.test("authorKeyToBooks()", (assert) => {
  // Run.
  const result = Book.authorKeyToBooks();

  // Verify.
  assert.ok(result, `result !== undefined`);
  const authorKeys = Object.keys(result);
  assert.ok(authorKeys, `authorKeys !== undefined`);
  const count = 119;
  assert.equal(
    authorKeys.length,
    count,
    `authorKeys.length = ${authorKeys.length}`
  );
  const books = Object.values(result);
  assert.ok(books, `books !== undefined`);
  assert.equal(books.length, count);

  {
    // Lee Child
    const leeChildBooks = result[Person.LEE_CHILD];
    assert.ok(leeChildBooks, `leeChildBooks !== undefined`);
    assert.equal(
      Array.isArray(leeChildBooks),
      true,
      `Array.isArray(leeChildBooks) ? ${Array.isArray(leeChildBooks)}`
    );
    assert.equal(
      leeChildBooks.length,
      7,
      `leeChildBooks.length = ${leeChildBooks.length}`
    );
    assert.equal(R.head(leeChildBooks).title, "61 Hours");
    assert.equal(R.last(leeChildBooks).title, "Personal");
  }

  {
    // Jonathan Kellerman
    const jonathanKellermanBooks = result[Person.JONATHAN_KELLERMAN];
    assert.ok(jonathanKellermanBooks, `jonathanKellermanBooks !== undefined`);
    assert.equal(
      Array.isArray(jonathanKellermanBooks),
      true,
      `Array.isArray(jonathanKellermanBooks) ? ${Array.isArray(
        jonathanKellermanBooks
      )}`
    );
    assert.equal(
      jonathanKellermanBooks.length,
      3,
      `jonathanKellermanBooks.length = ${jonathanKellermanBooks.length}`
    );
    assert.equal(R.head(jonathanKellermanBooks).title, "Crime Scene");
    assert.equal(R.last(jonathanKellermanBooks).title, "Victims");
  }
});

QUnit.test("authorKeyToBooks() meeting only", (assert) => {
  // Run.
  const result = Book.authorKeyToBooks(true);

  // Verify.
  assert.ok(result, `result !== undefined`);
  const authorKeys = Object.keys(result);
  assert.ok(authorKeys, `authorKeys !== undefined`);
  const count = 94;
  assert.equal(
    authorKeys.length,
    count,
    `authorKeys.length = ${authorKeys.length}`
  );
  const books = Object.values(result);
  assert.ok(books, `books !== undefined`);
  assert.equal(books.length, count);

  {
    // Lee Child
    const leeChildBooks = result[Person.LEE_CHILD];
    assert.ok(leeChildBooks, `leeChildBooks !== undefined`);
    assert.equal(
      Array.isArray(leeChildBooks),
      true,
      `Array.isArray(leeChildBooks) ? ${Array.isArray(leeChildBooks)}`
    );
    assert.equal(
      leeChildBooks.length,
      6,
      `leeChildBooks.length = ${leeChildBooks.length}`
    );
    assert.equal(R.head(leeChildBooks).title, "61 Hours");
    assert.equal(R.last(leeChildBooks).title, "Personal");
  }

  {
    // Jonathan Kellerman
    const jonathanKellermanBooks = result[Person.JONATHAN_KELLERMAN];
    assert.ok(jonathanKellermanBooks, `jonathanKellermanBooks !== undefined`);
    assert.equal(
      Array.isArray(jonathanKellermanBooks),
      true,
      `Array.isArray(jonathanKellermanBooks) ? ${Array.isArray(
        jonathanKellermanBooks
      )}`
    );
    assert.equal(
      jonathanKellermanBooks.length,
      3,
      `jonathanKellermanBooks.length = ${jonathanKellermanBooks.length}`
    );
    assert.equal(R.head(jonathanKellermanBooks).title, "Crime Scene");
    assert.equal(R.last(jonathanKellermanBooks).title, "Victims");
  }
});

QUnit.test("keys and values", (assert) => {
  // Run.
  const result = Book.keys();
  const ownPropertyNames = Object.getOwnPropertyNames(Book);

  // Verify.
  const forEachFunction1 = (key) => {
    const key2 = Book[key];

    if (key !== "properties" && typeof key2 === "string") {
      assert.ok(Book.properties[key2], `Missing value for key = ${key}`);
    }
  };
  R.forEach(forEachFunction1, ownPropertyNames);

  const forEachFunction2 = (value) => {
    const p = ownPropertyNames.filter((key) => Book[key] === value);
    assert.equal(p.length, 1, `Missing key for value = ${value}`);
  };
  R.forEach(forEachFunction2, result);
});

QUnit.test("Book.keys()", (assert) => {
  // Run.
  const result = Book.keys();

  // Verify.
  assert.ok(result);
  assert.equal(result.length, 223);
  assert.equal(R.head(result), Book._206_BONES);
  assert.equal(R.last(result), Book.YOU);
});

QUnit.test("seriesKeyToBooks()", (assert) => {
  // Run.
  const result = Book.seriesKeyToBooks();

  // Verify.
  assert.ok(result, `result !== undefined`);
  const seriesKeys = Object.keys(result);
  assert.ok(seriesKeys, `seriesKeys !== undefined`);
  const count = 72;
  assert.equal(
    seriesKeys.length,
    count,
    `seriesKeys.length = ${seriesKeys.length}`
  );
  const books = Object.values(result);
  assert.ok(books, `books !== undefined`);
  assert.equal(books.length, count);

  {
    // Jack Reacher
    const jackReacherBooks = result[Series.JACK_REACHER];
    assert.ok(jackReacherBooks, `jackReacherBooks !== undefined`);
    assert.equal(
      Array.isArray(jackReacherBooks),
      true,
      `Array.isArray(jackReacherBooks) ? ${Array.isArray(jackReacherBooks)}`
    );
    assert.equal(
      jackReacherBooks.length,
      7,
      `jackReacherBooks.length = ${jackReacherBooks.length}`
    );
    assert.equal(R.head(jackReacherBooks).title, "61 Hours");
    assert.equal(R.last(jackReacherBooks).title, "Personal");
  }

  {
    // Harry Bosch
    const harryBoschBooks = result[Series.HARRY_BOSCH];
    assert.ok(harryBoschBooks, `harryBoschBooks !== undefined`);
    assert.equal(
      Array.isArray(harryBoschBooks),
      true,
      `Array.isArray(harryBoschBooks) ? ${Array.isArray(harryBoschBooks)}`
    );
    assert.equal(
      harryBoschBooks.length,
      7,
      `harryBoschBooks.length = ${harryBoschBooks.length}`
    );
    assert.equal(R.head(harryBoschBooks).title, "Dark Sacred Night");
    assert.equal(R.last(harryBoschBooks).title, "Two Kinds of Truth");
  }
});

QUnit.test("seriesKeyToBooks() meeting only", (assert) => {
  // Run.
  const result = Book.seriesKeyToBooks(true);

  // Verify.
  assert.ok(result, `result !== undefined`);
  const seriesKeys = Object.keys(result);
  assert.ok(seriesKeys, `seriesKeys !== undefined`);
  const count = 60;
  assert.equal(
    seriesKeys.length,
    count,
    `seriesKeys.length = ${seriesKeys.length}`
  );
  const books = Object.values(result);
  assert.ok(books, `books !== undefined`);
  assert.equal(books.length, count);

  {
    // Jack Reacher
    const jackReacherBooks = result[Series.JACK_REACHER];
    assert.ok(jackReacherBooks, `jackReacherBooks !== undefined`);
    assert.equal(
      Array.isArray(jackReacherBooks),
      true,
      `Array.isArray(jackReacherBooks) ? ${Array.isArray(jackReacherBooks)}`
    );
    assert.equal(
      jackReacherBooks.length,
      6,
      `jackReacherBooks.length = ${jackReacherBooks.length}`
    );
    assert.equal(R.head(jackReacherBooks).title, "61 Hours");
    assert.equal(R.last(jackReacherBooks).title, "Personal");
  }

  {
    // Harry Bosch
    const harryBoschBooks = result[Series.HARRY_BOSCH];
    assert.ok(harryBoschBooks, `harryBoschBooks !== undefined`);
    assert.equal(
      Array.isArray(harryBoschBooks),
      true,
      `Array.isArray(harryBoschBooks) ? ${Array.isArray(harryBoschBooks)}`
    );
    assert.equal(
      harryBoschBooks.length,
      6,
      `harryBoschBooks.length = ${harryBoschBooks.length}`
    );
    assert.equal(R.head(harryBoschBooks).title, "Dark Sacred Night");
    assert.equal(R.last(harryBoschBooks).title, "Two Kinds of Truth");
  }
});

QUnit.test("valuesBySeries()", (assert) => {
  // Setup.
  const seriesKey = Series.JACK_REACHER;

  // Run.
  const result = Book.valuesBySeries(seriesKey);

  // Verify.
  assert.ok(result);
  assert.equal(result.length, 7, `result.length = ${result.length}`);
  const seriesKeys = R.map(R.prop("key"));
  const forEachFunction = (book) => {
    assert.ok(book.series, `book.series = ${JSON.stringify(book.series)}`);
    assert.equal(seriesKeys(book.series).includes(seriesKey), true);
  };
  R.forEach(forEachFunction, result);
});

const BookTest = {};
module.exports = BookTest;
