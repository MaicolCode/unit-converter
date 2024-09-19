import {
  millasConvertions,
  piesConvertions,
  pulgadasConvertions,
  yardaConvertions
} from '../consts.js'

const equivalentesComunes = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm']

function convertLength(value, from, to) {
  const fromIndex = equivalentesComunes.indexOf(from)
  const toIndex = equivalentesComunes.indexOf(to)

  let recorrido

  fromIndex > toIndex
    ? (recorrido = equivalentesComunes.slice(toIndex, fromIndex))
    : (recorrido = equivalentesComunes.slice(fromIndex, toIndex))

  if (
    (to === 'mi' && from === 'mi') ||
    (to === 'yd' && from === 'yd') ||
    (to === 'ft' && from === 'ft') ||
    (to === 'in' && from === 'in')
  ) {
    return Number(value)
  }

  if (to === 'yd') {
    const unitConverter = yardaConvertions[from]
    const yardas = value / unitConverter
    return Number(yardas.toFixed(5))
  }

  if (from === 'yd') {
    const unitConverter = yardaConvertions[to]
    const yardas = value * unitConverter
    return Number(yardas.toFixed(7))
  }

  if (to === 'ft') {
    const unitConverter = piesConvertions[from]
    const pies = value / unitConverter
    return Number(pies.toFixed(5))
  }

  if (from === 'ft') {
    const unitConverter = piesConvertions[to]
    const pies = value * unitConverter
    return Number(pies.toFixed(7))
  }

  if (to === 'in') {
    const unitConverter = pulgadasConvertions[from]
    const pulgadas = value / unitConverter
    return Number(pulgadas.toFixed(5))
  }

  if (from === 'in') {
    const unitConverter = pulgadasConvertions[to]
    const pulgadas = value * unitConverter
    return parseFloat(pulgadas.toFixed(7))
  }

  if (to === 'mi') {
    const unitConverter = millasConvertions[from]
    const millas = value / unitConverter
    return parseFloat(millas.toFixed(5))
  }

  if (from === 'mi') {
    const unitConverter = millasConvertions[to]
    const millas = value * unitConverter
    return parseFloat(millas.toFixed(7))
  }

  if (toIndex > fromIndex) {
    for (let i = 0; i < recorrido.length; i++) {
      value *= 10
    }
    return value
  }

  if (fromIndex > toIndex) {
    for (let i = 0; i < recorrido.length; i++) {
      value /= 10
    }
    return value
  }
}

export { convertLength }
