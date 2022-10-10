const http = require('http');
const porta = 3000;

const rotas = {
    '/': 'Curso de Node',
    '/livros': 'Entrei na pag de livros',
    '/autores': 'Lista de autores'
}

const server = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end(rotas[req.url]);
})

server.listen(porta, () => {
    console.log(`Servidor escutando em http://localhost:${porta}`)
});
