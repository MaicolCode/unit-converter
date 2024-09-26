import { Card, Title, TextInput, Button } from '@tremor/react'

export function Result({ resp }) {
  const { to, from, value, total } = resp.result

  function handleClick() {
    window.location.reload()
  }

  return (
    <Card className='flex flex-col gap-5 my-10 w-full opacity-90'>
      <Title>
        This is the result of your conversion from "{from}" to "{to}".
      </Title>
      <h1 className='text-3xl py-5 px-2 bg-gray-400 bg-opacity-20 rounded-lg'>
        {value} {from} = {total} {to}
      </h1>
      <Button className='delay-50 duration-700 transition-all' onClick={handleClick}>
        Reset
      </Button>
    </Card>
  )
}
