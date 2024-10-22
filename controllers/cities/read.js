
import City from '../../models/City.js'

let allCities = async (req, res, next) => {
    try {
      let {name} = req.query
      let query= {}

      if (name)
      {
        query.name = { $regex: '^' + name, $options: 'i' }
      }

      let cities = await City.find(query)
      return res.status(200).json({
        response: cities,
      })
    } catch (error) {
      next(error)
    }
  }
  

  let citiesById = async (req, res, next) => {
    try {
      let cityId = req.params.id;
      let city = await City.findById(cityId)
      if (!city) {
        return res.status(404).json({
          message: "City not found",
        })
      }
      return res.status(200).json({
        response: city,
      })
    } catch (error) {
      next(error)
    }
  }
  
  export { allCities, citiesById }