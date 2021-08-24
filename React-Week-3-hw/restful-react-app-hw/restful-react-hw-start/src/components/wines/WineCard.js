import React from 'react'

import { Link } from 'react-router-dom'

const WineCard = ({ _id, name, image, origin }) => {
  return (
    <div className="column is-one-quarter">
      <Link to={`/wines/${_id}`}>
        <div className="card">
          <div className="card-header">
            <p className="card-header-title">{name}</p>
          </div>
          <div className="card-image">
            <figure className="image is-1by1">
              <img
                src={image}
                alt={name}
                loading="lazy"
                width="300"
                height="300"
              />
            </figure>
          </div>
          <div className="card-footer">
            <p className="card-footer-item">{origin}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default WineCard
