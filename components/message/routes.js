const controller = require("./messageController.js");
const express = require("express");
const resp = require("../../network/response.js")
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/');
    },
    filename: function (req, file, cb) {
        const [name, extension] = file.originalname.split('.');
        cb(null, `${name}-${Date.now()}.${extension}`)
    }
})

const upload = multer({storage: storage});


let router = express.Router();


router.get('/', (req, res) => {

    const filterMessages = req.query.user || null;
    controller.get(filterMessages).then((data) => {
        resp.success(req, res, data, 200);
    }).catch((e) => {
        resp.error(req, res, 'Unexpected error', 500, e);
    });
});


router.post('/', upload.single('file'), (request, response) => {
    console.log(request.file);
    controller.add(request.body.user, request.body.message, request.body.chat, request.file)
    .then((message) => {
        resp.success(request, response, message, 204);
    }).catch((e) => {
        resp.error(request, response, e, 404, 'Controller error');
    });


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