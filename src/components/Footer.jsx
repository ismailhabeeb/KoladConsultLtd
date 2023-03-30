import "/src/assets/styles/footer.css"
// import logo from '../assets/images/TreeCity-removedbg.png'
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, WhatsAppOutlined, YoutubeOutlined } from '@ant-design/icons';

function Footer() {
  return (
    <>

      <div className="footer">
        <div className="footer text-start">

          <div className="row primary thisrow">
            <div className="column blog">

              <h3 className="text-info bg-light">
                {/* <img className='log w-100' src={logo} alt="" /> */}
                logo
              </h3>


              <div className="social ">
                <FacebookOutlined className="i" />
                <InstagramOutlined className="i"/>
                <TwitterOutlined className="i"/>
                <YoutubeOutlined className="i"/>
                <WhatsAppOutlined className="i"/>
              </div>
            </div>

            <div className="column links">
              {/* <h3>Some Links</h3> */}
              <ul>
                <li>
                  <a href="#faq">NEWS</a>
                </li>
                <li>
                  <a href="#cookies-policy">POLITICS</a>
                </li>
                <li>
                  <a href="#terms-of-services">ENTERTAINMENT</a>
                </li>
                <li>
                  <a href="#support">SPORT</a>
                </li>
              </ul>
            </div>

            <div className="column links">

              <ul>

                <li>
                  <a href="#faq">ABOUT US</a>
                </li>
                <li>
                  <a href="#cookies-policy">ADVERTISE</a>
                </li>
                <li>
                  <a href="#terms-of-services">CONTACT US</a>
                </li>
                <li>
                  <a href="#support">RSS</a>
                </li>
                <li>
                  <a href="#support"> FAQ </a>
                </li>
              </ul>

            </div>


            <div className="column links">
              <ul>
                <li>
                  <a href="#faq">F.A.Q</a>
                </li>
                <li>
                  <a href="#cookies-policy">COOKIES POLICY</a>
                </li>
                <li>
                  <a href="#terms-of-services">TERMS OF SERVICE</a>
                </li>
                <li>
                  <a href="#support">SUPPORT</a>
                </li>
              </ul>
            </div>
            <div className="column links">
              <ul>
                <li>
                  <a href="#faq">CAREERS</a>
                </li>
                <li>
                  <a href="#cookies-policy">ARCHIVE</a>
                </li>
                <li>
                  <a href="#terms-of-services">USER AGREEMENT</a>
                </li>
                <li>
                  <a href="#support">COMMENT POLICY</a>
                </li>

                <li>
                  <a href="#support">DMCA POLICY</a>
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
              <a href="">Social</a>

            </div>
            <hr />
            <p className="">Copyright &copy;<a href="mailto:ismailhabeeboluwatobi995@gmail.com">Dev. MAHISH</a> </p>
          </div>


        </div>
      </div>

    </>
  )
}



export default Footer;