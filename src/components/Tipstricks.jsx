import React from 'react'
import { tricksData } from './Data/tricksdata'
import './css/Tricks.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function Tipstricks() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='tricks__big'>
    <div className='tricks__container'>
        
            <h2>Tips & Tricks</h2>
            <Slider {...settings}>
            {tricksData.map((item) => (
                    <div className="trick__title" key={item._id}>
                        <div className="trick__image">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="trick__text">
                            <div className="trick__h3">
                                <h3>{item.h2}</h3>
                            </div>
                            <div className="trick__date">
                                <p>{item.date}</p>
                            </div>
                        </div>
                    </div>
                    
                
        ))}
        </Slider>
    </div>
    </div>
  )
}

export default Tipstricks
