import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import clsx from 'clsx';
import Hedear from './Hedear';
export default  function Menuclose({navcart}) {
    const myCart = useSelector(myCartSelector);
    function hanldeSubmitBuy(e){
        e.prevenDefault();
    }
    const totalPrice = myCart && ((sum , item) =>  sum + item.discoutedPrice , 0)
  return (
        <div id='ShoppingCart ' className={clxs(style.shoppingCart, {
            [style.shoppingCarton] :navcart,
        })}>
            <h3>Don hang cua tui</h3>
            <form onSubmit={hanldeSubmitBuy} className={style.sub}>
                <h4 className='totalBill'> Tong Gia Tien:{totalPrice}</h4>
            </form>
        </div>
  )
}


