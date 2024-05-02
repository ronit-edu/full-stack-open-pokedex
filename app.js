const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.status(404)
  //res.send('guthib.com')
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
