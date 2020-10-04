const { Router } = require('express')
const router = Router()


router.get('/', (req, res) => {
    res.render('questionary', {
        title: 'Заполнение анкеты'
    })
})


module.exports = router