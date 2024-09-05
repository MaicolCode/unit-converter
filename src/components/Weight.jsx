import { SelectItem } from '@tremor/react'
import { Select } from '@tremor/react'
import { Card, TextInput, Title, Button } from '@tremor/react'
import { useEffect, useState } from 'react'

export default function Weight() {
  const [medidas, setMedidas] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/weight')
      .then(res => res.json())
      .then(data => setMedidas(data))
  }, [])
  return (
    <>
      <Card className='flex flex-col gap-5 my-10 w-full opacity-90'>
        <form className='flex flex-col gap-5'>
          <Title>Enter to weight convert</Title>
          <TextInput name='value' placeholder='Enter to weight' />
          <Title>Unit to Convert from</Title>
          <Select placeholder='Select from...'>
            {medidas.map(medida => (
              <SelectItem key={medida} value={medida}>
                {medida}
              </SelectItem>
            ))}
          </Select>
          <Title htmlFor=''>Unit to Convert to</Title>
          <Select placeholder='Select to...'>
            {medidas.map(medida => (
              <SelectItem key={medida} value={medida}>
                {medida}
              </SelectItem>
            ))}
          </Select>
          <Button className='delay-50 duration-700 transition-all'>Convert</Button>
        </form>
      </Card>
    </>
  )
}
