
import { Button } from 'antd'
import React from 'react'

const AddOns = () => {
    return (

        <div className='ml-[5%] mr-[5%] flex flex-col gap-5 mt-[2%] bg-[#E4E4F8] text-black p-5 rounded-lg' >
            <div className='font-extrabold text-3xl font-serif'>
                Select your service, and you can opt any additional services from the available Add-Ons.
            </div>
            <div className='flex justify-end right-20'>
                <Button className='rounded-none bg-white text-black font-bold' >Select Service</Button>
            </div>
        </div>
    )
}

export default AddOns