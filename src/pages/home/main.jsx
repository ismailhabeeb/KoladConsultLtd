import { useState } from 'react'
import '../../assets/styles/home.css'
import '../../assets/styles/our_project.css'
// import '../../assets/styles/app.css'

import logo from '../../assets/images/Untitled-1.svg'
import logo2 from '../../assets/images/logor.png'
import single from '../../assets/images/Dbff.jpg'

import house1 from '../../assets/images/draw.jpg'
import bg from '../../assets/images/construction-silhouette.jpg'
import bg1 from '../../assets/images/building-n-h.jpg'
import Projects from '../../components/projects'
import { AimOutlined, ArrowRightOutlined, ClockCircleOutlined, EnvironmentFilled, HighlightOutlined } from '@ant-design/icons'
import Review from '../../components/customers\'review'
import Intouch from '../../components/intouch'
import { Link } from 'react-router-dom'

function Main() {
    const [count, setCount] = useState(0)

    return (
        <main className="App">

            <section className='dbimg' style={{ backgroundImage: `url(${bg1})`, }}>

                <main className='d-flex flex-column gap-3 '>
                    <div className='construction d-flex'>
                        <div className='bg-warning curve1'></div>
                        <span className='span2'>CONSTRUCTURE PROJECTS AND TECHNOLOGY INFRASTRUCTURE</span>
                    </div>
                    <h2 className='global'>
                        Global Construction & Engineering Company
                    </h2>
                    <div className='experience'>
                        Experience and Sustainability — These are the keys to success of Kolad Consult Ltd for the
                        realization of large international construction projects.
                    </div>
                    <button className='btnget d-flex gap-2' style={{ width: "150px" }}>
                        <a className='text-light' href='http://wa.me/2349026674356'>Get started </a>
                        <ArrowRightOutlined className='my-auto ' />
                    </button>
                </main>
            </section>

            <Projects />
            <section>
                <Intouch />
            </section>
            <section className='usbgimg' style={{ backgroundImage: `url(${bg})`, }}>
                <div className='gy-2 gap-3'>
                    <div className='construction'>
                        <div className='bg-warning span1'></div><span className='span2'>CONSTRUCTION PROJECTS AND TECHNOLOGY INFRASTRUCTURE</span>
                    </div>
                    <h3>Collaborating to Achieve Project Excellence</h3>
                    <div className='at'>
                        Construction and risk go hand-in-hand and projects are constantly dealing with challenges that arise from budget, schedule, and staffing limitations.
                    </div>
                    <div className='d-flex g-5 usflex'>
                        <button className='w-50 btnget'>
                            <p>Completed projects</p>
                            <h3 className='text-warning'><AimOutlined /> 100+</h3>
                        </button>

                        <button className='w-50 btnget'>
                            <p>Construction Workers</p>
                            <h3 className='text-warning'><AimOutlined /> 150+</h3>
                        </button>
                    </div>
                </div>
                <main className='usimg'>
                    <img loading='lazy' className='border border-warning' src={house1} alt="" />
                </main>
            </section>
            <section className="menu bg-light p py-4 " id="menu">
                <h1 className="hearding py-4 text-center">Our Recent <span className='text-warning'>Projects</span></h1>
                <div className="box-container" id="menu-items">
                    <div id="ad${i}" className="box card">

                        <img loading="lazy" src={single} alt="" />
                        <div className=' card-img-overlay'>
                            <h5>Details</h5>
                            <div className='text-white '>
                                <div className='d-flex'><EnvironmentFilled className='my-auto text-warning' />Address:</div>
                                <a className='' href="location:lagos">Abraham Adesanya Lagos State Nigeria.</a>
                            </div>
                            <div className='text-white  '>
                                <div className='d-flex'><ClockCircleOutlined className='my-auto text-warning' />Year:</div>
                                <span className="badge text-bg-primary">2023</span>
                            </div>
                            <div className="d-flex w-100 justify-content-between ">
                                <a href="#ad${i}" className="btn border border-warning text-primary bol btn-hover">preview</a>
                                <a href="http://wa.me/2348069595110" className="btn border border-warning text-primary bol btn-hover">get quete</a>
                            </div>
                        </div>
                    </div>
                </div>
                <Link className='btnget d-flex gap-2 more btn btn-hover mt-4 d-flex' style={{ width: "150px" }} to={'/our_Project'} >more 
                <ArrowRightOutlined className='my-auto ' />
                </Link>

            </section>
            <Review />

            {/* <section className='safety d-flex p'>
            </section> */}
        </main>
    )
}

export default Main