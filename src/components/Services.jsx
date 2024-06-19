import React from 'react'
import { imgList } from '../assets/constants/data'

const Services = () => {
    return (
        <div className='ml-[5%] flex gap-3 mt-[3%] mr-[5%] overflow-x-auto'>
            {
                imgList.map((url, index) => (
                    <img src={url} key={index} alt="img" />
                ))
            }
        </div>

    )
}

export default Services