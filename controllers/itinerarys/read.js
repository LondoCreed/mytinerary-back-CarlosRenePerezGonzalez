
import Itinerary from '../../models/Itinerary.js'

let allItineraries = async (req, res, next) => {
    try {
        const allItineraries = await Itinerary.find();
        return res.status(200).json({
            response: allItineraries
        });
    } catch (error) {
        next(error);
    }
};

const getItinerariesByCity = async (req, res, next) => {
    try {
        const cityId = req.params.cityId
        const itineraries = await Itinerary.find({ cityId })
        
        return res.status(200).json({
            response: itineraries
        })
    } catch (error) {
        next(error)
    }
}

const getItineraryById = async (req, res, next) => {
    try {
        const itineraryId = req.params.id
        const itinerary = await Itinerary.findById(itineraryId)
        
        if (!itinerary) {
            return res.status(404).json({
                message: "Itinerary not found"
            })
        }
        
        return res.status(200).json({
            response: itinerary
        })
    } catch (error) {
        next(error)
    }
}

export { allItineraries, getItinerariesByCity, getItineraryById }