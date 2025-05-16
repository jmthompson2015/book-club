const QUnit = require("../node_modules/qunit/qunit/qunit.js");
const R = require("../node_modules/ramda/dist/ramda.js");

const Book = require("../artifact/Book.js");
const Person = require("../artifact/Person.js");
const Series = require("../artifact/Series.js");

const BookUtilities = require("./BookUtilities.js");

QUnit.module("BookUtilities");

QUnit.test("authorForBook()", (assert) => {
  // Setup.
  const bookKey = Book.MAKE_ME;

  // Run.
  const result = BookUtilities.authorForBook(bookKey);

  // Verify.
  assert.ok(result);
  assert.equal(result, Person.LEE_CHILD);
});

QUnit.test("authorForSeries() undefined", (assert) => {
  // Setup.
  const seriesKey = Series.EIGHT_PERFECT_MURDERS;

  // Run.
  const result = BookUtilities.authorForSeries(seriesKey);

  // Verify.
  assert.equal(result, undefined, `result = ${result}`);
});

QUnit.test("authorForSeries() Eight Perfect Murders", (assert) => {
  // Setup.
  const seriesKey = Series.EIGHT_PERFECT_MURDERS;

  // Run.
  const result = BookUtilities.authorForSeries(seriesKey);

  // Verify.
  assert.equal(result, undefined, `result = ${result}`);
});

QUnit.test("authorForSeries() Jack Reacher", (assert) => {
  // Setup.
  const seriesKey = Series.JACK_REACHER;

  // Run.
  const result = BookUtilities.authorForSeries(seriesKey);

  // Verify.
  assert.ok(result);
  assert.equal(R.head(result), Person.LEE_CHILD);
  assert.equal(R.last(result), "Andrew Child");
});

QUnit.test("determineAuthor()", (assert) => {
  // Run / Verify.
  assert.equal(BookUtilities.determineAuthor(Book.MAKE_ME), Person.LEE_CHILD);
  const authors0 = BookUtilities.determineAuthor(Series.JACK_REACHER);
  assert.equal(R.head(authors0), Person.LEE_CHILD);
  assert.equal(R.last(authors0), "Andrew Child");
  assert.equal(
    BookUtilities.determineAuthor(Series.SHARP_OBJECTS),
    Person.GILLIAN_FLYNN,
  );
});

QUnit.test("authorKeyToBooks()", (assert) => {
  // Run.
  const result = BookUtilities.authorKeyToBooks();

  // Verify.
  assert.ok(result, `result !== undefined`);
  const authorKeys = Object.keys(result);
  assert.ok(authorKeys, `authorKeys !== undefined`);
  const count = 135;
  assert.equal(
    authorKeys.length,
    count,
    `authorKeys.length = ${authorKeys.length}`,
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
      `Array.isArray(leeChildBooks) ? ${Array.isArray(leeChildBooks)}`,
    );
    assert.equal(
      leeChildBooks.length,
      8,
      `leeChildBooks.length = ${leeChildBooks.length}`,
    );
    assert.equal(R.head(leeChildBooks).title, "No Plan B");
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
        jonathanKellermanBooks,
      )}`,
    );
    assert.equal(
      jonathanKellermanBooks.length,
      3,
      `jonathanKellermanBooks.length = ${jonathanKellermanBooks.length}`,
    );
    assert.equal(R.head(jonathanKellermanBooks).title, "Crime Scene");
    assert.equal(R.last(jonathanKellermanBooks).title, "Victims");
  }
});

QUnit.test("authorKeyToBooks() meeting only", (assert) => {
  // Run.
  const result = BookUtilities.authorKeyToBooks(true);

  // Verify.
  assert.ok(result, `result !== undefined`);
  const authorKeys = Object.keys(result);
  assert.ok(authorKeys, `authorKeys !== undefined`);
  const count = 111;
  assert.equal(
    authorKeys.length,
    count,
    `authorKeys.length = ${authorKeys.length}`,
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
      `Array.isArray(leeChildBooks) ? ${Array.isArray(leeChildBooks)}`,
    );
    assert.equal(
      leeChildBooks.length,
      7,
      `leeChildBooks.length = ${leeChildBooks.length}`,
    );
    assert.equal(R.head(leeChildBooks).title, "No Plan B");
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
        jonathanKellermanBooks,
      )}`,
    );
    assert.equal(
      jonathanKellermanBooks.length,
      3,
      `jonathanKellermanBooks.length = ${jonathanKellermanBooks.length}`,
    );
    assert.equal(R.head(jonathanKellermanBooks).title, "Crime Scene");
    assert.equal(R.last(jonathanKellermanBooks).title, "Victims");
  }
});

