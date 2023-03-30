import { useState } from 'react'
import '../../assets/styles/home.css'
// import '../../assets/styles/app.css'

import logo from '../../assets/images/Untitled-1.svg'
import logo2 from '../../assets/images/logor.png'
import house from '../../assets/images/house.jpg'
import bg from '../../assets/images/luxuryproperty.avif'
import { ArrowRightOutlined, CheckOutlined, FallOutlined, HighlightOutlined, MailFilled, SmileOutlined } from '@ant-design/icons'

function Main() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">

            {/* 
          <div className="card">
          <p className="read-the-docs">
          className="logo react"
      
      */}
            <section className='dbimg' style={{ backgroundImage: `url(${bg})`, }}>

                {/* <div className='logo'>
                    <img className='w-100' src={logo} alt="" />

                </div> */}
                <main>
                    <div className='construction'>
                        CONSTUCTURE PROJECTS AND TECHNOLOGY INFRASTRUCTURE
                    </div>
                    <h2 className='global'>
                        Global construction & engineering conpany
                    </h2>
                    <div className='experience'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio quisquam necessitatibus, fugiat corporis veritatis in consequatur delectus tempora sapiente distinctio. Nostrum velit laudantium nulla sunt voluptatibus deserunt, tempore quis reprehenderit!
                    </div>
                    <button className='btnget d-flex gap-2'>
                        <div>Get started </div>
                        <ArrowRightOutlined className='my-auto ' />
                    </button>
                </main>
            </section>
            <section className='safety d-flex p'>
                <main>
                    <img src={house} alt="" />
                </main>

                <div className='gy-2'>
                    <div className='construction '>
                        CONSTUCTURE PROJECTS AND TECHNOLOGY INFRASTRUCTURE
                    </div>
                    <h3 className=''>Safety, quality and sustainablility</h3>
                    <div className='at'>At Kolad consult ltd, we have helped customers complete more than 1,000 projects,
                        in countries that have created jobs and grown economies, improved the resiliency of the
                        world's infrastructure, increased access to resources and vital services, and made the world a safer place.
                    </div>
                    <div className='d-flex list gy-3'>

                        <div className=' d-flex w-50 gap-3'>
                            <span className='d-flex '><CheckOutlined className='my-auto text-warning' /></span>
                            <strong className=''> Constructural Technology</strong>
                        </div>
                        <div className=' d-flex  w-50 gap-3'>
                            <span className='d-flex'><CheckOutlined className='my-auto text-warning' /></span>
                            <strong className=''> Metallurgical & Material</strong>
                        </div>

                        <div className=' d-flex w-50 gap-3'>
                            <span className='d-flex '><CheckOutlined className='my-auto text-warning' /></span>
                            <strong className=''>Heavy Engineering</strong>
                        </div>
                        <div className=' d-flex  w-50 gap-3'>
                            <span className='d-flex'><CheckOutlined className='my-auto text-warning' /></span>
                            <strong className=''>Electrical & Automation</strong>
                        </div>

                        <div className=' d-flex w-50 gap-3'>
                            <span className='d-flex '><CheckOutlined className='my-auto text-warning' /></span>
                            <strong className=''>Architectural Design</strong>
                        </div>
                        <div className=' d-flex  w-50 gap-3'>
                            <span className='d-flex'><CheckOutlined className='my-auto text-warning' /></span>
                            <strong className=''>Interior & Exterior Design</strong>
                        </div>
                    </div>
                    <button className='btnget d-flex'>
                        <div>Our Service</div>
                    </button>
                </div>
            </section>

            <section className=' we'>
                <div className='mx-auto'>
                    <div className='construction '>
                        WE REPRESENT THE FUTURE OF CONSTRUCTION
                    </div>
                    <h3>Our customers' projects are an investment in the future</h3>
                    <div className='Diffrientiated'>
                        Diffrientiated by the quality of our people and our relentless drive to deliver the most successful
                        outcomes, we relign our capabilities to our customers' objectives to create a positive impact.
                    </div>

                    <div className=' d-fle listimg'>
                        <div style={{ backgroundImage: `url(${bg})`, }} className=''>
                            <section className='cardimg1 '>
                                <SmileOutlined />
                                <h5>Engineering</h5>
                                <hr className='divider' />
                                <section>
                                    In the constructural constructural industry, experience counts. We offer total project
                                    solutions and integrating our expertise in all areas of the construction process.
                                </section>
                                <a href="">Learn More
                                    <ArrowRightOutlined className='my-auto ' />
                                </a>
                            </section>
                        </div>
                        <div style={{ backgroundImage: `url(${bg})`, }} className=''>
                            <section className='cardimg2 '>
                                <SmileOutlined />
                                <h5>Construction</h5>
                                <hr className='divider' />
                                <section>
                                    In the constructural constructural industry, experience counts. We offer total project
                                    solutions and integrating our expertise in all areas of the construction process.
                                </section>
                                <a href="">Learn More
                                    <ArrowRightOutlined className='my-auto ' />
                                </a>
                            </section>
                        </div>
                        <div style={{ backgroundImage: `url(${bg})`, }} className=''>
                            <section className='cardimg3 '>
                                <SmileOutlined />
                                <h5>Construction</h5>
                                <hr className='divider' />
                                <section>
                                    In the constructural constructural industry, experience counts. We offer total project
                                    solutions and integrating our expertise in all areas of the construction process.
                                </section>
                                <a href="">Learn More
                                    <ArrowRightOutlined className='my-auto ' />
                                </a>
                            </section>
                        </div>

                        <div style={{ backgroundImage: `url(${bg})`, }} className=''>
                            <section className='cardimg4 '>
                                <SmileOutlined />
                                <h5>Construction</h5>
                                <hr className='divider' />
                                <section>
                                    In the constructural constructural industry, experience counts. We offer total project
                                    solutions and integrating our expertise in all areas of the construction process.
                                </section>
                                <a href="">Learn More
                                    <ArrowRightOutlined className='my-auto ' />
                                </a>
                            </section>
                        </div>
                        <div style={{ backgroundImage: `url(${bg})`, }} className=''>
                            <section className='cardimg5 '>
                                <SmileOutlined />
                                <h5>Construction</h5>
                                <hr className='divider' />
                                <section>
                                    In the constructural constructural industry, experience counts. We offer total project
                                    solutions and integrating our expertise in all areas of the construction process.
                                </section>
                                <a href="">Learn More
                                    <ArrowRightOutlined className='my-auto ' />
                                </a>
                            </section>
                        </div>
                        <div style={{ backgroundImage: `url(${bg})`, }} className=''>
                            <section className='cardimg6 '>
                                <SmileOutlined className='ms-auto' />

                                <h5>Construction</h5>
                                <hr className='divider' />
                                <section>
                                    In the constructural constructural industry, experience counts. We offer total project
                                    solutions and integrating our expertise in all areas of the construction process.
                                </section>
                                <a href="">Learn More
                                    <ArrowRightOutlined className='my-auto ' />
                                </a>
                            </section>
                        </div>
                        <section>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus unde id iste cum esse quam iure ratione repellendus corrupti vitae. Quos magnam unde ipsam asperiores assumenda quod fugit, voluptates animi.
                        </section>

                    </div>

                </div>
            </section>

            <section className='usbgimg' style={{ backgroundImage: `url(${bg})`, }}>
                <div className='gy-2'>
                    <div className='construction text-warning'>
                        CONSTUCTURE PROJECTS AND TECHNOLOGY INFRASTRUCTURE
                    </div>
                    <h3 className=''>Safety, quality and sustainablility</h3>
                    <div className='at'>At Kolad consult ltd, we have helped customers complete more than 1,000 projects,
                        in countries that have created jobs and grown economies, improved the resiliency of the
                        world's infrastructure, increased access to resources and vital services, and made the world a safer place.
                    </div>
                    <div className='d-flex g-5 '>
                        <button className='w-50'>
                            <p>Completed project</p>
                            <h3 className='text-warning'><HighlightOutlined /> 100+</h3>
                        </button>

                        <button className='w-50'>
                            <p>Construction Workers</p>
                            <h3 className='text-warning'><HighlightOutlined /> 150+</h3>
                        </button>
                    </div>
                </div>
                <main className='usimg'>
                    <img src={house} alt="" />
                </main>
            </section>

            <section className='safety d-flex p'>
            </section>

        </div>
    )
}

export default Main
