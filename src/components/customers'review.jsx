import person from '/src/assets/images/person.png'
import '../assets/styles/review.css';
function Review() {
    return (
        <>
            <section className="review pb-5" id="review">
                <h1 className="hearding pb-4">our customers' <span>reveiw</span></h1>
                <div className="box-container ">
                    <div className="box card" >
                        <img src={person} alt=""/>
                            <div className="content">
                                <h3>Heritage</h3>
                                <div className="stars">⭐⭐⭐⭐</div>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla corrupti voluptas perspiciatis</p>
                            </div>
                    </div>
                    <div className="box card">
                        <img src={person} alt="" />
                        <div className="content">
                            <h3>Tom</h3>
                            <div className="stars">⭐⭐⭐⭐⭐</div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla corrupti voluptas perspiciatis</p>
                        </div>
                    </div>
                    <div className="box card">
                        <img src={person} alt="" />
                        <div className="content">
                            <h3>Vee</h3>
                            <div className="stars">⭐⭐⭐</div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla corrupti voluptas perspiciatis</p>
                        </div>
                    </div>
                    <div className="box card">
                        <img src={person} alt="" />
                        <div className="content">
                            <h3>Mahish</h3>
                            <div className="stars">⭐⭐⭐⭐⭐</div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla corrupti voluptas perspiciatis</p>
                        </div>
                    </div> 
                </div>

            </section>
        </>
    );
}

export default Review;