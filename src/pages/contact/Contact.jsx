import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import correo from "../../assets/images/correo.png"
import telefono from "../../assets/images/telefono.png"
import ubicacion from "../../assets/images/ubicacion.png"
import imgContact from "../../assets/images/contact-img.png"
import { Linkedin, Github, Mail } from 'lucide-react';
import './Contact.css'
import { Navbar } from './../../components/navbar/Navbar';

export const Contact = () => {
    const formRef = useRef();
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_msui2cc', 'template_jwdmrsi', formRef.current, 'XleiVHFpPArZxWCHb')
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                setMessage('¡Mensaje enviado correctamente!');
            }, (error) => {
                console.log('Failed to send email:', error.text);
                setMessage('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
            });
    };

    const clearForm = () => {
        formRef.current.reset()
        setMessage('')
    }

    return (
        <>
            <Navbar />

            <div className='container container-contact'>
                <div className="form">
                    <form ref={formRef} className='form-email' onSubmit={sendEmail}>
                        <h2 className='title-work text-center'>¡Trabajemos juntos!</h2>
                        <p className='description-contact'>Gracias por tu interés en contactarte conmigo. Valoro tu interés en conocer más sobre mi experiencia y capacidades. Por favor, deja tus datos y me pondré en contacto contigo lo antes posible.</p>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nombre</label>
                            <input type="text" autoFocus className="form-control" id="name" name="user_name" placeholder="Rodrigo Gálvez" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" name="user_email" placeholder="rgalvez@gmail.com" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Mensaje</label>
                            <textarea className="form-control" id="message" name="message" rows="5" placeholder='Cuéntame sobre tu proyecto...' required></textarea>
                        </div>
                        <div className="buttons">
                            <button type="submit" className="button-send btn btn-info">Enviar</button>
                            <button type="submit" className="button-cancel btn btn-outline-danger" onClick={clearForm}>Cancelar</button>
                        </div>
                    </form>
                    {message && <div className="alert alert-info mt-3">{message}</div>}
                </div>
                <div className="data">
                    <img className='img-contact' src={imgContact} alt="" />
                    <div className="information">
                        <div className="info-img">
                            <img className='img-information' src={telefono} alt="" />
                            <p className='info-text'>4206-6209</p>
                        </div>
                        <div className="info-img">
                            <img className='img-information' src={correo} alt="" />
                            <p className='info-text'>lopezgalvezlester@gmail.com</p>
                        </div>
                        <div className="info-img">
                            <img className='img-information' src={ubicacion} alt="" />
                            <p className='info-text'>Ciudad de Guatemala, Villa Nueva</p>
                        </div>
                    </div>
                    <div className="redes d-flex justify-content-center">
                        <a href="mailto:lopezgalvezlester@gmail.com">
                            <Mail size={40} className='icon' />
                        </a>
                        <a href="https://www.linkedin.com/in/lester-lópez-7a594331a" target='_blank' rel="noopener noreferrer">
                            <Linkedin size={40} className='icon' />
                        </a>
                        <a href="https://github.com/llopezgalvez" target='_blank' rel="noopener noreferrer">
                            <Github size={40} className='icon' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
