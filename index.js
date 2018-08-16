// our dependencies
const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;
const axios = require('axios')

// from top level path e.g. localhost:3000, this response will be sent
app.get('/', (request, response) => response.send('Hello World'));

// set the server to listen on port 3000
app.listen(3000, () => console.log('Listening on port 3000'));

// url: http://localhost:3000/
app.get('/', (request, response) => response.send('Testing 1234'));

// all routes prefixed with /api
app.use('/api', router);
app.use('/getfitcycle', router)

// using router.get() to prefix our path
// url: http://localhost:3000/api/
router.get('/', (request, response) => {
  response.json({message: 'Hello, welcome to my server'});
});

router.get('/', (request, response) => {
    axios.get ('http://13.56.14.98/api/v1.0/signups')
      .then (es => {
        const allusers= res.data.polls_prospect;
        var jsonData=JSON.stringify (allusers)
        var fs = require('fs');
        fs.writeFile("test.json", jsonData, function(err) {
            if (err) {
                console.log(err);
            }
        });
        const first_name = res.data.polls_prospect[1].firstname;
        const last_name = res.data.polls_prospect[1].lastname
        console.log(first_name)
        console.log(last_name)
        response.json({message: `${first_name}`  `${last_name}`});
      }
      )
  });
