const router = require('express').Router();
const auth = require('../lib/auth.js');
const serverModel = require('../models/server.js');
const { login } = require('../models/user.js');

function sendAsJSON(req, res, next) {
  res.json(res.data);
}

router.route('/register')
  .post(login, serverModel.getUserData, serverModel.checkIfServerIsRegistered, serverModel.generateUUID, serverModel.registerServer, serverModel.prepareResponse, sendAsJSON);

router.route('/start')
  .get(serverModel.saveServerURL, sendAsJSON);

router.route('/stop')
  .get(serverModel.deleteServerURL, sendAsJSON);

module.exports = router;
