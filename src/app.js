import express from 'express'
import router from './routes/index.js'

const app = express()

// Settings
app.use(express.urlencoded({ extended: true, limit: '50mb' }))
app.use(express.json({ limit: '50mb' }))
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*') // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})

// Middlewares
app.use(express.json())

app.use('/', router)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`🚀🚀🚀 Server on port: ${PORT}`)
})

export default app
