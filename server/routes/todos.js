var express = require('express');
const router = express.Router();
var debug = require('debug')('router:todos')

const options = {
    verbose: console.debug
};
const db = require('better-sqlite3')('todos.sqlite', options);

router.get('/', function(req, res, next) {
    const todos = db.prepare('SELECT * FROM todos').all();
    //console.log(todos);
    res.send(todos);
});

router.get('/:id', function(req, res, next){
    const id = req.params.id
    const row = db.prepare('SELECT * FROM todos WHERE id =?').get(id);
    if(row){
        console.log(row);
        res.send(row);
    }else{
        res.sendStatus(404);
    }
});

router.post("/", function(req, res, next){
    const body = req.body;

    const todo = {
        text: body.text,
        date: new Date().toISOString(),
        //status: body.status
    }
    const row = db.prepare('INSERT INTO todos (text, date) VALUES (?, ?)');
    row.run(...Object.values(todo))

    res.send(todo);
});

router.patch("/:id", function(req, res, next){

    const body = req.body;
    const id = req.params.id;

    if(id) {
        const todo = db.prepare('SELECT * FROM todos WHERE id =?').get(id);
        if (todo) {
            Object.assign(todo, body);
            const row = db.prepare('UPDATE todos SET text=?, date=?, status=? WHERE id=?');
            const info = row.run(todo.text, todo.date, todo.status, id);
            console.debug(info);
            res.send(todo);
        } else {
            res.sendStatus(404);
        }
    }else{
        res.sendStatus(404);
    }
});

module.exports = router;