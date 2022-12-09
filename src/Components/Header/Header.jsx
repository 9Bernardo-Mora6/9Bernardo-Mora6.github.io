
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
// import './Header.css'
import styled from 'styled-components'
import BurgerButton from '../Home/BurgerButton/BurgerButton';
import Svg from './Svg/Svg';


const Header = () => {

    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
    }
    return (

        <header className='header'>
            <Navbar>
                <div>
                    <NavLink to='/'>
                        <img className='logo' src="/Assets/logo.png" alt="logo" />
                    </NavLink>
                </div>
                <ul className={`links ${clicked ? 'active' : ''}`}>
                    <NavLink className='navLink' to='/'>Inicio</NavLink>
                    <NavLink className='navLink' to='/About'>Nosotros</NavLink>
                    <NavLink className='navLink' to='/Contact'>Contacto</NavLink>
                </ul>
                <div className='signContainer'>
                    <NavLink to='/SignIn'>Iniciar Sesion</NavLink>
                    <p>/</p>
                    <NavLink to='/SignUp'>Registrate</NavLink>
                </div>
                <div className='burguer'>
                    <BurgerButton
                        clicked={clicked}
                        handleClick={handleClick} />
                </div>
            </Navbar>



            <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
        </header>
    );
}

export default Header;

const Navbar = styled.nav`
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0;
        border: none;
        background-color:  rgba(235, 166, 55, 0.733);
        overflow: hidden;
    
    .logo{
        width: 50px;
        padding: 10px;
        margin-left: 10px;
        transition: width .5s;

        :hover{
            width: 60px;
        }
    }

    .signContainer{
        display: flex;
        margin: 0;
        a{
            font-weight: bold;
            color: black;
            text-decoration: none;
            padding-right: 0.5rem;
            padding-left: 0.5rem;
        }
    }

    .links {
        /* a{
            margin-right: 15px;
            text-decoration: none;
            font-weight: bold;
            font-size: 20px;
            color: inherit;
            border-radius: 12px;
            transition: .6s ease; 

           :hover{
                background-color: black ;
                color: aliceblue;
                padding: 5px;
           }
        } */
        padding: 15px;
        overflow: hidden;
        @media(max-width: 768px){
            position: absolute;
            top: -1000px;
            right: -1000px;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
            transition: .8s ease;
        }
    }
    .links.active{
        width: 100%;
        display: block;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 15%;
        left: 15%;
        right: 0;
        text-align: center;
        z-index: 1;
        a{
            color: white;
            display: block;
            margin-bottom: 1rem;
            
        }
       
    }
    .navLink{
        margin-right: 15px;
        text-decoration: none;
        font-weight: bold;
        font-size: 20px;
        color: inherit;
        border-radius: 12px;
        transition: .6s ease; 
        overflow: hidden;

        :hover{
             background-color: #cc9600 ;
             color: aliceblue;
             padding: 5px;
        }

        
    }
    

   .burguer{
    @media(min-width: 768px){
        display: none;
    }
    z-index: 1;
   }
`
const BgDiv = styled.div`
position: absolute;
background-color:  rgba(157, 111, 36, 0.942);
right: -1000px;
top: -1000px;
transition: all .6s ease;
width: 100%;
height: 70%;
&.active{
    border-radius: 0 0 0 100%;
    top: 0;
    right: 0;
}
`
