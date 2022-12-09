import React from 'react';
import "./Footer.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faInstagramSquare, faSquareInstagram, faWhatsapp, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer >
            <div className='contenedorFooter'>
                <div className='fila'>

                    {/* column1 */}
                    <div className='columna'>
                        <h4>Contacto</h4>
                        <ul className='lista'>
                            <li><FontAwesomeIcon icon={faWhatsapp}/>11-6123-5782</li>
                            <li><FontAwesomeIcon icon={faFacebook}/><a href="#f">@_mayo&papa</a></li>
                            <li><FontAwesomeIcon icon={faSquareInstagram}/> <a href="#i">@_mayo&papa</a></li>
                        </ul>
                    </div>

                    {/* column2 */}
                    <div className='columna'>
                        <h4>Locales</h4>
                        <ul className='lista'>
                            <li>Fulano 32</li>
                            <li>Mengano 64</li>
                            <li>Zutano 1042</li>
                        </ul>
                    </div>

                    {/* column3 */}
                    <div className='columna'>
                        <ul className='lista'>
                            <li>Terminos y Condiciones</li>
                            <li>Cookie Policy</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                </div>
                
                {/* <hr /> */}

                <div className='version'><p>© 2022 BeatStars, Inc. • Version: 1.0.0 | Todos los derechos resercados</p></div>
                    
            </div>
        </footer>
    );
}

export default Footer;
