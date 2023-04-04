import house from '/src/assets/images/3d-electric-car.avif'
import house2 from '/src/assets/images/luxuryproperty.avif'
import house3 from '/src/assets/images/K1-Camera-1-scaled.jpg'
import pmanage from '/src/assets/images/buying-renting-selling-real-e.jpg'
import land from '/src/assets/images/house-symbol-with-location-pin.avif'
import property from '/src/assets/images/property.avif'
import trust from '/src/assets/images/trust.avif'
import largeB from '/src/assets/images/large-building.avif'
import buildings from '/src/assets/images/buildings.avif'
import '/src/assets/styles/why-us.css'
import { FileProtectOutlined, GlobalOutlined, CheckOutlined, PropertySafetyOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react'


function Why_us() {
    const [count, setCount] = useState(false)
    let [add, setAdd] = useState('')


    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // console.log(entry);
            if (entry.isIntersecting) {
                setCount(true)
                console.log(add);

            }
             else {
                setCount(false)
                console.log(add);

            }
        })
    })

    add = count ? ' show' : ' '
    
    useEffect(() => {
    setAdd(add)

    }, [])



    const hiddenelement = document.querySelectorAll('.hidden')
    hiddenelement.forEach((el) => observer.observe(el))

    return (
        <main>
            <section className='p-5 bg-light text-center note'>
                <h1>WHY US ?</h1>
                <p className='Diffrientiated mb-4'>At Kolad Consult Ltd Real Estate Department, we believe that communication is key to creating strong, lasting relationships.
                    That's why our partners work closely
                    with you to make sure that all lines of communication are open and accessible. This ensures that our
                    clients feel comfortable and cared for every step of the way.
                </p>

                <div className='d-flex text-center whycard'>
                    <div className="card text-white whyh">
                        <img src={largeB} className="card-img h-100" alt="..." />
                        <div className="card-img-overlay  whyimg">
                            <h3 className="card-title">DESIGN</h3>
                            <p className="card-text Diffrientiated">At its core, Kolad cosult Ltd is committed to creating unique and innovative designs,
                                modernizing and redefining the real estate architecture industry to be more efficient and sustainable
                            </p>
                        </div>
                    </div>
                    <div className="card bg-dark text-white whyh">
                        <img src={house2} className="card-img h-100" alt="..." />
                        <div className="card-img-overlay whyimg">
                            <h3 className="card-title">DEVELOP</h3>
                            <p className="card-text">We provide the best real estate development by offering comprehensive services
                                that cover every aspect of the development process. Our team of experts has extensive experience in all facets of real estate development, from the initial feasibility
                                study to the final construction and marketing of the finished project.</p>
                        </div>
                    </div>
                    <div className="card bg-dark text-white whyh">
                        <img src={buildings} className="card-img h-100" alt="..." />
                        <div className="card-img-overlay whyimg">
                            <h3 className="card-title">DELIVER</h3>
                            <p className="card-text">We work closely with our clients to ensure
                                that their specific needs are met and that the final product
                                is delivered on time and exceeds their expectations.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='p-5 text-center note '>
                <h1>D3 Commitment</h1>
                <p className='Diffrientiated mb-4'>Our team of experts is committed to delivering the highest standards of professionalism
                    at every stage of the design and development process, and are always striving to push
                    the boundaries and find new and innovative ways to get the job done.
                </p>
                <section className='d-flex d3card note'>
                    <div className={`car d3 hidde ${add}`}>
                        <div style={{ backgroundImage: `url(${property})` }} className='d3icon text-primary'>
                        </div>
                        <h1>Property Sales</h1>
                    </div>
                    <div className={`car d3 hidden ${add}`}>
                        <div style={{ backgroundImage: `url(${pmanage})` }} className='d3icon text-primary'>
                            {/* <img width={100} src={pmanage} alt="" /> */}
                        </div>
                        <h1>Property Management</h1>
                    </div>
                    <div className={`car d3 hidden ${add} `}>
                        <div style={{ backgroundImage: `url(${land})` }} className='d3icon text-primary'>
                        </div>
                        <h1>Land Sales</h1>
                    </div>
                    <div className={`car d3 hidden ${add} `}>
                        <div style={{ backgroundImage: `url(${trust})` }} className='d3icon text-primary'>
                        </div>
                        <h1>Trusted by Thousands</h1>
                    </div>
                </section>
            </section>
        </main>
    );
}

export default Why_us;