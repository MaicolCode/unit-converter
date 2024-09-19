import express from 'express'
import { getJSON } from './utils/getJSON.js'
import cors from 'cors'
import { convertLength } from './utils/operations/lengthOpertations.js'
import { convertTemperature } from './utils/operations/temperatureOperations.js'
import { convertWeight } from './utils/operations/weightOperations.js'

const medidas = getJSON('../mooks/medidas.json')

const app = express()
const port = process.env.PORT ?? 3000

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json({ type: '*/*' }))

app.get('/', (req, res) => {
  const length = medidas.find(medida => medida.name === 'Longitud')
  res.send(length.medidas)
})

app.get('/weight', (req, res) => {
  const length = medidas.find(medida => medida.name === 'Masa')
  res.send(length.medidas)
})

app.get('/temperature', (req, res) => {
  const length = medidas.find(medida => medida.name === 'Temperatura')
  res.send(length.medidas)
})

app.post('/length/result', (req, res) => {
  try {
    const { value, from, to } = req.body
    const lengthResult = convertLength(value, from, to)
    console.log(lengthResult)
    res.send(JSON.stringify('Success!'))
  } catch (error) {
    res.send(JSON.stringify('Error'))
  }
})

app.post('/weight/result', (req, res) => {
  try {
    const { value, from, to } = req.body
    const weightResult = convertWeight(value, from, to)
    console.log(weightResult)
    res.send(JSON.stringify('Success!'))
  } catch (error) {
    res.send(JSON.stringify('Error'))
  }
})

app.post('/temperature/result', (req, res) => {
  try {
    const { value, from, to } = req.body
    const temperatureResult = convertTemperature(value, from, to)
    console.log(temperatureResult)
    res.send(JSON.stringify('Success!'))
  } catch (error) {
    res.send(JSON.stringify('Error'))
  }
})

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`)
})
