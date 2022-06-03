import React from 'react';
import DogCart from './DogCart';
import "./Dogcart.css"

const DogPage = (props) => {
    const {allDogs} = props;
    return (
        <div>
            <>
                <section className='dogs-container'>
                    {allDogs.map((dogs)=>{
                        return(
                            
                                <div key={dogs.id} >
                                    <DogCart name = {dogs.name} preed = {dogs.preed} price = {dogs.price} discription = {dogs.discription} imageUrl = {dogs.imageUrl} />
                                </div>


                                
                            
                        )
                    })}
                </section>
            </>
        </div>
    );
};

export default DogPage;