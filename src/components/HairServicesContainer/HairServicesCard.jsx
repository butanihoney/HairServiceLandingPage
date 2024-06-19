import { Card } from 'antd'
import React from 'react'
import { cardData } from '../../assets/constants/data'
import Meta from 'antd/es/card/Meta'
import { ClockCircleOutlined } from '@ant-design/icons'

const HairServicesCard = () => {
    return (
        <div className='flex gap-5 flex-wrap ml-[6%]'>
            {
                cardData.map((record) => {
                    return (
                        <Card
                            cover={
                                <img
                                    alt="example"
                                    src={record.image}
                                />
                            }
                            className='w-[300px]'
                            key={record.cardTitle}

                        >
                            <div className='flex gap-2 flex-col'>
                                <Meta className='font-serif'
                                    title={record.cardTitle}

                                />
                                <div className='flex gap-2 text-gray-400 underline'>
                                    &#9733; {record.rating} &#40;{record.reviews}&#41;
                                </div>
                                <div>
                                    {
                                        record.details
                                    }
                                </div>
                                <div className='flex justify-between mt-5 font-bold'>
                                    <div className='flex gap-2'>
                                        <ClockCircleOutlined />
                                        <span>{record.duration} mins</span>
                                    </div>
                                    <div className='font-bold underline'>
                                        Start from ${record.price}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    )
                })
            }
        </div>
    )
}

export default HairServicesCard