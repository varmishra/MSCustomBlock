var SDK = require('blocksdk');
var sdk = new SDK();

var UID = "%%=v(@contactkey)=%%";
var url = "Lookup(\"Content Data - 2019-09-23T051232828\", \"url\", \"contactKey\", "+ UID + ")";
sdk.setContent('<img src="' + url + '" />');


