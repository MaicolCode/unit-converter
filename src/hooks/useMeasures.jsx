import { useEffect, useState } from 'react'

export function useMeasures({ type }) {
  const [medidas, setMedidas] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3000/${type}`)
      .then(res => res.json())
      .then(data => setMedidas(data))
  }, [])

  return { medidas }
}
