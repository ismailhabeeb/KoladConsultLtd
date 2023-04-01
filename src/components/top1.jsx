import { UserOutlined, PlusOutlined, SaveOutlined, PlusCircleOutlined, MailOutlined, MailTwoTone, MailFilled, EnvironmentFilled, PhoneFilled, FacebookFilled, TwitterCircleFilled, InstagramFilled, LinkedinFilled, SearchOutlined } from '@ant-design/icons';




function Top1() {
    return (
        <>
            <nav style={{ fontSize: '12px' }} className='d-flex navbar first_nav  bg-primary py-2 text-white px-4 px-sm-5   ' id='top'>

                <div className='text-info d-flex gap-2'>

                    <div className='d-flex'><FacebookFilled className='my-auto text-info' /></div>
                    <div className='d-flex'><TwitterCircleFilled className='my-auto text-info' /></div>
                    <div className='d-flex'><LinkedinFilled className='my-auto text-info' /></div>
                    <div className='d-flex'><InstagramFilled className='my-auto text-info' /></div>
                </div>

                <div className='navbar gap-3'>
                    <div className='text-info d-flex gap-2'>
                        <div className='d-flex'><PhoneFilled className='my-auto text-warning' /></div>

                        <a className='text-info' href=""> (+123) 806-959-5110</a>
                    </div>
                    |
                    <div className='text-info d-flex gap-2'>
                        <div className='d-flex'><MailFilled className='my-auto text-warning' /></div>

                        <a className='text-info' href=""> Koladconsultltd@gmail.com</a>
                    </div>
                    |
                    <div className='text-info d-flex gap-2'>
                        <div className='d-flex'><EnvironmentFilled className='my-auto text-warning' /></div>
                        <a className='text-info' href="#">No.1 Ogunlana St, OLive G Es., Ogombo, Ajah Lagos.</a>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Top1;