const url = 'https://www.course-api.com/react-tours-project'

import { useEffect, useState } from 'react'
import Tour from './Tour'
import Tours from './Tours'
import Loading from './Loading'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const fetchTour = async () => {
    setIsLoading(true)
    try {
      const resp = await fetch(url)
      const tours = await resp.json()
      setTours(tours)
    } catch (error) {
      console.log('error')
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchTour()
  }, [])

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}
export default App
