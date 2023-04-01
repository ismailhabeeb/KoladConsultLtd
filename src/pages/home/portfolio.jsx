// import bg1 from '../../assets/images/building-n-h.jpg'
import { useEffect, useState } from 'react'
import bg1 from '../../assets/images/draw.jpg'
import '../../assets/styles/home.css'
import '../../assets/styles/portfolio.css'
import logo from '../../assets/images/Untitled-1.svg'
import logo2 from '../../assets/images/logort.png'
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





    // useEffect(() => {
    //     function go() {
    //         // setTextDisplay(phase.join(''))
    //         // textDisplay.innerHTML = phase.join('')
    //         phase.join('')
    //         setPhase(phase)
    //         setTextDisplay(phase)
    //         // console.log(phase);

    //         // console.log();
    //         setTextDisplay(phase)
    //         if (i < textArray.length) {
    //             if (!deleteOne && move <= textArray[i].length) {
    //                 phase.push(textArray[i][move])
    //                 setPhase(phase)
    //                 console.log(move++)
    //                 setMove(move++)
    //             }

    //         }
    //         setTimeout(go, 200)
    //     }
    //     go()

    // }, [])

    return (
        <div>
            <section className='dbimg bg-info p' style={{ backgroundImage: `url(${bg1})`, }}>
                <section className="contain w-100" id="main-div">
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
            <div>
                <div id="info" className="info">We are Architectural and Engineering Companing changing the world and building
                    amazingthings one mide at a time, and providing high impact scalable solutions.
                    We have organise and co-organise Constructional, Architectural, Real Estate Interior & Exterior, We enjoy speaking,
                    meeting and collaborating with people. Looking for work around in the Globe.
                </div>
                <div className="img"></div>
            </div>
        </div>
    );
}

export default Portfolio;