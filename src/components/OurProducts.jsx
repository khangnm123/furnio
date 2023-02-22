import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './css/Our.css'
import Heart from './image/Heart.png'
import one from './image/Share.png'
import {addTocart} from '../redux/actions'
import { searchValSelector } from '../redux/selectors'
function OurProducts() {
        const dispatch = useDispatch();
        const searchValueSelect = useSelector(searchValSelector);
        const valInput = searchValueSelect;
        
        const [query , serQuery] = useState("");

        const [api , setApi] = useState([], 3);
        const [visible , setVisible] = useState(8);
        useEffect(() =>{
                (async function (){
                        let fetchApi = await fetch ("https://fe21-db.vercel.app/funiro");
                        let fetchChedApi = await fetchApi.json();
                        let results = fetchChedApi;
                        setApi(results);  
                })();
        },[])
        const showMoreItem = () =>{
                setVisible ((prevValue) => prevValue + 1)
                
        }


        const handleClick = (product) =>{
                product.amount = 1;
                dispatch(addTocart(product));
        }
        useEffect(() => {
                serQuery(valInput);
        },[valInput])
  return(
        
    <div className='product-list'>
        <h1>Our Product</h1>
        <div className="product-container">
            
        {api.slice(0 , visible).filter(item => item.name.toLowerCase().includes(query)).map((item => //tolowerCase biến chữ hoa thành chữ thường

                    <div className="product-content" key={item._id}>
                    <div className="product-image">
                            <img src={item.img} alt="" />
                    </div>
                    <div className="product-title">
                        <div className="product-h2" key={item._id}>
                                <h2>{item.name}</h2>
                        </div>
                        <div className="product-p">
                                <p>{item.description}</p>

                        </div>
                        <div className="product-price">
                                <p>Rp {item.price}</p>
                                <div className="product-saleoff">
                                <p><del>{item.discoutedPrice}</del></p>
                        </div>
                        </div>
                        <div className="product-sale">
                                <p>{item.discouter}%</p>
                        </div>
                        <div className="product-hover">
                        <div className="button-hover">
                                <button onClick={() => handleClick(item)}>Add to cart</button>
                        </div>
                        <div className="content__icon">
                                <div className="share">
                                        <img src={one} alt=""  width="20px"/>
                                        <p>Share</p>
                                </div>
                                <div className="like">
                                        <img src={Heart} alt='' width="20px"/>
                                        <p>Like</p>
                                </div>
                        </div>
                    </div>
                    </div>
            </div>
                ))}       
                <div className="product__button">
                        <button onClick={showMoreItem}>Show More</button>
                    </div>         
               
        </div>

    </div>
  )
}

export default OurProducts
