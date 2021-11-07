import express from 'express'
import RestaurantsCtrl from './restaurants.controller.js'

const router = express.Router()

router.get('/', (req, res) => {
    RestaurantsCtrl.apiGetRestaurants})

export default router