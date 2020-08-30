const Person = require("../artifact/Person.js");

const UrlGenerator = {};

const DCL_PREFIX = "https://dcl.bibliocommons.com/item/show/";
const DCL_SEARCH =
  "https://dcl.bibliocommons.com/v2/search?searchType=smart&query=";
const GR_PREFIX = "https://www.goodreads.com/";
const GR_SEARCH = "https://www.goodreads.com/search?q=";
const IMDB_PREFIX = "https://www.imdb.com/";
const IMDB_SEARCH = "https://www.imdb.com/find?s=all&q=";
const LT_PREFIX = "https://www.librarything.com/";
const LT_SEARCH = "https://www.librarything.com/search.php?search=";
const WIKIPEDIA_PREFIX = "https://en.wikipedia.org/wiki/";
const WIKIPEDIA_SEARCH = WIKIPEDIA_PREFIX;

const isPerson = (item) => item && (item.first || item.middle || item.last);

const searchUrl = (prefix, item, replacement = "+") => {
  let answer = null;

  if (item && [undefined, true].includes(item.useSearch)) {
    if (item && item.title) {
      const title = item.title.replace(/ /g, replacement);
      answer = `${prefix}${title}`;
    } else if (isPerson(item)) {
      const name0 = Person.createLabel(item);
      const name = name0.replace(/ /g, replacement);
      answer = `${prefix}${name}`;
    }
  }

  return answer;
};

// /////////////////////////////////////////////////////////////////////////////
UrlGenerator.dclSearchUrl = (item) => searchUrl(DCL_SEARCH, item);

UrlGenerator.dclUrl = (item) =>
  item && item.dcl ? `${DCL_PREFIX}${item.dcl}` : null;

UrlGenerator.goodreadsSearchUrl = (item) => searchUrl(GR_SEARCH, item);

UrlGenerator.goodreadsUrl = (item) =>
  item && item.gr ? `${GR_PREFIX}${item.gr}` : null;

UrlGenerator.imdbSearchUrl = (item) => searchUrl(IMDB_SEARCH, item);

UrlGenerator.imdbUrl = (item) =>
  item && item.imdb ? `${IMDB_PREFIX}${item.imdb}` : null;

UrlGenerator.libraryThingSearchUrl = (item) => searchUrl(LT_SEARCH, item);

UrlGenerator.libraryThingUrl = (item) =>
  item && item.lt ? `${LT_PREFIX}${item.lt}` : null;

UrlGenerator.wikipediaSearchUrl = (item) =>
  searchUrl(WIKIPEDIA_SEARCH, item, "_");

UrlGenerator.wikipediaUrl = (item) =>
  item && item.wiki ? `${WIKIPEDIA_PREFIX}${item.wiki}` : null;

Object.freeze(UrlGenerator);

module.exports = UrlGenerator;
