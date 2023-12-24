const express = require('express');
const helmet = require('helmet');
const app = express();

app.use(helmet.hidePoweredBy());

app.use(helmet.frameguard({ action: 'deny' }));

app.use(helmet.xssFilter());

app.use(helmet.noSniff())


// app.get('/test-xss', (req, res) => {
//     const userInput = req.query.input; // Get user input from query parameter

//     // Render the user input in an HTML page
//     res.send(`<p>${userInput}</p>`);
// });













































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function(request, response) {
    response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Information security using Helmet js Server is running on port, changed to 4000 ${port}`);
});