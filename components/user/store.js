const Model = require("./model")


function addUser(User) {
    const newUser = new Model(User);
    newUser.save().then(r => {
        console.log(r)
    });
}

async function getUsers(filter) {
    if (filter) {
        const _filter = {
            name: filter
        }
        console.log(_filter);
        return Model.find(_filter);
    }
    return Model.find();
}


async function updateUser(id, name) {
    const currentUser = await Model.findOne({_id: id});
    currentUser.user = name;

    await currentUser.save().then(r => {
        console.log(r)
    });

}

async function removeUser(id) {
    await Model.deleteOne(
        {_id: id}
    );
}


module.exports = {
    add: addUser,
    list: getUsers,
    update: updateUser,
    remove: removeUser,
};

