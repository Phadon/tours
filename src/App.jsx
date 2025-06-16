const url = 'https://www.course-api.com/react-tours-project'

import { useEffect, useState } from 'react'
import Tour from './Tour'
import Tours from './Tours'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])

  const fetchTour = async () => {
    setIsLoading(true)
    try {
      const resp = await fetch(url)
      const tours = await resp.json()
      console.log(tours)
    } catch (error) {
      console.log('error')
    }
  }

  useEffect(() => {
    fetchTour()
  }, [])

  return <h2>Tours Starter</h2>
}
export default App
