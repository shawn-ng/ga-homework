import React from 'react'
import Buzzword from '../components/Buzzword'

const buzzwords = [
  {
    tag: 'hangglidelife',
    description: 'Lots of users are really enjoying hang-gliding this summer.',
  },
  {
    tag: 'scran',
    description: 'Users in the north of the UK are hungry today.',
  },
]

const Buzzwords = () => {
  const buzzwordComponents = buzzwords.map((buzzwordProps, i) => (
    <Buzzword key={i} {...buzzwordProps} />
  ))

  return (
    <section className="buzzwords">
      <h2>Buzzwords</h2>
      {buzzwordComponents}
    </section>
  )
}

export default Buzzwords
