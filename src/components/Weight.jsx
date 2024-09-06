import { Card, TextInput, Title, Button, SelectItem, Select } from '@tremor/react'
import { getResult } from '../services/resultConvert'
import { toast } from 'sonner'
import { useMeasures } from '../hooks/useMeasures'

export default function Weight() {
  const { medidas } = useMeasures({ type: 'weight' })

  const handleSubmit = async e => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    const value = formData.get('value')
    const from = formData.get('from')
    const to = formData.get('to')

    const operationLenght = { value, from, to }
    const dataJSON = JSON.stringify(operationLenght)
    const result = await getResult(dataJSON, 'weight')

    form.reset()

    toast.success(result)
  }
  return (
    <>
      <Card className='flex flex-col gap-5 my-10 w-full opacity-90'>
        <form className='flex flex-col gap-5' method='post' onSubmit={handleSubmit}>
          <Title>Enter to weight convert</Title>
          <TextInput name='value' placeholder='Enter to weight' />
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
