import '../assets/styles/App.css'
import { EnvironmentFilled, FieldTimeOutlined, PhoneOutlined } from '@ant-design/icons';

export default function Intouch(params) {
    return (
        <div>
            <div className='d-flex bg-warning intouch'>
                <section className='d-flex bg-primary'>
                    <div className='intouchicon'>
                        <FieldTimeOutlined />
                    </div>
                    <div>
                        <div className='construction'>
                            <span className='span2'>WE ARE OPEN MONDAY-SATURDAY</span>
                            <div className='bg-warning span1'></div>
                        </div>
                        <h5><strong>7:00 am - 9:00 pm</strong></h5>
                    </div>
                </section>

                <section className='d-flex'>
                    <div className='intouchicon'>
                        <PhoneOutlined />
                    </div>
                    <div>
                        <div className='construction'>
                            <span className='span2 text-primary'>HAVE A QUESTION?</span>
                            <div className='bg-primary span1'></div>
                        </div>
                        <h5><strong><a className='' href='tel:09026674356'> (+123) 806-959-5110</a></strong></h5>
                    </div>
                </section>

                <section className='d-flex bg-primary'>
                    <div className='intouchicon'>
                        <EnvironmentFilled />
                    </div>
                    <div>
                        <div className='construction'>
                            <span className='span2'>Our AADDRESS</span>
                            <div className='bg-warning span1'></div>
                        </div>
                        <h5><strong><a className='text-light' href='tel:09026674356'>No.1 Ogunlana St, OLive Garden Es., Ogombo, Ajah Lagos.</a></strong></h5>
                    </div>
                </section>
            </div>
        </div>
    )
}


// ourproject,display//////////