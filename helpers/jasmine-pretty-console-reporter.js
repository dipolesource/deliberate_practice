var JasmineConsoleReporter = require('jasmine-console-reporter');
var reporter = new JasmineConsoleReporter();

jasmine.getEnv().addReporter(reporter);
