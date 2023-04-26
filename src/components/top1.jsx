import { UserOutlined, PlusOutlined, SaveOutlined, PlusCircleOutlined, MailOutlined, MailTwoTone, MailFilled, EnvironmentFilled, PhoneFilled, FacebookFilled, TwitterCircleFilled, InstagramFilled, LinkedinFilled, SearchOutlined, WhatsAppOutlined } from '@ant-design/icons';




function Top1() {
    return (
        <>
            <nav style={{ fontSize: '12px' }} className='d-flex navbar first_nav  bg-primary py-2 text-white px-4 px-sm-5   ' id='top'>

                <div className='text-info d-flex gap-2 topicon'>

                    <div className='d-flex'><FacebookFilled className='my-auto text-info' /></div>
                    <div className='d-flex'><TwitterCircleFilled className='my-auto text-info' /></div>
                    <a href='http://wa.me/2348069595110' className='d-flex'><WhatsAppOutlined className='my-auto text-info' /></a>
                    <div className='d-flex'><InstagramFilled className='my-auto text-info' /></div>
                </div>

                <div className='navbar gap-3 linh'>
                    <div className='text-info d-flex gap-2'>
                        <div className='d-flex'><PhoneFilled className='my-auto text-warning' /></div>

                        <a className='text-info' href='tel:09026674356'> (+234) 806-959-5110</a>
                    </div>
                    |
                    <div className='text-info d-flex gap-2 topico'>
                        <div className='d-flex'><MailFilled className='my-auto text-warning' /></div>

                        <a className='text-info' href="mailTo:koladconsultltd@gmail.com"> Koladconsultltd@gmail.com</a>
                    </div>
                    |
                    <div className='text-info d-flex gap-2'>
                        <div className='d-flex'><EnvironmentFilled className='my-auto text-warning' /></div>
                        <a className='text-info' href="location:lagos">No.1 Ogunlana St, OLive G Est., Ogombo, Ajah Lagos.</a>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Top1;