import "dotenv/config.js"
import '../../config/database.js'
import bcryptjs from 'bcryptjs'
import User from '../User.js'

let users = [
  {
      name: "Carlos",
      lastname: "Perez",
      email: "carlos.perez@example.com",
      password: "password123",
      country: "Mexico",
      photo: "https://example.com/photo1.jpg",
      online: true,
      role: 1,
  },
  {
      name: "Ana",
      lastname: "Lopez", 
      email: "ana.lopez@example.com",
      password: "password123",
      country: "Spain",
      photo: "https://example.com/photo2.jpg",
      online: false,
      role: 2,
  },
  {
      name: "John",
      lastname: "Doe",
      email: "john.doe@example.com",
      password: "password123",
      country: "USA",
      photo: "https://example.com/photo3.jpg",
      online: false,
      role: 1,
  },
];


users = users.map(user => ({
    ...user,
    password: bcryptjs.hashSync(user.password, 10)
}))

User.insertMany(users)
    .then(() => console.log("Users inserted successfully"))
    .catch((error) => console.error("Error inserting users:", error))
