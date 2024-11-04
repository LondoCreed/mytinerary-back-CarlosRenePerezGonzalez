import { Router } from "express"
import { allItineraries, getItinerariesByCity, getItineraryById } from "../controllers/itinerarys/read.js"
import { createItinerary } from "../controllers/itinerarys/create.js"
import { updateItineraryLikes, updateItinerary } from "../controllers/itinerarys/update.js"
import { deleteItinerary } from "../controllers/itinerarys/delete.js"

const routerItinerary = Router()

// Read routes
routerItinerary.get('/', allItineraries)
routerItinerary.get('/byCity/:cityId', getItinerariesByCity)
routerItinerary.get('/id/:id', getItineraryById)

// Create route
routerItinerary.post('/create', createItinerary)

// Update routes
routerItinerary.put('/like/:id', updateItineraryLikes);
routerItinerary.put('/update/:id', updateItinerary)

// Delete route
routerItinerary.delete('/delete/:id', deleteItinerary)

export { routerItinerary }