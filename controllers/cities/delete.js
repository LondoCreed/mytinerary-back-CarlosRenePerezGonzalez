import City from '../../models/City.js';

const deleteCity = async (req, res, next) => {
    try {
        const cityId = req.params.id;
        const deletedCity = await City.findByIdAndDelete(cityId);
        
        if (!deletedCity) {
            return res.status(404).json({
                success: false,
                message: "City not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "City successfully deleted",
            response: deletedCity
        });
    } catch (error) {
        next(error);
    }
};

export { deleteCity };
