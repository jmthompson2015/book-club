const HtmlUtilities = {};

HtmlUtilities.tag = (tag, content, style) => {
  let answer = `<${tag}`;

  if (style) {
    answer += ` style="${style}"`;
  }

  answer += ">";

  if (content) {
    answer += content;
  }

  answer += `</${tag}>`;

  return answer;
};

// /////////////////////////////////////////////////////////////////////////////
HtmlUtilities.cell = (content, style) =>
  HtmlUtilities.tag("td", content, style);

HtmlUtilities.row = (cellArray, style) => {
  const content = cellArray.join("");

  return HtmlUtilities.tag("tr", content, style);
};

HtmlUtilities.span = (content, style) =>
  HtmlUtilities.tag("span", content, style);

HtmlUtilities.table = (rowArray, style) =>
  HtmlUtilities.tag("table", rowArray.join(""), style);

Object.freeze(HtmlUtilities);

module.exports = HtmlUtilities;
