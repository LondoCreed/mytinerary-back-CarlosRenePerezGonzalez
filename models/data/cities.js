import "dotenv/config.js"
import "../../config/database.js"
import City from "../City.js"



let cities = [
    {
        name: "New York",
        photo: "https://i.imgur.com/bL2Ker0.jpeg",
        country: "United States",
        continent: "North America",
        description: "The city that never sleeps.",
        currency: "USD",
        population: 8419600,
        area: 789.43,
        postalCode: "10001",
        attractions: ["Central Park", "Times Square", "Statue of Liberty"]
    },
    {
        name: "Tokyo",
        photo: "https://i.imgur.com/BR4qrXl.jpeg",
        country: "Japan",
        continent: "Asia",
        description: "The vibrant capital of Japan.",
        currency: "JPY",
        population: 13929286,
        area: 2191,
        postalCode: "100-0001",
        attractions: ["Tokyo Tower", "Senso-ji Temple", "Shibuya Crossing"]
    },
    {
        name: "Paris",
        photo: "https://i.imgur.com/nURk5Gw.jpeg",
        country: "France",
        continent: "Europe",
        description: "The city of love and light.",
        currency: "EUR",
        population: 2140526,
        area: 105.4,
        postalCode: "75001",
        attractions: ["Eiffel Tower", "Louvre Museum", "Arc de Triomphe"]
    },
    {
        name: "Sydney",
        photo: "https://i.imgur.com/5wQ62lV.jpeg",
        country: "Australia",
        continent: "Oceania",
        description: "Famous for its Opera House and beautiful beaches.",
        currency: "AUD",
        population: 5312163,
        area: 12368,
        postalCode: "2000",
        attractions: ["Sydney Opera House", "Sydney Harbour Bridge", "Bondi Beach"]
    },
    {
        name: "London",
        photo: "https://i.imgur.com/05LwaLD.jpeg",
        country: "United Kingdom",
        continent: "Europe",
        description: "A city rich in history and culture.",
        currency: "GBP",
        population: 8982000,
        area: 1572,
        postalCode: "E1 6AN",
        attractions: ["Big Ben", "London Eye", "British Museum"]
    },
    {
        name: "Berlin",
        photo: "https://i.imgur.com/1LQtwfh.jpeg",
        country: "Germany",
        continent: "Europe",
        description: "A city full of history and modernity.",
        currency: "EUR",
        population: 3644826,
        area: 891.8,
        postalCode: "10115",
        attractions: ["Brandenburg Gate", "Berlin Wall", "Museum Island"]
    },
    {
        name: "Barcelona",
        photo: "https://i.imgur.com/ZGJEF8f.jpeg",
        country: "Spain",
        continent: "Europe",
        description: "Known for its architecture and beaches.",
        currency: "EUR",
        population: 5489000,
        area: 101.4,
        postalCode: "08001",
        attractions: ["Sagrada Familia", "Park Güell", "La Rambla"]
    },
    {
        name: "Rio de Janeiro",
        photo: "https://i.imgur.com/FzkWkvn.jpeg",
        country: "Brazil",
        continent: "South America",
        description: "Famous for its beaches and carnival.",
        currency: "BRL",
        population: 6748000,
        area: 1182,
        postalCode: "20000-000",
        attractions: ["Christ the Redeemer", "Sugarloaf Mountain", "Copacabana"]
    },
    {
        name: "Dubai",
        photo: "https://i.imgur.com/P263VKB.jpeg",
        country: "United Arab Emirates",
        continent: "Asia",
        description: "A city of luxury and modernity.",
        currency: "AED",
        population: 3310000,
        area: 4114,
        postalCode: "00000",
        attractions: ["Burj Khalifa", "Dubai Mall", "Palm Jumeirah"]
    },
    {
        name: "Toronto",
        photo: "https://i.imgur.com/el2UkrZ.jpeg",
        country: "Canada",
        continent: "North America",
        description: "The largest city in Canada.",
        currency: "CAD",
        population: 2930000,
        area: 630.2,
        postalCode: "M5A",
        attractions: ["CN Tower", "Toronto Islands", "Royal Ontario Museum"]
    },
    {
        name: "Mexico City",
        photo: "https://i.imgur.com/2V5Jxh3.jpeg",
        country: "Mexico",
        continent: "North America",
        description: "One of the largest cities in the world.",
        currency: "MXN",
        population: 9209944,
        area: 1485,
        postalCode: "01000",
        attractions: ["Zócalo", "Frida Kahlo Museum", "Chapultepec"]
    },
    {
        name: "Istanbul",
        photo: "https://i.imgur.com/73uGK90.jpeg",
        country: "Turkey",
        continent: "Asia",
        description: "A city that unites East and West.",
        currency: "TRY",
        population: 15529267,
        area: 5343,
        postalCode: "34000",
        attractions: ["Hagia Sophia", "Topkapi Palace", "Grand Bazaar"]
    },
    {
        name: "Buenos Aires",
        photo: "https://i.imgur.com/EcyjOvJ.jpeg",
        country: "Argentina",
        continent: "South America",
        description: "The capital of tango.",
        currency: "ARS",
        population: 2890151,
        area: 203,
        postalCode: "C1000",
        attractions: ["Casa Rosada", "Teatro Colón", "La Boca Neighborhood"]
    },
    {
        name: "Moscow",
        photo: "https://i.imgur.com/GM70oYC.jpeg",
        country: "Russia",
        continent: "Europe",
        description: "The capital of Russia, famous for its history.",
        currency: "RUB",
        population: 11920000,
        area: 2561,
        postalCode: "101000",
        attractions: ["Kremlin", "Red Square", "Bolshoi Theatre"]
    },
    {
        name: "Seoul",
        photo: "https://i.imgur.com/eY0KdtJ.jpeg",
        country: "South Korea",
        continent: "Asia",
        description: "A modern city with a rich history.",
        currency: "KRW",
        population: 9776000,
        area: 605.21,
        postalCode: "04524",
        attractions: ["Gyeongbokgung Palace", "N Seoul Tower", "Dongdaemun Market"]
    }
]

City.insertMany(cities).then(() => {
    console.log("Cities inserted successfully.")
    /* mongoose.connection.close() */
})
.catch((error) => {
    console.error("Error inserting cities:", error)
})
