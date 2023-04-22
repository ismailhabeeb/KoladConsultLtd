import { useState } from 'react'
import '../../assets/styles/home.css'
// import '../../assets/styles/app.css'

import logo from '../../assets/images/Untitled-1.svg'
import logo2 from '../../assets/images/logor.png'

import house1 from '../../assets/images/draw.jpg'
import bg from '../../assets/images/construction-silhouette.jpg'
import bg1 from '../../assets/images/building-n-h.jpg'
import Projects from '../../components/projects'
import { AimOutlined, ArrowRightOutlined, HighlightOutlined } from '@ant-design/icons'
import Review from '../../components/customers\'review'
import Intouch from '../../components/intouch'

function Main() {
    const [count, setCount] = useState(0)
   
    return (
        <main className="App">

            <section className='dbimg' style={{ backgroundImage: `url(${bg1})`, }}>

                <main className='d-flex flex-column gap-3 '>
                    <div className='construction'>
                        <div className='bg-warning span1'></div>
                        <span className='span2'>CONSTUCTURE PROJECTS AND TECHNOLOGY INFRASTRUCTURE</span>
                    </div>
                    <h2 className='global'>
                        Global construction & engineering company
                    </h2>
                    <div className='experience'>
                        Experience and sustainablility — these are the keys to success of Kolad Consult Ltd for the
                        realisation of large international constructionprojects.
                    </div>
                    <button className='btnget d-flex gap-2' style={{ width: "150px" }}>
                        <a className='text-light' href='http://wa.me/2349026674356'>Get started </a>
                        <ArrowRightOutlined className='my-auto ' />
                    </button>
                </main>
            </section>

            <Projects />
            <section>
                <Intouch/>
            </section>
            <section className='usbgimg' style={{ backgroundImage: `url(${bg})`, }}>
                <div className='gy-2 gap-3'>
                   <div className='construction'>
                        <div className='bg-warning span1'></div><span className='span2'>CONSTUCTURE PROJECTS AND TECHNOLOGY INFRASTRUCTURE</span>
                    </div>
                    <h3>Collaborating to achieve project excellence</h3>
                    <div className='at'>
                    Construction and risk go hand-in-hand and projects are constantly dealing with chalenges that arise from budget, schedule, and staffing limitations.
                    </div>
                    <div className='d-flex g-5 usflex'>
                        <button className='w-50 btnget'>
                            <p>Completed project</p>
                            <h3 className='text-warning'><AimOutlined /> 100+</h3>
                        </button>

                        <button className='w-50 btnget'>
                            <p>Construction Workers</p>
                            <h3 className='text-warning'><AimOutlined /> 150+</h3>
                        </button>
                    </div>
                </div>
                <main className='usimg'>
                    <img className='border border-warning' src={house1} alt="" />
                </main>
            </section>
            <Review />

            <section className='safety d-flex p'>
            </section>
        </main>
    )
}

export default Main