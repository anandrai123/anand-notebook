const connectToMongo = require('./dbConnection');
const express = require('express')

var cors = require('cors')
connectToMongo();
const app = express()
const port = 5000
app.use(cors())

app.use(express.json())
//Available Routes

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))





// app.get('/', (req, res) => {
//   res.send('Hello Anand!')
// })

app.listen(port, () => {
  console.log(`anandNoteBook backend listening on port ${port}`)
})