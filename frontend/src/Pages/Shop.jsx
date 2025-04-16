import React from 'react'
import Hero from '../Component/Hero/Hero'
import Popular from '../Component/Popular/Popular'
import Offers from '../Component/Offers/Offers'
import NewCollection from '../Component/NewCollection/NewCollection'
import Newsletter from '../Component/Newsletter/Newsletter'

function Shop() {
  return (
    <div >
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollection/>
      <Newsletter/>
    </div>
  )
}

export default Shop