var path = require('path');

module.exports = function (grunt) {
  grunt.registerTask('docs', 'Generate docs', function () {
    var dir = path.resolve(grunt.config.get('docs.dir')) || path.resolve('./test/'),
      target = path.resolve(grunt.config.get('docs.target')) || path.resolve('./doc/TestPlan.md'),
      regex = /^.*\.(php|coffee)$/,
      casperEnabled = grunt.config.get('docs.casperEnabled') || true,
      phpEnabled = grunt.config.get('docs.phpEnabled') || true,
      type = "";

    casperScenarios = [];
    phpScenarios = [];

    grunt.file.recurse(dir, function(abs, root, sub, file) {
      if("undefined" !== typeof sub && sub.match(/^.*phpunit.*$/) && phpEnabled) {
        scenarios = phpScenarios;
        type = "phpunit"
      } else if("undefined" !== typeof sub && sub.match(/^.*casperjs.*$/) && casperEnabled) {
        scenarios = casperScenarios;
        type = "casperjs"
      }

      if("undefined" !== typeof scenarios) {
        if(abs.match(regex) !== null) {
          readfile = grunt.file.read(abs);
          switch (type) {
            case "phpunit":
              testname = sub.substr(sub.lastIndexOf('/') + 1) + "::" + file;
              break;
            case "casperjs":
            default:
              testname = file;
              break;

          }
          lines = readfile.split("\n");
          tests = [];
          lines.forEach(function(line, n) {
            if(line.match(/^.*(\* |\"|\')(Given|GIVEN):.*$/)) {
              given = lines.slice(n, n+1).toString();
              when = lines.slice(n+1, n+2).toString();
              then = lines.slice(n+2, n+3).toString();
              tests.push({given: given, when: when, then: then});
            }
          });

          if(tests.length !== 0) {
            scenarios.push({name: testname, tests: tests});
          }
        }
      }
    });

    var content = "# Test Plan\n";

    content += "This is an automatically generated test plan for the automated tests in this project. Automated tests are usually created on three platforms: Karma, PHPUnit, and CasperJS. Each of these performs a different function in assuring the code quality of the project.\n\n";
    content += "**How to read this document:** The following sections detail each test run and the scenarios written for them. Most of these are written in a [BDD](http://en.wikipedia.org/wiki/Behavior-driven_development) fashion of **Given** [initial context], **When** [event occurs], **Then** [ensure some outcomes].\n";

    if(casperScenarios.length !== 0) {
      content += "## CasperJS\n";
      content += "[CasperJS](http://casperjs.org/) is a headless, PhantomJS-powered testing framework that is used to run functional tests on projects. Since CasperJS can be run command-line, all developers can run it against their own environments, and all deployment servers are also able to run the tests.\n\n";
      content += "Functional tests will perform the actions of a user: loading a web page, clicking on buttons, and filling out forms. These tests are at the highest level of ensuring the application performs as expected.\n";
      content = grunt.writeScenario(content, casperScenarios)
    }
    if(phpScenarios.length !== 0) {
      content += "## PHPUnit\n";
      content += "[PHPUnit](http://phpunit.de/) is our main tool for testing back-end code written in PHP. The tests are split into two different categories: **unit** and **integration** tests. Unit tests should be able to be run with no connection to any other services being required. Integration tests, on the other hand, will connect to externals services to verify data.\n\n";
      content += "Due to the way we write PHPUnit tests, many of the tests may be run as both unit tests and integration tests. When run in unit test mode, they will use [mocked services](http://en.wikipedia.org/wiki/Mock_object) instead of calling the actual services. This means that the unit tests will run through the exact code they would in a full test, but the results will always be the same. When the tests are run in integration mode, however, they will actually make connections to the external services and also verify the results are correct.\n";
      content = grunt.writeScenario(content, phpScenarios)
    }

    grunt.file.write(target, content);
  });

  grunt.writeScenario = function(content, scenarios)
  {
    scenarios.forEach(function(scenario, k) {
      content += "### " + scenario.name + "\n";
      content += "| Given | When | Then |\n";
      content += "|-------|------|------|\n";
      scenario.tests.forEach(function(test, n) {
        content += "| " + grunt.filterGWT(test.given);
        content += " | " + grunt.filterGWT(test.when);
        content += " | " + grunt.filterGWT(test.then) + " |\n";
      });
    });

    return content;
  }

  grunt.filterGWT = function(given)
  {
    return given.substr(given.lastIndexOf(":") + 1).trim().replace(/(\"\)|\"|\')$/, "");
  }
}
