// import bg1 from '../../assets/images/building-n-h.jpg'
import { useEffect, useState } from 'react'
import bg1 from '../assets/images/buying-renting-selling-real-e.jpg'
import '../assets/styles/home.css'
import '../assets/styles/portfolio.css'
import logo from '../assets/images/Untitled-1.svg'
import logo2 from '../assets/images/logort.png'
import Why_us from '../components/why-us'
import whitebg from '/src/assets/images/white-bg2.jpg'

function Portfolio() {
    const [textArray, setTextArray] = useState(["I'm Azeez Habeeb, Architectural and Engineeri."])
    // let textDispla = 
    let [textDisplay, setTextDisplay] = useState('')
    // let i = 0
    let [i, setI] = useState(0)
    // let move = 0
    let [move, setMove] = useState(0)
    // let phase = []
    let [phase, setPhase] = useState([])
    // let deleteOne = false
    let [deleteOne, setDeleteOne] = useState(false)
    // color = "red"


    return (
        <div>
            <section className='dbimg bg-info p big_wrapper' style={{ backgroundImage: `url(${bg1})`, fontFamily: "Montserrat" }}>
                <section className="contain w-100" id="main-div">
                    <h2 className='d-flex flex-column gap-3'>
                        <a className="navbar-bran " href="#" style={{ fontFamily: "Montserrat" }}>

                            Kolad Consult Ltd<span className='text-warning h1'>.</span>
                        </a>
                        <div id="info" className="info" style={{ fontFamily: "Montserrat" }}>We are Architectural and Engineering Companing changing the world and building
                            amazingthings one mide at a time, and providing high impact scalable solutions.
                            We have organise and co-organise Constructional, Architectural, Real Estate Interior & Exterior, We enjoy speaking,
                            meeting and collaborating with people. Looking for work around in the Globe.
                        </div>
                        <a href='tel:09026674356' className='btn btnget btn-hover border' style={{ fontFamily: "Montserrat", width: "170px" }}>
                            Get Quote
                        </a>
                    </h2>
                    <div id="hello" style={{ fontFamily: "Montserrat" }}>
                        <div id="message" style={{ fontFamily: "Montserrat" }}><span className='text-warning ' >. </span>Architectural Design</div>
                        <div id="message" style={{ fontFamily: "Montserrat" }}><span className='text-warning ' >. </span>Real Estate</div>
                        <div id="message" style={{ fontFamily: "Montserrat" }}><span className='text-warning ' >. </span>Building Construction</div>
                        <div id="message" style={{ fontFamily: "Montserrat" }}><span className='text-warning ' >. </span>Property Development</div>
                        <div id="message" style={{ fontFamily: "Montserrat" }}><span className='text-warning ' >. </span>Interior and Exterior</div>
                    </div>
                </section>
            </section>
            <section>
                <h1>... needs some shit here</h1>
            </section>
            <div className='contacthead  dbimg' style={{ backgroundImage: `url(${whitebg})` }}>
                <section>
                    <h2><strong>Get started with us !</strong> We focus on the entire process, concept through completion</h2>
                    <a href='tel:09026674356' className="btn border border-primary btn-hover ">Contact Us</a>
                </section>
            </div>

            <Why_us />
        </div>
    );
}

export default Portfolio;