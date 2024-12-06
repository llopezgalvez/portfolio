import React from 'react'
import habilidades from '../../assets/images/habilidades-blandas.png'
import personalidad from '../../assets/images/personalidad.png'
import educacion from '../../assets/images/educacion.png'
import experiencia from '../../assets/images/experiencia.png'
import profile from '../../assets/imagesProjects/perfil-remove.png'
import { Navbar } from '../../components/navbar/Navbar'
import './About.css'

export const About = () => {
    return (
        <>
            <Navbar />

            <div className="container my-4 container-about">
                <div className="container-cards">
                    <div>
                        <div className="card card-info-me text-center p-3 d-flex justify-content-center align-items-center">
                            <img className='img-info-me mb-2' src={profile} alt="" />
                            <h2 className='mb-3' id='title-datos-personales'>Datos Personales</h2>
                            <p><strong>Nombre:</strong> Lester René López Gálvez</p>
                            <p><strong>Teléfono:</strong> 4206 6209</p>
                            <p><strong>Correo:</strong> lopezgalvezlester@gmail.com</p>
                            <p><strong>Edad:</strong> 19 años</p>
                            <p><strong>Localidad:</strong> Ciudad de Guatemala, Villa Nueva</p>
                            <a className='btn btn-success mt-3' href="/contact">Contáctame</a>
                        </div>
                    </div>
                    <div className="cards-about">
                        <div className="card card-info d-flex justify-content-center align-items-center text-center p-3">
                            <img className='img-info' src={habilidades} alt="habilidades blandas" />
                            <h2 className='mb-3' id='title-habilidades-blandas'>Habilidades Blandas</h2>
                            <ul className='list-unstyled'>
                                <li>Trabajo en equipo</li>
                                <li>Comunicación efectiva</li>
                                <li>Adaptabilidad</li>
                                <li>Resolución de problemas</li>
                                <li>Proactividad</li>
                                <li>Capacidad de aprendizaje</li>
                            </ul>
                        </div>
                        <div className="card card-info text-center d-flex align-items-center p-1">
                            <img className='img-info' src={educacion} alt="Educación" />
                            <h2 id='title-educacion'>Educación</h2>
                            <p>Perito en Computación | 2022 - 2024</p>
                            <p>Estudié en Fundación Kinal, completé tres años de formación como Perito en Computación, donde aprendí programación, bases de datos y desarrollo web. También adquirí experiencia práctica en Java y metodologías de trabajo en equipo.</p>
                        </div>
                        <div className="card card-info text-center d-flex align-items-center ">
                            <img className='img-info' src={experiencia} alt="Experiencia" />
                            <h2 id='title-experiencia'>Experiencia</h2>
                            <p>En <a href="https://is4tech.com/"><strong>IS4TECH</strong></a>, participé en el desarrollo de una aplicación web similar a StackOverflow, utilizando Java Spring Boot y PostgreSQL. Esta experiencia en equipo mejoró mis habilidades de comunicación y colaboración, además de permitirme aplicar metodologías ágiles como Gitflow y Scrum.</p>
                        </div>
                        <div className="card card-info text-center d-flex justify-content-center align-items-center" id='card-personalidad'>
                            <img className='img-info' src={personalidad} alt="Personalidad" />
                            <h2 id='title-personalidad'>Personalidad</h2>
                            <p>Soy una persona proactiva y entusiasta, siempre dispuesto a aprender y enfrentar nuevos desafíos. Me considero un buen comunicador, lo que me permite trabajar de manera efectiva en equipo y construir relaciones sólidas con mis compañeros.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
