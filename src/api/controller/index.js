const Handler = require('../handler/'),
    router = require('express').Router();

router.post('/api/transfer', Handler.transfer);

module.exports = router;