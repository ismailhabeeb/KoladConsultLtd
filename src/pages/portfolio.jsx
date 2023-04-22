// import bg1 from '../../assets/images/building-n-h.jpg'
import { useEffect, useState } from 'react'
import bg1 from '../assets/images/buying-renting-selling-real-e.jpg'
import '../assets/styles/home.css'
import '../assets/styles/portfolio.css'
import logo from '../assets/images/Untitled-1.svg'
import sqs from '../assets/images/prgen5.jpg'
import Why_us from '../components/why-us'
import whitebg from '/src/assets/images/white-bg2.jpg'
import whitetopbg from '/src/assets/images/grayscale-shot-lake.jpg'
import { AimOutlined, CheckOutlined, FacebookFilled, InstagramFilled, TwitterCircleFilled, WhatsAppOutlined } from '@ant-design/icons'
import Intouch from '../components/intouch'
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
    // const [textArray, setTextArray] = useState(["I'm Azeez Habeeb, Architectural and Engineeri."])
    // // let textDispla = 
    // let [textDisplay, setTextDisplay] = useState('')
    // // let i = 0
    // let [i, setI] = useState(0)
    // // let move = 0
    // let [move, setMove] = useState(0)
    // // let phase = []
    // let [phase, setPhase] = useState([])
    // // let deleteOne = false
    // let [deleteOne, setDeleteOne] = useState(false)
    // // color = "red"




    return (
        <div>
            <section className='dbimg bg-info p big_wrapper' style={{ backgroundImage: `url(${whitetopbg})`, fontFamily: "Montserrat" }}>
                <section className="contain w-100" id="main-div">
                    <h2 className='d-flex flex-column gap-3'>
                        <a className="navbar-bran " href="#" style={{ fontFamily: "Montserra" }}>

                            Kolad Consult Ltd<span className='text-warning'>.</span>
                            <div className='bg-warning span1 mx-end logodesign3' ></div>

                        </a>
                        <div id="info" className="info" style={{ fontFamily: "Montserrat" }}>We are Architectural and Engineering Companing changing the world and building
                            amazingthings one mide at a time, and providing high impact scalable solutions.
                            We have organise and co-organise Constructional, Architectural, Real Estate Interior & Exterior, We enjoy speaking,
                            meeting and collaborating with people. Looking for work around in the Globe.
                        </div>
                        <a href='http://wa.me/2348069595110' className='btn btnget btn-hover border' style={{ fontFamily: "Montserrat", width: "170px" }}>
                            Get Quote
                        </a>
                        <div style={{ fontSize: '20px' }} className='d-flex gap-2 topicon'>

                            <div className='d-flex'><FacebookFilled className='my-auto text-warning' /></div>
                            <div className='d-flex'><TwitterCircleFilled className='my-auto text-warning' /></div>
                            <a href='http://wa.me/2348069595110' className='d-flex'><WhatsAppOutlined className='my-auto text-warning' /></a>
                            <div className='d-flex'><InstagramFilled className='my-auto text-warning' /></div>
                        </div>
                    </h2>

                    <div id="hello" style={{ fontFamily: "Montserrat" }}>
                        <div className={`hidde show ${add}`} id="message" style={{ fontFamily: "Montserrat" }}><span className='text-warning ' > <AimOutlined /> </span>Architectural Design</div>
                        <div className={`hidden show ${add}`} id="message" style={{ fontFamily: "Montserrat" }}><span className='text-warning ' ><AimOutlined /> </span>Real Estate</div>
                        <div className={`hidden show ${add}`} id="message" style={{ fontFamily: "Montserrat" }}><span className='text-warning ' ><AimOutlined /> </span>Building Construction</div>
                        <div className={`hidden show ${add}`} id="message" style={{ fontFamily: "Montserrat" }}><span className='text-warning ' ><AimOutlined /> </span>Property Development</div>
                        <div className={`hidden show ${add}`} id="message" style={{ fontFamily: "Montserrat" }}><span className='text-warning ' ><AimOutlined /> </span>Interior and Exterior</div>
                    </div>
                </section>
            </section>
            <section className='safety d-flex p mt-2 row mx-auto'>
                <main className=' col-lg-3'>
                    <img className='border border-warning' src={sqs} alt="" />
                </main>

                <div className='gy-2 col-lg-6 ps-lg-5 d-flex flex-column gap-4'>

                    <div className='bg-warning span1'></div>
                    <h3 className='bold'>Our goal is to provide efficiency and quality on time projects</h3>
                    <div className='constructios at'>
                        We believe that every project is unique, and can customize our approach to fit your particular
                        project. We focus on delivering innovative and unique construction solutions.
                    </div>
                    <div className='d-fl  gy-3' style={{ lineHeight: "50px" }}>
                        <div className=' d-flex  gap-3' >
                            <span className='d-flex '><CheckOutlined className='my-auto text-light bg-warning rounded-circle p-1' /></span>
                            <strong className=''>Our goal is to creat solutions to meet our clients' requrements.</strong>
                        </div>
                        <div className=' d-flex   gap-3'>
                            <span className='d-flex'><CheckOutlined className='my-auto text-light bg-warning rounded-circle p-1' /></span>
                            <strong className=''> Review functions of equipments and tools.</strong>
                        </div>

                        <div className=' d-flex  gap-3'>
                            <span className='d-flex '><CheckOutlined className='my-auto text-light bg-warning rounded-circle p-1' /></span>
                            <strong className=''>Innovative manufacturing methods.</strong>
                        </div>
                        <div className=' d-flex   gap-3'>
                            <span className='d-flex'><CheckOutlined className='my-auto text-light bg-warning rounded-circle p-1' /></span>
                            <strong className=''>A solid experience in iron and steel plants.</strong>
                        </div>
                    </div>
                </div>
            </section>
            <div className='contacthead  dbimg' style={{ backgroundImage: `url(${whitebg})` }}>
                <section>
                    <h2><strong>Get started with us !</strong> We focus on the entire process, concept through completion</h2>
                    <a href='http://wa.me/2348069595110' className="btn border border-primary btn-hover ">Contact Us</a>
                </section>
            </div>
            <section>
                <Intouch/>
            </section>
            <Why_us />
        </div>
    );
}

export default Portfolio;