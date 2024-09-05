import { SelectItem } from '@tremor/react'
import { Card, TextInput, Title, Button, Select } from '@tremor/react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import clsx from 'clsx'

export default function App() {
  const location = useLocation()

  return (
    <main className='w-full h-screen flex justify-center items-center'>
      <section className='w-[45%] h-[800px] shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] p-10 rounded-xl bg-gradient-to-br from-zinc-900 to-teal-900'>
        <h1 className='text-4xl font-bold mb-5'>Unit Converter</h1>
        <nav>
          <ul className='flex gap-4'>
            <li>
              <Link
                to={'/'}
                className={clsx({
                  'text-blue-500 border-b border-blue-500 delay-50 duration-700 transition-all ':
                    location.pathname === '/'
                })}
              >
                Length
              </Link>
            </li>
            <li>
              <Link
                to={'/weight'}
                className={clsx({
                  'text-blue-500 border-b border-blue-500 delay-50 duration-700 transition-all ':
                    location.pathname === '/weight'
                })}
              >
                Weight
              </Link>
            </li>
            <li>
              <Link
                to={'/temperature'}
                className={clsx({
                  'text-blue-500 border-b border-blue-500 delay-50 duration-700 transition-all ':
                    location.pathname === '/temperature'
                })}
              >
                Temperature
              </Link>
            </li>
          </ul>
        </nav>
        <div>{location.pathname === '/' ? <Length /> : <Outlet />}</div>
      </section>
    </main>
  )
}

function Length() {
  return (
    <Card className='flex flex-col gap-5 my-10 w-full opacity-90'>
      <form className='flex flex-col gap-5'>
        <Title>Enter to Length convert</Title>
        <TextInput name='value' placeholder='Enter to length' />
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
  )
}