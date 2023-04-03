import React from 'react'
import Navbar from "./Navbar"
import gif from "../assets/img/404.gif"


export default function PageNotFound() {
  return (
    <>
    <Navbar />
    <div className='mt-5 pt-5 text-center'>
      <h1 className='display-1'>Error 404!</h1>
      <p className='h1'>Sorry, Page Not Found</p>
      <img src={gif} alt="" className='gif' />
      </div>
    </>
  )
}
