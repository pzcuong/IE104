const express = require('express');
const pug = require('pug');
const router = express.Router();

const authMiddleware = require('../auth/auth.middlewares');

const isAuthAdmin = authMiddleware.isAuthAdmin;

const adminController = require('../admin/admin.controller');

module.exports = router;