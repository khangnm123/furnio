import React from 'react'
import './css/Rooms.css'
import contact1 from './image/Rectangle 25.png'
import contact2 from './image/Rectangle 24.png'
import contact3 from './image/Rectangle 26.png'
function Rooms() {
  return (
      <div className='container__rooms'>
          <div className='big__rooms'>
              <div className='image__left'>
                    <div className='rooms__h2'>
                        <h2>50+ Beautiful rooms inspiration</h2>
                    </div>
                    <div className="rooms__p">
                        <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                    </div>
                    <div className="rooms__button">
                          <button>Explore More</button>
                    </div>
              </div>
              <div className='image__right'>
                    <div className="content___contact1" id='slider-1'>
                        <img src={contact2} alt="" id='one' />
                    </div>
                    <div className="content___contact2" id='slider-2'>
                        <img src={contact1} alt="" id='two'/>
                    </div>
                    <div className="content___contact2" id='slider-3'>
                        <img src={contact3} alt="" id='two'/>
                    </div>
              </div>
          </div>

      </div>
  )
}

export default Rooms
