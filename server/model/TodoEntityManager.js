const Todo = require("./entity/Todo");
const db = require("./Connection");


module.exports = class TodoEntityManager {
    findById(id){
        const row = db.prepare('SELECT * FROM todos WHERE id =?').get(id);
        const todo = new Todo(row.id, row.text, row.date, row.status);
        return todo;
    }
    findAll(){
        const rows = db.prepare('SELECT * FROM todos').all();
        const collection = [];
        for (let row of rows) {
            const todo = new Todo(row.id, row.text, row.date, row.status);
            collection.push(todo)
        }
        return collection;
    }
    findBy(status){
        //const rows = db.prepare('SELECT * FROM todos WHERE status =?').run(status);
        const stm = db.prepare("SELECT * FROM todos WHERE status = ?");
        const rows = stm.run(status);
        const collection = [];
        for (let row of rows) {
            const todo = new Todo(row.id, row.text, row.date, row.status);
            collection.push(todo)
        }
        return collection;
    }
    remove(id) {
        db.prepare("DELETE FROM todos WHERE id = ?").run(id)
    }
    update(id, text, date, status) {
        const stm = db.prepare("UPDATE todos SET text = ?, date = ?, status = ?  WHERE id = ?");
        const row = stm.run(text, date, status, id);
        return this.findById(row.id);
    }
    create(text, date){
        const stm = db.prepare('INSERT INTO todos (text, date) VALUES (?, ?)');
        const row = stm.run(text, date);
        return this.findById(row.id);
    }
}
