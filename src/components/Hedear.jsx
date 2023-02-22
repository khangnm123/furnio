import React, { Component, useEffect, useState } from 'react'
import Menu from './svg/bars-solid.svg';
import Close from './svg/xmark-solid.svg';
import Chervon from './svg/chevron-down-solid.svg'
import Seacrh from './svg/magnifying-glass-solid.svg'
import Heart from './svg/heart-regular.svg'
import Cart from './svg/cart-shopping-solid (1).svg'
import './css/Header.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {searchValue} from '../redux/actions'
import {searchValSelector, myCartSelector} from '../redux/selectors'
import ListToCart from './ListToCart';
function Hedear() {
  const dispatch = useDispatch();
  const listProductCart = useSelector(myCartSelector);
  useEffect(() => {
    console.log(listProductCart);
  },[listProductCart])
  
  function handleChangeInput(e){
    dispatch(searchValue(e.target.value));
  }
  const [buton , setButton] = useState(false);
  const changeBackground =() =>{
    if(window.scrollY >= 80){
      setButton(true);
    }else{
      setButton(false);
    }
  }
  window.addEventListener('scroll' , changeBackground)

  const [toggle , setToggle] = useState(false);

  const handleClick = () =>{
    setToggle(!toggle)
  }
  const [show , setShow] = useState(false);
  const handleClickcontent =() =>{
    setShow(!show)
  }
  return (
    <header className={buton ? '  header active' :'buton'}>
    <div className="menu" onClick={handleClick}>
           <img src={Menu} alt="" width="20px" />
    </div>
    <div className="logo" >
        <h1><Link to="/">Funiro. </Link></h1>
    </div>
    
    <nav>
        <ul className={!toggle ? "toggle" : " "} >
            <div className='menu__list'>
            <li><Link to="/">Products
            <img src={Chervon} alt="" width="20px" height="20px" />
            </Link></li>
            <li><Link to="/product">Rooms
            <img src={Chervon} alt="" width="20px" height="20px" />
            </Link></li>
            <li><Link to="/">Inspirations</Link></li>
            </div>
            <div className='input__type'>
              <li>
                  <form action="">
                    <img src={Seacrh} alt="" width="20px" className={buton ?"img active" : "img"} />
                    <input className={buton ?"input active" : "img"}  type="text" placeholder='Seacrh Here...' onChange={e => handleChangeInput(e)}/>
                  </form>
              </li>
              </div>	
            <li className='close'  onClick={handleClick}>
                <img src={Close} alt="" width="20px" />
            </li>
        </ul>
        <div className="nav-cart">
              <li> <Link to="/heart">
            <img src={Heart} alt="" width="20px" />   </Link></li>
              <li> 
                <Link to="/ShoppingCart" onClick={handleClickcontent}>
                  
              <img src={Cart} alt="" width="20px" />
            </Link></li>
              <li><div className='img__user'>
              <img src="https://scontent-hkt1-2.xx.fbcdn.net/v/t39.30808-1/318127267_1607846966300980_7438136312142147219_n.jpg?stp=dst-jpg_p160x160&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=fBVvNGWuqPoAX89Y0us&_nc_ht=scontent-hkt1-2.xx&oh=00_AfB66RUOwekiMFGGKU_Fo-0T1ECD7dp5UWt0FjiY7s4O2A&oe=63ED6F94" alt="" />    
              </div>
          </li>
          <div className={show ? " active":"listcontent"}>
            
            <ListToCart listProductCart={listProductCart}/>
          </div>
          </div>
    </nav>
</header>
  )
}

export default Hedear

