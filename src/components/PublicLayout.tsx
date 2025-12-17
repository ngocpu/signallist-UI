import React from 'react'
import { Outlet } from 'react-router-dom'

const PublicLayout: React.FC = () => {
  return (
    <div className="">
      <div className="">
        <Outlet />
      </div>
    </div>
  )
}

export default PublicLayout
