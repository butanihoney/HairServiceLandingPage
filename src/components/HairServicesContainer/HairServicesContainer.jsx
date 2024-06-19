import React from 'react'
import HairServicesCard from './HairServicesCard'
import ServicesCheckout from './ServicesCheckout'

const HairServicesContainer = () => {
    return (
        <div className='mt-[2%] ml-[1%] flex relative'>
            <div className='sm:w-[50%] md:w-[70%] lg:w-[70%]'>

                <HairServicesCard />
            </div>
            <div className='absolute left-[50%] md:left-[60%] lg:left-[60%] '>

                <ServicesCheckout />
            </div>
        </div>
    )
}

export default HairServicesContainer