import express = require('express');

// Create a new express app instance
const app: express.Application = express();

app.get('/', function (req, res) {

   res.send('Hello World!');

});

const PORT = process.env.PORT || 3000;
   app.listen(PORT, () => {
      console.log(`Server is running in http://localhost:${PORT}`)
})
