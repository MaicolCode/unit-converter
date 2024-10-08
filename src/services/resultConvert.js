export const getResult = async (values, type) => {
  console.log(values)
  const result = await fetch(`http://localhost:3000/${type}/result`, {
    method: 'POST',
    body: values
  })

  const resp = await result.json()
  return resp
}

export const getResultConvert = async () => {
  const result = await fetch(`http://localhost:3000/result`)
  const resp = await result.json()
  return resp
}
