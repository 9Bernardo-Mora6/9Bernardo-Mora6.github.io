import React from 'react';
import Header from '../Header/Header';
import styled from 'styled-components';
import Footer from '../Footer/Footer';

const About = () => {
    return (
        <div className='App'>
           
            <AboutContent>
                
                    <h2>Nosotros</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita est explicabo rem a mollitia doloremque reprehenderit fugit, itaque qui nemo amet. Asperiores magni consequuntur quis voluptatum repudiandae quia! Quis sit inventore optio quo sint officiis aut itaque facilis incidunt odit.</p>
                    <h4>Origenes</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita est explicabo rem a. </p>
                    <h4>Locales</h4> 
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>dolor sit amet.</p>
                    <p>Lorem ipsum amet.</p>
            </AboutContent>
          
        </div>
    );
}

export default About;

const AboutContent = styled.div`
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 3rem;
    h2{
        border-bottom:  solid  2px ;
        margin-bottom: 2rem;
    }
    h4{
        margin: 1rem;
        border-bottom: ridge 3px;
        text-align: initial;
    }
   
`