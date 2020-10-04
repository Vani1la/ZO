const { Router } = require('express')
const router = Router()


router.get('/', (req, res) =>{
    res.render('provider', {
        title: 'Производитель говна'
    })
})


module.exports = router