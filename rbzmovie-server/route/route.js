const express = require("express");
const router = express.Router();
const {getAll} = require("../controller/userController");

router.get("/user", getAll);

module.exports = router;