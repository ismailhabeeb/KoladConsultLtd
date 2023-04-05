// import bg1 from '../../assets/images/building-n-h.jpg'
import { useEffect, useState } from 'react'
import bg1 from '../assets/images/buying-renting-selling-real-e.jpg'
import '../assets/styles/home.css'
import '../assets/styles/portfolio.css'
import logo from '../assets/images/Untitled-1.svg'
import logo2 from '../assets/images/logort.png'
import Why_us from '../components/why-us'
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
            <section className='dbimg bg-info' style={{ backgroundImage: `url(${bg1})`,backgroundColor:'black' }}>
                <section className="contain w-100 p" id="main-div">
                    <h1>
                        <a className="navbar-brand " href="#">
                            Kolad Consult Ltd<span className='text-warning h1'>.</span>
                        </a>
                        <div id="info" className="info">We are Architectural and Engineering Companing changing the world and building
                            amazingthings one mide at a time, and providing high impact scalable solutions.
                            We have organise and co-organise Constructional, Architectural, Real Estate Interior & Exterior, We enjoy speaking,
                            meeting and collaborating with people. Looking for work around in the Globe.
                        </div>
                        <button className='bt border'>
                            button in
                        </button>
                    </h1>
                    <div id="hello">
                        <div id="message"><span className='text-warning '>. </span>Architectural Design</div>
                        <div id="message"><span className='text-warning '>. </span>Real Estate</div>
                        <div id="message"><span className='text-warning '>. </span>Building Construction</div>
                        <div id="message"><span className='text-warning '>. </span>Property Development</div>
                        <div id="message"><span className='text-warning '>. </span>Interior and Exterior</div>
                    </div>
                </section>
            </section>
            <section>
                <h1>... needs some shit here</h1>
            </section>
           
            <Why_us/>
        </div>
    );
}

export default Portfolio;