// import logo from '../assets/images/TreeCity.webp'
// import '../assets/styles/home.css'
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/navbar';
// import Map from '../../components/map';
// import key from '/src/assets/images/Tech.webp'
import { EnvironmentOutlined, UnorderedListOutlined } from '@ant-design/icons';
import Top1 from '../components/top1';

export default function Home() {
    // const [map, setMap] = useState(false)

    // function newmap() {
    //     if (map == true) {
    //         setMap(false)
    //     } else setMap(true)

    // }
    return (
        <main style={{fontFamily:"Montserrat"}}>
            <Top1/>
            <div style={{zIndex: 10}} className=' sticky-top '>
                <Navbar />
            </div>
            <div style={{marginTop:"-75px"}} className=''>
                <Outlet />
            </div>
            <Footer />
        </main>
    )
}