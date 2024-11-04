import "dotenv/config.js"
import "../../config/database.js"
import Itinerary from "../Itinerary.js"


let itinerarys = [
    {
        cityId: "6713be5e871e9c8407a2d645",
        author: {
            name: "Sarah Johnson",
            photo: "https://randomuser.me/api/portraits/women/1.jpg"
        },
        price: 4,
        duration: 240,
        likes: 0,
        hashtags: ["#NYClife", "#TimesSquare", "#CentralPark", "#CityExplorer"]
    },
    {
        cityId: "6713be5e871e9c8407a2d646",
        author: {
            name: "Kenji Yamamoto",
            photo: "https://randomuser.me/api/portraits/men/2.jpg"
        },
        price: 3,
        duration: 180,
        likes: 0,
        hashtags: ["#TokyoNights", "#JapanCulture", "#ShibuyaLife", "#FoodTour"]
    },
    {
        cityId: "6713be5e871e9c8407a2d647",
        author: {
            name: "Sophie Dubois",
            photo: "https://randomuser.me/api/portraits/women/3.jpg"
        },
        price: 5,
        duration: 300,
        likes: 0,
        hashtags: ["#ParisianLife", "#EiffelTower", "#FrenchCulture", "#CityOfLights"]
    },
    {
        cityId: "6713be5e871e9c8407a2d648",
        author: {
            name: "Jack Wilson",
            photo: "https://randomuser.me/api/portraits/men/4.jpg"
        },
        price: 4,
        duration: 360,
        likes: 0,
        hashtags: ["#SydneyLife", "#OperaHouse", "#BondiBeach", "#AussieAdventure"]
    },
    {
        cityId: "6713be5e871e9c8407a2d649",
        author: {
            name: "Emma Thompson",
            photo: "https://randomuser.me/api/portraits/women/5.jpg"
        },
        price: 5,
        duration: 240,
        likes: 0,
        hashtags: ["#LondonCalling", "#BigBen", "#BritishLife", "#RoyalTour"]
    },
    {
        cityId: "6713be5e871e9c8407a2d64a",
        author: {
            name: "Hans Schmidt",
            photo: "https://randomuser.me/api/portraits/men/6.jpg"
        },
        price: 3,
        duration: 180,
        likes: 0,
        hashtags: ["#BerlinWall", "#GermanHistory", "#StreetArt", "#BerlinLife"]
    },
    {
        cityId: "6713be5e871e9c8407a2d64b",
        author: {
            name: "Carlos Rodriguez",
            photo: "https://randomuser.me/api/portraits/men/7.jpg"
        },
        price: 4,
        duration: 270,
        likes: 0,
        hashtags: ["#Barcelona", "#Gaudi", "#SagradaFamilia", "#SpanishVibes"]
    },
    {
        cityId: "6713be5e871e9c8407a2d64c",
        author: {
            name: "Ana Silva",
            photo: "https://randomuser.me/api/portraits/women/8.jpg"
        },
        price: 3,
        duration: 300,
        likes: 0,
        hashtags: ["#RioLife", "#Copacabana", "#ChristTheRedeemer", "#BrazilianVibes"]
    },
    {
        cityId: "6713be5e871e9c8407a2d64d",
        author: {
            name: "Mohammed Al-Said",
            photo: "https://randomuser.me/api/portraits/men/9.jpg"
        },
        price: 5,
        duration: 240,
        likes: 0,
        hashtags: ["#DubaiLife", "#BurjKhalifa", "#LuxuryTour", "#DesertSafari"]
    },
    {
        cityId: "6713be5e871e9c8407a2d64e",
        author: {
            name: "Mike Anderson",
            photo: "https://randomuser.me/api/portraits/men/10.jpg"
        },
        price: 3,
        duration: 210,
        likes: 0,
        hashtags: ["#TorontoLife", "#CNTower", "#CanadianVibes", "#CityTour"]
    },
    {
        cityId: "6713be5e871e9c8407a2d64f",
        author: {
            name: "Luis Hernandez",
            photo: "https://randomuser.me/api/portraits/men/11.jpg"
        },
        price: 2,
        duration: 270,
        likes: 0,
        hashtags: ["#CDMX", "#MexicanCulture", "#Zocalo", "#FoodTour"]
    },
    {
        cityId: "6713be5e871e9c8407a2d650",
        author: {
            name: "Mehmet Yilmaz",
            photo: "https://randomuser.me/api/portraits/men/12.jpg"
        },
        price: 3,
        duration: 300,
        likes: 0,
        hashtags: ["#Istanbul", "#HagiaSophia", "#TurkishCulture", "#GrandBazaar"]
    },
    {
        cityId: "6713be5e871e9c8407a2d651",
        author: {
            name: "Isabella Martinez",
            photo: "https://randomuser.me/api/portraits/women/13.jpg"
        },
        price: 2,
        duration: 240,
        likes: 0,
        hashtags: ["#BuenosAires", "#Tango", "#ArgentineCulture", "#CityTour"]
    },
    {
        cityId: "6713be5e871e9c8407a2d652",
        author: {
            name: "Ivan Petrov",
            photo: "https://randomuser.me/api/portraits/men/14.jpg"
        },
        price: 4,
        duration: 270,
        likes: 0,
        hashtags: ["#Moscow", "#RedSquare", "#RussianHistory", "#CityExplorer"]
    },
    {
        cityId: "6713be5e871e9c8407a2d652",
        author: {
            name: "Min-ji Kim",
            photo: "https://randomuser.me/api/portraits/women/15.jpg"
        },
        price: 3,
        duration: 240,
        likes: 0,
        hashtags: ["#MoscowNights", "#RedSquare", "#Russian", "#CityNights"]
    },
    {
        cityId: "6713be5e871e9c8407a2d649",
        author: {
            name: "Oliver Smith",
            photo: "https://randomuser.me/api/portraits/men/16.jpg"
        },
        price: 3,
        duration: 210,
        likes: 0,
        hashtags: ["#LondonEye", "#BritishPub", "#CityTour", "#HistoricalSites"]
    },
    {
        cityId: "6713be5e871e9c8407a2d64a",
        author: {
            name: "Lisa Mueller",
            photo: "https://randomuser.me/api/portraits/women/17.jpg"
        },
        price: 2,
        duration: 240,
        likes: 0,
        hashtags: ["#BerlinNights", "#GermanFood", "#UrbanCulture", "#CityLife"]
    },
    {
        cityId: "6713be5e871e9c8407a2d646",
        author: {
            name: "Hiroshi Sato",
            photo: "https://randomuser.me/api/portraits/men/18.jpg"
        },
        price: 5,
        duration: 300,
        likes: 0,
        hashtags: ["#TokyoTech", "#Akihabara", "#JapanTravel", "#CityTour"]
    },
    {
        cityId: "6713be5e871e9c8407a2d648",
        author: {
            name: "Emma White",
            photo: "https://randomuser.me/api/portraits/women/19.jpg"
        },
        price: 3,
        duration: 240,
        likes: 0,
        hashtags: ["#SydneyHarbour", "#AussieLife", "#BeachDay", "#CityVibes"]
    },
    {
        cityId: "6713be5e871e9c8407a2d64b",
        author: {
            name: "Elena Torres",
            photo: "https://randomuser.me/api/portraits/women/20.jpg"
        },
        price: 3,
        duration: 270,
        likes: 0,
        hashtags: ["#BarcelonaBeach", "#SpanishFood", "#CityLife", "#ParkGuell"]
    },
    {
        cityId: "6713be5e871e9c8407a2d647",
        author: {
            name: "Jean-Pierre Dubois",
            photo: "https://randomuser.me/api/portraits/men/21.jpg"
        },
        price: 4,
        duration: 240,
        likes: 0,
        hashtags: ["#ParisNights", "#FrenchFood", "#LouvreMuseum", "#RiverSeine"]
    },
    {
        cityId: "6713be5e871e9c8407a2d645",
        author: {
            name: "Michael Bloomberg",
            photo: "https://randomuser.me/api/portraits/men/22.jpg"
        },
        price: 5,
        duration: 300,
        likes: 0,
        hashtags: ["#NYCNights", "#Broadway", "#SoHo", "#CityWalk"]
    },
    {
        cityId: "6713be5e871e9c8407a2d64d",
        author: {
            name: "Fatima Al-Rahman",
            photo: "https://randomuser.me/api/portraits/women/23.jpg"
        },
        price: 4,
        duration: 180,
        likes: 0,
        hashtags: ["#DubaiShopping", "#GoldSouk", "#DesertAdventure", "#LuxuryLife"]
    },
    {
        cityId: "6713be5e871e9c8407a2d64c",
        author: {
            name: "Pedro Santos",
            photo: "https://randomuser.me/api/portraits/men/24.jpg"
        },
        price: 2,
        duration: 240,
        likes: 0,
        hashtags: ["#RioNights", "#Samba", "#BeachLife", "#BrazilianFood"]
    },
    {
        cityId: "6713be5e871e9c8407a2d64f",
        author: {
            name: "Maria Gonzalez",
            photo: "https://randomuser.me/api/portraits/women/25.jpg"
        },
        price: 3,
        duration: 270,
        likes: 0,
        hashtags: ["#MexicoCity", "#Tacos", "#AztecHistory", "#LocalMarkets"]
    },
    {
        cityId: "6713be5e871e9c8407a2d64e",
        author: {
            name: "David Lee",
            photo: "https://randomuser.me/api/portraits/men/26.jpg"
        },
        price: 4,
        duration: 240,
        likes: 0,
        hashtags: ["#TorontoNights", "#Multicultural", "#FoodScene", "#CityLife"]
    },
    {
        cityId: "6713be5e871e9c8407a2d652",
        author: {
            name: "Natasha Petrova",
            photo: "https://randomuser.me/api/portraits/women/27.jpg"
        },
        price: 3,
        duration: 300,
        likes: 0,
        hashtags: ["#MoscowNights", "#RussianCulture", "#History", "#LocalLife"]
    },
    {
        cityId: "6713be5e871e9c8407a2d650",
        author: {
            name: "Ayse Demir",
            photo: "https://randomuser.me/api/portraits/women/28.jpg"
        },
        price: 2,
        duration: 240,
        likes: 0,
        hashtags: ["#IstanbulNights", "#TurkishFood", "#Bosphorus", "#CityTour"]
    },
    {
        cityId: "6713be5e871e9c8407a2d651",
        author: {
            name: "Lucas Rodriguez",
            photo: "https://randomuser.me/api/portraits/men/29.jpg"
        },
        price: 3,
        duration: 270,
        likes: 0,
        hashtags: ["#BuenosAiresNights", "#Tango", "#WineTasting", "#CityLife"]
    },
    {
        cityId: "6713be5e871e9c8407a2d651",
        author: {
            name: "Ji-hoon Park",
            photo: "https://randomuser.me/api/portraits/men/30.jpg"
        },
        price: 4,
        duration: 240,
        likes: 0,
        hashtags: ["#BuenosAiresDays", "#Clasic", "#EpicFood", "#DayTrip"]
    }
]


Itinerary.insertMany(itinerarys).then(() => {
    console.log("Itinerarys inserted successfully.")
   
})
.catch((error) => {
    console.error("Error inserting Itinerarys:", error)
})
