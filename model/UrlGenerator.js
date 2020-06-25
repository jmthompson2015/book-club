const UrlGenerator = {};

const DCL_PREFIX = "https://dcl.bibliocommons.com/item/show/";
const GR_PREFIX = "https://www.goodreads.com/";
const IMDB_PREFIX = "https://www.imdb.com/";
const LT_PREFIX = "https://www.librarything.com/";
const WIKIPEDIA_PREFIX = "https://en.wikipedia.org/wiki/";

UrlGenerator.dclUrl = (item) => (item.dcl ? `${DCL_PREFIX}${item.dcl}` : null);

UrlGenerator.goodreadsUrl = (item) =>
  item.gr ? `${GR_PREFIX}${item.gr}` : null;

UrlGenerator.imdbUrl = (item) =>
  item.imdb ? `${IMDB_PREFIX}${item.imdb}` : null;

UrlGenerator.libraryThingUrl = (item) =>
  item.lt ? `${LT_PREFIX}${item.lt}` : null;

UrlGenerator.wikipediaUrl = (item) =>
  item.wiki ? `${WIKIPEDIA_PREFIX}${item.wiki}` : null;

Object.freeze(UrlGenerator);

module.exports = UrlGenerator;
