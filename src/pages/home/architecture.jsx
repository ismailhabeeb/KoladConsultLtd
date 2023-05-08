import { useState } from 'react'
import '../../assets/styles/home.css'
import '../../assets/styles/our_project.css'

import single from '../../assets/images/vd4.jpg'


import archbg from '../../assets/images/architect-bg.jpg'
import logo2 from '../../assets/images/logor.png'
import house from '../../assets/images/house.jpg'
import house1 from '../../assets/images/PRgen.jpg'
import bg from '../../assets/images/tools-table.jpg'
import bg1 from '../../assets/images/building-n-h.jpg'
import { ArrowRightOutlined, CheckOutlined, ClockCircleOutlined, EnvironmentFilled, FallOutlined, HighlightOutlined, MailFilled, SmileOutlined } from '@ant-design/icons'
import Projects from '../../components/projects'
import Intouch from '../../components/intouch'
import { Link } from 'react-router-dom'

function Architectural() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            {/* <h2 className='global'>
                Architectural, Interior and Exterior Design
            </h2>
             */}
            <section className='usbgimg bg-white' >
                <main className='usimg'>
                    <img loading='lazy' style={{ width: '350px' }} className='border border-warning' src={house1} alt="" />
                </main>
                <div className='d-flex flex-column gap-2'>
                    {/* <div className='construction'>
                        <span className='span2'>WORK METHOD, TECHNOLOGY AND HUMAN RESOURCES</span>
                        <div className='bg-warning span1'></div>
                    </div> */}
                    <h1 className='text-black style'>A strong experience in engineering</h1>

                    <div className="contain  tabsp">
                        <ul className="nav nav-tabs bg-inf text-whit" role="tablist">
                            <li className="nav-item ">
                                <a className="nav-link active " data-bs-toggle="tab" href="#home">Our Mission</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#menu1">Our Vision</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#menu2">Our values</a>
                            </li>
                        </ul>

                        <div className="tab-content text-black">
                            <div className="tab-pane container active p-4 " id="home">Our mission is to provide our customers with value through the
                                provisioning of engineering services, procurement, construction,
                                operation and management of infrastructure and power projects.
                                We consider the empowerment of our human resources to be
                                fundamental in building a permanent knowledge base.
                            </div>
                            <div className="tab-pane container fade p-4" id="menu1">Our vision is to provide our customers with value through the
                                provisioning of engineering services, procurement, construction,
                                operation and management of infrastructure and power projects.
                                We consider the empowerment of our human resources to be
                                fundamental in building a permanent knowledge base.
                            </div>
                            <div className="tab-pane container fade p-4" id="menu2">Our value is to provide our customers with value through the
                                provisioning of engineering services, procurement, construction,
                                operation and management of infrastructure and power projects.
                                We consider the empowerment of our human resources to be
                                fundamental in building a permanent knowledge base.
                            </div>
                        </div>
                        <hr className="divider m-1 border border-1" />
                    </div>
                </div>
            </section>

            <section className="menu bg-light p py-4 " id="menu">
                <div className='navbar'>
                    <h4>Our portfolio</h4>
                    <Link className='btnget d-flex gap-2 more btn btn-hover mt-4 d-flex' style={{ width: "150px" }} to={'/our_Project'} >View All
                        <ArrowRightOutlined className='my-auto ' />
                    </Link>
                </div>
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
                                <Link to={'/our_project'} className="btn border border-warning text-primary bol btn-hover">preview</Link>
                                <a href="http://wa.me/2348069595110" className="btn border border-warning text-primary bol btn-hover">get quete</a>
                            </div>
                        </div>
                    </div>
                </div>


            </section>

        </div>
    )
}

export default Architectural
