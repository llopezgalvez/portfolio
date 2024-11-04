import React from 'react'
import projects from '../../data/projects';
import './Projects.css'
import { Navbar } from './../../components/navbar/Navbar';
import { Link } from 'react-router-dom';
import { Github, Info } from 'lucide-react';

export const Projects = () => {
    return (
        <>
            <Navbar />

            <div className="container container-projects">
                <div className="text-projects mt-3">
                    <h1 className='text-center'>PROYECTOS</h1>
                    <p className='description-projects'>En esta sección encontrarás algunos de los proyectos en los que he trabajado, tanto de manera individual como en equipo. Cada proyecto representa una oportunidad de aprendizaje y desarrollo, aplicando diferentes tecnologías y metodologías ágiles para llevar las ideas a la realidad. Los proyectos grupales fueron fundamentales para fortalecer mi capacidad de trabajo en equipo, colaboración y adaptación, cualidades que enriquecen cada desarrollo y aportan un enfoque integral a las soluciones.</p>
                </div>
                <div className="row">
                    {projects.map(project => (
                        <div className='col p-3 d-flex justify-content-center'>
                            <div className="card card-project" key={project.id}>
                                <img src={project.image} className="card-img-top img-project" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title title-project">{project.title}</h5>
                                    <div className="container-btns">
                                        <Link to={`/project/${project.slug}`} className='btn btn-success btn-detalle'>
                                            <Info/> Detalles
                                        </Link>
                                        <a href={project.repositori} className="btn btn-primary btn-repositorio">
                                            <Github/> Repositorio
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
