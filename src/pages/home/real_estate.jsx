import house from '/src/assets/images/a2.jpg'
import house2 from '/src/assets/images/3db4.jpg'
import house3 from '/src/assets/images/3dc1.jpg'
import { Link, Outlet } from 'react-router-dom';
import Why_us from '../../components/why-us';
import Review from '../../components/customers\'review'
import { useState } from 'react';


export default function Real_estate() {
  const [note, setNote] = useState('Our team of experts has extensive experience in all facets of real estate development, from the initial feasibility study to the final construction and marketing of the finished project.')


  return (
    <main className=''>
      <section>
        <div id="carouselExampleDark" className="carousel slide bg-dark" data-bs-ride="carousel">
          <div className="carousel-indicators ">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active bg-warning" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" className="bg-warning" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" className="bg-warning" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner ">
            <div className="carousel-item active" data-bs-interval="10000">
              <div className='listingcaro' style={{ backgroundImage: `url(${house})` }}>
              </div>
              <div className="carousel-caption d-none d-md-block ">
                <h4 className='text-warning'>Kolad Consult Ltd Real Estate Department</h4>
                <p>{note}</p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <div className='listingcaro' style={{ backgroundImage: `url(${house2})` }}></div>

              <div className="carousel-caption d-none d-md-block">
                <h4 className='text-warning'>Kolad Consult Ltd Real Estate Department</h4>
                <p>{note}</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className='listingcaro' style={{ backgroundImage: `url(${house3})` }}></div>

              <div className="carousel-caption d-none d-md-block">
                <h4 className='text-warning'>Kolad Consult Ltd Real Estate Department</h4>
                <p>{note}</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon " aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </section>
      <Why_us />
      <Review />

    </main>
  )
}