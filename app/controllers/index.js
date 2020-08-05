var Flurry = require('ti.flurry');
Flurry.debugLogEnabled = true;
Flurry.eventLoggingEnabled = true;

Flurry.initialize('BPHB2T7TNDV6FGZHW233');

global.tabgroup = $.index;

var url = 'http://api.github.com/repos/ferdi2005/monumenti/releases/latest';
var xhr = Ti.Network.createHTTPClient({
    onload: function(e) {
        response = JSON.parse(this.responseText);
        if (response.tag_name != 'v' + Ti.App.version ) {
            alert("Attenzione! Stai usando una versione non aggiornata dell'applicazione (" + Ti.App.version + ") vai sullo store a scaricare la nuova versione " + response.tag_name + ".");
        }
    },
    onerror: function(e) {
    },
    timeout: 5000
});
xhr.open('GET', url);
xhr.send();

$.index.open();