module.exports = function(){
  return {
    karma: {
      unit: {
        configFile: 'test/karma/karma.conf.js',
        singleRun: true,
        browsers: ['PhantomJS']
      },
      debug: {
        configFile: 'test/karma/karma.conf.js',
        singleRun: false,
        browsers: ['Chrome']
      },
      custom: {
        configFile: 'test/karma/karma.conf.js'
      }
    }
  };
};