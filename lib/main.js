var data  = require('sdk/self').data;
var pageMod = require('sdk/page-mod');

pageMod.PageMod({
  include: 'https://github.com/*',
  contentScriptWhen: 'ready',
  contentStyleFile: data.url('styles.css')
});
