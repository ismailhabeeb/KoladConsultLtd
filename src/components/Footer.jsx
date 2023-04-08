import "/src/assets/styles/footer.css"
// import logo from '../assets/images/TreeCity-removedbg.png'
import { EnvironmentFilled, FacebookOutlined, InstagramOutlined, MailFilled, PhoneFilled, TwitterOutlined, WhatsAppOutlined, YoutubeOutlined } from '@ant-design/icons';

function Footer() {
  return (
    <>

      <div className="footer p-0 p-sm-3 py-3 ">
        <div className="footer text-start">

          <div className="row primary thisrow">
            <div className="column blog">

              <h3 className="h-25 border bg-info ">
                <a className="navbar-brand my-auto" href="#">
                  {/* <img src={logo} alt="" /> */}
                  Kolad Consult Ltd<span className='text-warning '>.</span>
                </a>
              </h3>

              <small>
                We have completed over 30,000 projects. Specializing in design
                build and turnkey construction, We are passionate about design
                architecture and construction 🚧
              </small>

              <div className="social ">
                <FacebookOutlined className="i" />
                <InstagramOutlined className="i" />
                <TwitterOutlined className="i" />
                <WhatsAppOutlined className="i" />
              </div>
            </div>

            <div className="column links">
              <h3>About Industry</h3>
              <ul>
                <li>
                  <a href="#faq">Engineering & Construction</a>
                </li>
                <li>
                  <a href="#cookies-policy">Core Architecture</a>
                </li>
                <li>
                  <a href="#terms-of-services">Infrastructure</a>
                </li>
                <li>
                  <a href="#support">Cleaner Energy</a>
                </li>
                <li>
                  <a href="#support"> Quality Service</a>
                </li>
              </ul>

            </div>

            <div className="column links">
              <h3>Our Solutions</h3>
              <ul>
                <li>
                  <a href="#faq">Sustainability Services</a>
                </li>
                <li>
                  <a href="#cookies-policy">Worldwide Provider</a>
                </li>
                <li>
                  <a href="#terms-of-services">Master Planning</a>
                </li>
                <li>
                  <a href="#support">Sustainability Policy</a>
                </li>

                <li>
                  <a href="#support">Green Building</a>
                </li>
              </ul>
            </div>

            <div className="column links">
              <h3>General</h3>
              <ul>
                <li>
                  <a href="#faq">F.A.Q</a>
                </li>
                <li>
                  <a href="#cookies-policy">Cookies Policy</a>
                </li>
                <li>
                  <a href="#terms-of-services">Terms OF Service</a>
                </li>
                <li>
                  <a href="#support">Support</a>
                </li>
              </ul>
            </div>

            <div className="column links">
              <h3>Contact Us</h3>
              <ul>
                <li>
                  <div className='text-info d-flex gap-2'>
                    <div className='d-flex'><PhoneFilled className='my-auto text-warning' /></div>

                    <a className='text-info' href=""> (+123) 806-959-5110</a>
                  </div>
                </li>
                <hr className="divider" />
                <li>
                  <div className='text-info d-flex gap-2'>
                    <div className='d-flex'><MailFilled className='my-auto text-warning' /></div>

                    <a className='text-info' href=""> koladconsultltd@gmail.com</a>
                  </div>                </li>
                <hr className="divider" />

                <li>
                  <div className='text-info d-flex gap-2'>
                    <div className='d-flex'><EnvironmentFilled className='my-auto text-warning' /></div>
                    <a className='text-info' href="#">No.1 Ogunlana St, OLive G Es., Ogombo, Ajah Lagos.</a>
                  </div>
                </li>
              </ul>
            </div>


          </div>

          <div className="row copyright">
            <div className="footer-menu w-100">
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Contact</a>
              <a href="">Blog</a>
              <a href="">Portfolio</a>
            </div>
            <hr />
            <p className="text-white">Copyright <a href="koladconsultltd@gmail.com">©2023 Kolad Consult Ltd by Azeez Habeeb. All Rights Reserved </a>  | <a href="">Privacy Policy</a> | <a href="">Terms and Conditions.</a></p>
          </div>


        </div>
      </div>

    </>
  )
}



export default Footer;