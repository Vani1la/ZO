const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.render('providers', {
      title: 'Поставщики'
    });
  });
module.exports = router