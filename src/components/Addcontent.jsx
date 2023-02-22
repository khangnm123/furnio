import React from 'react'
import content1 from './image/image1.png'
import content2 from './image/image2.png'
import content3 from './image/image3.png'
import content4 from './image/image4.png'
import './css/Addcontent.css'
function Addcontent() {
  return (
    <div className='title'>
          <div className="content-title">
                <div className="title-image">
                        <img src={content1} alt="" />
                </div>
                <div className="title-p">
                    <div className="title-h2">
                          <h2>High Quality</h2>
                    </div>
                    <div className="title-font">
                          <p>crafted from top materials</p>
                    </div>
                </div>
          </div>
          <div className="content-title">
                <div className="title-image">
                        <img src={content2} alt="" />
                </div>
                <div className="title-p">
                    <div className="title-h2">
                          <h2>Warrany Protection</h2>
                    </div>
                    <div className="title-font">
                          <p>Over 2 years</p>
                    </div>
                </div>
          </div>
          <div className="content-title">
                <div className="title-image">
                        <img src={content3} alt="" />
                </div>
                <div className="title-p">
                    <div className="title-h2">
                          <h2>Free Shipping</h2>
                    </div>
                    <div className="title-font">
                          <p>Order over 150 $</p>
                    </div>
                </div>
          </div>
          <div className="content-title">
                <div className="title-image">
                        <img src={content4} alt="" />
                </div>
                <div className="title-p">
                    <div className="title-h2">
                          <h2>24 / 7 Support  </h2>
                    </div>
                    <div className="title-font">
                          <p>Dedicated support</p>
                    </div>
                </div>
          </div>
    </div>
  )
}

export default Addcontent
