import React from 'react';
import ProductsData from "../../../Data/Productos"
import Cards from '../Cards/Cards';
import './Cards-Section.css'

const CardsSection = () => {
    return (
        <div className='cardSection'>

            {ProductsData.map(products => (
                <Cards 
                    className="containerCard"
                    img={products.img}
                    key={products.id}
                    name={products.name}
                    price={products.price}
                    ammount={products.ammount}
                    descripcion={"Lorem, ipsum dolor sit amet consectetur adipisicing elit."} />

            ))}

        </div>
    );
}

export default CardsSection;

