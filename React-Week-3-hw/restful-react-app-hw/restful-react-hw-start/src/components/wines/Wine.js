import React from 'react'
import { useParams, useHistory } from 'react-router-dom'

import { deleteWine, SingleWineApi } from '../lib/api'

const Wine = () => {
  const history = useHistory()
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
            <hr />
            <button
              className="button is-warning"
              onClick={() => {
                history.push(`/wines/${id}/edit`)
              }}
            >
              Edit
            </button>
            <button
              className="button is-danger ml-4"
              onClick={async () => {
                await deleteWine(id)
                history.push('/wines')
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Wine
