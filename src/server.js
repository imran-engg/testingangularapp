//Install express server
const express = require('express');
const path = require('path');
const app = express();
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/spacecraftapp')); 
// app.get('*', function(req,res) {
//   res.sendFile(path.join(__dirname + '/dist/spacecraftapp/index.html'));
// });
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);



app.get('*', (req, res) => {
  res.sendFile(`./dist/spacecraftapp/index.html`); // load the single view file (angular will handle the page changes on the front-end)
});

