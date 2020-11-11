const R = require("../node_modules/ramda/dist/ramda.js");

const HtmlUtils = require("../util/HtmlUtilities.js");
const WikiUtils = require("../util/WikiUtilities.js");

const Person = require("../artifact/Person.js");
const Series = require("../artifact/Series.js");

const UrlGenerator = require("./UrlGenerator.js");

const Formatter = {};

const ICON_SIZE = "20px";

const DCL_IMAGE = "DouglasCountyLibraries.png";
const DCL_IMAGE_2 = "DouglasCountyLibraries_2.png";
const GR_IMAGE = "Goodreads.png";
const GR_IMAGE_2 = "Goodreads_2.png";
const IMDB_IMAGE = "IMDb.png";
const IMDB_IMAGE_2 = "IMDb_2.png";
const LT_IMAGE = "LibraryThing.png";
const LT_IMAGE_2 = "LibraryThing_2.png";
const WIKIPEDIA_IMAGE = "Wikipedia.png";
const WIKIPEDIA_IMAGE_2 = "Wikipedia_2.png";

const createItemPrefix = (item) => {
  let answer = "";

  if (item.title.startsWith("A ")) {
    answer = `data-sort-value="${item.title.substring("A ".length)}"| `;
  } else if (item.title.startsWith("The ")) {
    answer = `data-sort-value="${item.title.substring("The ".length)}"| `;
  }

  return answer;
};

const createPersonPrefix = (person) => {
  let answer;

  if (person.middle) {
    answer = `data-sort-value="${person.last}, ${person.first} ${person.middle}"|`;
  } else {
    answer = `data-sort-value="${person.last}, ${person.first}"|`;
  }

  return answer;
};

const createSeriesLabel = (seriesEntry) => {
  let answer = "";

  if (seriesEntry) {
    const series = Series.properties[seriesEntry.key];

    if (seriesEntry.entry) {
      answer = `${series.title} #${seriesEntry.entry}`;
    } else {
      answer = `${series.title}`;
    }
  }

  return answer;
};

const labelLinkedImagesTable = (label, linkedImages) => {
  const style1 = `vertical-align: middle;`;
  const style2 = `float: right;`;
  const style3 = `width:100%;`;
  const cell1 = HtmlUtils.cell(label, style1);
  const cell2 = HtmlUtils.cell(linkedImages, style2);
  const row = HtmlUtils.row([cell1, cell2]);

  return HtmlUtils.table([row], style3);
};

const wikilinkedImage = (href, image, tooltip) =>
  href ? `[[Image:${image}|${ICON_SIZE}|link=${href}|${tooltip}]]` : "";

const linkedImage = (url1, url2, image1, image2, tooltip) => {
  let answer = null;

  if (url1) {
    answer = wikilinkedImage(url1, image1, tooltip);
  } else if (url2) {
    answer = wikilinkedImage(url2, image2, tooltip);
  }

  return answer;
};

// /////////////////////////////////////////////////////////////////////////////
Formatter.createItemText = (item, useSearch = false) => {
  let answer = "";

  if (item) {
    const itemPrefix = createItemPrefix(item);
    const linkedImages = Formatter.linkedImages(item, useSearch);
    const table = labelLinkedImagesTable(item.title, linkedImages);
    answer = `${itemPrefix} ${table}`;
  }

  return answer.trim();
};

Formatter.createBookText = (book, useSearch = false) =>
  Formatter.createItemText(book, useSearch);
Formatter.createMovieText = (movie, useSearch = false) =>
  Formatter.createItemText(movie, useSearch);
Formatter.createTVSeriesText = (tvSeries, useSearch = false) =>
  Formatter.createItemText(tvSeries, useSearch);

Formatter.createMeetingText1 = (meeting) => {
  let answer = "";

  if (meeting) {
    answer = WikiUtils.link(`${meeting} Meeting Notes`, meeting);
  }

  return answer;
};

Formatter.createMeetingText2 = (meeting) => {
  let answer = "";

  if (meeting) {
    answer = `[[${meeting} Meeting Notes]]`;
  }

  return answer;
};

