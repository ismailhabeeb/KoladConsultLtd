import '../../assets/styles/home.css'
import '../../assets/styles/our_project.css'
import single from '../../assets/images/vd4.jpg'
import house1 from '../../assets/images/PRgen.jpg'

function Architectural() {

    return (
        <div className="App">
            <section className='usbgimg bg-white' >
                <main className='usimg'>
                    <img loading='lazy' style={{ width: '350px' }} className='border border-warning' src={house1} alt="" />
                </main>
                <div className='d-flex flex-column gap-2'>
                    <h1 className='text-black style'>A strong experience in engineering</h1>

                    <div className="contain  tabsp">
                        <ul className="nav nav-tabs bg-inf text-whit" role="tablist">
                            <li className="nav-item ">
                                <a className="nav-link active " data-bs-toggle="tab" href="#home">Our Mission</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#menu1">Our Vision</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#menu2">Our values</a>
                            </li>
                        </ul>

                        <div className="tab-content text-black">
                            <div className="tab-pane container active p-4 " id="home">Our mission is to provide our customers with value through the
                                provisioning of engineering services, procurement, construction,
                                operation and management of infrastructure and power projects.
                                We consider the empowerment of our human resources to be
                                fundamental in building a permanent knowledge base.
                            </div>
                            <div className="tab-pane container fade p-4" id="menu1">Our vision is to provide our customers with value through the
                                provisioning of engineering services, procurement, construction,
                                operation and management of infrastructure and power projects.
                                We consider the empowerment of our human resources to be
                                fundamental in building a permanent knowledge base.
                            </div>
                            <div className="tab-pane container fade p-4" id="menu2">Our value is to provide our customers with value through the
                                provisioning of engineering services, procurement, construction,
                                operation and management of infrastructure and power projects.
                                We consider the empowerment of our human resources to be
                                fundamental in building a permanent knowledge base.
                            </div>
                        </div>
                        <hr className="divider m-1 border border-1" />
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Architectural