QUnit.test("seriesKeyToBooks()", (assert) => {
  // Run.
  const result = BookUtilities.seriesKeyToBooks();

  // Verify.
  assert.ok(result, `result !== undefined`);
  const seriesKeys = Object.keys(result);
  assert.ok(seriesKeys, `seriesKeys !== undefined`);
  const count = 85;
  assert.equal(
    seriesKeys.length,
    count,
    `seriesKeys.length = ${seriesKeys.length}`,
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
      `Array.isArray(jackReacherBooks) ? ${Array.isArray(jackReacherBooks)}`,
    );
    assert.equal(
      jackReacherBooks.length,
      8,
      `jackReacherBooks.length = ${jackReacherBooks.length}`,
    );
    assert.equal(R.head(jackReacherBooks).title, "No Plan B");
    assert.equal(R.last(jackReacherBooks).title, "Personal");
  }

  {
    // Harry Bosch
    const harryBoschBooks = result[Series.HARRY_BOSCH];
    assert.ok(harryBoschBooks, `harryBoschBooks !== undefined`);
    assert.equal(
      Array.isArray(harryBoschBooks),
      true,
      `Array.isArray(harryBoschBooks) ? ${Array.isArray(harryBoschBooks)}`,
    );
    assert.equal(
      harryBoschBooks.length,
      8,
      `harryBoschBooks.length = ${harryBoschBooks.length}`,
    );
    assert.equal(R.head(harryBoschBooks).title, "Dark Sacred Night");
    assert.equal(R.last(harryBoschBooks).title, "Two Kinds of Truth");
  }
});

QUnit.test("seriesKeyToBooks() meeting only", (assert) => {
  // Run.
  const result = BookUtilities.seriesKeyToBooks(true);

  // Verify.
  assert.ok(result, `result !== undefined`);
  const seriesKeys = Object.keys(result);
  assert.ok(seriesKeys, `seriesKeys !== undefined`);
  const count = 73;
  assert.equal(
    seriesKeys.length,
    count,
    `seriesKeys.length = ${seriesKeys.length}`,
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
      `Array.isArray(jackReacherBooks) ? ${Array.isArray(jackReacherBooks)}`,
    );
    assert.equal(
      jackReacherBooks.length,
      7,
      `jackReacherBooks.length = ${jackReacherBooks.length}`,
    );
    assert.equal(R.head(jackReacherBooks).title, "No Plan B");
    assert.equal(R.last(jackReacherBooks).title, "Personal");
  }

  {
    // Harry Bosch
    const harryBoschBooks = result[Series.HARRY_BOSCH];
    assert.ok(harryBoschBooks, `harryBoschBooks !== undefined`);
    assert.equal(
      Array.isArray(harryBoschBooks),
      true,
      `Array.isArray(harryBoschBooks) ? ${Array.isArray(harryBoschBooks)}`,
    );
    assert.equal(
      harryBoschBooks.length,
      7,
      `harryBoschBooks.length = ${harryBoschBooks.length}`,
    );
    assert.equal(R.head(harryBoschBooks).title, "Dark Sacred Night");
    assert.equal(R.last(harryBoschBooks).title, "Two Kinds of Truth");
  }
});

QUnit.test("valuesBySeries()", (assert) => {
  // Setup.
  const seriesKey = Series.JACK_REACHER;

  // Run.
  const result = BookUtilities.valuesBySeries(seriesKey);

  // Verify.
  assert.ok(result);
  assert.equal(result.length, 8, `result.length = ${result.length}`);
  const seriesKeys = R.map(R.prop("key"));
  const forEachFunction = (book) => {
    assert.ok(book.series, `book.series = ${JSON.stringify(book.series)}`);
    assert.equal(seriesKeys(book.series).includes(seriesKey), true);
  };
  R.forEach(forEachFunction, result);
});

const BookUtilitiesTest = {};
module.exports = BookUtilitiesTest;
