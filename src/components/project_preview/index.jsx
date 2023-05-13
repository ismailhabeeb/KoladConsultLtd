import { ClockCircleOutlined, EnvironmentFilled } from "@ant-design/icons";
import single from './images/pa2.jpg'
// images//
import a1 from './images/p3Db1.jpg'
import a2 from './images/p3Db2.jpg'
import a3 from './images/p3Db3.jpg'
import a4 from './images/p3Db4.jpg'
import a5 from './images/p3Db5.jpg'
// 2
import b1 from './images/p3Dc1.jpg'
import b2 from './images/p3Dc2.jpg'
//3
import c1 from './images/p3Dd1.jpg'
import c2 from './images/p3Dd2.jpg'
import c3 from './images/p3Dd3.jpg'
import c4 from './images/p3Dd4.jpg'
//3
import d1 from './images/vd4.jpg'
import d2 from './images/vd1.jpg'
import d3 from './images/vd3.jpg'
//general img
import pr1 from './images/pPR3d1.jpg'
import pr2 from './images/pPR3d2.jpg'
import pr3 from './images/pPRgen.jpg'
import pr4 from './images/pPRgen2.jpg'
import pr5 from './images/pPRgen3.jpg'
import { useState } from "react";


function Project_preview(params) {
    
    const [project, setProject1] = useState([a1, a2, a3, a4, a5, pr1, pr3, pr4, pr5])
    const [project2, setProject2] = useState([b1, b2, pr1, pr3, pr4, pr5])
    const [project3, setProject3] = useState([c1, c2, c3, c4, pr1, pr2, pr3, pr4, pr5])
    const [project4, setProject4] = useState([d2,d3,d1, pr3, pr4, pr5])


    return (
        <section className="menu p py-4 " id="menu">
            <div className="box-container" id="menu-items">
                <div id="ad${i}" className="box card">
                    <img loading="lazy" src={b1} alt="" />
                    <div className="content ">
                        <a data-bs-toggle="modal" data-bs-target={`#exampleModal1`} className="btn border border-warning text-light bol btn-hover">preview</a>
                        <a href="http://wa.me/2348069595110" className="btn border border-warning text-light bol btn-hover">get quete</a>
                    </div>
                    <div className='card-img-overlay '>
                        <h5>Details</h5>
                        <div className='text-white  '>
                            <div className='d-flex'><EnvironmentFilled className='my-auto text-warning' />Address:</div>
                            <a className='' href="location:lagos">Ologuneru, Ibadan Oyo State Nigeria</a>
                        </div>
                        <div className='text-white  '>
                            <div className='d-flex'><ClockCircleOutlined className='my-auto text-warning' />Year:</div>
                            <span className="badge text-bg-primary">2023</span>
                        </div>
                        <div className="d-flex w-100 justify-content-between ">
                            <a data-bs-toggle="modal" data-bs-target={`#exampleModal1`} className="btn border  border-warning text-primary bol btn-hover">preview</a>
                            <a href="http://wa.me/2348069595110" className="btn border border-warning text-primary bol btn-hover">get quete</a>
                        </div>
                    </div>
                </div>
                <section className="modal fade" id={`exampleModal1`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    <span className="badge text-bg-primary">2023</span>
                                </h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            {
                                project2.map((value, index) => {
                                    return (
                                        <div key={index} className="modal-body">
                                            <img loading='lazy' className='card-img' src={value} alt="" />
                                        </div>
                                    )
                                })
                            }
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary bg-info" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            {/* 2 */}
            <hr className='divider' />
            <div className="box-container d-flex justify-content-end" id="menu-items">

                <div id="ad${i} " className="box card ">
                    <img loading="lazy" src={single} alt="" />
                    <div className="content  ">
                        <a data-bs-toggle="modal" data-bs-target={`#exampleModal2`} className="btn border border-warning text-light bol btn-hover">preview</a>
                        <a href="http://wa.me/2348069595110" className="btn border border-warning text-light bol btn-hover">get quete</a>
                    </div>
                    <div className=' card-img-overlay'>
                        <h5>Details</h5>
                        <div className='text-light '>
                            <div className='d-flex'><EnvironmentFilled className='my-auto text-warning' />Address:</div>
                            <a className='' href="location:lagos">Ibeju Lekki, Lagos State Nigeria.</a>
                        </div>
                        <div className='text-white  '>
                            <div className='d-flex'><ClockCircleOutlined className='my-auto text-warning' />Year:</div>
                            <span className="badge text-bg-primary">2023</span>
                        </div>
                        <div className="d-flex w-100 justify-content-between ">
                            <a data-bs-toggle="modal" data-bs-target={`#exampleModal2`} className="btn border border-warning text-primary bol btn-hover">preview</a>
                            <a href="http://wa.me/2348069595110" className="btn border border-warning text-primary bol btn-hover">get quete</a>
                        </div>
                    </div>
                </div>
                <section className="modal fade" id={`exampleModal2`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    <span className="badge text-bg-primary">2023</span>
                                </h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div className="modal-body">
                                <img loading='lazy' className='card-img' src={single} alt="" />
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary bg-info" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            {/* no.3 */}
            <hr className='divider' />
            <div className="box-container" id="menu-items">
                <div id="ad${i}" className="box card">
                    <img loading="lazy" src={c1} alt="" />
                    <div className="content ">
                        <a data-bs-toggle="modal" data-bs-target={`#exampleModal3`} className="btn border border-warning text-light bol btn-hover">preview</a>
                        <a href="http://wa.me/2348069595110" className="btn border border-warning text-light bol btn-hover">get quete</a>
                    </div>

                    <div className='card-img-overlay'>
                        <h5>Details</h5>
                        <span className="badge text-bg-primary">Commercial building(shopping mall)</span>

                        <div className='text-white  '>
                            <div className='d-flex'><EnvironmentFilled className='my-auto text-warning' />Address:</div>
                            <a className='text-' href="location:lagos">Ifo, Ogun S  tate Nigeria</a>
                        </div>
                        <div className='text-white  '>
                            <div className='d-flex'><ClockCircleOutlined className='my-auto text-warning' />Year:</div>
                            <span className="badge text-bg-primary">2023</span>
                        </div>
                        <div className="d-flex w-100 justify-content-between ">
                            <a data-bs-toggle="modal" data-bs-target={`#exampleModal3`} className="btn border border-warning text-primary bol btn-hover">preview</a>
                            <a href="http://wa.me/2348069595110" className="btn border border-warning text-primary bol btn-hover">get quete</a>
                        </div>
                    </div>
                </div>
                <section className="modal fade" id={`exampleModal3`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    <span className="badge text-bg-primary">2023</span>
                                </h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            {
                                project3.map((value, index) => {
                                    return (
                                        <div key={index} className="modal-body">
                                            <img loading='lazy' className='card-img' src={value} alt="" />
                                        </div>
                                    )
                                })
                            }
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary bg-info" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            {/* no.4 */}
            <hr className='divider' />
            <div className="box-container d-flex justify-content-end" id="menu-items">

                <div id="ad${i}" className="box card ">
                    <img loading="lazy" src={a1} alt="" />
                    <div className="content ">
                        <a data-bs-toggle="modal" data-bs-target={`#exampleModal4`} className="btn border border-warning text-light bol btn-hover">preview</a>
                        <a href="http://wa.me/2348069595110" className="btn border border-warning text-light bol btn-hover">get quete</a>
                    </div>

                    <div className=' card-img-overlay'>
                        <h5>Details</h5>
                        <div className='text-white '>
                            <div className='d-flex'><EnvironmentFilled className='my-auto text-warning' />Address:</div>
                            <a className='' href="location:lagos">Abraham Adesanya Lagos State Nigeria.</a>
                        </div>
                        <div className='text-white  '>
                            <div className='d-flex'><ClockCircleOutlined className='my-auto text-warning' />Year:</div>
                            <span className="badge text-bg-primary">2023</span>
                        </div>
                        <div className="d-flex w-100 justify-content-between ">
                            <a data-bs-toggle="modal" data-bs-target={`#exampleModal4`} className="btn border border-warning text-primary bol btn-hover">preview</a>
                            <a href="http://wa.me/2348069595110" className="btn border border-warning text-primary bol btn-hover">get quete</a>
                        </div>
                    </div>
                </div>

                <section className="modal fade" id={`exampleModal4`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    <span className="badge text-bg-primary">2023</span>
                                </h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            {
                                project.map((value, index) => {
                                    return (
                                        <div key={index} className="modal-body">
                                            <img loading='lazy' className='card-img' src={value} alt="" />
                                        </div>
                                    )
                                })
                            }
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary bg-info" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <hr className='divider' />
            <div className="box-container" id="menu-items">

                <div id="ad${i}" className="box card ">
                    <img loading="lazy" src={d1} alt="" />
                    <div className="content ">
                        <a data-bs-toggle="modal" data-bs-target={`#exampleModal5`} className="btn border border-warning text-light bol btn-hover">preview</a>
                        <a href="http://wa.me/2348069595110" className="btn border border-warning text-light bol btn-hover">get quete</a>
                    </div>

                    <div className=' card-img-overlay'>
                        <h5>Details</h5>
                        <div className='text-white '>
                            <div className='d-flex'><EnvironmentFilled className='my-auto text-warning' />Address:</div>
                            <a className='' href="location:lagos">Umuezevum Village, Eziama-Oparanadim, Ahiazu Mbaise L.G.A, Imo State.</a>
                        </div>
                        <div className='text-white  '>
                            <div className='d-flex'><ClockCircleOutlined className='my-auto text-warning' />Year:</div>
                            <span className="badge text-bg-primary">2023</span>
                        </div>
                        <div className="d-flex w-100 justify-content-between ">
                            <a data-bs-toggle="modal" data-bs-target={`#exampleModal5`} className="btn border border-warning text-primary bol btn-hover">preview</a>
                            <a href="http://wa.me/2348069595110" className="btn border border-warning text-primary bol btn-hover">get quete</a>
                        </div>
                    </div>
                </div>

                <section className="modal fade" id={`exampleModal5`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    <span className="badge text-bg-primary">2023</span>
                                </h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            {
                                project4.map((value, index) => {
                                    return (
                                        <div key={index} className="modal-body">
                                            <img loading='lazy' className='card-img' src={value} alt="" />
                                        </div>
                                    )
                                })
                            }
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary bg-info" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


        </section>
    )
}
export default Project_preview;