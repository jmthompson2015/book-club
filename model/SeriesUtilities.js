const R = require("../node_modules/ramda/dist/ramda.js");

const Series = require("../artifact/Series.js");

const BookUtilities = require("./BookUtilities.js");

const SeriesUtilities = {};

SeriesUtilities.keysWithMeeting = () => {
  const seriesKeyToBooks = BookUtilities.seriesKeyToBooks(true);

  return Object.keys(seriesKeyToBooks);
};

SeriesUtilities.valuesWithMeeting = () => {
  const serieses = Series.values();
  const seriesKeyToBooks = BookUtilities.seriesKeyToBooks(true);
  const filterFunction = (series) => !R.isNil(seriesKeyToBooks[series.key]);

  return R.filter(filterFunction, serieses);
};

Object.freeze(SeriesUtilities);

module.exports = SeriesUtilities;
