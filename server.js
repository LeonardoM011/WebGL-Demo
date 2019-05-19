/*jshint esversion: 6 */

var connect = require('connect');
var serveStatic = require('serve-static');

const hostname = '127.0.0.1';
const port = 8080;

connect().use(serveStatic(__dirname)).listen(8080, function(){
    console.log(`Server running at http://${hostname}:${port}/`);
});
