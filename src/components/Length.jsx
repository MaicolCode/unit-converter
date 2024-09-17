import { getResult } from '../services/resultConvert'
import { Card, TextInput, Title, Button, Select, SelectItem } from '@tremor/react'
import { toast } from 'sonner'
import { useMeasures } from '../hooks/useMeasures'

export function Length() {
  const { medidas } = useMeasures({ type: '' })

  const handleSubmit = async e => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    const value = formData.get('value')
    const from = formData.get('from')
    const to = formData.get('to')
    const selectOptions = document.querySelector('.optionsFrom')

    const operationLenght = { value, from, to }
    const dataJSON = JSON.stringify(operationLenght)
    const result = await getResult(dataJSON, 'length')

    console.log(selectOptions.selectedIndex)
    form.reset()

    toast.success(result)
  }
  return (
    <Card className='flex flex-col gap-5 my-10 w-full opacity-90'>
      <form className='flex flex-col gap-5' method='post' onSubmit={handleSubmit}>
        <Title>Enter to length convert</Title>
        <TextInput name='value' placeholder='Enter to length' />
        <Title>Unit to Convert from</Title>
        <select
          name='from'
          placeholder='Select from...'
          className='optionsFrom bg-zinc-900 w-full h-10 rounded-lg border-1 border-zinc-800 text-sm '
        >
          {medidas.map(medida => (
            <option key={medida} value={medida}>
              {medida}
            </option>
          ))}
        </select>
        <Title htmlFor=''>Unit to Convert to</Title>
        <select
          name='to'
          placeholder='Select to...'
          className='optionsTo bg-zinc-900 w-full h-10 rounded-lg border-1 border-zinc-800 text-sm '
        >
          {medidas.map(medida => (
            <option key={medida} value={medida}>
              {medida}
            </option>
          ))}
        </select>
        <Button className='delay-50 duration-700 transition-all'>Convert</Button>
      </form>
    </Card>
  )
}
