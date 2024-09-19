export function convertTemperature(value, from, to) {
  if (
    (from === 'celsius' && to === 'celsius') ||
    (from === 'fahrenheit' && to === 'fahrenheit') ||
    (from === 'kelvin' && to === 'kelvin')
  ) {
    return parseFloat(value)
  }

  if (to === 'celsius' && from === 'fahrenheit') {
    return fahrenheitACelsius(value)
  }

  if (to === 'fahrenheit' && from === 'celsius') {
    return celsiusAFahrenheit(value)
  }

  if (to === 'celsius' && from === 'kelvin') {
    return kelvinACelsius(value)
  }

  if (to === 'kelvin' && from === 'celsius') {
    return celsiusAKelvin(value)
  }

  if (to === 'fahrenheit' && from === 'kelvin') {
    return kelvinAFahrenheit(value)
  }

  if (to === 'kelvin' && from === 'fahrenheit') {
    return fahrenheitAKelvin(value)
  }
}

/*
    Cada una de las siguientes funciones corresponde a una conversión de temperatura.
*/

function celsiusAFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32
}

function fahrenheitACelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9
}

function celsiusAKelvin(celsius) {
  return celsius + 273.15
}

function kelvinACelsius(kelvin) {
  return kelvin - 273.15
}

function fahrenheitAKelvin(fahrenheit) {
  const celsius = fahrenheitACelsius(fahrenheit)
  return parseFloat(celsiusAKelvin(celsius).toFixed(4))
}

function kelvinAFahrenheit(kelvin) {
  const celsius = kelvinACelsius(kelvin)
  return parseFloat(celsiusAFahrenheit(celsius).toFixed(4))
}
