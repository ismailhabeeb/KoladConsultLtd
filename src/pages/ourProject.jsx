import '../assets/styles/our_project.css'
import a2 from '../assets/images/a2.jpg'
import house1 from '../assets/images/draw.jpg'
import { ArrowRightOutlined, EnvironmentFilled } from '@ant-design/icons';

import property from '/src/assets/images/property.avif'
import buildings from '/src/assets/images/buildings.avif'
import pmanage from '/src/assets/images/buying-renting-selling-real-e.jpg'
import bg from '../assets/images/tools-table.jpg'



function Our_project() {

    return (
        <>
            <section className='dbimg' style={{ backgroundImage: `url(${bg})`, }}>
                <main className='d-flex flex-column gap-3 '>
                    <div className='construction'>
                        CONSTUCTURE PROJECTS AND TECHNOLOGY INFRASTRUCTURE
                    </div>
                    <h2 style={{ fontSize: '50px' }} className='global'>
                        Looking for a quality and affordable service for <strong>your next project?</strong>
                    </h2>
                    <div className='experience'>
                        GENERATING MORE VALUE AT EVERY LEVEL AND BUILDING A BETTER WORLD FOR EVERYONE
                    </div>
                    <button className='btnget d-flex gap-2 btn-hover' style={{ width: "140px" }}>
                        <div>Get started </div>
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
                        <img src={property} className="card-img h-100" alt="..." />
                        <div className="card-img-overlay whyimg">
                            <h4 className="card-title">New Interior & Exterior Design</h4>
                            <hr className='divider ' />
                            <p className="card-text d-none propertynote">Poles architecture and design includes a range of projects from around the globe.
                            </p>
                            <a className='text-light d-flex gap-2 ' style={{ width: "140px" }}>
                                <div>Read More </div>
                                <ArrowRightOutlined className='my-auto ' />
                            </a>
                            {/* <a href="">Read More </a> */}
                        </div>
                    </section>
                    <section className="card  text-white propertyh">
                        <img src={buildings} className="card-img h-100" alt="..." />
                        <div className="card-img-overlay whyimg">
                            <h4 className="card-title">Building Construction</h4>
                            <hr className='divider' />
                            <p className="card-text d-none propertynote">We work closely with our clients to ensure
                                that their specific needs are met and that the final product
                                is delivered on time and exceeds their expectations.
                            </p>
                            <a className='text-light d-flex gap-2 ' style={{ width: "140px" }}>
                                <div>Read More </div>
                                <ArrowRightOutlined className='my-auto ' />
                            </a>
                            {/* <a href="">Read More </a> */}
                        </div>
                    </section>
                    <section className="card  text-white propertyh">
                        <img src={property} className="card-img h-100" alt="..." />
                        <div className="card-img-overlay whyimg">
                            <h4 className="card-title">Real Estate</h4>
                            <hr className='divider' />
                            <p className="card-text d-none propertynote">We work closely with our clients to ensure
                                that their specific needs are met and that the final product
                                is delivered on time and exceeds their expectations.
                            </p>
                            <a className='text-light d-flex gap-2 ' style={{ width: "140px" }}>
                                <div>Read More </div>
                                <ArrowRightOutlined className='my-auto ' />
                            </a>
                            {/* <a href="">Read More </a> */}
                        </div>
                    </section>
                    <section className="card  text-white propertyh">
                        <img src={property} className="card-img h-100" alt="..." />
                        <div className="card-img-overlay whyimg">
                            <h4 className="card-title">Architectural Design</h4>
                            <hr className='divider' />
                            <p className="card-text d-none propertynote">We work closely with our clients to ensure
                                that their specific needs are met and that the final product
                                is delivered on time and exceeds their expectations.
                            </p>
                            <a className='text-light d-flex gap-2 ' style={{ width: "140px" }}>
                                <div>Read More </div>
                                <ArrowRightOutlined className='my-auto ' />
                            </a>
                            {/* <a href="">Read More </a> */}
                        </div>
                    </section>
                </main>

            </section>
            <hr className='divider' />
            <section className="menu p py-4 mb-5" id="menu">
                <div className="box-container" id="menu-items">
                    <div id="ad${i}" className="box card">
                        <img src={a2} alt="" />
                        <div className="content w-100">
                            <a href="#ad${i}" className="btn border border-warning text-light fw-bold btn-hover">preview</a>
                            <a href="#ad${i}" className="btn border border-warning text-light fw-bold btn-hover">get quete</a>
                        </div>
                    </div>
                    <div className=' w-25 d-block'>
                        <h3>Details</h3>
                        <div className='text-info  '>
                            <div className='d-flex'><EnvironmentFilled className='my-auto text-warning' />Address:</div>
                            <a className='text-info' href="location:lagos">Eyenkorin Kwara state Nigeria</a>
                        </div>
                        <div className="d-flex w-100 justify-content-between ">
                            <a href="#ad${i}" className="btn border border-warning text-primary fw-bold btn-hover">preview</a>
                            <a href="#ad${i}" className="btn border border-warning text-primary fw-bold btn-hover">get quete</a>
                        </div>
                    </div>

                </div>
                <div className="box-container" id="menu-items">
                    <div className=' '>
                        <h3>Details</h3>
                        <div className='text-info '>
                            <div className='d-flex'><EnvironmentFilled className='my-auto text-warning' />Address:</div>
                            <a className='text-info' href="location:lagos">Umuezevum Village, Eziama-Oparanadim, Ahiazu Mbaise L.G.A, Imo State.</a>
                        </div>
                        <div className="d-flex w-100 justify-content-between ">
                            <a href="#ad${i}" className="btn border border-warning text-primary fw-bold btn-hover">preview</a>
                            <a href="#ad${i}" className="btn border border-warning text-primary fw-bold btn-hover">get quete</a>
                        </div>
                    </div>
                    <div id="ad${i}" className="box card ">
                        <img src={a2} alt="" />
                        <div className="content w-100 ">
                            <a href="#ad${i}" className="btn border border-warning text-light fw-bold btn-hover">preview</a>
                            <a href="#ad${i}" className="btn border border-warning text-light fw-bold btn-hover">get quete</a>
                        </div>
                    </div>
                </div>
                {/* <button onclick="thirdmore(event)" className="more btn btn-hover">more</button> */}

            </section>

        </>);
}

export default Our_project;