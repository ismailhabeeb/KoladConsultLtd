import { Link } from "react-router-dom";
import "/src/assets/styles/footer.css"
import {  InstagramOutlined, MailOutlined, WhatsAppOutlined } from '@ant-design/icons';

function Footer() {
  return (
    <>

      <div className="footer p-0 p-sm-3 py-3  ">
        <div className="footer text-start ">

         <div>
            <div className="social my-auto mx-auto">
              <InstagramOutlined className="i text-warning" />
              <a href="mailTo:koladconsultltd@gmail.com"> <MailOutlined className="i" /></a>
              <a href="http://wa.me/2348069595110"><WhatsAppOutlined className="i" /></a>
            </div>
          </div>

          <div className="row copyright">
            <hr />
            <p className="text-white">Copyright <a href="mailTo:koladconsultltd@gmail.com">©2023 Kolad Consult Ltd by Azeez Habeeb.</a></p>
          </div>


        </div>
      </div>

    </>
  )
}



export default Footer;