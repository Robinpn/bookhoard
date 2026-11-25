import React from 'react'

export const Nav = () => {
  const mobileMenu = () => {
    return (
      <div className="flex flex-col justify-between ">
        <p>Link1</p>
        <p className="m-2">Link2</p>
        <p>Link3</p>
      </div>
    )
  }
  return (
    <div className="w-full h-20 flex flex-row justify-between items-center ">
      <div className="h-10 w-10 rounded-full bg-amber-400"></div>
      {/* Hamburger */}
      <div className="flex flex-col items-center w-auto h-auto md:hidden">
        <span className="w-6 h-1 rounded-md bg-white"></span>
        <span className="w-6 h-1 rounded-md bg-white m-2"></span>
        <span className="w-6 h-1 rounded-md bg-white"></span>
      </div>
      {/* big-screen nav */}
      <div className="hidden md:flex flex-row justify-between">
        <p>link 1</p>
        <p className="pl-1 pr-1">link 2</p>
        <p>link 3</p>
      </div>
    </div>
  )
}
