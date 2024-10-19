import City from '../../models/City.js'

let createCity = async (req, res, next) => {
  try {
    let cityData = req.body
    let newCity = await City.create(cityData)
    return res.status(201).json({
      message: "City successfully created", 
      response: newCity
    })
  } catch (error) { 
    next(error)
  }
}

export { createCity }
