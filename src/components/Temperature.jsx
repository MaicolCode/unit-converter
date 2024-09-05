import { SelectItem } from '@tremor/react'
import { Select } from '@tremor/react'
import { Card, TextInput, Title, Button } from '@tremor/react'

export default function Temperature() {
  return (
    <>
      <Card className='flex flex-col gap-5 my-10 w-full opacity-90'>
        <form className='flex flex-col gap-5'>
          <Title>Enter to temperature convert</Title>
          <TextInput name='value' placeholder='Enter to temperature' />
          <Title>Unit to Convert from</Title>
          <Select placeholder='Select from...'>
            <SelectItem value='kg'>kg</SelectItem>
            <SelectItem value='m'>m</SelectItem>
            <SelectItem value='cm'>cm</SelectItem>
            <SelectItem value='mm'>mm</SelectItem>
          </Select>
          <Title htmlFor=''>Unit to Convert to</Title>
          <Select placeholder='Select to...'>
            <SelectItem value='kg'>kg</SelectItem>
            <SelectItem value='m'>m</SelectItem>
            <SelectItem value='cm'>cm</SelectItem>
            <SelectItem value='mm'>mm</SelectItem>
          </Select>
          <Button className='delay-50 duration-700 transition-all'>Convert</Button>
        </form>
      </Card>
    </>
  )
}
