
import Itinerary from '../../models/Itinerary.js'


const updateItineraryLikes = async (req, res, next) => {
    try {
        const itineraryId = req.params.id;
        const { action } = req.query;  
        const itinerary = await Itinerary.findById(itineraryId);

        if (action === 'remove' && itinerary.likes > 0) {
            itinerary.likes -= 1;
        } else {
            itinerary.likes += 1;
        }

        const updatedItinerary = await itinerary.save();
        
        return res.status(200).json({
            success: true,
            response: updatedItinerary,
            message: `Likes ${action === 'remove' ? 'removed' : 'added'} successfully`
        });
    } catch (error) {
        next(error);
    }
};


const updateItinerary = async (req, res, next) => {
    try {
        const itineraryId = req.params.id
        const updates = req.body
        
        const updatedItinerary = await Itinerary.findByIdAndUpdate(
            itineraryId,
            updates,
            { new: true } 
        )  
        
        return res.status(200).json({
            success: true,
            response: updatedItinerary,
            message: "Itinerary updated successfully"
        })
    } catch (error) {
        next(error)
    }
}

export { updateItineraryLikes, updateItinerary }