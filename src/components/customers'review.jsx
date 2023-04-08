import person from '/src/assets/images/person.png'
import '../assets/styles/review.css';
function Review() {
    return (
        <>
<<<<<<< HEAD
            <section className="review py-5" id="review">
                <h1 className="hearding py-4 text-center">Our customers' <span className='text-warning'>reveiw</span></h1>

=======
            <section className="review pb-5" id="review">
                <h1 className="hearding pb-4">our customers' <span>reveiw</span></h1>
>>>>>>> 1f46d81588f78e133af39439f2f27cc71db0d9de
                <div className="box-container ">
                    <div className="box card" >
                        <img src={person} alt="" />
                        <div className="content">
                            <h3>Heritage</h3>
                            <div className="stars">⭐⭐⭐⭐</div>
                            <p>
                                Great experience and impressive product. It was a very professional and technically competent job from the whole team
                            </p>
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
<<<<<<< HEAD
=======
                    <div className="box card">
                        <img src={person} alt="" />
                        <div className="content">
                            <h3>Mahish</h3>
                            <div className="stars">⭐⭐⭐⭐⭐</div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla corrupti voluptas perspiciatis</p>
                        </div>
                    </div> 
>>>>>>> 1f46d81588f78e133af39439f2f27cc71db0d9de
                </div>

            </section>
        </>
    );
}

export default Review;