import '../assets/styles/home.css'
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/navbar';
import { EnvironmentOutlined, UnorderedListOutlined, WhatsAppOutlined } from '@ant-design/icons';

export default function Home() {
  
    return (
        <main style={{ fontFamily: "Montserrat" }}>
            <div className='linktowhatsapp sticky-bottom' >
                <a href="http://wa.me/2348069595110" className='text-light'>
                <WhatsAppOutlined />
                </a>
            </div>

            <div id='top2' className=' sticky-top '>
                <Navbar />
            </div>
            <div>
                <Outlet />

            </div>

            <Footer />
        </main>
    )
}