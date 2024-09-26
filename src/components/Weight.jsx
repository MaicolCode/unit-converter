import { getResult, getResultConvert } from '../services/resultConvert'
import { toast } from 'sonner'
import { useMeasures } from '../hooks/useMeasures'
import { CardOptions } from './CardOptions'
import { Result } from './Result'
import { useState } from 'react'

export default function Weight() {
  const { medidas } = useMeasures({ type: 'weight' })
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
    const result = await getResult(dataJSON, 'weight')
    setResp(await getResultConvert())

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
          typeConvert={'Weight'}
          options={medidas}
          eventSubmit={handleSubmit}
        />
      )}
    </>
  )
}
