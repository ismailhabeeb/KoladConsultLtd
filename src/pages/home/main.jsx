import { useState } from 'react'
import '../../assets/styles/home.css'
import '../../assets/styles/our_project.css'
import house1 from '../../assets/images/draw.jpg'
import bg from '../../assets/images/construction-silhouette.jpg'
import bg1 from '../../assets/images/vd4.jpg'
import Projects from '../../components/projects'
import { AimOutlined, ArrowRightOutlined, ClockCircleOutlined, EnvironmentFilled, HighlightOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import Architectural from './architecture'

function Main() {
    const [count, setCount] = useState(0)

    return (
        <main className="App">

            <section className='dbimg' style={{ backgroundImage: `url(${bg1})`, }}>

                <main className='d-flex flex-column gap-3 '>
                    <div className='construction'>
                        <div className='bg-warning span1'></div>
                        <span className='span2'>CONSTRUCTION PROJECTS AND TECHNOLOGY INFRASTRUCTURE</span>
                    </div>
                    <h2 className='global'>
                        Global Construction & Engineering Company
                    </h2>
                    <div className='experience'>
                        We have designed and executed buildings construction using mechanical structures and engineering techniques
                    </div>
                    <button className='btnget d-flex gap-2' style={{ width: "150px",borderRadius:'0' }}>
                        <a className='text-light' href='http://wa.me/2348069595110'>Get started </a>
                        <ArrowRightOutlined className='my-auto ' />
                    </button>
                </main>
            </section>

            <Projects />
            <section className='usbgimg' style={{ backgroundImage: `url(${bg})`, }}>
                <div className='gy-2 gap-3'>
                    <div className='construction'>
                        <div className='bg-warning span1'></div><span className='span2'>
                            UNIQUE, FUNCTIONAL & AESTHETICALLY PLEASING DESIGNS
                        </span>
                    </div>
                    <h3>
                        Architectural, Interior and Exterior Design
                    </h3>
                    <div className='at'>
                        Every design is tailored to each client’s needs. In addition to high-quality standards, we aim to make every design a conversation piece.                    </div>
                    <div className='d-flex g-5 usflex'>
                        <button className='w-50 btnget' style={{borderRadius:'0'}}>
                            <p>Completed projects</p>
                            <h3 className='text-warning'><AimOutlined /> 100+</h3>
                        </button>

                        <button className='w-50 btnget' style={{borderRadius:'0'}}>
                            <p>Construction Workers</p>
                            <h3 className='text-warning'><AimOutlined /> 150+</h3>
                        </button>
                    </div>
                </div>
                <main className='usimg'>
                    <img loading='lazy' className='border border-warning' src={house1} alt="" />
                </main>
            </section>
            <Architectural />
            
        </main>
    )
}

export default Main