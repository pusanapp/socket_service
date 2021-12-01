const express = require('express');
const {sendPaidOrderNotif} = require("../controller/transaction_controller");
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/socket', (req,res)=>{
  req.io.emit("hello", "Tessss")
  req.io.emit("hanif", "Haniff")

  res.send({
    ok: 'okkkk'
  })
})

router.post('/paid-order', sendPaidOrderNotif)
module.exports = router;
