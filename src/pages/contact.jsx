import whitebg from '/src/assets/images/white-bg2.jpg'
import '../assets/styles/contact.css'
import house1 from '/src/assets/images/tools-table.jpg'
import whitbghouse from '/src/assets/images/artchitecturedraw.avif'
import { ArrowRightOutlined, PhoneFilled, EnvironmentFilled } from '@ant-design/icons';
function Contact() {
    return (<>
        <div style={{ height: '80px' }} className='bg-info '></div>

        <div className='contacthead p dbimg' style={{ backgroundImage: `url(${whitebg})` }}>
            <section>
                <h2>We Offer The Most Complete Construction Solutions</h2>
                <div><strong>Home / </strong>Contact</div>
            </section>
        </div>
        <section className='safety'>
            <section className='d-flex contactbody'>
                <section className='contactbody1 d-flex flex-colume gap-3'>
                    <h5>Free Consultation</h5>
                    <p>we offer construction planning and programming from our highly
                        experienced team of engirneer and planners.
                    </p>
                    <a className='text-light d-flex gap-2 ' style={{ width: "140px" }}>
                        <div>Contact Us </div>
                        <ArrowRightOutlined className='my-auto ' />
                    </a>
                </section>
                <section className='d-flex flex-colume gap-4'>
                    <div className='text-info d-flex gap-2'>
                        <div className='d-flex'><PhoneFilled className='my-auto text-warning' /></div>

                        <a className='text-info' href=""> (+123) 806-959-5110</a>
                    </div>
                    <p>we offer construction planning and programming from our highly
                        experienced team of engirneer and planners.
                    </p>
                    <a className='text-warning d-flex gap-2 ' style={{ width: "140px" }}>
                        <div>Call us </div>
                        <ArrowRightOutlined className='my-auto ' />
                    </a>
                </section>
                <section className=' d-flex flex-colume gap-3'>
                    <div className=' d-flex gap-2'>
                        <div className='d-flex'><EnvironmentFilled className='my-auto text-warning' /></div>
                        <a className='text-info' href="#">No.1 Ogunlana St, OLive G Es., Ogombo, Ajah Lagos.</a>
                    </div>
                    <p>we offer construction planning and programming from our highly
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

                <div className='construction d-flex'>
                <div className='bg-warning span1 my-auto'></div> <span className='span2'> WE CAN FIND PROCCESS THAT WILL BEST HELP YOU MEET YOUR GOALS</span>
                </div>
                <h2 className='globacontact'>
                    We have dedication to providing outstanding <strong>customer service and quality </strong>finished Projects
                </h2>
                <button className='btnget d-flex gap-2' style={{ width: "150px" }}>
                    <div>Get started </div>
                    <ArrowRightOutlined className='my-auto ' />
                </button>
            </main>

        </section>
        <div className='contacthead dbimg ' style={{ backgroundImage: `url(${whitbghouse})` }}>
            <section className='tosee'>
                <header>YOU SHOULD TO SEE</header>
                <h1>12 years experience in the market</h1>
                <button className="btn border border-primary btn-hover ">View Portfolio</button>
            </section>

            <div className='card d-flex  flex-row gap-3 p-3 shadow'>
                <input className='form-control ' disabled type="tel" name="" value={'(+123) 806-959-5110'} />
                <a className='btnget btn-hover w-75' href="">Call Back</a>
            </div>
        </div>
    </>);
}

export default Contact;