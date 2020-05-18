const R = require("../node_modules/ramda/dist/ramda.js");

const HtmlUtils = require("../util/HtmlUtilities.js");
const WikiUtils = require("../util/WikiUtilities.js");

const Person = require("../artifact/Person.js");
const Series = require("../artifact/Series.js");

const UrlGenerator = require("./UrlGenerator.js");

const Formatter = {};

const ICON_SIZE = "20px";

const DCL_IMAGE = "DouglasCountyLibraries418.png";
const IMDB_IMAGE = "IMDb256.png";
const LT_IMAGE = "LibraryThing180.png";
const WIKIPEDIA_IMAGE = "Wikipedia128.png";

const createItemPrefix = (item) => {
  let answer = "";

  if (item.title.startsWith("A ")) {
    answer = `data-sort-value="${item.title.substring("A ".length)}"| `;
  } else if (item.title.startsWith("The ")) {
    answer = `data-sort-value="${item.title.substring("The ".length)}"| `;
  }

  return answer;
};

const createPersonLabel = (person) => {
  let answer;

  if (person.middle) {
    answer = `${person.first} ${person.middle} ${person.last}`;
  } else {
    answer = `${person.first} ${person.last}`;
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

const createSeriesLabel = (seriesObj) => {
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

const labelLinkedImagesTable = (label, linkedImages) => {
  const style1 = `border:0px; padding:0px;`;
  const style2 = `${style1} float: right;`;
  const style3 = `${style1} width:100%;`;
  const cell1 = HtmlUtils.cell(label, style1);
  const cell2 = HtmlUtils.cell(linkedImages, style2);
  const row = HtmlUtils.row([cell1, cell2]);

  return HtmlUtils.table([row], style3);
};

const wikilinkedImage = (href, image, tooltip) =>
  href ? `[[Image:${image}|${ICON_SIZE}|link=${href}|${tooltip}]]` : "";

// /////////////////////////////////////////////////////////////////////////////
Formatter.createItemText = (item) => {
  let answer = "";

  if (item) {
    const itemPrefix = createItemPrefix(item);
    const linkedImages = Formatter.linkedImages(item);
    const table = labelLinkedImagesTable(item.title, linkedImages);
    answer = `${itemPrefix} ${table}`;
  }

  return answer.trim();
};

Formatter.createBookText = (book) => Formatter.createItemText(book);
Formatter.createMovieText = (movie) => Formatter.createItemText(movie);
Formatter.createTVSeriesText = (tvSeries) => Formatter.createItemText(tvSeries);

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

Formatter.createPersonText = (personObj) => {
  let answer = "";

  if (personObj) {
    if (Array.isArray(personObj)) {
      const mapFunction = (personKey) => {
        const myPerson = Person.properties[personKey];
        const personLabel = createPersonLabel(myPerson);
        const linkedImages = Formatter.linkedImages(myPerson);

        return labelLinkedImagesTable(personLabel, linkedImages);
      };

      const personLinks = R.map(mapFunction, personObj);
      answer = personLinks.join(" ");
    } else {
      const person = Person.properties[personObj];

      if (person) {
        const personPrefix = createPersonPrefix(person);
        const personLabel = createPersonLabel(person);
        const linkedImages = Formatter.linkedImages(person);
        const table = labelLinkedImagesTable(personLabel, linkedImages);
        answer = `${personPrefix} ${table}`;
      } else {
        throw new Error(`Missing person for personObj = :${personObj}:`);
      }
    }
  }

  return answer;
};

Formatter.createSeriesText = (seriesObj) => {
  let answer = "";

  if (seriesObj) {
    if (Array.isArray(seriesObj)) {
      const mapFunction = (seriesObject) => {
        const series = Series.properties[seriesObject.key];
        const seriesLabel = createSeriesLabel(seriesObject);
        const linkedImages = Formatter.linkedImages(series);

        return labelLinkedImagesTable(seriesLabel, linkedImages);
      };

      const seriesLinks = R.map(mapFunction, seriesObj);
      answer = seriesLinks.join(" ");
    } else if (seriesObj.key) {
      const series = Series.properties[seriesObj.key];
      const seriesLabel = createSeriesLabel(seriesObj);
      const linkedImages = Formatter.linkedImages(series);
      answer = labelLinkedImagesTable(seriesLabel, linkedImages);
    } else {
      const seriesLabel = createSeriesLabel(seriesObj);
      const linkedImages = Formatter.linkedImages(seriesObj);
      answer = labelLinkedImagesTable(seriesLabel, linkedImages);
    }
  }

  return answer.trim();
};

Formatter.linkedImages = (item) => {
  const dclLink = wikilinkedImage(
    UrlGenerator.dclUrl(item),
    DCL_IMAGE,
    "Douglas County Libraries"
  );
  const imdbLink = wikilinkedImage(
    UrlGenerator.imdbUrl(item),
    IMDB_IMAGE,
    "Internet Movie Database"
  );
  const ltLink = wikilinkedImage(
    UrlGenerator.libraryThingUrl(item),
    LT_IMAGE,
    "LibraryThing"
  );
  const wikiLink = wikilinkedImage(
    UrlGenerator.wikipediaUrl(item),
    WIKIPEDIA_IMAGE,
    "Wikipedia"
  );
  const style = "border:0px; padding:0px;";

  const cell1 = dclLink ? HtmlUtils.cell(dclLink, style) : "";
  const cell2 = imdbLink ? HtmlUtils.cell(imdbLink, style) : "";
  const cell3 = ltLink ? HtmlUtils.cell(ltLink, style) : "";
  const cell4 = wikiLink ? HtmlUtils.cell(wikiLink, style) : "";
  const row = HtmlUtils.row([cell1, cell2, cell3, cell4]);

  return HtmlUtils.table([row]);
};

Object.freeze(Formatter);

module.exports = Formatter;
