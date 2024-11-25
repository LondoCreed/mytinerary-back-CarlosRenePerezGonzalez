import { Router } from 'express'
import {routerCity} from "./city.js"
import {routerItinerary} from "./itinerary.js"
import authRouter from './auth.js'
import routerUsers from './user.js'

const indexRouter = Router()

indexRouter.use('/cities', routerCity)
indexRouter.use('/itineraries', routerItinerary)
indexRouter.use('/auth', authRouter)
indexRouter.use('/users', routerUsers)


export default indexRouter