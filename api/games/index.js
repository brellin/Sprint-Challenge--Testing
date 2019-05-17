const router = require('express').Router()

router.get('/', async (req, res) => {

    try {

        res.status(200).json({
            message: 'Running'
        })

    } catch (err) {

        console.log(err)
        res.status(500).json({
            error: 'Internal Server Error',
            err
        })

    }

})

module.exports = router
