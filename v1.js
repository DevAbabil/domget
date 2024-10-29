var $ = (qSelector) => {
  if (!qSelector) {
    throw Error("Query selector is required!");
  }
  const elements = document.querySelectorAll(qSelector);
  if (elements.length === 0) {
    throw Error(`No element found with selector ${qSelector}`);
  }
  if (
    [...elements].filter((element) => {
      if (element.id) {
        return true;
      }
    }).length > 1
  ) {
    throw Error(`Duplicate id found with query ${qSelector}`);
  }
  if (elements.length === 1) {
    return elements[0];
  }
  return elements;
};
