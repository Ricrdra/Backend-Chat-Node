const message = require("../components/message/routes")
const user = require("../components/user/routes")


const routes = (server) => {
    server.use('/message', message);
    server.use('/user', user);
}

module.exports = routes;