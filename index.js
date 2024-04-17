const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('My name is Thiago!!!!!a')
})
app.get('/oi2', function (req, res) {
  res.send('Hello, World! I am here!')
})

const lista = ['Star Wars', 'rattatui', 'sadkapid', 'Yoda']

app.get('/item', function (req, res) {
  res.send(lista)
})

app.get('/item/:id', function (req, res) {
  const id = req.params.id

  const item = lista[id - 1]
  res.send(item)
})
app.use(express.json())

app.post('/item', function (req, res) {

  const item = req.body.nome

  lista.push(item)
  res.send('adicionado com sucesso ' + item)
})
app.listen(3000)