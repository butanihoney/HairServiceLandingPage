import { useState } from 'react'
import Navbar from './components/Navbar'
import Address from './components/Address'
import Services from './components/Services'
import HairServices from './components/HairServices'
import HairServicesContainer from './components/HairServicesContainer/HairServicesContainer'
import AddOns from './components/AddOns'
import CustomerRate from './components/CustomerRate'
import CustomerRateCard from './components/CustomerRateCard'
import WebFooter from './components/WebFooter'

function App() {

  return (
    <div className='w-full'>
      <Navbar />
      <Address />
      <Services />
      <HairServices />
      <HairServicesContainer />
      <AddOns />
      <CustomerRate />
      <CustomerRateCard />
      <WebFooter />

    </div>
  )
}

export default App
