import React from 'react'
import './Buzzword.css'

const Buzzword = ({ tag, description }) => {
  return (
    <div className="buzzword">
      <h3 className="tag">#{tag}</h3>
      <p className="description">{description}</p>
    </div>
  )
}

export default Buzzword
