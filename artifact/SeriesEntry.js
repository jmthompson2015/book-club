const SeriesEntry = {};

SeriesEntry.create = (key, entry) => ({
  // Required.
  key,
  // Situational.
  entry,
});

Object.freeze(SeriesEntry);

module.exports = SeriesEntry;
