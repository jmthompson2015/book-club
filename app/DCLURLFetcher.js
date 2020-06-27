/* eslint no-console: ["error", { allow: ["log", "warn"] }] */
/* eslint no-underscore-dangle: ["error", { "allow": ["_book"] }] */

const FetchUtilities = require("../util/FetchUtilities.js");

const Book = require("../artifact/Book.js");
const Person = require("../artifact/Person.js");

const BASE_URL = "https://dcl.bibliocommons.com";
const SEARCH_PREFIX = "http://dcl.bibliocommons.com/search?q=";
const SEARCH_SUFFIX = "&t=smart&search_category=keyword";

class DCLURLFetcher {
  constructor(book) {
    this._book = book;
  }

  get book() {
    return this._book;
  }

  createUrl() {
    const author = Person.properties[this.book.authorKeys];
    let searchString = `${this.book.title} by ${author.first} ${author.last}`;

    searchString = searchString.replace(/\u00EE/g, "i");
    searchString = searchString.replace(/\u00F8/g, "o");
    searchString = searchString.replace(/\u2019/g, "");
    searchString = searchString.replace(/'/g, "");
    searchString = searchString.replace(/ /g, "+");

    return SEARCH_PREFIX + searchString + SEARCH_SUFFIX;
  }

  fetchData() {
    return new Promise((resolve) => {
      const receiveData = (htmlDocument) => {
        const dclUrl = this.parse(htmlDocument);
        resolve({ book: this.book, dclUrl });
      };

      const url = this.createUrl();
      const options = {};
      FetchUtilities.fetchRetry(url, options, 3)
        .then((response) => response.text())
        .then(receiveData);
    });
  }

  parse(htmlDocument) {
    let dclUrl;

    const key0 = '<span class="icon icon-book-open"';
    const index0 = htmlDocument.indexOf(key0);

    if (index0 >= 0) {
      const key1 = '<a href="';
      const index1 = htmlDocument.indexOf(key1, index0 + key0.length);

      if (index1 >= 0) {
        const key2 = '"';
        const index2 = htmlDocument.indexOf(key2, index1 + key1.length);

        if (index2 >= 0) {
          dclUrl =
            BASE_URL +
            htmlDocument.substring(index1 + key1.length, index2).trim();
        }
      }
    }

    if (dclUrl === undefined) {
      console.warn(`missing row for book = ${this.book.title}`);
    }

    return dclUrl;
  }
}

const books0 = Book.values();
console.log(`books0.length = ${books0.length}`);
const filterFunction = (book) => !book.dcl;
const books = books0.filter(filterFunction);
console.log(`books.length = ${books.length}`);
const forEachFunction = (book) => {
  const fetcher = new DCLURLFetcher(book);
  fetcher.fetchData().then(({ dclUrl }) => {
    if (dclUrl) {
      console.log(`${book.title}: ${dclUrl}`);
    }
  });
};
books.forEach(forEachFunction);
