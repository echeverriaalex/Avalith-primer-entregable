const express = require('express');
const router = express.Router();

router.use('/', (req, res)=>{

    res.send("Hello TP");
})

module.exports = router;