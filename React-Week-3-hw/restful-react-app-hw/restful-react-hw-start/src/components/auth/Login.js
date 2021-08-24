import React from 'react'
import { useHistory } from 'react-router-dom'

import { LoginUser } from '../lib/api'

import { setToken } from '../lib/auth'

const Login = () => {
  const history = useHistory()
  const [state, setState] = React.useState({
    formData: {
      email: '',
      password: ''
    }
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await LoginUser(state.formData)
      if (res.status === 200) {
        setToken(res.data.token)
        history.push('/wines')
      }
    } catch (err) {
      console.error(err)
    }
  }

  const handleChange = (e) => {
    const UserData = {
      ...state.formData,
      [e.target.name]: e.target.value
    }
    setState({ formData: UserData })
  }

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <form
            onSubmit={handleSubmit}
            className="column is-half is-offset-one-quarter box"
          >
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
                placeholder="Password"
              />
            </div>

            <div className="field">
              <button className="button is-fullwidth is-link">Login</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login
