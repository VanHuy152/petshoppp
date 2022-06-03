import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../Contexts/cartContext';
import "./Cart.css";

const Cart = () => {
    const {myCart, total, addToCart,setTotal} = useContext(CartContext);
    const navigate = useNavigate();
    const handelCheckout = () =>{
        addToCart([{}]);
        setTotal(0);

    }
    const handleHome = ()=>{
        navigate("/");
    }
    return (
        <>
            <section className='cart-container'>
                <div className='cart-header'>
                    Checkout:
                </div>
                <div className='cart-items'>
                    {myCart.slice(1).map((item)=>{
                        return(
                        
                                 <div className='cart-item'>
                                <img src={item.imageUrl} className='cart-item-img'/>
                                {item.name} : {item.price} $
                                
                                </div>
                               
                            
                           
                            
                        )
                    })}
                    <div className='cart-total'>TOTAL: {total} $</div>
                </div>
                <button className='cart-checkout' onClick={handelCheckout}>DONE</button>
                <button className='cart-gohome' onClick={handleHome}>Go Back Home</button>
            </section>
        </>
    );
};

export default Cart;