import React from 'react'
import { Card } from 'antd';
import { ratingCard } from '../assets/constants/data';

const CustomerRateCard = () => {
    const stars = Array.from({ length: 5 }).map((_, index) => (
        <span key={index}>&#9733;</span>
    ));

    return (
        <div className='ml-[5%] flex gap-5 mt-[2%]'>
            {
                ratingCard.map((record) => {
                    return (
                        <Card
                            className='w-[300px]'
                        >
                            <span className="text-2xl text-[#A1A1C4]">{stars}</span>
                            <div className='mt-[3%]'>{record.details}</div>
                            <div className='flex justify-between mt-5 font-bold text-[#954352]'>Hair Services | Cameron Williamson</div>
                            <div type="danger">- Summer L.</div>
                        </Card>
                    )
                })
            }

        </div>
    )
}

export default CustomerRateCard