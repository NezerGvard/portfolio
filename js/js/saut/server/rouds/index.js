const Router = require('express')
const router = new Router()
const deviceRouter = require('./deviceRouds')
const brandRouter = require('./brandRouds')
const typeRouter = require('./typeRouds')
const userRouter = require('./userRouds')





router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)

module.exports = router