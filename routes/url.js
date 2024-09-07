const express = require('express');
const { createUrl, redirectUrltoSite } = require('../controllers/url');

const router = express.Router();

router.route('/').post(createUrl);

router.route('/:shortId').get(redirectUrltoSite);

module.exports = router;
