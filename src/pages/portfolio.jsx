import { useEffect, useState } from 'react'
import bg1 from '../assets/images/buying-renting-selling-real-e.jpg'
import '../assets/styles/home.css'
import '../assets/styles/portfolio.css'
import '../assets/styles/contact.css'
import '../assets/styles/navbar.css'
// import logo from '../assets/images/Untitled-1.svg'
import sqs from '../assets/images/PRgen5.jpg'
import Why_us from '../components/why-us'
import whitebg from '/src/assets/images/white-bg2.jpg'
import whitetopbg from '/src/assets/images/port.jpg'
import { AimOutlined, CheckOutlined, FacebookFilled, InstagramFilled, MailOutlined, TwitterCircleFilled, WhatsAppOutlined } from '@ant-design/icons'
import Project_preview from '../components/project_preview'

function Portfolio() {

    const [count, setCount] = useState(false)
    let [add, setAdd] = useState('')


    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // console.log(entry);
            if (entry.isIntersecting) {
                setCount(true)
                // console.log(add);

            }
            else {
                setCount(false)
                // console.log(add);

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
        <div className='pb-4'>
            <section className='dbimg big_wrapper' style={{ backgroundImage: `url(${whitetopbg})`, fontFamily: "Montserrat" }}>
                <section className="contain w-100" id="main-div">
                    <h2 className='d-flex flex-column gap-3 '>
                        {/* <a className="navbar-bran d-flex " href="#" style={{ fontFamily: "Montserrat" }}>
                            <div className='bg-warning curve1'></div>
                            <div> Kolad Consult Ltd<span className='text-warning'>.</span></div>

                        </a> */}
                        {/* <div id="info" className="info" style={{ fontFamily: "Montserrat" }}> </div> */}
                        <h2 className='global'>
                            You dream it, We design it.
                        </h2>
                        <a href='http://wa.me/2348069595110' className='btn btnget btn-hover border topico' style={{ fontFamily: "Montserrat", width: "170px",borderRadius:'0' }}>
                            Get Quote
                        </a>
                        <div style={{ fontSize: '20px' }} className='d-flex gap-3  ms-5'>
                            <a href="mailTo:koladconsultltd@gmail.com" className='d-flex'> <MailOutlined className="my-auto text-white" /></a>
                            <a href='http://wa.me/2348069595110' className='d-flex'><WhatsAppOutlined className='my-auto text-white' /></a>
                            <div className='d-flex'><InstagramFilled className='my-auto text-white' /></div>
                        </div>
                    </h2>

                    <div id="hello" >
                        <div className={`hidde show ${add}`} id="message" style={{ fontFamily: "Montserrat" }}><span className='text-warning ' > <AimOutlined /> </span>Architectural Design</div>
                        <div className={`hidden show ${add}`} id="message" style={{ fontFamily: "Montserrat" }}><span className='text-warning ' ><AimOutlined /> </span>Real Estate</div>
                        <div className={`hidden show ${add}`} id="message" style={{ fontFamily: "Montserrat" }}><span className='text-warning ' ><AimOutlined /> </span>Building Construction</div>
                        <div className={`hidden show ${add}`} id="message" style={{ fontFamily: "Montserrat" }}><span className='text-warning ' ><AimOutlined /> </span>Property Development</div>
                        <div className={`hidden show ${add}`} id="message" style={{ fontFamily: "Montserrat" }}><span className='text-warning ' ><AimOutlined /> </span>Interior and Exterior</div>
                    </div>
                </section>
            </section>
            {/* <section className='safety d-flex p mt-2 row mx-auto '>
                <main className=' col-lg-3'>
                    <img loading='lazy' className='border border-warning' src={sqs} alt="" />
                </main>

                <div className='gy-2 col-lg-6 ps-lg-5 d-flex flex-column gap-4'>

                    <div className='bg-warning span1'></div>
                    <h3 className='bold'>Our goal is to provide efficiency and quality on time projects</h3>
                    <div className='constructios at'>
                        We believe that every project is unique, and can customize our approach to fit your particular
                        project. We focus on delivering innovative and unique construction solutions.
                    </div>
                    <div className='d-flex   g-3' style={{ lineHeight: "50px", flexDirection: 'column', gap: '10px' }}>
                        <div className=' d-flex  gap-3' >
                            <span className='d-flex '><CheckOutlined className='my-auto text-light bg-warning rounded-circle p-1' /></span>
                            <strong style={{ lineHeight: '20px' }} className=''>Our goal is to creat solutions to meet our clients' requrements.</strong>
                        </div>
                        <div className=' d-flex   gap-3'>
                            <span className='d-flex'><CheckOutlined className='my-auto text-light bg-warning rounded-circle p-1' /></span>
                            <strong style={{ lineHeight: '20px' }} className=''> Review functions of equipments and tools.</strong>
                        </div>

                        <div className=' d-flex  gap-3'>
                            <span className='d-flex '><CheckOutlined className='my-auto text-light bg-warning rounded-circle p-1' /></span>
                            <strong style={{ lineHeight: '20px' }} className=''>Innovative manufacturing methods.</strong>
                        </div>
                        <div className=' d-flex   gap-3'>
                            <span className='d-flex'><CheckOutlined className='my-auto text-light bg-warning rounded-circle p-1' /></span>
                            <strong style={{ lineHeight: '20px' }} className=''>A solid experience in iron and steel plants.</strong>
                        </div>
                    </div>
                </div>
            </section> */}
            <div className='contacthead  ' style={{ backgroundImage: `url(${whitebg})` }}>
                <section>
                    <h2><strong>Get started with us !</strong> We focus on the entire process, concept through completion</h2>
                    <a href='http://wa.me/2348069595110' className="btn border border-primary btn-hover ">Contact Us</a>
                </section>
            </div>
            <Why_us />
            <Project_preview />

        </div>
    );
}

export default Portfolio;