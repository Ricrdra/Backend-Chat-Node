const Model = require("./model");


function addChat(chat) {
    const newChat = new Model(chat);
    newChat.save().then(r => {
        console.log(r)
    });
}

async function getChats(filter) {

    return new Promise((resolve, reject) => {
        let _filter;
        if (filter !== null) {
            filter = {name: filter}
            _filter = {
                user: filter
            }
        } else {
            _filter = {}
        }
        Model.find(_filter ? _filter : {})
        .populate('users')
        .exec((err, populatedData) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(populatedData);
        });
    });
}


module.exports = {
    add: addChat,
    list: getChats,
};