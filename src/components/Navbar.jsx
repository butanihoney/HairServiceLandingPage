import React from 'react'
import { Button, Input } from 'antd';
import { ContactsOutlined, EnvironmentOutlined, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const Navbar = () => {
  return (
    <div className='flex items-center justify-around w-full'>
      <div className="logo">
        <img src='https://i.ibb.co/F7gsGsX/logo.png' alt="aa" className='h-[100px] w-[130px]' />
      </div>
      <div className="searchbar flex h-[41px] w-[50%]">
        <Input prefix={<SearchOutlined />} placeholder="Schedule Your Appoinmnt with a self care angel" className='rounded-none w-[80%]' />
        <Input prefix={<EnvironmentOutlined />} suffix={<SearchOutlined className='bg-black text-white p-2' />} placeholder="another input" className='rounded-none w-[30%]' />
      </div>
      <div className='flex gap-7'>
        <ContactsOutlined className='text-2xl' />
        <ShoppingCartOutlined className='text-2xl' />
      </div>
      <div className="selfCare">
        <Button className='rounded-none bg-black text-white p-5 font-bold' >BECOME A SELF-CARE ANGEL</Button>
      </div>
    </div>
  )
}

export default Navbar