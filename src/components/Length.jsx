import { getResult } from '../services/resultConvert'
import { Card, TextInput, Title, Button } from '@tremor/react'
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
    //const selectOptions = document.querySelector('.optionsFrom')

    const operationLenght = { value, from, to }
    const dataJSON = JSON.stringify(operationLenght)
    const result = await getResult(dataJSON, 'length')

    //console.log(selectOptions.selectedIndex)
    form.reset()

    if (result === 'Success!') {
      toast.success('Your peticion is done!')
    } else {
      toast.error('Your peticion is not done!')
    }
  }

  return (
    <Card className='flex flex-col gap-5 my-10 w-full opacity-90'>
      <form
        className='flex flex-col gap-5 text-zinc-200'
        method='post'
        onSubmit={handleSubmit}
      >
        <Title>Enter to length convert</Title>
        <TextInput name='value' placeholder='Enter to length' />
        <Title>Unit to Convert from</Title>
        <select
          name='from'
          className='optionsFrom bg-zinc-900 w-full h-10 rounded-lg border-1 border-zinc-800 text-sm '
        >
          <option autoFocus className='hidden text-zinc-800'>
            Select from...
          </option>
          {medidas.map(medida => (
            <option key={medida} value={medida}>
              {medida}
            </option>
          ))}
        </select>
        <Title htmlFor=''>Unit to Convert to</Title>
        <select
          name='to'
          className='optionsTo bg-zinc-900 w-full h-10 rounded-lg border-1 border-zinc-800 text-sm '
        >
          <option autoFocus className='hidden text-zinc-800'>
            Select to...
          </option>
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
