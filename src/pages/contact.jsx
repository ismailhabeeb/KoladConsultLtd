import whitebg from '/src/assets/images/white-bg2.jpg'
import '../assets/styles/contact.css'
import house1 from '/src/assets/images/About-3.jpg'
import whitbghouse from '/src/assets/images/artchitecturedraw.avif'
import { ArrowRightOutlined, PhoneFilled, EnvironmentFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
function Contact() {
    return (<>
        <div style={{ height: '80px' }} className='bg-primary '></div>

        <div className='contacthead p bg-primary' >
            <section className='px-2'>
                <h2 className='text-light'>We Offer The Most Complete Construction Solutions</h2>
                <div className='text-light'><strong>Home / </strong>Contact</div>
            </section>
        </div>
        <section className='safety dbimg h-100 pe-0 con' style={{ backgroundImage: `url(${whitebg})` }}>
            <section className='d-flex contactbody ' >
                <section className='contactbody1 d-flex p-2 flex-colume gap-3'>
                    <h5>Free Consultation</h5>
                    <p>We offer construction planning and programming from our highly
                        experienced team of engirneer and planners.
                    </p>
                    <a className='text-light d-flex gap-2 ' style={{ width: "140px" }}>
                        <div>Contact Us </div>
                        <ArrowRightOutlined className='my-auto ' />
                    </a>
                </section>
                <section className='d-flex flex-colume p-2 gap-4'>
                    <div className='text-info d-flex gap-2'>
                        <div className='d-flex'><PhoneFilled className='my-auto text-warning' /></div>

                        <a className='text-info' href="tel:08069595110"> (+234) 806-959-5110</a>
                    </div>
                    <p>We offer construction planning and programming from our highly
                        experienced team of engirneer and planners.
                    </p>
                    <a className='text-warning d-flex gap-2 ' style={{ width: "140px" }}>
                        <div>Call us </div>
                        <ArrowRightOutlined className='my-auto ' />
                    </a>
                </section>
                <section className=' d-flex flex-colume p-2 gap-3'>
                    <div className=' d-flex gap-2'>
                        <div className='d-flex'><EnvironmentFilled className='my-auto text-warning' /></div>
                        <a className='text-info' href="#">No.1 Ogunlana St, OLive Garden Es., Ogombo, Ajah Lagos.</a>
                    </div>
                    <p>We offer construction planning and programming from our highly
                        experienced team of engirneer and planners.
                    </p>
                    <a className='text-warning d-flex gap-2 ' style={{ width: "140px" }}>
                        <div>Locations </div>
                        <ArrowRightOutlined className='my-auto ' />
                    </a>
                </section>
            </section>
        </section>
        <section className='dbimg' style={{ backgroundImage: `url(${house1})`, }}>
            <main className='d-flex flex-column gap-3 '>

                <div className='construction '>
                    <div className='bg-warning span1 my-auto'></div> <span className='span2'> WE CAN FIND PROCCESS THAT WILL BEST HELP YOU MEET YOUR GOALS</span>
                </div>
                <h2 className='globacontact'>
                    We have dedication to providing outstanding <strong>customer service and quality </strong>finished Projects
                </h2>
                <button className='btnget d-flex gap-2' style={{ width: "150px" }}>
                    <a className='text-light' href='http://wa.me/2348069595110'>Get started </a>
                    <ArrowRightOutlined className='my-auto ' />
                </button>
            </main>

        </section>
        <div className='contacthead dbimg ' style={{ backgroundImage: `url(${whitbghouse})` }}>
            <section className='tosee'>
                <header>YOU SHOULD BE ABLE TO SEE</header>
                <h1 className='style'>12 years experience in the market</h1>
                <Link to={'/portfolio'} className="btn border border-primary btn-hover ">View Portfolio</Link>
            </section>

            <div className='card d-flex  flex-row gap-3 p-3 shadow'>
                <input className='form-control ' disabled type="tel" name="" value={'(+234) 806-959-5110'} />
                <a className='btnget btn-hover w-75' href="tel:08069595110">Call Back</a>
            </div>
        </div>
    </>);
}

export default Contact;