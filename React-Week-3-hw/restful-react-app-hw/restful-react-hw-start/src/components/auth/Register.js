import React from 'react'
import { useHistory } from 'react-router-dom'

import { RegisterUser } from '../lib/api'

const Register = () => {
  const history = useHistory()
  const [state, setState] = React.useState({
    formData: {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await RegisterUser(state.formData)
      if (res.status === 200) {
        history.push('/')
      }
    } catch (err) {
      console.error(err)
    }
  }

  const handleChange = (e) => {
    const newForm = {
      ...state.formData,
      [e.target.name]: e.target.value
    }
    setState({ formData: newForm })
  }
  return (
    <section className="section">
      <div className="container">
        <form
          onSubmit={handleSubmit}
          className="column is-half is-offset-one-quarter box"
        >
          <div className="field">
            <label className="label">Username</label>
            <input
              className="input"
              type="text"
              name="username"
              value={state.formData.username}
              onChange={handleChange}
              placeholder="Username"
            />
          </div>

          <div className="field">
            <label className="label">Email</label>
            <input
              className="input"
              type="email"
              name="email"
              value={state.formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>

          <div className="field">
            <label className="label">Password</label>
            <input
              className="input"
              type="password"
              name="password"
              value={state.formData.password}
              onChange={handleChange}
              placeholder="password"
            />
          </div>

          <div className="field">
            <label className="label">Confirm Password</label>
            <input
              className="input"
              type="password"
              name="passwordConfirmation"
              value={state.formData.passwordConfirmation}
              onChange={handleChange}
              placeholder="Confirm Password"
            />
          </div>

          <div className="field is-fullwidth">
            <button className="button is-fullwidth is-link">Register</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Register
