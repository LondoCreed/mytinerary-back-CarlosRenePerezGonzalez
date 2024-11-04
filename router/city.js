import { Router } from "express"
import { allCities, citiesById } from "../controllers/cities/read.js"
import { createCity } from "../controllers/cities/create.js"
import { deleteCity } from "../controllers/cities/delete.js"
import { updateCity } from "../controllers/cities/update.js"

const routerCity = Router()


routerCity.get('/', allCities)
routerCity.get('/id/:id', citiesById)
routerCity.post('/create', createCity)
routerCity.delete('/delete/:id', deleteCity)
routerCity.put('/update/:id', updateCity)


export { routerCity }