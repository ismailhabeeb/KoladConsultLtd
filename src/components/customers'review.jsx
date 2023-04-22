import person from '/src/assets/images/person.png'
import '../assets/styles/review.css';
function Review() {
    return (
        <>
            <section className="review py-5" id="review">
                <h1 className="hearding py-4 text-center">Our customers' <span className='text-warning'>reveiw</span></h1>

                <div className="box-container ">
                    <div className="box car" >
                        <img loading='lazy' src={person} alt="" />
                        <div className="content">
                            <h3> Mr Heritage</h3>
                            <div className="stars">⭐⭐⭐⭐</div>
                            <p>
                                Great experience and impressive product. It was a very professional and technically competent job from the whole team
                            </p>
                        </div>
                    </div>
                    <div className="box car2">
                        <img loading='lazy' src={person} alt="" />
                        <div className="content">
                            <h3>Basnaj Auto</h3>
                            <div className="stars">⭐⭐⭐⭐⭐</div>
                            <p>
                                Great experience and impressive product. It was a very professional and technically competent job from the whole team
                            </p>
                        </div>
                    </div>
                    <div className="box car">
                        <img loading='lazy' src={person} alt="" />
                        <div className="content">
                            <h3>Mr Olalekan</h3>
                            <div className="stars">⭐⭐⭐⭐⭐</div>
                            <p>
                                Great experience and impressive product. It was a very professional and technically competent job from the whole team
                            </p>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default Review;