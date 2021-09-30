const store = require('./store');


async function addChat(users) {
    return await new Promise((resolve, reject) => {
        if (users) {
            store.add(users);
            resolve('Chat Added');
            return true;
        } else {
            console.log('[Chat Controller] Type correct data');
            reject('Incorrect Data');
            return false;
        }
    });
}

async function getChat(filter) {
    return await new Promise((resolve, reject) => {
        resolve(store.list(filter));
    });
}


module.exports = {
    add: addChat, get: getChat
};