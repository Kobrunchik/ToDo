const options = {
    verbose: console.debug
};
const db = require('better-sqlite3')('todos.sqlite', options);

module.exports = db;