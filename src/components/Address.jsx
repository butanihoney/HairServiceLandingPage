import { EnvironmentOutlined } from '@ant-design/icons'
import React from 'react'

const Address = () => {
    return (
        <div className='ml-[5%] flex flex-col gap-5 mt-[2%]'>
            <div className='font-extrabold text-3xl font-serif'>
                Self-Care Services Los Angeles
            </div>
            <div>
                <EnvironmentOutlined /> 255 W 94th St, New York, NY 10025, USA
            </div>

        </div>
    )
}

export default Address