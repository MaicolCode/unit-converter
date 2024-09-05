import { Card, Title, TextInput, Button } from '@tremor/react'

export function Result() {
  return (
    <Card className='flex flex-col gap-5 my-10 w-full opacity-90'>
      <Title>This is your result of conversion</Title>
      <h1 className='text-3xl'>20 ft = 609 cm</h1>
      <Button className='delay-50 duration-700 transition-all'>Reset</Button>
    </Card>
  )
}
