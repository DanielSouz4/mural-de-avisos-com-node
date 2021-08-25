const PORT = 3000
const express = require('express')

const app = express()

let posts = [
  {
    id: 'kdasj',
    title: 'Teste do Mural',
    description: 'Descrição teste'
  },
  {
    id: 'kdasj',
    title: 'Teste do Mural',
    description: 'Descrição teste'
  },
  {
    id: 'kdasj',
    title: 'Teste do Mural',
    description: 'Descrição teste'
  }
]

app.get('/all', (req, res) => {
  res.json(JSON.stringify(posts))
})

app.post('/new', (req, res) => {})

app.listen(PORT, () => {
  console.log('Server running on port', PORT)
})

// faz server com express
// fez duas rotas
// 1 buscar all posts
// 2 add novo post
// fez array de posts para responder a rota /all
