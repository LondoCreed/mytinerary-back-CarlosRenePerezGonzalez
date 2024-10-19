import { Router } from "express"
import { allCities, citiesById } from "../controllers/city/read.js"
import { createCity } from "../controllers/city/create.js"

const routerCity = Router()


routerCity.get('/', allCities)
routerCity.get('/id/:id', citiesById)
routerCity.post('/create', createCity)


export { routerCity }