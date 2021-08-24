import React from 'react'
import { useParams } from 'react-router-dom'

import { SingleWineApi } from '../lib/api'

const Wine = () => {
  const [state, setState] = React.useState({
    wine: []
  })
  const { id } = useParams()

  const fetchingSingleWineApi = async () => {
    try {
      const res = await SingleWineApi(id)
      setState({ wine: res.data })
    } catch (err) {
      console.error(err)
    }
  }

  React.useEffect(() => {
    fetchingSingleWineApi()
  }, [])
  console.log(state)
  return (
    <section className="section">
      <div className="container">
        <div className="title has-text-centered">
          <h1 className="title">{state.wine.name}</h1>
        </div>
        <hr />
        <div className="columns">
          <div className="column is-half">
            <div className="image">
              <figure className="image is-1by1">
                <img src={state.wine.image} alt={state.wine.name} />
              </figure>
            </div>
          </div>
          <div className="column is-half">
            <h4 className="title is-4">Origin</h4>
            <p>{state.wine.origin}</p>
            <hr />
            <h4 className="title is-4">Type of grape</h4>
            <p>{state.wine.grape}</p>
            <hr />
            <h4 className="title is-4">Tasting Notes</h4>
            <p>{state.wine.tastingNotes}</p>
            <hr />
            <h4 className="title is-4">Price</h4>
            <p>{state.wine.price}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Wine
