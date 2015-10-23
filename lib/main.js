var index = require('../index');
var yaml = require('js-yaml');
var fs   = require('fs');

try {
  var doc = yaml.safeLoad(fs.readFileSync('.dagobert.yml', 'utf8'));

  // todo
  var chunks = [];


  index(chunks, doc);
} catch (e) {
  console.log(e);
}
