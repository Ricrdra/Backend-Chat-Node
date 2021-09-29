const Model = require("./model");


function addMessage(message) {
    const newMessage = new Model(message);
    newMessage.save().then(r => {
        console.log(r)
    });
}

async function getMessages(filter) {

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
        .populate('user')
        .exec((err, populatedData) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(populatedData);
        });
    });
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