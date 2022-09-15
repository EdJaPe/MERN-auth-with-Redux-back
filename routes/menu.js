const express = require('express');
const router = express.Router()

const { createMenuItem, showMenuItem } = require("../controllers/menuItem")

router.route('/register').post(createMenuItem);
router.route('/all').get(showMenuItem);

module.exports = router;
