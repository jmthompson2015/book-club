const R = require("../node_modules/ramda/dist/ramda.js");

const Book = require("../artifact/Book.js");
const Movie = require("../artifact/Movie.js");
const Person = require("../artifact/Person.js");

const WikiUtilities = {};

WikiUtilities.compareByMeeting = (ascending) => (bookA, bookB) => {
  const meetingA = bookA.meeting || "";
  const meetingB = bookB.meeting || "";
  let answer = ascending ? -1 : 1;

  if (meetingA === meetingB) {
    answer = 0;
  } else if (meetingA > meetingB) {
    answer = ascending ? 1 : -1;
  }

  return answer;
};

WikiUtilities.compareByTitle = (itemA, itemB) => {
  const titleA = itemA.title;
  const titleB = itemB.title;
  let answer = -1;

  if (titleA === titleB) {
    answer = 0;
  } else if (titleA > titleB) {
    answer = 1;
  }

  return answer;
};

WikiUtilities.createBookText = (book) => {
  let answer = "";

  if (book) {
    let bookPrefix = "";

    if (book.title.startsWith("A ")) {
      bookPrefix = `data-sort-value="${book.title.substring("A ".length)}"| `;
    } else if (book.title.startsWith("The ")) {
      bookPrefix = `data-sort-value="${book.title.substring("The ".length)}"| `;
    }

    const dclUrl = Book.dclUrl(book);
    const bookUrl = dclUrl ? `[${dclUrl} ${book.title}]` : book.title;

    answer = `${bookPrefix}${bookUrl}`;
  }

  return answer;
};

WikiUtilities.createCastText = (castKeys) => {
  let answer = "";

  if (castKeys) {
    const mapFunction = (castKey) => {
      const person = Person.properties[castKey];

      return WikiUtilities.createPersonLink(person);
    };

    const castLinks = R.map(mapFunction, castKeys);

    answer = castLinks.join(", ");
  }

  return answer;
};

WikiUtilities.createMeetingText1 = (meeting) => {
  let answer = "";

  if (meeting) {
    answer = WikiUtilities.wikilink(`${meeting} Meeting Notes`, meeting);
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

    const imdbUrl = Movie.imdbUrl(movie);
    const movieUrl = imdbUrl ? `[${imdbUrl} ${movie.title}]` : movie.title;

    answer = `${moviePrefix}${movieUrl}`;
  }

  return answer;
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

WikiUtilities.createPersonLink = (person) => {
  let answer = "";

  if (person) {
    const wikiUrl = Person.wikiUrl(person);
    const personLabel = WikiUtilities.createPersonLabel(person);

    answer = wikiUrl
      ? WikiUtilities.hyperlink(wikiUrl, personLabel)
      : personLabel;
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

WikiUtilities.createPersonText = (person) => {
  let answer = "";

  if (person) {
    const personPrefix = WikiUtilities.createPersonPrefix(person);
    const personLink = WikiUtilities.createPersonLink(person);

    answer = `${personPrefix} ${personLink}`;
  }

  return answer;
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

    const imdbUrl = Movie.imdbUrl(tvSeries);
    const movieUrl = imdbUrl
      ? `[${imdbUrl} ${tvSeries.title}]`
      : tvSeries.title;

    answer = `${tvSeriesPrefix}${movieUrl}`;
  }

  return answer;
};

WikiUtilities.hyperlink = (href, label) => `[${href} ${label}]`;

WikiUtilities.wikilink = (page, label) => `[[${page} | ${label}]]`;

Object.freeze(WikiUtilities);

module.exports = WikiUtilities;