Formatter.createPersonText = (personArray, useSearch = false) => {
  let answer = "";

  if (personArray && personArray.length > 0) {
    const mapFunction = (personKey) => {
      const person = Person.properties[personKey];

      if (person) {
        const personLabel = Person.createLabel(person);
        const linkedImages = Formatter.linkedImages(person, useSearch);

        return labelLinkedImagesTable(personLabel, linkedImages);
      }
      throw new Error(`Missing person for key: ${personKey}`);
    };

    const personLinks = R.map(mapFunction, personArray);
    const person = Person.properties[personArray[0]];
    const personPrefix = createPersonPrefix(person);
    answer = `${personPrefix} ${personLinks.join(" ")}`;
  }

  return answer;
};

Formatter.createSeriesText = (seriesArray, useSearch = false) => {
  let answer = "";

  if (seriesArray) {
    const mapFunction = (seriesEntry) => {
      const series = Series.properties[seriesEntry.key];

      if (series) {
        const seriesLabel = createSeriesLabel(seriesEntry);
        const linkedImages = Formatter.linkedImages(series, useSearch);

        return labelLinkedImagesTable(seriesLabel, linkedImages);
      }
      throw new Error(
        `Missing series for seriesEntry: ${JSON.stringify(seriesEntry)}`
      );
    };

    const seriesLinks = R.map(mapFunction, seriesArray);
    answer = seriesLinks.join(" ");
  }

  return answer.trim();
};

Formatter.linkedImages = (item, useSearch = false) => {
  const dclUrl1 = UrlGenerator.dclUrl(item);
  const dclUrl2 = useSearch ? UrlGenerator.dclSearchUrl(item) : null;
  const dclLink = linkedImage(
    dclUrl1,
    dclUrl2,
    DCL_IMAGE,
    DCL_IMAGE_2,
    "Douglas County Libraries"
  );
  const goodreadsUrl1 = UrlGenerator.goodreadsUrl(item);
  const goodreadsUrl2 = useSearch
    ? UrlGenerator.goodreadsSearchUrl(item)
    : null;
  const grLink = linkedImage(
    goodreadsUrl1,
    goodreadsUrl2,
    GR_IMAGE,
    GR_IMAGE_2,
    "Goodreads"
  );
  const imdbUrl1 = UrlGenerator.imdbUrl(item);
  const imdbUrl2 = useSearch ? UrlGenerator.imdbSearchUrl(item) : null;
  const imdbLink = linkedImage(
    imdbUrl1,
    imdbUrl2,
    IMDB_IMAGE,
    IMDB_IMAGE_2,
    "Internet Movie Database"
  );
  const libraryThingUrl1 = UrlGenerator.libraryThingUrl(item);
  const libraryThingUrl2 = useSearch
    ? UrlGenerator.libraryThingSearchUrl(item)
    : null;
  const ltLink = linkedImage(
    libraryThingUrl1,
    libraryThingUrl2,
    LT_IMAGE,
    LT_IMAGE_2,
    "LibraryThing"
  );
  const wikipediaUrl1 = UrlGenerator.wikipediaUrl(item);
  const wikipediaUrl2 = useSearch
    ? UrlGenerator.wikipediaSearchUrl(item)
    : null;
  const wikiLink = linkedImage(
    wikipediaUrl1,
    wikipediaUrl2,
    WIKIPEDIA_IMAGE,
    WIKIPEDIA_IMAGE_2,
    "Wikipedia"
  );

  const cell1 = dclLink ? HtmlUtils.cell(dclLink) : "";
  const cell2 = grLink ? HtmlUtils.cell(grLink) : "";
  const cell3 = imdbLink ? HtmlUtils.cell(imdbLink) : "";
  const cell4 = ltLink ? HtmlUtils.cell(ltLink) : "";
  const cell5 = wikiLink ? HtmlUtils.cell(wikiLink) : "";
  const row = [cell1, cell2, cell3, cell4, cell5];
  const style = "justify-content: flex-end;";

  return HtmlUtils.flexboxWrap(row, style);
};

Object.freeze(Formatter);

module.exports = Formatter;
