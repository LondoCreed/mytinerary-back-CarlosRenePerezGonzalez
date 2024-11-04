import City from '../../models/City.js';

const updateCity = async (req, res, next) => {
    try {
        const updatedCity = await City.findByIdAndUpdate(
            req.params.id,             
            req.body,                 
            { new: true, runValidators: true } 
        );

        if (updatedCity) {
            return res.status(200).json({
                success: true,
                message: "City successfully updated",
                response: updatedCity
            });
        } else {
            return res.status(404).json({
                success: false,
                message: 'City not found'
            });
        }    
    } catch (error) {
        next(error);
    }
};

export { updateCity };
