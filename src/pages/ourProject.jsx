import '../assets/styles/our_project.css'
import { ArrowRightOutlined, EnvironmentFilled } from '@ant-design/icons';
import property from '/src/assets/images/property.avif'
import bg from '../assets/images/tools-table.jpg'
import Project_preview from '../components/project_preview/index';
import { Link } from 'react-router-dom';
import sqs from '/src/assets/images/sqs.avif'
import sqs2 from '/src/assets/images/cardboard-house.jpg'


function Our_project() {

    return (
        <>
            <section className='diverse p-0 m-0'>

                <div className='navbar '>
                    <h5 className=''>
                        <strong>For Your Next Project?</strong>
                    </h5>
                    <h5>
                        <Link className='btnget d-flex gap-2 more btn btn-hover mt-4 d-flex' style={{ width: "150px" }} to={'/our_Project'} >View All
                            <ArrowRightOutlined className='my-auto ' />
                        </Link>
                    </h5>
                </div>
                <main className='d-flex flex-wrap gap-2 justify-content-center each'>
                    <section className="card  text-white propertyh  hoverEffecct">
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
                        </div>
                    </section>
                    <section className="card  text-white propertyh hoverEffecct">
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
                        </div>
                    </section>
                    <section className="card  text-white propertyh hoverEffecct">
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
                        </div>
                    </section>
                    <section className="card  text-white propertyh hoverEffecct">
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
                        </div>
                    </section>
                </main>

            </section>
            <hr className='divider' />
        </>);
}

export default Our_project;