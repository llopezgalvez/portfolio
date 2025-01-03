import React from 'react';
import SkillBars from 'react-skillbars';
import { Navbar } from '../../components/navbar/Navbar';
import './Skills.css'

const skills = {
    frontend: [
        { type: 'HTML', level: 80, color: { bar: '#e34c26', title: { text: '#fff', background: '#e34c26' } } },
        { type: 'CSS', level: 70, color: { bar: '#2965f1', title: { text: '#fff', background: '#2965f1' } } },
        { type: 'React', level: 60, color: { bar: '#61dafb', title: { text: '#000', background: '#61dafb' } } },
        { type: 'React N.', level: 20, color: { bar: '#81a6d9', title: { text: '#000', background: '#81a6d9' } } },
    ],
    backend: [
        { type: 'Java', level: 80, color: { bar: '#9c9542', title: { text: '#fff', background: '#9c9542' } } },
        { type: 'JavaScript', level: 75, color: { bar: '#c0bf16', title: { text: '#fff', background: '#c0bf16' } } },
        { type: 'Spring B.', level: 40, color: { bar: '#6db33f', title: { text: '#fff', background: '#6db33f' } } },
    ],
    databases: [
        { type: 'MySQL', level: 90, color: { bar: '#8b4aaf', title: { text: '#fff', background: '#8b4aaf' } } },
        { type: 'PostgreSQL', level: 50, color: { bar: '#1eeaa3', title: { text: '#fff', background: '#1eeaa3' } } },
        { type: 'MongoDB', level: 80, color: { bar: '#47a248', title: { text: '#fff', background: '#47a248' } } },
    ],
    versionControl: [
        { type: 'Git', level: 85, color: { bar: '#f05032', title: { text: '#fff', background: '#f05032' } } },
        { type: 'GitHub', level: 85, color: { bar: '#333', title: { text: '#fff', background: '#333' } } },
    ]
}

export const Skills = () => {
    return (
        <>
            <Navbar />

            <div className='container container-skills'>
                <div className="contenedor-info-skills">
                    <div className="text-skills">
                        <h1 className="title-skills text-center">
                            HABILIDADES TÉCNICAS
                        </h1>
                        <p className="description-skills text-center">
                            Soy desarrollador con experiencia en frontend y backend, aplicando metodologías ágiles como Scrum para la gestión de proyectos. Uso herramientas como Jira y Trello para el control de tareas, y sigo la metodología Gitflow para mantener la organización y el seguimiento del código en equipo.
                        </p>
                    </div>
                    <div>
                        <h2 className='title-area'>BackEnd</h2>
                        <SkillBars skills={skills.backend} />
                        <h2 className='title-area'>FrontEnd</h2>
                        <SkillBars skills={skills.frontend} />
                        <h2 className='title-area'>Bases de datos</h2>
                        <SkillBars skills={skills.databases} />
                        <h2 className='title-area'>Control de versiones</h2>
                        <SkillBars skills={skills.versionControl} />
                    </div>
                </div>
            </div>
        </>
    )
}
