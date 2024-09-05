import express, { urlencoded } from 'express'
import { getJSON } from './utils/getJSON.js'
import cors from 'cors'

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
  console.log(req.body)
  res.send(JSON.stringify('LLego una peticion'))
})

app.post('/weight/result', (req, res) => {
  console.log(req.body)
  res.send(JSON.stringify('LLego una peticion'))
})
app.post('/temperature/result', (req, res) => {
  console.log(req.body)
  res.send(JSON.stringify('LLego una peticion'))
})

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`)
})
