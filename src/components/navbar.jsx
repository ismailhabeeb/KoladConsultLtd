import '/src/assets/styles/navbar.css';
import logo from '../assets/images/Untitled-1.svg'
import logo2 from '../assets/images/logort.png'
import { Link } from 'react-router-dom';
// import profile from '/src/assets/images/profile-icon.jpg'
import { useContext, useRef, useState } from 'react';
import { Textcontext } from './context';
import { UserOutlined, PlusOutlined, SaveOutlined, PlusCircleOutlined, MailOutlined, MailTwoTone, MailFilled, EnvironmentFilled, PhoneFilled, FacebookFilled, TwitterCircleFilled, InstagramFilled, LinkedinFilled, SearchOutlined } from '@ant-design/icons';


export default function Navbar(params) {
    const [navbar, setNavbar] = useState()
    const { mode, setMode } = useContext(Textcontext)

    const home = useRef(null);
    const our = useRef(null);
    const portfolio = useRef(null);
    const property = useRef(null);
    const blog = useRef(null);
    const contact = useRef(null);

    // document.onscroll = function () { scrollGo() }
    window.onscroll = function () { scrollFunc() };
    // window.ononline = function () { alart() };
    // window.onoffline = function () { offline() };

    // const [navbar, setNavbar] = useState('Home')

    function scrollFunc() {
        if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
            document.getElementById("secondtop").style.backgroundColor = "rgba(5, 18, 44, 0.795)";
            document.getElementById("secondtop").style.color = "white";
            document.getElementById("secondtop").style.boxShadow = "2px 1px 6px rgb(53, 53, 53)";
            // home.current.style.color = "black";
            // our.current.style.color = "black";
            // portfolio.current.style.color = "black";
            // property.current.style.color = "black";
            // blog.current.style.color = "black";
            // contact.current.style.color = "black"
            home.current.style.color = "white";
            our.current.style.color = "white";
            portfolio.current.style.color = "white";
            property.current.style.color = "white";
            blog.current.style.color = "white";
            contact.current.style.color = "white"

        } else {
            document.getElementById("secondtop").style.backgroundColor = "transparent";
            document.getElementById("secondtop").style.boxShadow = "none";
            document.getElementById("secondtop").style.color = "white";
            home.current.style.color = "white";
            our.current.style.color = "white";
            portfolio.current.style.color = "white";
            property.current.style.color = "white";
            blog.current.style.color = "white";
            contact.current.style.color = "white"

        }
    }

    // const submi = (ev) => {
    //     ev.preventDefault()
    //     console.log('input value')
    // }

    // const btnmode = (ev) => {
    //     if (mode == true) {
    //         setMode(false)
    //         localStorage.setItem('mode', mode)
    //         console.log(mode);

    //     } else {
    //         setMode(true)
    //         localStorage.setItem('mode', mode)
    //         console.log(mode);

    //     }

    // }
    return (
        <div className=''>
            <nav style={{ fontSize: '12px' }} className='d-flex navbar bg-primary text-white ps-5 pe-5' id='top'>

                <div className='text-info d-flex gap-2'>

                    <div className='d-flex'><FacebookFilled className='my-auto text-info' /></div>
                    <div className='d-flex'><TwitterCircleFilled className='my-auto text-info' /></div>
                    <div className='d-flex'><LinkedinFilled className='my-auto text-info' /></div>
                    <div className='d-flex'><InstagramFilled className='my-auto text-info' /></div>
                </div>

                <div className='navbar gap-3'>
                    <div className='text-info d-flex gap-2'>
                        <div className='d-flex'><PhoneFilled className='my-auto text-warning' /></div>

                        <a className='text-info' href=""> (+123) 806-959-5110</a>
                    </div>
                    |
                    <div className='text-info d-flex gap-2'>
                        <div className='d-flex'><MailFilled className='my-auto text-warning' /></div>

                        <a className='text-info' href=""> Koladconsultltd@gmail.com</a>
                    </div>
                    |
                    <div className='text-info d-flex gap-2'>
                        <div className='d-flex'><EnvironmentFilled className='my-auto text-warning' /></div>
                        <a className='text-info' href="#">No.1 Ogunlana St, OLive G Es., Ogombo, Ajah Lagos.</a>
                    </div>
                </div>
            </nav>

            <nav className="navbar navbar-expand-lg secondtop d-flex ps-3 pe-3 text-white" id='secondtop'>
                <div className="container-fluid ">
                    <a className="navbar-brand" href="#">
                        {/* <img src={logo} alt="" /> */}
                        Kolad Consult Ltd<span className='text-warning '>.</span>
                    </a>
                    <button style={{ boxShadow: 'none' }} className="navbar-toggler border-0 ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
                            {/* <li className="nav-item l1">
                                <Link to={'/'} style={{ borderBottom: navbar == 'Home' ? 'solid rgb(0, 102, 0) 2px' : '0', fontWeight: navbar == 'Home' ? 'bolder' : 'normal' }} onClick={(ev) => setNavbar(ev.target.innerText)} className="nav-link" >Home</Link>
                            </li> */}
                            <li className=" nav-item l1">
                                <div className='btn-group'>
                                    <Link ref={home} className="dropdown-toggle  nav-link" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false" to={'/'} style={{ borderBottom: navbar == 'Home' ? 'solid rgb(114,127,162) 2px' : '0', fontWeight: navbar == 'Home' ? '900' : 'bolder' }} onClick={(ev) => setNavbar(ev.target.innerText)} >Home</Link>
                                    <ul className="dropdown-menu dropdown-menu-end ">
                                        <li><Link to={'/'} className="dropdown-item d-flex justify-content-between" href="#">Construction</Link></li>
                                        <li><Link to={'/architecture'} className="dropdown-item d-flex justify-content-between" href="#">Architectural</Link></li>
                                        <li><a className="dropdown-item d-flex justify-content-between" href="#">Saved listing <SaveOutlined /></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item l2">
                                <Link ref={our} to={'/'} style={{ borderBottom: navbar == 'Our Projects' ? 'solid rgb(114,127,162) 2px' : '0', fontWeight: navbar == 'Our Projects' ? '900' : 'bolder' }} onClick={(ev) => setNavbar(ev.target.innerText)} className="nav-link" >Our Projects</Link>
                            </li>
                            <li className="nav-item l4">
                                <Link ref={portfolio} to={'/'} style={{ borderBottom: navbar == 'Portfolio' ? 'solid rgb(114,127,162) 2px' : '0', fontWeight: navbar == 'Portfolio' ? '900' : 'bolder' }} onClick={(ev) => setNavbar(ev.target.innerText)} className="nav-link" >Portfolio</Link>
                            </li>
                            <li className="nav-item l3">
                                <Link ref={property} to={'/property'} style={{ borderBottom: navbar == 'Property' ? 'solid rgb(114,127,162) 2px' : '0', fontWeight: navbar == 'Property' ? '900' : 'bolder' }} onClick={(ev) => setNavbar(ev.target.innerText)} className="nav-link" >Property</Link>
                            </li>
                            <li className="nav-item l5">
                                <Link ref={blog} to={'/blog'} style={{ borderBottom: navbar == 'Blog' ? 'solid rgb(114,127,162) 2px' : '0', fontWeight: navbar == 'Blog' ? '900' : 'bolder' }} onClick={(ev) => setNavbar(ev.target.innerText)} className="nav-link" >Blog</Link>
                            </li>
                            <li className="nav-item l5">
                                <Link ref={contact} to={'/blog'} style={{ borderBottom: navbar == 'Contact' ? 'solid rgb(114,127,162) 2px' : '0', fontWeight: navbar == 'Contact' ? '900' : 'bolder' }} onClick={(ev) => setNavbar(ev.target.innerText)} className="nav-link" >Contact</Link>
                            </li>
                        </ul>
                        <div className="input-group navsearch text-light">
                            <input type="text" className="form-control" id="autoSizingInputGroup" placeholder="Search . . ." />
                            <div className="input-group-text"><SearchOutlined /></div>
                        </div>
                    </div>


                </div>

            </nav>

        </div>
    )
}