const PORT = 3000
const express = require('express')
const apiRoute = require('./routes/api')
const path = require('path')

const app = express()

app.use('/', express.static(path.join(__dirname, 'public')))
// se na pasta "public" tiver uma "all" ele retornará ela e não passará pra proxima require(que é uma require get "all")
//resolver => criar rota garantir que não tem nada que bata com a rota all
// 1) colar todas requires nessa rota
app.use('/api', apiRoute)

app.listen(PORT, () => {
  console.log('Server running on port', PORT)
})

// separando o projeto em rotas
// antes criar pasta publica (p/ enviar arq estáticos)
//

// para garantir que uma chamada a api não busque por uma pasta api, devemos inverter a chamada das rotas
// (app.use("/api", apsia) essa linha deve ser chamada primeiro)
