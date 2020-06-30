const R = require("../node_modules/ramda/dist/ramda.js");

const HtmlUtils = require("../util/HtmlUtilities.js");
const WikiUtils = require("../util/WikiUtilities.js");

const Person = require("../artifact/Person.js");
const Series = require("../artifact/Series.js");

const UrlGenerator = require("./UrlGenerator.js");

const Formatter = {};

const ICON_SIZE = "20px";

const DCL_IMAGE = "DouglasCountyLibraries418.png";
const GR_IMAGE = "Goodreads128.png";
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
  const style1 = `border:0px; padding:0px;`;
  const style2 = `${style1} float: right;`;
  const style3 = `width:100%;`;
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

Formatter.createPersonLabel = (person) => {
  let answer = "";

  if (person) {
    if (person.first) {
      answer += person.first;
    }

    if (person.middle) {
      if (answer.length > 0) {
        answer += " ";
      }

      answer += person.middle;
    }

    if (person.last) {
      if (answer.length > 0) {
        answer += " ";
      }

      answer += person.last;
    }
  }

  return answer;
};

Formatter.createPersonText = (personArray) => {
  let answer = "";

  if (personArray) {
    const mapFunction = (personKey) => {
      const person = Person.properties[personKey];

      if (person) {
        const personLabel = Formatter.createPersonLabel(person);
        const linkedImages = Formatter.linkedImages(person);

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

Formatter.createSeriesText = (seriesArray) => {
  let answer = "";

  if (seriesArray) {
    const mapFunction = (seriesEntry) => {
      const series = Series.properties[seriesEntry.key];

      if (series) {
        const seriesLabel = createSeriesLabel(seriesEntry);
        const linkedImages = Formatter.linkedImages(series);

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

Formatter.linkedImages = (item) => {
  const dclLink = wikilinkedImage(
    UrlGenerator.dclUrl(item),
    DCL_IMAGE,
    "Douglas County Libraries"
  );
  const grLink = wikilinkedImage(
    UrlGenerator.goodreadsUrl(item),
    GR_IMAGE,
    "Goodreads"
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
  const cell2 = grLink ? HtmlUtils.cell(grLink, style) : "";
  const cell3 = imdbLink ? HtmlUtils.cell(imdbLink, style) : "";
  const cell4 = ltLink ? HtmlUtils.cell(ltLink, style) : "";
  const cell5 = wikiLink ? HtmlUtils.cell(wikiLink, style) : "";
  const row = HtmlUtils.row([cell1, cell2, cell3, cell4, cell5]);

  return HtmlUtils.table([row]);
};

Object.freeze(Formatter);

module.exports = Formatter;
