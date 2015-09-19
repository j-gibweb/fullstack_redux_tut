var exec = require('child_process').exec;
var cmnd = "mocha --compilers js:babel-core/register --require ./test/test_helper.js 'test/" + process.argv[2] + "/*.@(js|jsx)'";

exec(cmnd, function(err, stdout, stderr) {
  console.log(stdout)
});
