const R = require("../node_modules/ramda/dist/ramda.js");

const HtmlUtils = require("../util/HtmlUtilities.js");

const Person = require("../artifact/Person.js");
const Series = require("../artifact/Series.js");

const WikiUtilities = {};

const ICON_SIZE = "20px";

const DCL_IMAGE = "DouglasCountyLibraries418.png";
const IMDB_IMAGE = "IMDb256.png";
const LT_IMAGE = "LibraryThing180.png";
const WIKIPEDIA_IMAGE = "Wikipedia128.png";

const DCL_PREFIX = "https://dcl.bibliocommons.com/item/show/";
const IMDB_PREFIX = "https://www.imdb.com/";
const LT_PREFIX = "https://www.librarything.com/";
const WIKIPEDIA_PREFIX = "https://en.wikipedia.org/wiki/";

const dclUrl = (item) => (item.dcl ? `${DCL_PREFIX}${item.dcl}` : null);

const imdbUrl = (item) => (item.imdb ? `${IMDB_PREFIX}${item.imdb}` : null);

const labelLinkedImagesTable = (label, linkedImages) => {
  const style1 = `border:0px; padding:0px;`;
  const style2 = `${style1} float: right;`;
  const style3 = `${style1} width:100%;`;
  const cell1 = HtmlUtils.td(label, style1);
  const cell2 = HtmlUtils.td(linkedImages, style2);
  const row = HtmlUtils.tr(`${cell1}${cell2}`);

  return HtmlUtils.table(row, style3);
};

const libraryThingUrl = (item) => (item.lt ? `${LT_PREFIX}${item.lt}` : null);

const wikilink = (page, label) => `[[${page} | ${label}]]`;

const wikilinkedImage = (href, image, tooltip) =>
  href ? `[[Image:${image}|${ICON_SIZE}|link=${href}|${tooltip}]]` : "";

const wikipediaUrl = (item) =>
  item.wiki ? `${WIKIPEDIA_PREFIX}${item.wiki}` : null;

// /////////////////////////////////////////////////////////////////////////////
WikiUtilities.createBookText = (book) => {
  let answer = "";

  if (book) {
    let bookPrefix = "";

    if (book.title.startsWith("A ")) {
      bookPrefix = `data-sort-value="${book.title.substring("A ".length)}"| `;
    } else if (book.title.startsWith("The ")) {
      bookPrefix = `data-sort-value="${book.title.substring("The ".length)}"| `;
    }

    const linkedImages = WikiUtilities.linkedImages(book);
    const table = labelLinkedImagesTable(book.title, linkedImages);
    answer = `${bookPrefix} ${table}`;
  }

  return answer.trim();
};

WikiUtilities.createMeetingText1 = (meeting) => {
  let answer = "";

  if (meeting) {
    answer = wikilink(`${meeting} Meeting Notes`, meeting);
  }

  return answer;
};

WikiUtilities.createMeetingText2 = (meeting) => {
  let answer = "";

  if (meeting) {
    answer = `[[${meeting} Meeting Notes]]`;
  }

  return answer;
};

WikiUtilities.createMovieText = (movie) => {
  let answer = "";

  if (movie) {
    let moviePrefix = "";

    if (movie.title.startsWith("A ")) {
      moviePrefix = `data-sort-value="${movie.title.substring("A ".length)}"| `;
    } else if (movie.title.startsWith("The ")) {
      moviePrefix = `data-sort-value="${movie.title.substring(
        "The ".length
      )}"| `;
    }

    const linkedImages = WikiUtilities.linkedImages(movie);
    const table = labelLinkedImagesTable(movie.title, linkedImages);
    answer = `${moviePrefix} ${table}`;
  }

  return answer.trim();
};

WikiUtilities.createPersonLabel = (person) => {
  let answer;

  if (person.middle) {
    answer = `${person.first} ${person.middle} ${person.last}`;
  } else {
    answer = `${person.first} ${person.last}`;
  }

  return answer;
};

WikiUtilities.createPersonPrefix = (person) => {
  let answer;

  if (person.middle) {
    answer = `data-sort-value="${person.last}, ${person.first} ${person.middle}"|`;
  } else {
    answer = `data-sort-value="${person.last}, ${person.first}"|`;
  }

  return answer;
};

