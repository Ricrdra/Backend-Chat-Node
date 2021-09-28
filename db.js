const db = require('mongoose');
db.Promise = global.Promise;

const uri = "mongodb+srv://captain-run:Runrun123k@platzicourse.caqe2.mongodb.net/Telegrom?retryWrites=true&w=majority";

async function connect() {
    await db.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
    console.log('[mongodb] successfully connecting')
}

module.exports = connect;