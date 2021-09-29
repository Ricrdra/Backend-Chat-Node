require('dotenv').config();
const db = require('mongoose');
db.Promise = global.Promise;
//You need to config .env file with example.env template
const uri = process.env.MONGO_URI || 'mongodb://localhost';

console.log(uri)

async function connect() {
    await db.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
    console.log('[mongodb] successfully connecting');
}

module.exports = connect;