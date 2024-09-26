import { Card, Title, TextInput, Button } from '@tremor/react'

export function CardOptions({ typeConvert, options, eventSubmit }) {
  return (
    <Card className='flex flex-col gap-5 my-10 w-full opacity-90'>
      <form
        className='flex flex-col gap-5 text-zinc-200'
        method='post'
        onSubmit={eventSubmit}
      >
        <Title>Enter to {typeConvert} convert</Title>
        <TextInput name='value' placeholder={`Enter to ${typeConvert}`} />
        <Title>Unit to Convert from</Title>
        <select
          name='from'
          className='optionsFrom bg-zinc-900 w-full h-10 rounded-lg border-1 border-zinc-800 text-sm '
        >
          <option autoFocus className='hidden text-zinc-800'>
            Select from...
          </option>
          {options.map(medida => (
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
          {options.map(medida => (
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
