
//Install express server
const express = require('express');
const app = express();

// Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080);



app.set('port', (process.env.PORT || 5000));

// Start node server
app.listen(app.get('port'), function () {
    console.log('Node server is running on port ' + app.get('port'));
});