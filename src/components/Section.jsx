import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './fontawesome-free-6.2.0-web/css/all.css'
import image1 from './image/1528 1 (1).png'
import './css/Slider.css'
import image2 from './image/one.png'
import image3 from './image/two.png'
function Section() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2   
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
      <Slider {...settings}>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                  <img src={image1} alt="" />
                  <div className="content-list">
              <div className="content-item">
                      <div className="content-h2"><h2>Bohauss</h2></div>
                      <div className="content-p"><p>Luxury big sofa 2-seat</p></div>
                      <div className="content-price"><p>Rp 17.000.000</p></div>
                      <div className='content-icon'><i class="fa-solid fa-arrow-right"></i></div>
                    </div>
              </div>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                  <img src={image2} alt="" />
                  <div className="content-list">
              <div className="content-item">
                      <div className="content-h2"><h2>Bohauss</h2></div>
                      <div className="content-p"><p>Luxury big sofa 2-seat</p></div>
                      <div className="content-price"><p>Rp 17.000.000</p> </div>
                      <div className='content-icon'><i class="fa-solid fa-arrow-right"></i></div>
                    </div>
              </div>
              </div>
  
            </div>
            
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                  <img src={image3} alt="" />
                  <div className="content-list">
              <div className="content-item">
                      <div className="content-h2"><h2>Bohauss</h2></div>
                      <div className="content-p"><p>Luxury big sofa 2-seat</p></div>
                      <div className="content-price"><p>Rp 17.000.000</p></div>
                      <div className='content-icon'><i class="fa-solid fa-arrow-right"></i></div>
                    </div>
              </div>
              </div>
  
            </div>
            
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                  <img src={image2} alt="" />
                  <div className="content-list">
              <div className="content-item">
                      <div className="content-h2"><h2>Bohauss</h2></div>
                      <div className="content-p"><p>Luxury big sofa 2-seat</p></div>
                      <div className="content-price"><p>Rp 17.000.000</p></div>
                      <div className='content-icon'><i class="fa-solid fa-arrow-right"></i></div>
                    </div>
              </div>
              </div>
  
            </div>
            
          </div>
      </Slider>
  )
}

export default Section
