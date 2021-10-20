import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';
import Imagotipo from '../../../assets/images/imagotipo.svg';

function Header() {
    const [isFixed, setFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentPositionY = window.pageYOffset;

            if (currentPositionY > 35) {
                setFixed(true);
            } else {
                setFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header>
            <div className="headerTop">
                <div className="container">
                    <div className="left">
                        <ul>
                            <li>
                                <Link to={{ pathname: 'https://goo.gl/maps/omNVwnDxGMC4ZnPo6' }} target="_blank">
                                    <i className="fas fa-map-marker-alt" />
                                    Av. Juan B. Justo 4287
                                </Link>
                            </li>
                            <li>
                                <i className="fas fa-phone-alt" />
                                472-2408
                            </li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li>
                                <Link to={{ pathname: 'https://www.facebook.com/EEST5MDP' }} target="_blank">
                                    <i className="fab fa-facebook-square" />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={{ pathname: 'https://instagram.com/tecnicacinco_mdq?utm_medium=copy_link' }}
                                    target="_blank"
                                >
                                    <i className="fab fa-instagram-square" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={`headerBottom ${isFixed ? 'active' : ''}`}>
                <div className="container">
                    <div className="logo">
                        <Link to="/">
                            <img src={Imagotipo} alt="EEST Nº5 Amancio Williams" />
                        </Link>
                    </div>
                    <nav>
                        <ul>
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/">Novedades</Link></li>
                            <li><Link to="/">Inscripciones</Link></li>
                            <li><Link to="/">Egresados</Link></li>
                            <li><Link to="/">Sobre nosotros</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
