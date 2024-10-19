import mongose from 'mongoose'

let url = process.env.URI_MONGO

async function connectDB() {
  try {
    
    await mongose.connect(url)
    console.log('MongoDB Connected...')
    
  } catch (error) {
    console.log(error)
    
  }
}

connectDB ()