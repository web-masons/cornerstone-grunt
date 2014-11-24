cornerstone-grunt
============

Contains common grunt configuration


Usage
-----

Require cornerstone-grunt in your Gruntfile.js and pass the grunt object to it.  The module will initialize
common grunt configuration in your project.

```javascript
var cornerstone = require('cornerstone-grunt');

module.exports = function(grunt){
  cornerstone(grunt);
};
```

You may override any of the default configuration by passing another object as the second parameter to
cornerstone-grunt.

```javascript
var config = {
  module: "module/app",
  mainCss: [
    "<%= module %>/css<%= sassOut %>base.css",
    "<%= module %>/css<%= sassOut %>theme.css"
  ]
};

cornerstone(grunt, config);
```

You may then attach any new tasks to the grunt object.  Include any configuration for the new tasks in the
config override.

```javascript
grunt.loadNpmTasks('grunt-browserify-bower');
```

## Variables

You may override any of these variables to customize how grunt behaves.

- **yeoman.dist**: the distribution directory
- **yeoman.app**: the top level where your javascript and sass are contained, assumed to be in styles/ and scripts/ folders respectively
- **bowerCssFiles**: an array of bower css to combine and minify into vendor.css
- **bowerJsFiles**: an array of bower js files to combine and uglify into vendor.js
- **testSetupTasks**: an array of tasks that will be run concurrently before the unit tests,
add any setup you need for unit tests here.
If some of your tasks cannot be concurrent, provide a task that runs your sequential tasks
  ```javascript
  grunt.registerTask('myTask', ['taskOne', 'taskTwo'])
  testSetupTasks: ['myTask']
  ```
  It cannot be an empty array.

## Grunt Tasks

The following tasks are set up by cornerstone-grunt

###Main Tasks

- `grunt`
  - `dev`
- `grunt prod` default action, minifies and runs unit tests
  - `jshint`
  - `coffeelint`
  - `concurrent:test`
  - `test:unit`
  - `build`
- `grunt build` main build action
  - `clean:dist`
  - `i18n`
  - `concurrent:dist`
  - `concat`
  - `ngAnnotate`
  - `copy:dist`
  - `cssmin`
  - `uglify`
- `grunt build-dev`
  - `clean:dist`
  - `i18n`
  - `concurrent:server`
  - `concat`
  - `copy:dist`
-  `grunt dev` kicks off dev tasks
  - `newer:jshint`
  - `newer:coffeelint`
  - `concurrent:test`
  - `test:unit`
  - `build-dev`
  - `watch`
- `grunt watch`  monitors for changes
- `grunt test` runs test suite
- `grunt test:unit` runs unit tests
- `grunt debug-karma` runs karma in Chrome for debugging
- `grunt custom-karma` runs karma without any overrides
- `grunt docs` generates test plan documentation from automated tests
- `grunt poedit-basepath` updates the base path for POEdit files to your local path
- `grunt compile-coffee` coffeelint, compile, concat js
- `grunt compile-test` coffeelint, karma:unit
- `grunt compile-sass` compass, concat css, copy sprites
- `grunt copy-assets` alias for copy:dist, moves assets not imagemin-ed

###Subtasks

- `jshint`  Validate files with JSHint
- `uglify`  Minify files with UglifyJS
- `concat`  Concatenate files
- `cssmin`  Minify CSS
- `imagemin`  Minify PNG and JPEG images
- `copy`  Copy files
- `clean`  Clean files and folders
- `compass`  Compile Sass to CSS using Compass
- `coffee`  Compile CoffeeScript files into JavaScript
- `connect`  Start a connect web server
- `newer`  Run a task with only those source files that have been modified
- `newer-clean`  Remove cached timestamps
- `ngAnnotate`  Annotate AngularJS scripts for minification
- `karma`  run karm
- `shell`  Run shell commands

###Custom Tasks

####docs

Generates test plan documentation from automated tests.  It will look through the configured folder
(the default folder is ./test), for the subfolders "phpunit" and "casperjs".  If these folders exist it will traverse
 all of the tests in these folders and generate an md file that lists all of the test descriptions.  For casperjs
 these are GIVEN, THEN, WHEN statements.

######Options

 - `casperEnabled` if false, casperjs tests will not be added to the output even if the casperjs folder exists, defaults to `true`
 - `phpEnabled` if false, PHPUnit tests will not be added to the output even if the phpunit folder exists, defaults to `true`
 - `dir` the directory where tests are kept, defaults to `./test/`
 - `target` the output file, defaults to `./doc/TestPlan.md`

To override the default configuration, you would need to add something similar to the following to Grunt's configuration:

```javascript
{
  docs: {
    dir: "./test/",
    target: "./doc/TestPlan.md"
  }
}
```

## Release History

 * 2014-11-24    1.1.1    Fix call to grunt.config in i18n task
 * 2014-11-20    1.1.0    Prune unused tasks, speed up watch on vagrant
 * 2014-09-11    1.0.0    First Release

License
------------------

Copyright:: 2014 web-masons Contributors

Licensed under the Apache License, Version 2.0 (the 'License');
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an 'AS IS' BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

Contributing
------------

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
