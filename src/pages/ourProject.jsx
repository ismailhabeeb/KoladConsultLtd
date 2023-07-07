import '../assets/styles/our_project.css'
import { ArrowRightOutlined, EnvironmentFilled } from '@ant-design/icons';
import property from '/src/assets/images/property.avif'
import { Link } from 'react-router-dom';
import sqs from '/src/assets/images/sqs.avif'
import sqs2 from '/src/assets/images/cardboard-house.jpg'
import sqs3 from '/src/assets/images/port.jpg'


function Our_project() {

    return (
        <>
            <section className='diverse p-0 m-0'>

                <div className='navbar '>
                    <h5 className=''>
                        <strong>Our Project</strong>
                    </h5>
                    <h5>
                        <a className='btnget d-flex gap-2 more btn btn-hover mt-4 d-flex' style={{ width: "150px" }} href="http://wa.me/2348069595110" >Contact Us
                            <ArrowRightOutlined className='my-auto ' />
                        </a>
                    </h5>
                </div>
                <main className='d-flex flex-wrap gap-2 justify-content-center each'>
                    <section className="card  text-white propertyh hoverEffecct">
                        <img loading='lazy' src={sqs3} className="card-img h-100" alt="..." />
                        <div className="card-img-overlay whyimg">
                            <h4 className="card-title">Architectural Design</h4>
                            <hr className='divider' />
                            <p className="card-text d-none propertynote">We work closely with our clients to ensure
                                that their specific needs are met and that the final product
                                is delivered on time and exceeds their expectations.
                            </p>
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
                        </div>
                    </section>

                    <section className="card  text-white propertyh  hoverEffecct">
                        <img loading='lazy' src={property} className="card-img h-100" alt="..." />
                        <div className="card-img-overlay whyimg">
                            <h4 className="card-title">Interior & Exterior Design</h4>
                            <hr className='divider ' />
                            <p className="card-text d-none propertynote">Poles architecture and design includes a range of projects from around the globe.
                            </p>
                        </div>
                    </section>
                    
                    <section className="card  text-white propertyh hoverEffecct">
                        <img loading='lazy' src={sqs2} className="card-img h-100" alt="..." />
                        <div className="card-img-overlay whyimg">
                            <h4 className="card-title">Real Estate</h4>
                            <hr className='divider' />
                            <p className="card-text d-none propertynote">We work closely with our clients to ensure
                                that their specific needs are met and that the final product
                                is delivered on time and exceeds their expectations.
                            </p>
                        </div>
                    </section>

                </main>

            </section>
            <hr className='divider' />
        </>);
}

export default Our_project;