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
HtmlUtilities.cell = (content, style) => {
  const style2 = `display: table-cell;${style ? ` ${style}` : ""}`;

  return HtmlUtilities.div(content, style2);
};

HtmlUtilities.div = (content, style) =>
  HtmlUtilities.tag("div", content, style);

HtmlUtilities.row = (cellArray, style) => {
  const style2 = `display: table-row;${style ? ` ${style}` : ""}`;

  return HtmlUtilities.div(cellArray.join(""), style2);
};

HtmlUtilities.span = (content, style) =>
  HtmlUtilities.tag("span", content, style);

HtmlUtilities.table = (rowArray, style) => {
  const style2 = `display: table;${style ? ` ${style}` : ""}`;

  return HtmlUtilities.div(rowArray.join(""), style2);
};

Object.freeze(HtmlUtilities);

module.exports = HtmlUtilities;
