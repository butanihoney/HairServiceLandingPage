import { ClockCircleOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, DatePicker, Divider, TimePicker } from 'antd'
import React, { useState } from 'react'

const ServicesCheckout = () => {
    const [count, setCount] = useState(0)
    return (
        <>
            <div className="min-w-[30%] max-w-[80%] border border-solid shadow-lg rounded relative">
                <div className="flex flex-col gap-3  ml-5 mr-5 mt-5 h-[700px]">
                    <div className="font-bold font-serif">Haircut</div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                        culpa.
                    </div>
                    <a href="#" className="text-[#FF9A92]">
                        WANT ADD-ONS?
                    </a>
                    <div className='flex justify-between mt-5 font-bold'>
                        <div className='flex gap-2'>
                            <ClockCircleOutlined />
                            <span>45 mins</span>
                        </div>
                        <div className='font-bold underline'>
                            Start from $60
                        </div>
                    </div>
                    <Divider className="bg-black" />
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between">
                            <div>How Many clients</div>
                            <div className="flex gap-2 items-center">
                                <Button onClick={() => setCount((prev) => prev + 1)}>
                                    <PlusOutlined />
                                </Button>
                                {count}
                                <Button onClick={() => setCount((prev) => prev - 1)}>
                                    <MinusOutlined />
                                </Button>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <DatePicker size="large" />
                            <TimePicker size="large" />
                        </div>
                    </div>
                    <Divider className="bg-black" />
                    <div className="flex justify-between">
                        <div className="text-2xl font-bold font-serif">
                            Choose Your Self-Care Angel
                        </div>
                        <div className="font-bold underline">View All</div>
                    </div>
                </div>
                <div className="absolute bottom-[25%] left-[15%] right-[15%] text-center text-gray-400">
                    Select Your Date and Time for self care angle availability
                </div>
                <Button
                    size="large"
                    className="bg-black cursor-pointer absolute p-7 bottom-2 w-[92%] ml-5 mr-5 text-white rounded-sm items-center"
                >
                    BOOK MY APPOINTMENT
                </Button>
            </div>
        </>
    )
}

export default ServicesCheckout