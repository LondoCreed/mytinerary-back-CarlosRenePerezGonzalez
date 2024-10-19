import { Router } from 'express'
import {routerCity} from "./city.js"

const indexRouter = Router()

indexRouter.use('/cities', routerCity)

export default indexRouter