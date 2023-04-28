import '/src/assets/styles/navbar.css';
import logo from '../assets/images/Untitled-1.svg'
import logo2 from '../assets/images/logort.png'
import { Link, useNavigate } from 'react-router-dom';
// import profile from '/src/assets/images/profile-icon.jpg'
import { useContext, useRef, useState } from 'react';
import { Textcontext } from './context';
import { SaveOutlined, SearchOutlined } from '@ant-design/icons';
import { Alert } from 'bootstrap';


export default function Navbar(params) {
    const [navbar, setNavbar] = useState('Construction')
    const { mode, setMode } = useContext(Textcontext)
    const navigate = useNavigate()

    const home = useRef(null);
    const our = useRef(null);
    const portfolio = useRef(null);
    const property = useRef(null);
    const blog = useRef(null);
    const contact = useRef(null);
    window.onscroll = function () { scrollFunc() };
    function scrollFunc() {
        if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
            document.getElementById("secondtop").style.backgroundColor = "rgba(5, 18, 44, 0.795)";
            document.getElementById("secondtop").style.color = "white";
            document.getElementById("secondtop").style.boxShadow = "2px 1px 6px rgb(53, 53, 53)";
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
    const value = useRef(null);

    const submit = (ev) => {

        ev.preventDefault()
        console.log(portfolio.current.innerText)
        if (value.current.value == portfolio.current.innerText) {
            navigate('/portfolio')
        }
        else if (value.current.value == our.current.innerText) {
            navigate(`/our_project`)
        }
        else if (value.current.value == contact.current.innerText) {
            navigate(`/${contact.current.innerText}`)
        }
        else if (value.current.value == 'Architecture') {
            navigate(`/architecture`)
        }
        else if (value.current.value == 'Construction') {
            navigate(`/`)
        }
        else if (value.current.value == 'Real estate') {
            navigate(`/real_estate`)
        }
        else (
            alert('can not find page'))

    }

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
            <nav className="navbar navbar-expand-lg secondtop d-flex px-1 px-sm-3  text-white " id='secondtop'>
                <div className="container-fluid ">
                    <a className="navbar-brand " href="#">
                        Kolad Consult Ltd<span className='text-warning logodesign1'>.</span>
                        <div className='bg-warning span1 mx-end logodesign2'></div>
                    </a>
                    <button style={{ boxShadow: 'none' }} className="navbar-toggler border-0 ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon bg-info rounded"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">

                        
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white " >
                            <li className=" nav-item l1">
                                <Link  ref={home} className="nav-link"  data-bs-display="static" aria-expanded="false" to={'/'} style={{ borderBottom: navbar == 'Construction' ? 'solid rgb(114,127,162) 2px' : '0', fontWeight: navbar == 'Construction' ? '900' : 'bolder' }} onClick={(ev) => setNavbar(ev.target.innerText)} >Construction</Link>
             </li>
                            <li className="nav-item l3">
                                <Link ref={property} to={'/architecture'} style={{ borderBottom: navbar == 'Architectural' ? 'solid rgb(114,127,162) 2px' : '0', fontWeight: navbar == 'Architectural' ? '900' : 'bolder' }} onClick={(ev) => setNavbar(ev.target.innerText)} className="nav-link" >Design</Link>
                            </li>
                            <li className="nav-item l2">
                                <Link ref={our} to={'/our_Project'} style={{ borderBottom: navbar == 'Our Projects' ? 'solid rgb(114,127,162) 2px' : '0', fontWeight: navbar == 'Our Projects' ? '900' : 'bolder' }} onClick={(ev) => setNavbar(ev.target.innerText)} className="nav-link" >Our Projects</Link>
                            </li>
                            <li className="nav-item l4">
                                <Link ref={portfolio} to={'/portfolio'} style={{ borderBottom: navbar == 'Portfolio' ? 'solid rgb(114,127,162) 2px' : '0', fontWeight: navbar == 'Portfolio' ? '900' : 'bolder' }} onClick={(ev) => setNavbar(ev.target.innerText)} className="nav-link" >Portfolio</Link>
                            </li>

                            <li className="nav-item l5">
                                <Link ref={blog} to={'/real_estate'} style={{ borderBottom: navbar == 'Real Estate' ? 'solid rgb(114,127,162) 2px' : '0', fontWeight: navbar == 'Real Estate' ? '900' : 'bolder' }} onClick={(ev) => setNavbar(ev.target.innerText)} className="nav-link" >Real Estate</Link>
                            </li>
                            <li className="nav-item l5">
                                <Link ref={contact} to={'/contact'} style={{ borderBottom: navbar == 'Contact' ? 'solid rgb(114,127,162) 2px' : '0', fontWeight: navbar == 'Contact' ? '900' : 'bolder' }} onClick={(ev) => setNavbar(ev.target.innerText)} className="nav-link" >Contact</Link>
                            </li>
                        </ul>
                        <form onSubmit={submit} className="input-group navsearch text-light">
                            <input style={{ fontVariantCaps: 'titling-caps' }} ref={value} type="text" className="form-control" id="autoSizingInputGroup" placeholder="Search . . ." />
                            <button className="input-group-text bg-transparent text-light border-0"><SearchOutlined /></button>
                        </form>
                    </div>


                </div>

            </nav>

        </div>
    )
}