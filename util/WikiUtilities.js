const R = require("../node_modules/ramda/dist/ramda.js");

const WikiUtilities = {};

WikiUtilities.cell = (content, style) => {
  let answer = `|`;

  if (style) {
    answer += ` style="${style}" |`;
  }

  answer += ` ${content}
`;

  return answer;
};

WikiUtilities.headerCell = (content, style) => {
  let answer = `!`;

  if (style) {
    answer += ` style="${style}" |`;
  }

  answer += `${content}
`;

  return answer;
};

WikiUtilities.link = (page, label) => `[[${page} | ${label}]]`;

WikiUtilities.row = (cells, style) => {
  let answer = `|-`;

  if (style) {
    answer += ` style="${style}"`;
  }

  answer += "\n";
  answer += cells.join("");

  return answer;
};

WikiUtilities.table = (headers, rows, aClass, style) => {
  let answer = "{|";

  if (aClass) {
    answer += ` class="${aClass}"`;
  }

  if (style) {
    answer += ` style="${style}"`;
  }

  answer += "\n";

  if (headers) {
    answer += R.map(WikiUtilities.headerCell, headers).join("");
  }

  answer += rows.join("");
  answer += "|}";

  return answer;
};

Object.freeze(WikiUtilities);

module.exports = WikiUtilities;
