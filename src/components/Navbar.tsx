import { ROUTER_PATH } from '@/constants/router'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '@assets/icons/logo.svg'
import { Button } from '@/components/ui/button'
import { SIGNAL_NAVIGATION_LIST } from '@/constants/constants'

const Navbar: React.FC = () => {
  const [activeNav, setActiveNav] = useState<string>(ROUTER_PATH.DASH_BOARD)
  return <div className='h-17.5 bg-navbar flex justify-between px-6 w-full'>
    <Link to={ROUTER_PATH.DASH_BOARD} className='flex-center'>
      <img src={logo} alt='Logo signalist' />
    </Link>
    <div className="nav-list flex-center gap-4">
      {SIGNAL_NAVIGATION_LIST.map((item) => (
        <Link key={item.id} to={item.path} className={`flex-center body-m-regilar text-gray-400 hover:text-white ${activeNav === item.path ? 'text-white' : ''}`} onClick={() => setActiveNav(item.path)}>{item.name}</Link>
      ))}
    </div>
    <div className="flex-center gap-4">
      <span>N</span>
      <p>Ngoc Nguyen Van</p>
      <Button size={"icon-sm"}>*</Button>
    </div>
  </div>
}

export default Navbar