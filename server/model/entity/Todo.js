module.exports = class Todo {
    id = null;
    text = '';
    date = new Date();
    status = null;

    constructor(id, text, date= new Date(), status) {
        this.id = id;
        this.text = text;
        this.date = date;
        this.status = status;
    }
}