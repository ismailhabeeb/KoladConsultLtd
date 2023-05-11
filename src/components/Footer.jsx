import { Link } from "react-router-dom";
import "/src/assets/styles/footer.css"
// import logo from '../assets/images/logort.png'
import { EnvironmentFilled, FacebookOutlined, InstagramOutlined, MailFilled, MailOutlined, PhoneFilled, TwitterOutlined, WhatsAppOutlined, YoutubeOutlined } from '@ant-design/icons';

function Footer() {
  return (
    <>

      <div className="footer p-0 p-sm-3 py-3  ">
        <div className="footer text-start ">

          <div className="row primary thisrow container">
            <div className="column blog">

              <h3 className="  ">
                <a className="navbar-brand my-auto " href="#">
                  {/* <img src={logo} alt="" /> */}
                  Kolad Consult Ltd<span className='text-warning '>.</span>
                </a>
                <div style={{ marginTop: '-6px' }} className='bg-warning span1 mx-end '></div>
              </h3>
              <small className="d-">
                We have completed over 100 projects. Specializing in design
                build and turnkey construction, We are passionate about design,
                architecture and construction 🚧
              </small>

            </div>

            <div className="column links ">
              <ul>
                <li>
                  <div className='text-info d-flex gap-2'>
                    <div className='d-flex'><PhoneFilled className='my-auto text-warning' /></div>

                    <a className='text-info' href="tel:08069595110"> (+234) 806-959-5110</a>
                  </div>
                </li>
                <hr className="divider m-1" />
                <li>
                  <div className='text-info d-flex gap-2'>
                    <div className='d-flex'><MailFilled className='my-auto text-warning' /></div>

                    <a className='text-info' href="mailTo:koladconsultltd@gmail.com"> koladconsultltd@gmail.com</a>
                  </div>                </li>
                <hr className="divider m-1" />

                <li>
                  <div className='text-info d-flex gap-2'>
                    <div className='d-flex'><EnvironmentFilled className='my-auto text-warning' /></div>
                    <a className='text-info' href="#">No.1 Ogunlana St, OLive G Es., Ogombo, Ajah Lagos.</a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="social my-auto mx-auto">
              <InstagramOutlined className="i text-warning" />
              <a href="mailTo:koladconsultltd@gmail.com"> <MailOutlined className="i" /></a>
              <a href="http://wa.me/2348069595110"><WhatsAppOutlined className="i" /></a>
            </div>
          </div>

          <div className="row copyright">
            <div className="footer-menu w-100 ">
              <Link to={'/'}>Home</Link>
              <a href="">About</a>
              <Link to={'/contact'}>Contact</Link>
              <Link to={'/portfolio'}>Portfolio</Link>
            </div>
            <hr />
            <p className="text-white">Copyright <a href="mailTo:koladconsultltd@gmail.com">©2023 Kolad Consult Ltd by Azeez Habeeb.</a></p>
          </div>


        </div>
      </div>

    </>
  )
}



export default Footer;