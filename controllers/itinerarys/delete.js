
import Itinerary from '../../models/Itinerary.js'

const deleteItinerary = async (req, res, next) => {
    try {
        const itineraryId = req.params.id
        const deletedItinerary = await Itinerary.findByIdAndDelete(itineraryId)
        
        if (!deletedItinerary) {
            return res.status(404).json({
                message: "Itinerary not found"
            })
        }
        
        return res.status(200).json({
            message: "Itinerary deleted successfully"
        })
    } catch (error) {
        next(error)
    }
}

export { deleteItinerary }