const router = require('express').Router()

const mailcontrol= require('../controlles/email')

router.post('/api/sendmail',mailcontrol.nodemail)


module.exports={mailrouter:router}