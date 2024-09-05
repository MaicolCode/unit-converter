import express from 'express'
import { getJSON } from './utils/getJSON.js'
import cors from 'cors'

const medidas = getJSON('../mooks/medidas.json')

const app = express()
const port = process.env.PORT ?? 3000

app.use(cors())

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

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`)
})
