import app from './server.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import RestaurantsDAO from './dao/restaurantsDAO.js'

dotenv.config()

const port = process.env.PORT || 5000

mongoose.connect(process.env.RESTREVIEWS_DB_URI, 
    { useNewUrlParser: true }
    ).catch(err => {
        console.log(err.stack)
        process.exit(1)
    }).then(async client => {
        await RestaurantsDAO.injectDB(client)
        app.listen(port, () => {
            console.log(`Server started on port ${port}`)
        })
    })


