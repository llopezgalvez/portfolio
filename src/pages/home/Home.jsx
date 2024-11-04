import React from 'react'
import photo from '../../assets/images/image1.png'
import instagram from '../../assets/images/instagram.png'
import linkedin from '../../assets/images/linkedin.png'
import whatsApp from '../../assets/images/whatsapp.png'
import facebook from "../../assets/images/facebook.png"
import github from "../../assets/images/github.png"
import { Navbar } from '../../components/navbar/Navbar'
import { Linkedin, Github, Instagram, Facebook } from 'lucide-react';
import './Home.css'

export const Home = () => {
  return (
    <>
      <Navbar />

      <div className='container home'>
        <div className='home-text-container'>
          <div className='container-titles'>
            <h1 className='home-title'>Hola, Soy Lester López</h1>
            <h4 className='home-subtitle'>BackEnd Developer</h4>
          </div>
          <div className='home-description'>
            <p className='home-text-description'>¡Hola y bienvenido! En este espacio, encontrarás una muestra de mi trabajo como desarrollador. Estoy aquí para transformar ideas en realidades digitales. <strong id='strong-home'>¡Vamos a crear algo increíble!</strong></p>
          </div>
          <div className='home-buttons'>
            <a href='/projects' className='btn btn-info btn-projects'>Proyectos</a>
            <a href='/about' className='btn btn-outline-light btn-about'>Sobre mí</a>
          </div>
          <div className='home-redes'>
            {/* <a href="https://www.instagram.com/lesterlopez11/profilecard/" target='_blank' rel="noopener noreferrer">
              <Instagram size={40} className='icon'/>
            </a> */}
            <a href="https://www.linkedin.com/in/lester-lópez-7a594331a" target='_blank' rel="noopener noreferrer">
              <Linkedin size={40} className='icon'/>
            </a>
            {/* <a href="https://www.facebook.com/share/1H5m4x6TFtjB7Cyk/"target='_blank' rel="noopener noreferrer">
              <Facebook size={40} className='icon' />
            </a> */}
            <a href="https://github.com/llopezgalvez" target='_blank' rel="noopener noreferrer">
              <Github size={40} className='icon'/>
            </a>
          </div>
        </div>
        <div className='home-img-container'>
          <img className='img-profile d-flex justify-content-center align-items-center' src={photo} alt="my photo of profile" />
        </div>
      </div>
    </>
  )
}