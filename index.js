const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 5000

const Pets = require('./src/models/pets')

app.listen(port)

// Set up server to receive data from requests
app.use(express.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

// Pet REST routes

app.get('/pets', (req, res) => {
  Pets.find({ })
  .then((result) => {
    res.status(200).json({ data: result })
  })
  .catch(() => {
    res.status(500).json({ error: 'Error getting pets' })
  })
})

app.get('/pets/:id', (req, res) => {
  Pets.findById(req.params.id)
  .then((result) => {
    res.status(200).json({ data: result })
  })
  .catch(() => {
    res.status(404).json({ error: 'Pet not found' })
  })
})

app.post('/pets', (req, res) => {
  new Pet(req.body).save()
  .then((result) => {
    res.status(200).json({ data: result })
  })
  .catch((error) => {
    res.status(500).json({ message: 'Error saving pet', error })
  })
})

app.put('/pets/:id', (req, res) => {
  Pets.findByIdAndUpdate(req.params.id, req.body, { new: true })
  .then((result) => {
    res.status(200).json({ data: result })
  })
  .catch((error) => {
    res.status(404).json({ error: 'Error updating pet' })
  })
})

app.delete('/pets/:id', (req, res) => {
  Pets.findByIdAndDelete(req.params.id)
  .then((result) => {
    res.status(200).json({ data: result })
  })
  .catch((error) => {
    res.status(404).json({ error: 'Error deleting pet' })
  })
})

app.get('/hello', (req, res) => {
  res.status(200).send('Hello world')
})

// Catch all other routes
app.use((req, res, next) => {
  res.status(404).send('Route not found')
})

console.log('RESTful API server started on: ' + port)