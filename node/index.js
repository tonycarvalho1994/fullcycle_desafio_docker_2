import generateRandomName from './nameGenerator.js'
import express from 'express'
import mysql2 from 'mysql2'

const app = express();
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb',
}

function insertRandomName(connection) {
    

    var name = generateRandomName()
    const sql = `INSERT INTO people (name) values ('${name}')`
    connection.query(sql)
}


app.get('/', (req, res) => {
    let output = '<h1>FullCycle Rocks! \\m/</h1><br/><h2>Nomes na tabela: </h2>'

    const connection = mysql2.createConnection(config);
    
    insertRandomName(connection)
    
    const sql = 'SELECT name FROM people'
    connection.query(sql, (err, results) => {
        if (err) {
            res.status(500).send('Erro ao obter dados da tabela');
        } else {
            results.forEach((name) => {
                output += `<p>${name.name}</p>`
            })
        };
        res.send(output);
    })
})

app.listen(port, () => {
    console.log('Server running on port ' + port);
});
