import React from 'react';
import './Navbar.css';
import { Code2, FolderCode, Home, Mail, User2 } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Navbar = () => {

    const location = useLocation()

    return (
        <nav className="navbar navbar-expand-lg bg-transparent">
            <div className="container-fluid">
                <h4 className="name-nav me-auto">
                    <Link to="/">
                        <Code2 size={40} />
                    </Link>
                </h4>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto gap-1">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">
                                <Home className="nav-icon" size={20} /> Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">
                                <User2 className="nav-icon" size={20} /> Sobre mí
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/skills' ? 'active' : ''}`} to="/skills">
                                <Code2 className="nav-icon" size={20} /> Habilidades
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`} to="/projects">
                                <FolderCode className="nav-icon" size={20} /> Proyectos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact">
                                <Mail className="nav-icon" size={20} /> Contacto
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}