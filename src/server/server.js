const searchData = {};

const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// const formData = require('../app/contact');


const port = process.env.PORT || 5000;

/**Set the instance of the static file source*/
app.use(express.static('dist'));


app.get('/', (req, res) => {
          res.send('dist/index.html');
})

app.listen(port, () => {
          console.log(`Server listening on: ${port}`);
})   

/**Get searchData route */
app.get('/all', (req, res) => {
          // res.send(searchData);
})


app.post('/addSearch', (req, res) => {
          console.log(req.body);

})