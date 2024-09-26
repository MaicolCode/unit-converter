import { getResult, getResultConvert } from '../services/resultConvert'
import { toast } from 'sonner'
import { useMeasures } from '../hooks/useMeasures'
import { CardOptions } from './CardOptions'
import { useState } from 'react'
import { Result } from './Result'

export default function Temperature() {
  const { medidas } = useMeasures({ type: 'temperature' })

  const [resp, setResp] = useState(null)

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
    setResp(await getResultConvert())
    console.log(resp)

    form.reset()

    if (result === 'Success!') {
      toast.success('Your peticion is done!')
    } else {
      toast.error('Your peticion is not done!')
    }
  }

  return (
    <>
      {resp ? (
        <Result resp={resp} />
      ) : (
        <CardOptions
          typeConvert={'Temperature'}
          options={medidas}
          eventSubmit={handleSubmit}
        />
      )}
    </>
  )
}
