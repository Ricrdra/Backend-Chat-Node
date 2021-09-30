const message = require("../components/message/routes")
const user = require("../components/user/routes")
const chat = require("../components/chat/routes")


const routes = (server) => {
    server.use('/message', message);
    server.use('/user', user);
    server.use('/chat', chat);
}

module.exports = routes;