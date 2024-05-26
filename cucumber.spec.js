module.exports = {
    default: {
      require: [
        'features/step_definitions/*.steps.js',
        'features/support/*.js'
      ],
      format: [
        'node_modules/cucumber-html-reporter',
        'node_modules/allure-commandline'
      ],
      publishQuiet: true,
      parallel: 2
    }
  };
