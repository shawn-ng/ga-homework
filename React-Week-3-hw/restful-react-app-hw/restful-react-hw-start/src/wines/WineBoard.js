import React from 'react'

import WineCard from './WineCard'
import { WinesApi } from '../lib/api'

const WineBoard = () => {
  const [state, setState] = React.useState({
    wines: []
  })

  const fetchingWinesAPI = async () => {
    try {
      const res = await WinesApi()
      setState({
        wines: res.data
      })
    } catch (err) {
      console.error(err)
    }
  }

  React.useEffect(() => {
    fetchingWinesAPI()
  }, [])

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {state.wines.map((wine) => {
            return <WineCard key={wine._id} {...wine} />
          })}
        </div>
      </div>
    </section>
  )
}

export default WineBoard
