const TodoEntityManager = require("../model/TodoEntityManager");

module.exports = class TodoController {
    constructor() {
        this.manager = new TodoEntityManager();
    }
    getOne(id){
        const todo = this.manager.findById(id);
        return todo;
    }
    getAll(){
        const todos = this.manager.findAll();
        return todos;
    }
    getAllStatus(status){
        const todos = this.manager.findBy(status);
        return todos;
    }
    patch(id, text, date, status){
        const todo = this.manager.update(id, text, date, status);
        return todo;
    }
    post(text, date){
        const todo = this.manager.create(text, date);
        return todo;
    }
    delete(id){
        this.manager.remove(id);
    }
}
