import React from 'react';
import "./Dogcart.css"
import { useState, useContext } from 'react';
import { CartContext } from '../../Contexts/cartContext';
const DogCart = (props) => {
    const {id, name, preed, price, discription, imageUrl} = props;
    const [isAdded, setAdded] = useState(false);
    const {addToCart, setTotal} = useContext(CartContext);
    const handleclick = ()=>{
        setAdded(true);
        const newItem ={
            name : name,
            price : price,
            imageUrl : imageUrl,
        };
        addToCart((item)=> [...item,newItem]);
        setTotal((total)=>(total += Number(price)));
    }
    return(
        <div>
            <>
                <section className='dogs'>
                    <div className='dogs-info'>
                        <p>{name}</p>
                        <p>{preed}</p>
                    </div>
                    <div className='dogs-img-container'>
                        <img className='dog-img' src={imageUrl} alt ={`picture of : ${name}`}/>
                    </div>
                    <div className='dogs-desc'>{discription}</div>
                    <div className='dogs-price'>{price}</div>
                    {
                        isAdded ? (
                            <button className='dogs-btn-disabled '>ADDED</button>
                            
                        ) :(
                            <button className='dogs-btn' onClick={handleclick}>ADD TO CART</button>
                        )
                    }
                    
                </section>
            </>
            
        </div>
    );
};

export default DogCart;