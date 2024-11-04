import React from 'react';
import './Navbar.css';
import { Code2, FolderCode, Home, Mail, User2 } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export const Navbar = () => {

    const location = useLocation()

    return (
        <nav className="navbar navbar-expand-lg bg-transparent">
            <div className="container-fluid">
                <h4 className="name-nav me-auto">
                    <a href="/">
                        <Code2 size={40}/>
                    </a>
                </h4>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} href="/">
                                <Home className="nav-icon" size={20} /> Inicio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} href="/about">
                                <User2 className="nav-icon" size={20} /> Sobre mí
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${location.pathname === '/skills' ? 'active' : ''}`} href="/skills">
                                <Code2 className="nav-icon" size={20} /> Habilidades
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`} href="/projects">
                                <FolderCode className="nav-icon" size={20} /> Proyectos
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} href="/contact">
                                <Mail className="nav-icon" size={20} /> Contacto
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}