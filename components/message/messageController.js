const store = require('./store');

function updateMessage(id, message) {
    return new Promise(async (resolve, reject) => {
        if (!id || !message) {
            reject('Invalid data');
            return;
        }
        const result = await store.updateMessage(id, message);
    });
}


async function addMessage(user, message, chat, file = null) {
    return await new Promise((resolve, reject) => {
        if (user && message) {
            let fileUrl;
            if (file) {
                fileUrl = `http://localhost:3000/app/uploads/${file.filename}`;

            }
            const fullMessage = {
                user, message
                , chat
                , date: new Date()
                , file: fileUrl
            };


            console.log(`${fullMessage['date']}: 
${fullMessage['user']} : ${fullMessage ['message']}`);
            store.add(fullMessage);
            resolve('Message Sent');
            return true;
        } else {
            console.log('[Message Controller] No hay Usuario o mensaje');
            reject('Incorrect Data');
            return false;
        }
    });
}

async function getMessage(filter) {
    return await new Promise((resolve, reject) => {
        resolve(store.list(filter));
    });
}


function deleteMessage(id) {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject('Invalid Data');
            return;
        }

        console.log(id);
        store.remove(id).then(() => {
            resolve();
        }).catch(e => {
            reject(e);
        })
    });
}


module.exports = {
    add: addMessage, get: getMessage, update: updateMessage, delete: deleteMessage
};