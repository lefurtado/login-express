const fs = require('fs');

const User = {
    fileName: '../src/database.db.json',

    getData: () => {
        return fs.readFileSync(this.fileName, 'utf-8');
    },

}

console.log(User.getData());