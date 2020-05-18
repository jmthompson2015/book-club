const UrlUtilities = {};

const DCL_PREFIX = "https://dcl.bibliocommons.com/item/show/";
const IMDB_PREFIX = "https://www.imdb.com/";
const LT_PREFIX = "https://www.librarything.com/";
const WIKIPEDIA_PREFIX = "https://en.wikipedia.org/wiki/";

UrlUtilities.dclUrl = (item) => (item.dcl ? `${DCL_PREFIX}${item.dcl}` : null);

UrlUtilities.imdbUrl = (item) =>
  item.imdb ? `${IMDB_PREFIX}${item.imdb}` : null;

UrlUtilities.libraryThingUrl = (item) =>
  item.lt ? `${LT_PREFIX}${item.lt}` : null;

UrlUtilities.wikipediaUrl = (item) =>
  item.wiki ? `${WIKIPEDIA_PREFIX}${item.wiki}` : null;

Object.freeze(UrlUtilities);

module.exports = UrlUtilities;
