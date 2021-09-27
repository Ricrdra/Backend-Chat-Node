import message from "../components/message/routes.js";

const routes = (server) => {
    server.use('/message', message);
}

export default routes;