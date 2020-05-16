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
HtmlUtilities.span = (content, style) =>
  HtmlUtilities.tag("span", content, style);

HtmlUtilities.table = (content, style) =>
  HtmlUtilities.tag("table", content, style);

HtmlUtilities.td = (content, style) => HtmlUtilities.tag("td", content, style);

HtmlUtilities.tr = (content, style) => HtmlUtilities.tag("tr", content, style);

Object.freeze(HtmlUtilities);

module.exports = HtmlUtilities;
