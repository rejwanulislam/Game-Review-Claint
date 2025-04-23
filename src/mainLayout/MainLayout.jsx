import React from 'react'
import Navbar from '../compoment/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../compoment/Footer'

export default function MainLayout() {
    return (
        <div>
            {/* NavBar */}
            <Navbar></Navbar>

            {/* Body */}
            <Outlet></Outlet>

            {/* futter */}
            <div className='mt-5'>
            <Footer></Footer>
            </div>
        </div>
    )
}