WikiUtilities.createPersonText = (personObj) => {
  let answer = "";

  if (personObj) {
    if (Array.isArray(personObj)) {
      const mapFunction = (personKey) => {
        const myPerson = Person.properties[personKey];
        const personLabel = WikiUtilities.createPersonLabel(myPerson);
        const linkedImages = WikiUtilities.linkedImages(myPerson);

        return labelLinkedImagesTable(personLabel, linkedImages);
      };

      const personLinks = R.map(mapFunction, personObj);
      answer = personLinks.join(" ");
    } else {
      const person = Person.properties[personObj];

      if (person) {
        const personPrefix = WikiUtilities.createPersonPrefix(person);
        const personLabel = WikiUtilities.createPersonLabel(person);
        const linkedImages = WikiUtilities.linkedImages(person);
        const table = labelLinkedImagesTable(personLabel, linkedImages);
        answer = `${personPrefix} ${table}`;
      } else {
        throw new Error(`Missing person for personObj = :${personObj}:`);
      }
    }
  }

  return answer;
};

WikiUtilities.createSeriesLabel = (seriesObj) => {
  let answer = "";

  if (seriesObj) {
    if (seriesObj.key) {
      const series = Series.properties[seriesObj.key];
      answer = `${series.title} #${seriesObj.entry}`;
    } else {
      answer = `${seriesObj.title}`;
    }
  }

  return answer;
};

WikiUtilities.createSeriesText = (seriesObj) => {
  let answer = "";

  if (seriesObj) {
    if (Array.isArray(seriesObj)) {
      const mapFunction = (seriesObject) => {
        const series = Series.properties[seriesObject.key];
        const seriesLabel = WikiUtilities.createSeriesLabel(seriesObject);
        const linkedImages = WikiUtilities.linkedImages(series);

        return labelLinkedImagesTable(seriesLabel, linkedImages);
      };

      const seriesLinks = R.map(mapFunction, seriesObj);
      answer = seriesLinks.join(" ");
    } else if (seriesObj.key) {
      const series = Series.properties[seriesObj.key];
      const seriesLabel = WikiUtilities.createSeriesLabel(seriesObj);
      const linkedImages = WikiUtilities.linkedImages(series);
      answer = labelLinkedImagesTable(seriesLabel, linkedImages);
    } else {
      const seriesLabel = WikiUtilities.createSeriesLabel(seriesObj);
      const linkedImages = WikiUtilities.linkedImages(seriesObj);
      answer = labelLinkedImagesTable(seriesLabel, linkedImages);
    }
  }

  return answer.trim();
};

WikiUtilities.createTVSeriesText = (tvSeries) => {
  let answer = "";

  if (tvSeries) {
    let tvSeriesPrefix = "";

    if (tvSeries.title.startsWith("A ")) {
      tvSeriesPrefix = `data-sort-value="${tvSeries.title.substring(
        "A ".length
      )}"| `;
    } else if (tvSeries.title.startsWith("The ")) {
      tvSeriesPrefix = `data-sort-value="${tvSeries.title.substring(
        "The ".length
      )}"| `;
    }

    const linkedImages = WikiUtilities.linkedImages(tvSeries);
    const table = labelLinkedImagesTable(tvSeries.title, linkedImages);
    answer = `${tvSeriesPrefix} ${table}`;
  }

  return answer.trim();
};

WikiUtilities.linkedImages = (item) => {
  const dclLink = wikilinkedImage(
    dclUrl(item),
    DCL_IMAGE,
    "Douglas County Libraries"
  );
  const imdbLink = wikilinkedImage(
    imdbUrl(item),
    IMDB_IMAGE,
    "Internet Movie Database"
  );
  const ltLink = wikilinkedImage(
    libraryThingUrl(item),
    LT_IMAGE,
    "LibraryThing"
  );
  const wikiLink = wikilinkedImage(
    wikipediaUrl(item),
    WIKIPEDIA_IMAGE,
    "Wikipedia"
  );
  const style = "border:0px; padding:0px;";

  const cell1 = dclLink ? HtmlUtils.td(dclLink, style) : "";
  const cell2 = imdbLink ? HtmlUtils.td(imdbLink, style) : "";
  const cell3 = ltLink ? HtmlUtils.td(ltLink, style) : "";
  const cell4 = wikiLink ? HtmlUtils.td(wikiLink, style) : "";
  const row = HtmlUtils.tr(`${cell1}${cell2}${cell3}${cell4}`);

  return HtmlUtils.table(row, style);
};

Object.freeze(WikiUtilities);

module.exports = WikiUtilities;
