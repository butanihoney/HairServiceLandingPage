import React from 'react'
import { Button, Divider, Input } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

const WebFooter = () => {
    return (
        <div className="bg-[#E6E6FA;] text-black mt-10 mr-[2%] ml-[2%] w-[96%] rounded-lg">
            <div className="flex flex-col w-full">
                <div className='flex flex-col items-center mt-10 justify-center'>
                    <div className="text-3xl text-center font-bold mb-6 font-josef">Looking for an Urban therapist near you?</div>
                    <Button className='bg-black p-8 text-white mb-8 font-josef'>BOOK AN APPOINTMENT TODAY</Button>
                </div>
                <Divider className='bg-gray-400' />
                <div className="flex justify-around">
                    <div>
                        <h3 className="text-lg font-bold mb-2 font-josef">Sign up for exclusive offers and updates.</h3>
                        <p className='font-josef'>Get the latest news and updates from our team.</p>
                        <Input suffix={<ArrowRightOutlined />} placeholder='Enter email Address' className='p-3 mt-2 rounded-sm' />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-2 font-josef">Quick Links</h3>
                        <ul>
                            <li className='font-josef'>Services</li>
                            <li className='font-josef'>Contact Us</li>
                            <li className='font-josef'>FAQs</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-2">About</h3>
                        <p className='font-josef'>Become a Self-Care Angel</p>
                        <p className='font-josef'>About us</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-2">Support</h3>
                        <p className='font-josef'>Help Center</p>
                        <p className='font-josef'>Terms</p>
                        <p className='font-josef'>Privacy</p>
                    </div>
                </div>
                <Divider className='bg-gray-400' />
                <div className='flex justify-between'>
                    <div className='flex flex-row gap-3 ml-16'>

                        <p className='font-josef'>FACEBOOK</p>
                        <p className='font-josef'>INSTAGRAM</p>
                        <p className='font-josef'>YOUTUBE</p>
                        <p className='font-josef'>PINTEREST</p>

                    </div>
                    <div className='mr-16' >
                        <p className='font-josef'>&copy;{new Date().getFullYear()} by SelfCare Angels.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WebFooter