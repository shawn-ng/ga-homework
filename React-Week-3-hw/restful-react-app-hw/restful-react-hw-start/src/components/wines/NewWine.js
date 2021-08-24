import React from 'react'
import { useHistory } from 'react-router'

import { addNewWine } from '../lib/api'

const NewWine = () => {
  const history = useHistory()
  const [state, setState] = React.useState({
    formData: {
      name: '',
      origin: '',
      image: '',
      tastingNotes: '',
      grape: '',
      abv: '',
      price: ''
    }
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newData = {
      ...state.formData,
      abv: parseFloat(state.formData.abv),
      price: parseFloat(state.formData.price)
    }
    try {
      const res = await addNewWine(newData)

      history.push(`/wines/${res.data._id}`)
    } catch (err) {
      console.log('The adding new wine submmision failed: ' + err)
    }
  }

  const handleChange = (e) => {
    const value = e.target.value
    setState({
      formData: {
        ...state.formData,
        [e.target.name]: value
      }
    })
  }
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <form
            className="column is-half is-offset-one-quarter box"
            onSubmit={handleSubmit}
          >
            <h4 className="title is-4">Name</h4>
            <input
              className="input"
              type="text"
              name="name"
              value={state.formData.name}
              onChange={handleChange}
            />
            <hr />
            <h4 className="title is-4">origin</h4>
            <input
              className="input"
              type="text"
              name="origin"
              value={state.formData.origin}
              onChange={handleChange}
            />
            <hr />
            <h4 className="title is-4">Image</h4>
            <input
              className="input"
              type="text"
              name="image"
              value={state.formData.image}
              onChange={handleChange}
            />
            <hr />
            <h4 className="title is-4">Tastign Notes</h4>
            <textarea
              className="textarea"
              type="text"
              name="tastingNotes"
              value={state.formData.tastingNotes}
              onChange={handleChange}
            ></textarea>
            <hr />
            <h4 className="title is-4">Grape</h4>
            <input
              className="input"
              type="text"
              name="grape"
              value={state.formData.grape}
              onChange={handleChange}
            />
            <hr />
            <h4 className="title is-4">Abv</h4>
            <input
              className="input"
              type="text"
              name="abv"
              value={state.formData.abv}
              onChange={handleChange}
            />
            <hr />
            <h4 className="title is-4">Price</h4>
            <input
              className="input"
              type="text"
              name="price"
              value={state.formData.price}
              onChange={handleChange}
            />
            <hr />
            <button className="button is-link is-fullwidth">
              Add New Wine
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default NewWine
