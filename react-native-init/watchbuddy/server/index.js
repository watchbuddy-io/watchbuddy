const express = require('express')

const app = express();

const port = 1338;

app.get('/', (req, res) => {
  console.log('inside get on server!')
  res.json({movies:[
    'https://community.cadence.com/resized-image/__size/940x0/__key/communityserver-blogs-components-weblogfiles/00-00-00-01-06/4544.kitten.jpg',
     'https://i.pinimg.com/564x/9f/c0/5a/9fc05a1f97f1a77ff5f2af13434a4271--funny-photography-white-photography.jpg'
     ]})
})

app.listen(port, () => {
  console.log(`Server successfully listening on ${port}!`)
})