var test = require('tape');

global.document = {
  createElement: function (name) {
    return {
      getContext: function () {
      }
    }
  },
  documentElement: {
    style: {
    }
  }
};
global.navigator = {userAgent:'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.3 Safari/537.36'};
global.window = {navigator:navigator,Date:Date};

test("can require highmaps",function(t){
  var hc = require('../modules/map');
  t.ok(hc,'should have export');
  t.end();
});
