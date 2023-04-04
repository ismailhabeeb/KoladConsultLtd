import whitebg from '/src/assets/images/white-bg2.jpg'
import '../assets/styles/contact.css'
import house1 from '/src/assets/images/tools-table.jpg'
function Contact() {
    return (<>
        <div className='contacthead p dbimg' style={{ backgroundImage: `url(${whitebg})` }}>
            <section>
                <h2>We Offer The Most Complete Construction Solutions</h2>
                <div><strong>Home / </strong>Contact</div>
            </section>
        </div>
        <section className='dbimg' style={{ backgroundImage: `url(${house1})`, }}>
        </section>
        <main className="p d-flex mt-5 ">
            <section>

                <header>YOU SHOULD TO SEE</header>
                <h2>12 years experience in the market</h2>
                <button className="btnget btn-hover ">View Portfolio</button>
            </section>
            <section></section>
        </main>
    </>);
}

export default Contact;