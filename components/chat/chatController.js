const store = require('./store');


async function addChat(users) {

    return await new Promise((resolve, reject) => {

        if (users) {
            console.log("[chat controller]" + users);
            const chat = {users: users};
            store.add(chat);
            resolve('Chat Added');
            return true;
        } else {
            console.log('[Chat Controller] Type correct data');
            reject('Incorrect Data');
            return false;
        }
    });
}

async function getChat(chatList) {
    return await new Promise((resolve, reject) => {
        resolve(store.list(chatList));
    });
}


module.exports = {
    add: addChat, get: getChat
};