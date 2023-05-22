import '/src/assets/styles/navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { Alert } from 'bootstrap';


export default function Navbar(params) {
    const [navbar, setNavbar] = useState('Construction')
    const navigate = useNavigate()

    const home = useRef(null);
    const portfolio = useRef(null);
    const contact = useRef(null);

    window.onscroll = function () { scrollFunc() };
    function scrollFunc() {
        if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
            document.getElementById("secondtop").style.backgroundColor = "rgba(5, 18, 44, 0.795)";
            document.getElementById("secondtop").style.color = "white";
            document.getElementById("secondtop").style.boxShadow = "2px 1px 6px rgb(53, 53, 53)";
        } else {
            document.getElementById("secondtop").style.backgroundColor = "transparent";
            document.getElementById("secondtop").style.boxShadow = "none";
            document.getElementById("secondtop").style.color = "white";
        }
    }
    const value = useRef(null);

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
                    <div className="collapse navbar-collapse ms-auto" id="navbarSupportedContent">
                        <ul  className="navbar-nav ms-auto mb-2 mb-lg-0 text-white  " >
                            <li className=" nav-item l1">
                                <Link ref={home} className="nav-link text-white" data-bs-display="static" aria-expanded="false" to={'/'} style={{borderBottom: navbar == 'Construction' ? 'solid rgb(114,127,162) 2px' : '0' }} onClick={(ev) => setNavbar(ev.target.innerText)} >Home</Link>
                            </li>
                            <li className="nav-item l4">
                                <Link ref={portfolio} to={'/portfolio'} style={{ borderBottom: navbar == 'Portfolio' ? 'solid rgb(114,127,162) 2px' : '0' }} onClick={(ev) => setNavbar(ev.target.innerText)} className="nav-link text-white" >Portfolio</Link>
                            </li>
                            <li className="nav-item l5">
                                <Link ref={contact} to={'/contact'} style={{ borderBottom: navbar == 'Contact' ? 'solid rgb(114,127,162) 2px' : '0' }} onClick={(ev) => setNavbar(ev.target.innerText)} className="nav-link text-white" >Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>

        </div>
    )
}