var UID = "%%=v(@contactkey)=%%";
var contenturl = "Lookup(\"Content Data - 2019-09-23T051232828\", \"url\", \"contactKey\", "+ UID + ")";
var image = document.createElement('img');
image.setAttribute('src', contenturl);
document.getElementById('content').appendChild(image);

