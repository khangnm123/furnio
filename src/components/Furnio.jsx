import React from 'react'
import f1 from './image/Furnioimage/f1.png'
import f2 from './image/Furnioimage/f2.png'
import f3 from './image/Furnioimage/f3.png'
import f4 from './image/Furnioimage/f4.png'
import f5 from './image/Furnioimage/f5.png'
import f6 from './image/Furnioimage/f6.png'
import f7 from './image/Furnioimage/f7.png'
import f8 from './image/Furnioimage/f8.png'
import f9 from './image/Furnioimage/f9.png'
import f99 from './image/Furnioimage/f99.png'
import './css/Furnio.css'

function Furnio() {
  return (
    <div className='container__furnio'>
        <p>Share your setup with</p>
        <h2>#FuniroFurniture</h2>
        
      <div className="content__img"> 
              <div className="content__image">
                <img src={f9} alt="" id='ten'/>
              </div>
              <div className="content__image">
                <img src={f2} alt="" id='twoo'/>
              </div>
              <div className="content__image">
                <img src={f4} alt="" id='three'/>
              </div>
              <div className="content__image">
                <img src={f6} alt="" id='four'/>
              </div>
              <div className="content__image">
                <img src={f1} alt="" id='five'/>
              </div>
              <div className="content__image">
                <img src={f3} alt="" id='six'/>
              </div>
              <div className="content__image">
                <img src={f5} alt="" id='seven'/>
              </div>
              <div className="content__image">
                <img src={f8} alt="" id='eight'/>
              </div>
              <div className="content__image">
                <img src={f99} alt="" id='nine'/>
              </div>
      </div>
    </div>
  )
}

export default Furnio
