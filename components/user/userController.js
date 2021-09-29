const store = require('./store');

function updateUser(id, user) {
    return new Promise(async (resolve, reject) => {
        if (!id || !user) {
            reject('Invalid data');
            return;
        }
        const result = await store.update(id, user);
    });
}


async function addUser(name) {
    return await new Promise((resolve, reject) => {
        if (name) {
            const user = {
                name: name, registerDate: new Date()
            };
            console.log(`${user['registerDate']}: 
new user: ${user['user']} `);
            store.add(user);
            resolve('User Added');
            return true;
        } else {
            console.log('[User Controller] Type correct values');
            reject('Incorrect Data');
            return false;
        }
    });
}

async function getUser(filter) {
    return await new Promise((resolve, reject) => {
        resolve(store.list(filter));
    });
}


function deleteUser(id) {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject('Invalid Data');
            return;
        }
        store.remove(id).then(() => {
            resolve();
        }).catch(e => {
            reject(e);
        })
    });
}


module.exports = {
    add: addUser, get: getUser, update: updateUser, delete: deleteUser
};





