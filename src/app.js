import express from 'express';

const app = express();

app.use(express.json());

const livros = [
    {id: 1, "titulo": "Senhor dos aneis"},
    {id: 2, "titulo": "O Hobbit"}
]

app.get('/', (req, res) => {
    res.status(200).send('Curso de node');
})

app.get('/livros/:id', (req, res) => {
    let id = buscarPorId(req.params.id);
    res.json(livros[id]);
})

app.get('/livros', (req, res) => {
    res.status(200).json(livros)
})

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).json('Livro cadastrado com sucesso!')
})

app.put('/livros/:id', (req, res) => {
    let id = buscarPorId(req.params.id);
    livros[id].titulo = req.body.titulo;
    res.json(livros);
})

app.delete('livros/:id', (req, res) => {
})

function buscarPorId(id){
    return livros.findIndex(livro => livro.id == id);
}

export default app;