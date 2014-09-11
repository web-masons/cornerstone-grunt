module.exports = function(grunt){
  var config = {
    test: {
      unit: [],
      integration: [],
      functional: []
    }
  };

  if(grunt.file.isDir('test/karma')) {
    //this needs to go first so composer install doesn't fail
    config.test.unit.push('karma:unit');
  }

  if(grunt.file.isDir('test/phpunit')) {
    // check if phpunit exists before adding it
    config.test.unit.push('shell:phpunit:unit');
    config.test.integration.push('shell:phpunit:integration');
  }

  if(grunt.file.isDir('test/casperjs')) {
    // check if casperjs exists before adding it
    config.test.functional.push('shell:casperjs');
  }
  
  return config;
};