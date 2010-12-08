var CSSBuilder = function() {
  var obj = {};

  var outputProperty = function(key, value) {
    return key + ": " + value + ";";
  };

  obj.node = function(properties) {
    var string = "";
    var first_property = true;

    for (var key in properties) {
      if (properties.hasOwnProperty(key)) {
        if (first_property === true) {
          first_property = false;
        } else {
          string += " ";
        }

        string += outputProperty(key, properties[key]);
      }
    }

    return string;
  };

  return obj;
}();

if (typeof(exports) == "object") {
  for (var key in CSSBuilder) {
    exports[key] = CSSBuilder[key];
  }
}