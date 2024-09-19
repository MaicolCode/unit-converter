import { librasConvertions, onzasConvertions } from '../consts.js'

const equivalentesComunes = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg']

export function convertWeight(value, from, to) {
  const fromIndex = equivalentesComunes.indexOf(from)
  const toIndex = equivalentesComunes.indexOf(to)

  let recorrido

  fromIndex > toIndex
    ? (recorrido = equivalentesComunes.slice(toIndex, fromIndex))
    : (recorrido = equivalentesComunes.slice(fromIndex, toIndex))

  if (
    (to === 'mg' && from === 'mg') ||
    (to === 'g' && from === 'g') ||
    (to === 'kg' && from === 'kg') ||
    (to === 'hg' && from === 'hg') ||
    (to === 'dag' && from === 'dag')
  ) {
    return parseFloat(value)
  }

  if (to === 'lb') {
    const unitConverter = librasConvertions[from]
    const libras = value / unitConverter
    return parseFloat(libras.toFixed(5))
  }

  if (from === 'lb') {
    const unitConverter = librasConvertions[to]
    const libras = value * unitConverter
    return parseFloat(libras.toFixed(5))
  }

  if (to === 'oz') {
    const unitConverter = onzasConvertions[from]
    const onzas = value / unitConverter
    return parseFloat(onzas.toFixed(5))
  }

  if (from === 'oz') {
    const unitConverter = onzasConvertions[to]
    const onzas = value * unitConverter
    return parseFloat(onzas.toFixed(5))
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
