import { ClockCircleOutlined, EnvironmentFilled } from "@ant-design/icons";
import single from './images/pa2.jpg'
// images//
// import a1 from './images/p3db1.jpg'
// import a2 from './images/p3db2.jpg'
// import a3 from './images/p3db3.jpg'
// import a4 from './images/p3db4.jpg'
// import a5 from './images/p3db5.jpg'
// // 2
// import b1 from './images/p3dc1.jpg'
// import b2 from './images/p3dc2.jpg'
// //3
// import c1 from './images/p3dd1.jpg'
// import c2 from './images/p3dd2.jpg'
// import c3 from './images/p3dd3.jpg'
// import c4 from './images/p3dd4.jpg'
// //general img
// import pr1 from './images/ppr3d1.jpg'
// import pr2 from './images/ppr3d2.jpg'
// import pr3 from './images/pprgen.jpg'
// import pr4 from './images/pprgen2.jpg'
// import pr5 from './images/pprgen3.jpg'
import { useState } from "react";


function Project_preview(params) {
    // const [project1, setProject1] = useState(a1, a2, a3, a4, a5, pr1, pr2, pr3, pr4, pr5,)
    // const [project2, setProject2] = useState(b1, b2, pr1, pr2, pr3, pr4, pr5,)
    // const [project3, setProject3] = useState(c1, c2, c3, c4, pr1, pr2, pr3, pr4, pr5,)


    return (
        <section className="menu p py-4 " id="menu">
            {/* <div className="box-container" id="menu-items">
                <div id="ad${i}" className="box card">
                    <img loading="lazy" src={a1} alt="" />
                    <div className="content w-100">
                        <a href="#ad${i}" className="btn border border-warning text-light bol btn-hover">preview</a>
                        <a href="http://wa.me/2348069595110" className="btn border border-warning text-light bol btn-hover">get quete</a>
                    </div>
                    <div className='card-img-overlay '>
                        <h5>Details</h5>
                        <div className='text-white  '>
                            <div className='d-flex'><EnvironmentFilled className='my-auto text-warning' />Address:</div>
                            <a className='' href="location:lagos">Eyenkorin Kwara state Nigeria</a>
                        </div>
                        <div className='text-white  '>
                            <div className='d-flex'><ClockCircleOutlined className='my-auto text-warning' />Year:</div>
                            <span className="badge text-bg-primary">2023</span>
                        </div>
                        <div className="d-flex w-100 justify-content-between ">
                            <a href="#ad${i}" className="btn border  border-warning text-primary bol btn-hover">preview</a>
                            <a href="http://wa.me/2348069595110" className="btn border border-warning text-primary bol btn-hover">get quete</a>
                        </div>
                    </div>
                </div>

            </div>
            <hr className='divider' />
            <div className="box-container" id="menu-items">

                <div id="ad${i}" className="box card ">
                    <img loading="lazy" src={b1} alt="" />
                    <div className="content w-100 ">
                        <a href="#ad${i}" className="btn border border-warning text-light bol btn-hover">preview</a>
                        <a href="http://wa.me/2348069595110" className="btn border border-warning text-light bol btn-hover">get quete</a>
                    </div>
                    <div className=' card-img-overlay'>
                        <h5>Details</h5>
                        <div className='text-light '>
                            <div className='d-flex'><EnvironmentFilled className='my-auto text-warning' />Address:</div>
                            <a className='' href="location:lagos">Umuezevum Village, Eziama-Oparanadim, Ahiazu Mbaise L.G.A, Imo State.</a>
                        </div>
                        <div className='text-white  '>
                            <div className='d-flex'><ClockCircleOutlined className='my-auto text-warning' />Year:</div>
                            <span className="badge text-bg-primary">2023</span>
                        </div>
                        <div className="d-flex w-100 justify-content-between ">
                            <a href="#ad${i}" className="btn border border-warning text-primary bol btn-hover">preview</a>
                            <a href="http://wa.me/2348069595110" className="btn border border-warning text-primary bol btn-hover">get quete</a>
                        </div>
                    </div>
                </div>

            </div>
            <hr className='divider' />
            <div className="box-container" id="menu-items">
                <div id="ad${i}" className="box card">
                    <img loading="lazy" src={c1} alt="" />
                    <div className="content w-100">
                        <a href="#ad${i}" className="btn border border-warning text-light bol btn-hover">preview</a>
                        <a href="http://wa.me/2348069595110" className="btn border border-warning text-light bol btn-hover">get quete</a>
                    </div>

                    <div className='card-img-overlay'>
                        <h5>Details</h5>
                        <div className='text-white  '>
                            <div className='d-flex'><EnvironmentFilled className='my-auto text-warning' />Address:</div>
                            <a className='text-' href="location:lagos">Eyenkorin Kwara state Nigeria</a>
                        </div>
                        <div className='text-white  '>
                            <div className='d-flex'><ClockCircleOutlined  className='my-auto text-warning' />Year:</div>
                            <span className="badge text-bg-primary">2023</span>
                        </div>
                        <div className="d-flex w-100 justify-content-between ">
                            <a href="#ad${i}" className="btn border border-warning text-primary bol btn-hover">preview</a>
                            <a href="http://wa.me/2348069595110" className="btn border border-warning text-primary bol btn-hover">get quete</a>
                        </div>
                    </div>
                </div>

            </div> */}
            <hr className='divider' />
            <div className="box-container" id="menu-items">

                <div id="ad${i}" className="box card ">
                    <img loading="lazy" src={single} alt="" />
                    <div className="content w-100 ">
                        <a href="#ad${i}" className="btn border border-warning text-light bol btn-hover">preview</a>
                        <a href="http://wa.me/2348069595110" className="btn border border-warning text-light bol btn-hover">get quete</a>
                    </div>

                    <div className=' card-img-overlay'>
                        <h5>Details</h5>
                        <div className='text-white '>
                            <div className='d-flex'><EnvironmentFilled className='my-auto text-warning' />Address:</div>
                            <a className='' href="location:lagos">Umuezevum Village, Eziama-Oparanadim, Ahiazu Mbaise L.G.A, Imo State.</a>
                        </div>
                        <div className='text-white  '>
                            <div className='d-flex'><ClockCircleOutlined  className='my-auto text-warning' />Year:</div>
                            <span className="badge text-bg-primary">2023</span>
                        </div>
                        <div className="d-flex w-100 justify-content-between ">
                            <a href="#ad${i}" className="btn border border-warning text-primary bol btn-hover">preview</a>
                            <a href="http://wa.me/2348069595110" className="btn border border-warning text-primary bol btn-hover">get quete</a>
                        </div>
                    </div>
                </div>
            </div>
            <button className="more btnget btn btn-hover rounded-circle mt-4">more</button>


        </section>
    )
}
export default Project_preview;