import React from 'react'
import projects from '../../data/projects';
import { Navbar } from '../navbar/Navbar';
import atras from '../../assets/images/atras.png'
import './ProjectDetails.css'
import { useParams } from 'react-router-dom'
import { GithubIcon, Info } from 'lucide-react';
import { Chrono } from "react-chrono"

export const ProjectDetails = () => {

  const { slug } = useParams()

  const project = projects.find(p => p.slug === slug)
  const tecno = project.technologies.join(', ')

  const items = [
    {
      cardTitle: "Descripción",
      cardDetailedText: project.descripcion,
    },
    {
      cardTitle: "Tecnologías",
      cardDetailedText: project.technologies
    },
    {
      cardTitle: "Detalles",
      cardDetailedText: 'Categoria: ' + project.category + '\nFecha: ' + project.fecha + '\nRol: ' + project.rol
    }
  ]

  return (
    <>
      <Navbar />

      <div className="container">
        <a href="/projects">
          <img className='img-back' src={atras} alt="" />
        </a>
        {project ? (
          <div className="project-info">
            <div className="carrusel">
              <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  {project.images.map((image, index) => (
                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                      <img src={image} className="d-block w-100 images-project" alt={`Imagen ${index + 1}`} />
                    </div>
                  ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="info">
              <h1 className='title-prject'>{project.title}</h1>
              <div >
                <Chrono
                  items={items} mode="VERTICAL"
                  theme={{
                    primary: '#5FC65F',
                    secondary: '#5FC65F',
                    cardBgColor: '#1D2432',
                    titleColor: '#000',
                    titleColorActive: '#5FC65F',
                  }}
                  fontSizes={{
                    cardText: '0.8rem',
                    cardTitle: '1.3em',
                    title: '1rem',
                  }}
                  classNames={{
                    cardText: 'my-card-text'
                  }}
                />
              </div>
              <div className="container-button m-4">
                <a className='btn btn-success btn-github' href={project.repositori}>
                  <GithubIcon /> Repositorio
                </a>
              </div>
            </div>
          </div>
        ) : (
          <h1>Proyecto no encontrado</h1>
        )}
      </div>
    </>
  )
}

