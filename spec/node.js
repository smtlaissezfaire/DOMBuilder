var path = require("path");

require.paths.unshift(path.join(__dirname, "vendor", "jspec", "lib"));
require.paths.unshift("spec");
require.paths.unshift("lib");

require('jspec');
require('unit/spec.helper');
require("./vendor/jspec_dot_reporter/jspec_dot_reporter");

require("dom_builder");
require("css_builder");

JSpec
  .exec('spec/unit/spec.js')
  .exec('spec/unit/dom_builder_spec.js')
  .exec('spec/unit/css_builder_spec.js')
  .run({ reporter: JSpecDotReporter, fixturePath: 'spec/fixtures', failuresOnly: true })
  .report();
