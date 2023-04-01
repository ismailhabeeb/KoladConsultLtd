import { useState } from 'react'
import '../../assets/styles/home.css'
// import '../../assets/styles/app.css'

import logo from '../../assets/images/Untitled-1.svg'
import logo2 from '../../assets/images/logor.png'
import house from '../../assets/images/house.jpg'
import house1 from '../../assets/images/draw.jpg'
import bg from '../../assets/images/luxuryproperty.avif'
import bg1 from '../../assets/images/building-n-h.jpg'
import { ArrowRightOutlined, CheckOutlined, FallOutlined, HighlightOutlined, MailFilled, SmileOutlined } from '@ant-design/icons'
import Projects from '../../components/projects'

function Architectural() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">

            {/* 
          <div className="card">
          <p className="read-the-docs">
          className="logo react"
      
      */}
            <section className='dbimg' style={{ backgroundImage: `url(${house1})`, }}>

                {/* <div className='logo'>
                    <img className='w-100' src={logo} alt="" />

                </div> */}
                <main className='d-flex flex-column gap-3 '>
                    <div className='construction'>
                        CONSTUCTURE PROJECTS AND TECHNOLOGY INFRASTRUCTURE
                    </div>
                    <h2 className='global'>
                        Architctural, Interior and Exterior Design
                    </h2>
                    <div className='experience'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio quisquam necessitatibus, fugiat corporis veritatis in consequatur delectus tempora sapiente distinctio.
                    </div>
                    <button className='btnget d-flex gap-2' style={{width:"140px"}}>
                        <div>Get started </div>
                        <ArrowRightOutlined className='my-auto ' />
                    </button>
                </main>
            </section>
           
           <Projects/>

            <section className='usbgimg' style={{ backgroundImage: `url(${bg})`, }}>
                <main className='usimg'>
                    <img src={house1} alt="" />
                </main>
                <div className="containe  tabspy">
                    <ul className="nav nav-tabs bg-info text-white" role="tablist">
                        <li className="nav-item ">
                            <a className="nav-link active " data-bs-toggle="tab" href="#home">Our Mission</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="tab" href="#menu1">Our Vision</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="tab" href="#menu2">Our values</a>
                        </li>
                    </ul>

                    <div className="tab-content ">
                        <div className="tab-pane container active p-4 " id="home">Our mission istoprovideour customers with yalue through the
                            provisioning of engineering services, procurement, construction,
                            operation and management of infrastructure and power projects.
                            We consider the empowerment of our human resources to be
                            fundamental in building a permanent knowledge base.
                        </div>
                        <div className="tab-pane container fade p-4" id="menu1">Our vision istoprovideour customers with yalue through the
                            provisioning of engineering services, procurement, construction,
                            operation and management of infrastructure and power projects.
                            We consider the empowerment of our human resources to be
                            fundamental in building a permanent knowledge base.
                            </div>
                        <div className="tab-pane container fade p-4" id="menu2">Our values istoprovideour customers with yalue through the
                            provisioning of engineering services, procurement, construction,
                            operation and management of infrastructure and power projects.
                            We consider the empowerment of our human resources to be
                            fundamental in building a permanent knowledge base.
                            </div>
                    </div>
                </div>
            </section>

            <section className='safety d-flex p'>
            </section>
            {/* <section style={{position: 'relative'}} data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="50">
                    <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                        <div className="container-fluid">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" href="#section1">Section 1</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#section2">Section 2</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#section3">Section 3</a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <div id="section1" class="container-fluid bg-success text-white" style={{padding:'100px 20px'}}>
                        <h1>Section 1</h1>
                        <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
                        <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
                    </div>

                    <div id="section2" class="container-fluid bg-warning" style={{padding:'100px 20px'}}>
                        <h1>Section 2</h1>
                        <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
                        <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
                    </div>

                    <div id="section3" class="container-fluid bg-secondary text-white" style={{padding:'100px 20px'}}>
                        <h1>Section 3</h1>
                        <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
                        <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
                    </div>
                </section> */}

        </div>
    )
}

export default Architectural
