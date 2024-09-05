import { SelectItem } from '@tremor/react'
import { Select } from '@tremor/react'
import { Card, TextInput, Title, Button } from '@tremor/react'
import { useEffect, useState } from 'react'
import { getResult } from '../services/resultConvert'

export default function Temperature() {
  const [medidas, setMedidas] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/temperature')
      .then(res => res.json())
      .then(data => setMedidas(data))
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    const value = formData.get('value')
    const from = formData.get('from')
    const to = formData.get('to')

    const operationLenght = { value, from, to }
    const dataJSON = JSON.stringify(operationLenght)
    const result = await getResult(dataJSON, 'temperature')

    form.reset()
    console.log(result)
  }

  return (
    <>
      <Card className='flex flex-col gap-5 my-10 w-full opacity-90'>
        <form className='flex flex-col gap-5' method='post' onSubmit={handleSubmit}>
          <Title>Enter to temperature convert</Title>
          <TextInput name='value' placeholder='Enter to temperature' />
          <Title>Unit to Convert from</Title>
          <Select name='from' placeholder='Select from...'>
            {medidas.map(medida => (
              <SelectItem key={medida} value={medida}>
                {medida}
              </SelectItem>
            ))}
          </Select>
          <Title htmlFor=''>Unit to Convert to</Title>
          <Select name='to' placeholder='Select to...'>
            {medidas.map(medida => (
              <SelectItem key={medida} value={medida}>
                {medida}
              </SelectItem>
            ))}
          </Select>
          <Button className='delay-50 duration-700 transition-all' type='submit'>
            Convert
          </Button>
        </form>
      </Card>
    </>
  )
}
