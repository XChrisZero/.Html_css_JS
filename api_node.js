const express = require('express')
const app = express()
const port = 3000 /* seleciona uma porta a ser usada*/ 
	
app.get('/tabela_fipe', function(req, res){ /* no localhost:porta selecionada(3000) /tabela_fipe, direciona para o fetch na linha de baixo */
	fetch('https://brasilapi.com.br/api/fipe/preco/v1/005345-7', {
        method: 'GET',
    }).then((response) => response.json())
      .then((json) => res.send(json))
});

app.get('/examples', function(req, res){
  res.send([
    '<h1>Exemplo de uma lista HTML:</h1> <ul>'
    , '<li>Item 1</li>'
    , '<li>Item 2</li>'
    , '<li>Item 3</li>'
    , '</ul>'
  ].join('\n'));
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/aula_quarta', (req, res) => {
  res.send('BOA NOITE ANHANGUERA !!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
