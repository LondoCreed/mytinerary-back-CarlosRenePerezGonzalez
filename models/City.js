import {Schema, model} from "mongoose"

let collection = "Cities"

let citySchema = new Schema({
    name: { type: String, required:true},
    photo: {type: String, required:true},
    country: { type: String, required: true },
    continent: { type: String, required: true },
    description: { type: String, required: true },
    currency: { type: String, required: true },
    population: { type: Number, required: true },
    area: { type: Number, required: true },
    postalCode: { type: String, required: true },
    attractions: { type: [String], required: true }, //para menejar cadenas de objetos
}, {
    timestamps: true,
})

let City = model(collection, citySchema)

export default City