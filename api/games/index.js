const router = require('express').Router()
const Games = require('./Games')

router.get('/', async function (req, res) {

    try {

        const get = await Games.find()

        res.status(200).json(get)

    } catch (err) {

        console.log(err)
        res.status(500).json({
            error: 'Internal Server Error',
            err
        })

    }

})

router.post('/', async function (req, res) {

    const { body } = req

    if (body.title && body.genre) {

        const { title } = body

        const compare = await Games.find(title)

        console.log(compare)

        if (!compare) {

            try {

                const post = await Games.add(body)

                res.status(200).json(post)

            } catch (err) {
                console.log(err)
                res.status(500).json({
                    error: 'Internal Server Error',
                    err
                })
            }

        } else {
            res.status(405).json({
                error: 'Already exists'
            })
        }


    } else {
        res.status(500).json({
            error: 'You must include a tite AND genre'
        })
    }

})

router.delete('/:title', async (req, res) => {

    const { title } = req.params

    const del = await Games.remove(title)

    res.status(200).json(del)

})

module.exports = router
