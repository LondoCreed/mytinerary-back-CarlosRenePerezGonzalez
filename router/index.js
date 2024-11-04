import { Router } from 'express'
import {routerCity} from "./city.js"
import {routerItinerary} from "./itinerary.js"

const indexRouter = Router()

indexRouter.use('/cities', routerCity)
indexRouter.use('/itineraries', routerItinerary)


export default indexRouter