import React from 'react'
import { Navbar } from '../../components/navbar/Navbar'
import { Linkedin, Github, Mail, File } from 'lucide-react'
import cv from '../../assets/CV.pdf'
import profile from '../../assets/imagesProjects/perfil-remove.png'
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
          <div className="home-redes">
            <a href="https://www.linkedin.com/in/lester-lópez-7a594331a" target='_blank' rel="noopener noreferrer" className="icon-container">
              <Linkedin size={40} />
              <span className="icon-text">LinkedIn</span>
            </a>
            <a href="https://github.com/llopezgalvez" target='_blank' rel="noopener noreferrer" className="icon-container">
              <Github size={40} />
              <span className="icon-text">GitHub</span>
            </a>
            <a href="mailto:lopezgalvezlester@gmail.com" className="icon-container">
              <Mail size={40} />
              <span className="icon-text">Email</span>
            </a>
            <a href={cv} download="LesterLópez-CV.pdf" className="icon-container">
              <File size={40} />
              <span className="icon-text">CV</span>
            </a>
          </div>

        </div>
        <div className='home-img-container'>
          <img className='img-profile d-flex justify-content-center align-items-center' src={profile} alt="my photo of profile" />
        </div>
      </div>
    </>
  )
}