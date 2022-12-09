import React from 'react';
import "./Cards.css"

const Cards = (props) => {
    return (

        <div className='card'>

            <section >
                <div className='contenedorImg' >
                    <img
                        className='imgProduct'
                        src={`/Assets/${props.img}`} alt="imagen de producto" />
                </div>
                <p className='cardDescription'>{props.descripcion}</p>
            </section>


            <div>
                <h2 className='' >{props.name}</h2>
                <h3 className='' >$ {props.price}</h3>
            </div>

            <span>{props.ammount}</span>

        </div>

    );
}

export default Cards;
