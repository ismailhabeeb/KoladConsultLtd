import { useState } from 'react'
import '../../assets/styles/home.css'
// import '../../assets/styles/app.css'

import logo from '../../assets/images/Untitled-1.svg'
import logo2 from '../../assets/images/logor.png'

import house1 from '../../assets/images/draw.jpg'
import bg from '../../assets/images/luxuryproperty.avif'
import bg1 from '../../assets/images/building-n-h.jpg'
import Projects from '../../components/projects'

function Main() {
    const [count, setCount] = useState(0)
<<<<<<< HEAD
    {/* <div className='logo'>
=======

    return (
        <div className="App">

            {/* 
          <div className="card">
          <p className="read-the-docs">
          className="logo react"
      
      */}
            <section className='dbimg ' style={{ backgroundImage: `url(${bg1})`, }}>

                {/* <div className='logo'>
>>>>>>> 1f730a607cb18d0b2f72c9334b31ec084df86d8c
                    <img className='w-100' src={logo} alt="" />

                </div> */}
    return (
        <main className="App">

            <section className='dbimg' style={{ backgroundImage: `url(${bg1})`, }}>

                <main className='d-flex flex-column gap-3 '>
                    <div className='construction'>
                        <span className='bg-warning span1'>. . </span><span className='span2'>CONSTUCTURE PROJECTS AND TECHNOLOGY INFRASTRUCTURE</span>
                    </div>
                    <h2 className='global'>
                        Global construction & engineering company
                    </h2>
                    <div className='experience'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio quisquam necessitatibus, fugiat corporis veritatis in consequatur delectus tempora sapiente distinctio. Nostrum velit laudantium nulla sunt voluptatibus deserunt, tempore quis reprehenderit!
                    </div>
                    <button className='btnget d-flex gap-2' style={{ width: "150px" }}>
                        <div>Get started </div>
                        <ArrowRightOutlined className='my-auto ' />
                    </button>
                </main>
            </section>
<<<<<<< HEAD

            <Projects />
=======
           
           <Projects/>
>>>>>>> 1f730a607cb18d0b2f72c9334b31ec084df86d8c

            <section className='usbgimg' style={{ backgroundImage: `url(${bg})`, }}>
                <div className='gy-2 gap-3'>
                    <div className='construction text-warning'>
                        CONSTUCTURE PROJECTS AND TECHNOLOGY INFRASTRUCTURE
                    </div>
                    <h3>Safety, quality & sustainablility</h3>
                    <div className='at'>At Kolad consult ltd, we have helped customers complete more than 1,000 projects,
                        in countries that have created jobs and grown economies, improved the resiliency of the
                        world's infrastructure, increased access to resources and vital services, and made the world a safer place.
                    </div>
                    <div className='d-flex g-5 usflex'>
                        <button className='w-50 btnget'>
                            <p>Completed project</p>
                            <h3 className='text-warning'><HighlightOutlined /> 100+</h3>
                        </button>

                        <button className='w-50 btnget'>
                            <p>Construction Workers</p>
                            <h3 className='text-warning'><HighlightOutlined /> 150+</h3>
                        </button>
                    </div>
                </div>
                <main className='usimg'>
                    <img src={house1} alt="" />
                </main>
            </section>

            <section className='safety d-flex p'>
            </section>
        </main>
    )
}

export default Main