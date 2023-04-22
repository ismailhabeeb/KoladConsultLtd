import { useState } from 'react'
import '../../assets/styles/home.css'


import archbg from '../../assets/images/architect-bg.jpg'
import logo2 from '../../assets/images/logor.png'
import house from '../../assets/images/house.jpg'
import house1 from '../../assets/images/PRgen.jpg'
import bg from '../../assets/images/tools-table.jpg'
import bg1 from '../../assets/images/building-n-h.jpg'
import { ArrowRightOutlined, CheckOutlined, FallOutlined, HighlightOutlined, MailFilled, SmileOutlined } from '@ant-design/icons'
import Projects from '../../components/projects'
import Intouch from '../../components/intouch'

function Architectural() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <section className='dbimg' style={{ backgroundImage: `url(${archbg})`, }}>

               
                <main className='d-flex flex-column gap-3 '>
                    <div className='construction'>
                        <div className='bg-warning span1'></div>
                        CONSTRUCTURE PROJECTS AND TECHNOLOGY INFRASTRUCTURE
                    </div>
                    <h2 className='global'>
                        Architctural, Interior and Exterior Design
                    </h2>
                    <div className='experience'>
                        We have designed and executed buildings construction using mechanical structures and engineering techniques
                    </div>
                    <button className='btnget d-flex gap-2' style={{ width: "140px" }}>
                        <div>Get started </div>
                        <ArrowRightOutlined className='my-auto ' />
                    </button>
                </main>
            </section>
            <section>
                <Intouch/>
            </section>

            <Projects />

            <section className='usbgimg' style={{ backgroundImage: `url(${bg})`, }}>
                <main className='usimg'>
                    <img loading='lazy' style={{ width: '350px' }} className='border border-warning' src={house1} alt="" />
                </main>
                <div>
                    <div className='construction'>
                        <span className='span2'>WORK METHOD, TECHNOLOGY AND HUMAN RESOURCES</span>
                        <div className='bg-warning span1'></div>
                    </div>
                    <h4 className=''>A strong experience in engineering</h4>
                    <div className="containe  tabspy">
                        <ul className="nav nav-tabs bg-info text-white" role="tablist">
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

                        <div className="tab-content ">
                            <div className="tab-pane container active p-4 " id="home">Our mission istoprovideour customers with yalue through the
                                provisioning of engineering services, procurement, construction,
                                operation and management of infrastructure and power projects.
                                We consider the empowerment of our human resources to be
                                fundamental in building a permanent knowledge base.
                            </div>
                            <div className="tab-pane container fade p-4" id="menu1">Our vision istoprovideour customers with yalue through the
                                provisioning of engineering services, procurement, construction,
                                operation and management of infrastructure and power projects.
                                We consider the empowerment of our human resources to be
                                fundamental in building a permanent knowledge base.
                            </div>
                            <div className="tab-pane container fade p-4" id="menu2">Our values istoprovideour customers with yalue through the
                                provisioning of engineering services, procurement, construction,
                                operation and management of infrastructure and power projects.
                                We consider the empowerment of our human resources to be
                                fundamental in building a permanent knowledge base.
                            </div>
                        </div>
                    </div>
                    <div className='bg-warning span1'></div>

                </div>

            </section>

            <section className='safety d-flex p'>
            </section>


        </div>
    )
}

export default Architectural
