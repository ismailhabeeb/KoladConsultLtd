import person from '/src/assets/images/person.png'
import '../assets/styles/review.css';
function Review() {
    return (
        <>
            <section class="review p" id="review">
                <h1 class="hearding">our customers' <span>reveiw</span></h1>
                <div class="box-container ">
                    <div class="box card" >
                        <img src={person} alt=""/>
                            <div class="content">
                                <h3>Heritage</h3>
                                <div class="stars">⭐⭐⭐⭐</div>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla corrupti voluptas perspiciatis</p>
                            </div>
                    </div>
                    <div class="box card">
                        <img src={person} alt="" />
                        <div class="content">
                            <h3>Tom</h3>
                            <div class="stars">⭐⭐⭐⭐⭐</div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla corrupti voluptas perspiciatis</p>
                        </div>
                    </div>
                    <div class="box card">
                        <img src={person} alt="" />
                        <div class="content">
                            <h3>Vee</h3>
                            <div class="stars">⭐⭐⭐</div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla corrupti voluptas perspiciatis</p>
                        </div>
                    </div>
                    <div class="box card">
                        <img src={person} alt="" />
                        <div class="content">
                            <h3>Mahish</h3>
                            <div class="stars">⭐⭐⭐⭐⭐</div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla corrupti voluptas perspiciatis</p>
                        </div>
                    </div>
                </div>
                <a href="#book" class="btn btn-warning text-light fw-bold btn-hover">Book A Table</a>

            </section>
        </>
    );
}

export default Review;