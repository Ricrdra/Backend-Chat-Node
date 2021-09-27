const Model = require("./model");
const db = require('mongoose');
db.Promise = global.Promise;

const uri = "mongodb+srv://captain-run:Runrun123k@platzicourse.caqe2.mongodb.net/Telegrom?retryWrites=true&w=majority";
db.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
console.log('[mongodb] successfully connecting')

/*
* mongodb+srv://captain-run:Runrun123k@platzicourse.caqe2.mongodb.net/Telegrom?retryWrites=true&w=majority
*
* */


function addMessage(message) {
    const newMessage = new Model(message);
    newMessage.save().then(r => {
        console.log(r)
    });
}

async function getMessages(filter) {
    const _filter = {
        user: filter
    }
    console.log(_filter);
    return filter ? Model.find(_filter) : Model.find();


}


async function updateMessage(id, message) {
    const currentMessage = await Model.findOne({_id: id});
    currentMessage.message = message;

    await currentMessage.save().then(r => {
        console.log(r)
    });

}

async function removeMessage(id) {
    await Model.deleteOne(
        {_id: id}
    );
}


module.exports = {
    add: addMessage,
    list: getMessages,
    updateMessage,
    remove: removeMessage,
};