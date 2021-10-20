import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';
import NoticeImage1 from '../../assets/images/notice1.jpg';
import NoticeImage2 from '../../assets/images/notice2.jpg';
import NoticeImage3 from '../../assets/images/notice3.jpg';
import NoticeImage4 from '../../assets/images/notice4.jpg';
import Banner from '../../assets/images/nav.jpg';

function Home() {
    const slideshow = useRef(null);

    console.log(slideshow);

    return (
        <>
            <div className="carousel">
                {/* <div className="container">
                    <div className="slide">
                        <h1>Lorem ipsum dolor sit</h1>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Molestias nulla tenetur pariatur magnam doloremque natus autem maxime
                            ullam? Dicta, fuga reprehenderit asperiores beatae cum debitis!
                        </p>
                        <button type="button">Buenas</button>
                    </div>
                </div> */}
                <div className="slideshow" ref={slideshow}>
                    <div className="slide">
                        <img src={Banner} alt="Escuela Tecnica Nº5" />
                    </div>
                </div>

                <div className="controls">
                    <button type="button">
                        <i className="fas fa-chevron-left" />
                    </button>
                    <button type="button">
                        <i className="fas fa-chevron-right" />
                    </button>
                </div>
                <div className="overlay" />
            </div>

            <div className="bottomBanner">
                <div className="container">
                    <div className="row">
                        <div className="card">
                            <h3>Inscripciones</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Nesciunt, in eligendi ullam sapiente odio, omnis aspernatur
                            </p>
                        </div>
                        <div className="card">
                            <h3>Inscripciones</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Nesciunt, in eligendi ullam sapiente odio, omnis aspernatur
                            </p>
                        </div>
                        <div className="card">
                            <h3>Inscripciones</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Nesciunt, in eligendi ullam sapiente odio, omnis aspernatur
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section" id="sec1">
                <div className="container">
                    <div className="row">
                        <h2 className="title">
                            Ultimas novedades y eventos
                        </h2>
                        <div className="card">
                            <img src={NoticeImage1} alt="" className="left-image" />
                            <div className="body-card">
                                <h3>Lorem ipsum dolor sit</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Nesciunt, in eligendi ullam sapiente odio, omnis aspernatur
                                </p>
                                <Link to="/">Leer más</Link>
                            </div>
                        </div>
                        <div className="card">
                            <img src={NoticeImage2} alt="" className="left-image" />
                            <div className="body-card">
                                <h3>consectetur adipisicing elit</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Nesciunt, in eligendi ullam sapiente odio, omnis aspernatur
                                </p>
                                <Link to="/">Leer más</Link>
                            </div>
                        </div>
                        <div className="card">
                            <img src={NoticeImage3} alt="" className="left-image" />
                            <div className="body-card">
                                <h3>ullam sapiente odio, omnis</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Nesciunt, in eligendi ullam sapiente odio, omnis aspernatur
                                </p>
                                <Link to="/">Leer más</Link>
                            </div>
                        </div>
                        <div className="card">
                            <img src={NoticeImage4} alt="" className="left-image" />
                            <div className="body-card">
                                <h3>Nesciunt, in eligendi ullam sapiente</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Nesciunt, in eligendi ullam sapiente odio, omnis aspernatur
                                </p>
                                <Link to="/">Leer más</Link>
                            </div>
                        </div>
                        <div className="footerSection">
                            <button type="button">Ver más noticias</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
