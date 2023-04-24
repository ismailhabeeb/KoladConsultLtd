import '../assets/styles/our_project.css'
import a2 from '../assets/images/a22.jpg'
import house1 from '../assets/images/draw.jpg'
import { ArrowRightOutlined, EnvironmentFilled } from '@ant-design/icons';

import property from '/src/assets/images/property.avif'
import buildings from '/src/assets/images/buildings.avif'
import pmanage from '/src/assets/images/buying-renting-selling-real-e.jpg'
import bg from '../assets/images/tools-table.jpg'
import Review from '../components/customers\'review';
import Project_preview from '../components/project_preview/index';
import Intouch from '../components/intouch';
import { Link } from 'react-router-dom';
import sqs from '/src/assets/images/sqs.avif'
import sqs2 from '/src/assets/images/cardboard-house.jpg'



function Our_project() {

    return (
        <>
            <section className='dbimg' style={{ backgroundImage: `url(${bg})`, }}>
                <main className='d-flex flex-column gap-3 '>
                    <div className='construction'>
                        <div className='bg-warning span1'></div>

                        CONSTUCTURE PROJECTS AND TECHNOLOGY INFRASTRUCTURE
                        {/* <div className='bg-warning span1'></div> */}

                    </div>
                    <h2 className='global look'>
                        Looking for a quality and affordable service for <strong>your next project?</strong>
                    </h2>
                    <div className='experience'>
                        GENERATING MORE VALUE AT EVERY LEVEL AND BUILDING A BETTER WORLD FOR EVERYONE
                    </div>
                    <button className='btnget d-flex gap-2 btn-hover' style={{ width: "140px" }}>
                        <a className='text-light' href='http://wa.me/2348069595110'>Get started </a>
                        <ArrowRightOutlined className='my-auto ' />
                    </button>
                </main>
            </section>
            <section className='diverse'>
                <h3 className='pt-2 pb-4'>
                    Our diverse project list includes architectural design, real estate, Building construction, manufacturing construction and much more.
                </h3>
                <main className='d-flex flex-wrap gap-2 justify-content-center'>
                    <section className="card  text-white propertyh">
                        <img loading='lazy' src={property} className="card-img h-100" alt="..." />
                        <div className="card-img-overlay whyimg">
                            <h4 className="card-title">New Interior & Exterior Design</h4>
                            <hr className='divider ' />
                            <p className="card-text d-none propertynote">Poles architecture and design includes a range of projects from around the globe.
                            </p>
                            <Link to={'/architecture'} className='text-light d-flex gap-2 ' style={{ width: "140px" }}>
                                <div>Read More </div>
                                <ArrowRightOutlined className='my-auto ' />
                            </Link>
                            {/* <a href="">Read More </a> */}
                        </div>
                    </section>
                    <section className="card  text-white propertyh">
                        <img loading='lazy' src={sqs} className="card-img h-100" alt="..." />
                        <div className="card-img-overlay whyimg">
                            <h4 className="card-title">Building Construction</h4>
                            <hr className='divider' />
                            <p className="card-text d-none propertynote">We work closely with our clients to ensure
                                that their specific needs are met and that the final product
                                is delivered on time and exceeds their expectations.
                            </p>
                            <Link to={'/'} className='text-light d-flex gap-2 ' style={{ width: "140px" }}>
                                <div>Read More </div>
                                <ArrowRightOutlined className='my-auto ' />
                            </Link>
                            {/* <a href="">Read More </a> */}
                        </div>
                    </section>
                    <section className="card  text-white propertyh">
                        <img loading='lazy' src={property} className="card-img h-100" alt="..." />
                        <div className="card-img-overlay whyimg">
                            <h4 className="card-title">Real Estate</h4>
                            <hr className='divider' />
                            <p className="card-text d-none propertynote">We work closely with our clients to ensure
                                that their specific needs are met and that the final product
                                is delivered on time and exceeds their expectations.
                            </p>
                            <Link to={'/real_estate'} className='text-light d-flex gap-2 ' style={{ width: "140px" }}>
                                <div>Read More </div>
                                <ArrowRightOutlined className='my-auto ' />
                            </Link>
                            {/* <a href="">Read More </a> */}
                        </div>
                    </section>
                    <section className="card  text-white propertyh">
                        <img loading='lazy' src={sqs2} className="card-img h-100" alt="..." />
                        <div className="card-img-overlay whyimg">
                            <h4 className="card-title">Architectural Design</h4>
                            <hr className='divider' />
                            <p className="card-text d-none propertynote">We work closely with our clients to ensure
                                that their specific needs are met and that the final product
                                is delivered on time and exceeds their expectations.
                            </p>
                            <Link to={'/architecture'} className='text-light d-flex gap-2 ' style={{ width: "140px" }}>
                                <div>Read More </div>
                                <ArrowRightOutlined className='my-auto ' />
                            </Link>
                            {/* <a href="">Read More </a> */}
                        </div>
                    </section>
                </main>

            </section>
            <hr className='divider' />
            <Project_preview />
            <section>
                <Intouch />
            </section>
            <Review />
        </>);
}

export default Our_project;