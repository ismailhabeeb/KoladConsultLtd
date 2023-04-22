import { ApartmentOutlined, AreaChartOutlined, ArrowRightOutlined, BankOutlined, BorderHorizontalOutlined, CheckOutlined, HeatMapOutlined, SmileOutlined } from '@ant-design/icons'
import house from '../assets/images/house.jpg'
import bg from '../assets/images/cardboard-house.jpg'
import buildings from '/src/assets/images/buying-renting-selling-real-e.jpg'
import sqs from '/src/assets/images/sqs.avif'
import { useState } from 'react'

function Projects() {
    const [construct, setConstruct] = useState("In the constructural industry, experience counts. We offer total project solutions and integrating our expertise in all areas of the construction process.")
    return (
        <>
            <section className='safety d-flex p mt-2 row mx-auto'>
                <main className=' col-lg-3 '>
                    <img loading='lazy' className='border border-warning' src={sqs} alt="" />
                </main>

                <div className='gy-2 col-lg-6 ps-lg-5 d-flex flex-column gap-4'>
                    <div className='construction'>
                        <span className='span2'>CONSTRUCTURE PROJECTS AND TECHNOLOGY INFRASTRUCTURE</span>
                        <div className='bg-warning span1'></div>
                    </div>
                    <h3 className=''>Safety, Quality and Sustainablility</h3>
                    <div className='at'>At Kolad consult ltd, we have helped customers complete more than 1,000 projects,
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
                    <button className='btnget d-flex'>
                        <div>Our Service</div>
                    </button>
                </div>
            </section>

            <section className=' we '>
                <div className='mx-auto '>
                    <div className='construction my-3 '>
                        WE REPRESENT THE FUTURE OF CONSTRUCTION
                        <div className='bg-warning span1 mx-auto'></div>
                    </div>
                    <h3>Our customers' projects are an investment in the future</h3>
                    <div className='Diffrientiated mt-3 mb-5'>
                        Diffrientiated by the quality of our people and our relentless drive to deliver the most successful outcomes, we relign our capabilities to our customers' objectives to create a positive impact.
                    </div>

                    <div className=' d-fle listimg'>
                        <div style={{ backgroundImage: `url(${bg})`, }} className='hoverEffecct'>
                            <section className='cardimg1 '>
                                <section className='d-flex gap-3 pt-2'>
                                    {/* <SmileOutlined  /> */}
                                    <span style={{ fontSize: '25px' }} className='rounded-circle bg-warning p-1 text-white '>🦺</span>
                                    <h5 className='my-auto'>Engineering</h5>
                                </section>
                                <hr className='divider' />
                                <section className='mb-2'>
                                    {construct}
                                </section>
                                <a href="" className='d-flex gap-1 align-items-center justify-content-center'>Learn More
                                    <ArrowRightOutlined className='my-auto text-warning' />
                                </a>
                            </section>
                        </div>
                        <div style={{ backgroundImage: `url(${sqs})`, }} className='hoverEffecct'>
                            <section className='cardimg2 '>
                                <section className='d-flex gap-3 pt-2'>
                                    <ApartmentOutlined style={{ fontSize: '28px' }} className='rounded-circle bg-warning p-2 text-white' />
                                    <h5 className='my-auto'>Construction</h5>
                                </section>
                                <hr className='divider' />
                                <section className='mb-2'>
                                    {construct}
                                </section>
                                <a href="" className='d-flex gap-1 align-items-center justify-content-center'>Learn More
                                    <ArrowRightOutlined className='my-auto text-warning' />
                                </a>
                            </section>
                        </div>
                        <div style={{ backgroundImage: `url(${bg})`, }} className='hoverEffecct'>
                            <section className='cardimg3 '>
                                <section className='d-flex gap-3 pt-2'>
                                    <HeatMapOutlined style={{ fontSize: '30px' }} className='rounded-circle bg-warning p-2 text-white' />
                                    <h5 className='my-auto'>Architecture</h5>
                                </section>

                                <hr className='divider' />
                                <section className='mb-2'>
                                    {construct}
                                </section>
                                <a href="" className='d-flex gap-1 align-items-center justify-content-center'>Learn More
                                    <ArrowRightOutlined className='my-auto text-warning' />
                                </a>
                            </section>
                        </div>

                        <div style={{ backgroundImage: `url(${bg})`, }} className='hoverEffecct'>
                            <section className='cardimg4 '>
                                <section className='d-flex gap-3 pt-2'>
                                    <AreaChartOutlined style={{ fontSize: '30px' }} className='rounded-circle bg-warning p-2 text-white' />
                                    <h5 className='my-auto'>Real Estate</h5>
                                </section>
                                <hr className='divider' />
                                <section className='mb-2'>
                                    {construct}
                                </section>
                                <a href="" className='d-flex gap-1 align-items-center justify-content-center'>Learn More
                                    <ArrowRightOutlined className='my-auto text-warning' />
                                </a>
                            </section>
                        </div>
                        <div style={{ backgroundImage: `url(${bg})`, }} className='hoverEffecct'>
                            <section className='cardimg5 '>
                                <section className='d-flex gap-3 pt-2'>
                                    <BorderHorizontalOutlined style={{ fontSize: '30px' }} className='rounded-circle bg-warning p-2 text-white' />
                                    <h5 className='my-auto'>Interior & Exterior</h5>
                                </section>
                                <hr className='divider' />
                                <section className='mb-2'>
                                    {construct}
                                </section>
                                <a href="" className='d-flex gap-1 align-items-center justify-content-center'>Learn More
                                    <ArrowRightOutlined className='my-auto text-warning' />
                                </a>
                            </section>
                        </div>
                        <div style={{ backgroundImage: `url(${bg})`, }} className='hoverEffecct'>
                            <section className='cardimg6 '>
                                <section className='d-flex gap-3 pt-2'>
                                    <BankOutlined style={{ fontSize: '30px' }} className='rounded-circle bg-warning p-2 text-white' />
                                    <h5 className='my-auto'>Land Sales</h5>
                                </section>

                                <hr className='divider' />
                                <section className='mb-2'>
                                    {construct}
                                </section>
                                <a href="" className='d-flex gap-1 align-items-center justify-content-center'>Learn More
                                    <ArrowRightOutlined className='my-auto text-warning' />
                                </a>
                            </section>
                        </div>
                        <section className='mt-3'>
                            From the removal of contamited soil to the demonition of legacy buildings, Kolad's proactive management approach provides
                            the certainty you need for performance, schedule, cost and compiance.
                        </section>

                    </div>

                </div>
            </section>
        </>
    );
}

export default Projects;