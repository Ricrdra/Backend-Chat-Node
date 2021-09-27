const controller = require("./messageController.js");
const express = require("express");
const resp = require("../../network/response.js")
let router = express.Router();

router.get('/', (req, res) => {

    const filterMessages = req.query.user || null;
    controller.get(filterMessages).then((data) => {
        resp.success(req, res, data, 200);
    }).catch((e) => {
        resp.error(req, res, 'Unexpected error', 500, e);
    });
});


router.post('/', (request, response) => {

    controller.add(request.body.user, request.body.message)
    .then((message) => {
        resp.success(request, response, message, 204);
    }).catch((e) => {
        resp.error(request, response, e, 404, 'Controller error');
    });

    // response.status(201).send({error: `<strong>You're so funny</strong>`, body: 'You can\'t divide by cats!'});

});

router.patch('/:id', (req, res) => {
    console.log(req.params.id);
    controller.update(req.params.id, req.body.message)
    .then((data) => {
        resp.success(req, res, data, 200);
    })
    .catch((e) => {
        resp.error(req, res, 'Internal Error', 200, e);
    });
    res.send('OK');
});


router.delete('/:id', (req, res) => {
    controller.delete(req.params.id)
    .then(() => {
        resp.success(req, res, `User ${req.params.id} Deleted`, 200);
    })
    .catch((e) => {
        resp.error(req, res, 'Internal Error', 200, e);
    });
})

module.exports = router;