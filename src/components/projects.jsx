import { ApartmentOutlined, AreaChartOutlined, ArrowRightOutlined, BankOutlined, BorderHorizontalOutlined, CheckOutlined, HeatMapOutlined, SmileOutlined } from '@ant-design/icons'
import house from '../assets/images/house.jpg'
import bg from '../assets/images/cardboard-house.jpg'
import buildings from '/src/assets/images/buying-renting-selling-real-e.jpg'
import sqs from '/src/assets/images/sqs.avif'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Project_preview from './project_preview'
import Our_project from '../pages/ourProject'

function Projects() {
    const [construct, setConstruct] = useState("In the constructural industry, experience counts. We offer total project solutions and integrating our expertise in all areas of the construction process.")
    return (
        <>
            <section className='safety d-flex p mt-2 row mx-auto'>
                <main className=' col-lg-3 '>
                    <img loading='lazy' className='border border-warning' src={sqs} alt="" />
                </main>

                <div className='gy-2 col-lg-6 pb-3 ps-lg-5 d-flex flex-column gap-4'>
                    <div className='construction'>
                        <span className='span2'>CONSTRUCTION PROJECTS AND TECHNOLOGY INFRASTRUCTURE</span>
                        <div className='bg-warning span1'></div>
                    </div>
                    <h3 className=''>Style, Quality and Sustainability</h3>
                    <div className='at'>At Kolad consult ltd, we have helped customers complete more than 100 projects,
                        in countries that have created jobs and grown economies, improved the resiliency of the
                        world's infrastructure, increased access to resources and vital services, and made the world a safer place.
                    </div>
                    <div className='d-flex list gy-3' style={{ lineHeight: "50px" }}>

                        <div className=' d-flex w-50 gap-3' >
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
                    <button className='btnget d-flex list'>
                        <Link to={'/portfolio'} className='text-white'>Our Service</Link>
                    </button>
                </div>
            </section>

            <section className=' we '>
                    <div>
                        <Our_project />
                        <section className='mt-3'>
                            From the removal of contaminated soil to the demonition of legacy buildings, Kolad's proactive management approach provides
                            the certainty you need for performance, schedule, cost and compliance.
                        </section>
                    </div>

            </section>
        </>
    );
}

export default Projects;