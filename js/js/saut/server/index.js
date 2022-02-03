require('dotenv').config()
const express = require('express')
const PORT = process.env.port || 5000
const sequelize = require('./bd')
const  cors = require('cors')
const  router = require('./rouds/index')
const errorHandler = require('./middleware/ErrorHandingMiddleware')
const fileUpload = require('express-fileupload')


const models = require('./models/models')
const app = express()

app.use(cors())
app.use(express.json())
app.use(fileUpload({}))
app.use('/api', router)

//обработка ошибок
app.use(errorHandler)
// app.get('/', (req,res)=>{
//     res.status(200).json({message: 'WORKING'})
// })

const start = async () =>{
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server starter on port${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()
