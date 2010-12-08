DOMBuilder = function() {
  var obj = {};

  var selfClosingTags = [
    "base",
    "meta",
    "link",
    "hr",
    "br",
    "param",
    "img",
    "area",
    "input",
    "col",
    "frame"
  ];

  var isSelfClosingTag = function(tag_name) {
    var i;

    for (i = 0; i < selfClosingTags.length; i++) {
      if (selfClosingTags[i] == tag_name) {
        return true;
      }
    }

    return false;
  };

  var buildProperties = function(properties) {
    var string = "";

    for (var key in properties) {
      if (properties.hasOwnProperty(key)) {
        string += " ";
        string += key + '="' + properties[key] + '"';
      }
    }

    return string;
  };

  var subElementsHTML = function(subElements) {
    var i;
    var string = "";

    if (subElements && typeof(subElements.length) == "number") {
      for (i = 0; i < subElements.length; i++) {
        string += subElements[i];
      }
    }

    return string;
  };

  var propertiesAreSubElements = function(properties, subElements) {
    return typeof(subElements) == "undefined" && properties && typeof(properties.length) == "number";
  };

  obj.node = function(tag_name, properties, subElements) {
    if (propertiesAreSubElements(properties, subElements)) {
      subElements = properties;
      properties = undefined;
    }

    var string = "";

    if (isSelfClosingTag(tag_name)) {
      string += "<" + tag_name + buildProperties(properties) + " />";
    } else {
      string += "<" + tag_name + buildProperties(properties) + ">";
      string += subElementsHTML(subElements);
      string += "</" + tag_name + ">";
    }

    return string;
  };

  return obj;
}();