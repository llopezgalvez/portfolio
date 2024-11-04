import store1 from '../assets/imagesProjects/store1.png'
import store2 from '../assets/imagesProjects/store2.png'
import store3 from '../assets/imagesProjects/store3.png'
import store4 from '../assets/imagesProjects/store4.png'
import store5 from '../assets/imagesProjects/store5.png'
import store6 from '../assets/imagesProjects/store6.png'
import store7 from '../assets/imagesProjects/store7.png'
import opinion1 from '../assets/imagesProjects/opinion1.png'
import opinion2 from '../assets/imagesProjects/opinion2.png'
import opinion3 from '../assets/imagesProjects/opinion3.png'
import opinion4 from '../assets/imagesProjects/opinion4.png'
import company1 from '../assets/imagesProjects/company1.png'
import company2 from '../assets/imagesProjects/company2.png'
import company3 from '../assets/imagesProjects/company3.png'
import animals1 from '../assets/imagesProjects/animals1.png'
import animals2 from '../assets/imagesProjects/animals2.png'
import animals3 from '../assets/imagesProjects/animals3.png'
import animals4 from '../assets/imagesProjects/animals4.png'
import bugstack1 from "../assets/imagesProjects/bugstack1.png"
import bugstack2 from "../assets/imagesProjects/bugstack2.png"
import bugstack3 from "../assets/imagesProjects/bugstack3.png"
import bugstack4 from "../assets/imagesProjects/bugstack4.png"
import mayab1 from '../assets/imagesProjects/mayab1.png'
import mayab2 from '../assets/imagesProjects/mayab2.png'
import mayab3 from '../assets/imagesProjects/mayab3.png'
import mayab4 from '../assets/imagesProjects/mayab4.png'
import mayab5 from '../assets/imagesProjects/mayab5.png'
import mayab6 from '../assets/imagesProjects/mayab6.png'
import senna1 from '../assets/imagesProjects/senna1.png'
import senna2 from '../assets/imagesProjects/senna2.png'
import senna3 from '../assets/imagesProjects/senna3.png'
import senna4 from '../assets/imagesProjects/senna4.png'
import senna5 from '../assets/imagesProjects/senna5.png'
import dresscode1 from '../assets/imagesProjects/dresscode1.png'
import dresscode2 from '../assets/imagesProjects/dresscode2.png'
import dresscode3 from '../assets/imagesProjects/dresscode3.png'
import tonys1 from '../assets/imagesProjects/tonys1.png'
import almacenadora1 from '../assets/imagesProjects/almacenadora1.png'
import almacenadora2 from '../assets/imagesProjects/almacenadora2.png'
import velvet1 from '../assets/imagesProjects/velvet1.png'
import velvet2 from '../assets/imagesProjects/velvet2.png'

export default [
    {   
        id: '1',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbJsWfr6tGCDRHwz-SUG8NjohhIrpiSsWhVw&s',
        title: 'Gestor de opiniones',
        descripcion: 'Aplicación que permite a los usuarios compartir sus opiniones y debatir temas de interés, con un sistema de comentarios, similar a una red social.',
        repositori: 'https://github.com/llopezgalvez/OpinionManager.git',
        technologies: ['JavaScript', 'Express', 'MongoDB', 'NodeJS', 'Github'],
        images: [opinion1, opinion2, opinion3, opinion4],
        category: 'BackEnd',
        fecha: 'Marzo 2024',
        rol: 'Backend',
        slug: 'gestor-de-opiniones'
    },
    {
        id: '2',
        image: 'https://www.emprenderalia.com/wp-content/uploads/Crear-una-tienda-online-en-10-pasos-3-meses-y-sin-inversion.jpg',
        title: 'Tienda Online',
        descripcion: 'Plataforma de e-commerce especializada en ropa, con funciones como carrito de compras, gestión de usuarios y pagos seguros para una experiencia de compra completa.',
        repositori: 'https://github.com/llopezgalvez/OnlineStore.git',
        technologies: ['JavaScript', 'Express', 'MongoDB', 'NodeJS', 'Github'],
        images: [store1, store2, store3, store4, store5, store6, store7],
        category: 'BackEnd',
        fecha: 'Marzo 2024',
        rol: 'Backend',
        slug: 'store-online'
    },
    {
        id: '3',
        image: 'https://media.admagazine.com/photos/65b16818a35d203a72ec2f1c/16:9/w_2560%2Cc_limit/HKTVT_8438978059%2520(1).jpg',
        title: 'Velvet',
        descripcion: 'Aplicación similar a Trivago, diseñada para reservar hoteles, comparar opciones y facilitar la selección de alojamiento para los usuarios.',
        repositori: 'https://github.com/llopezgalvez/Velvet.git',
        technologies: ['JavaScript', 'Express', 'MongoDB', 'NodeJS', 'Github', 'Bootstrap', 'CSS', 'React'],
        images: [velvet1, velvet2],
        category: 'Web',
        fecha: 'Mayo 2024',
        rol: 'Full Stack',
        slug: 'gestor-de-hoteles'
    },
    {
        id: '4',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkWA_oQIZ1hWDNZ9wM55WzfVcRU1Slb0kBNQ&s',
        title: 'Mayab',
        descripcion: 'Sistema para la administración de citas y especialidades en hospitales, ofreciendo a los pacientes una forma rápida de agendar y consultar información médica.',
        repositori: 'https://github.com/PandillaMomera-6/Mayab',
        technologies: ['JavaScript', 'Express', 'MongoDB', 'NodeJS', 'Github', 'Bootstrap', 'CSS', 'React'],
        images: [mayab1, mayab2, mayab3, mayab4, mayab5, mayab6],
        category: 'Web y Móvil',
        fecha: 'Junio 2024',
        rol: 'Full Stack',
        slug: 'gestor-de-salud'
    },
    {
        id: '5',
        image: 'https://www.aicad.es/asset/img/2/blog-aicad-gestin-y-direccin-de-empresas.jpg',
        title: 'Gestor de empresas',
        descripcion: 'Aplicación para gestionar empresas, permitiendo llevar un control de sus datos y generar un archivo Excel con toda la información registrada.',
        repositori: 'https://github.com/llopez-2022064/GestorDeEmpresas/tree/master',
        technologies: ['JavaScript', 'Express', 'MongoDB', 'NodeJS', 'Github', 'Bootstrap', 'CSS', 'React'],
        images: [company1, company2, company3],
        category: 'BackEnd',
        fecha: 'Marzo 2024',
        rol: 'Backend',
        slug: 'gestor-de-empresas'
    },
    {
        id: '6',
        image: 'https://images.ctfassets.net/63bmaubptoky/dOFn7YASMuOtj7rc-RxDIxqIELosbz4WVCHtM4gG_oo/d41f285d2f03ba21a40e91a18cc7be41/Administrador-de-tareas-gratis-header.png',
        title: 'Gestor de tareas',
        descripcion: 'App para organizar y gestionar tareas diarias, con funcionalidades de listas de pendientes, prioridades y opciones de filtrado.',
        repositori: 'https://github.com/llopezgalvez/TaskManager.git',
        technologies: ['JavaScript', 'Express', 'MongoDB', 'NodeJS', 'Github', 'Bootstrap', 'CSS', 'React'],
        images: [almacenadora1, almacenadora2],
        category: 'Web',
        fecha: 'Mayo 2024',
        rol: 'Backend',
        slug: 'gestor-de-tareas'
    },
    {
        id: '7',
        image: 'https://cdn.prod.website-files.com/5f4f67c5950db17954dd4f52/5f5b7704da8b97990b5107fa_tipos-de-banco.webp',
        title: 'Senna',
        descripcion: 'Sistema de banca en línea que permite realizar transacciones, consultar saldos y administrar cuentas de usuario, enfocado en la seguridad y eficiencia.',
        repositori: 'https://github.com/llopezgalvez/Senna.git',
        technologies: ['JavaScript', 'Express', 'MongoDB', 'NodeJS', 'Github', 'Bootstrap', 'CSS', 'React'],
        images: [senna1, senna2, senna3, senna4, senna5],
        category: 'Web',
        fecha: 'Julio 2024',
        rol: 'Backend',
        slug: 'sistema-bancario'
    },
    {
        id: '8',
        image: 'https://eventscase.es/blog/wp-content/uploads/2022/07/%C2%BFque-es-un-software-de-gestion-de-eventos-eventscase-1200x630.jpg',
        title: 'Gestor de eventos',
        descripcion: 'Aplicación que facilita la organización de eventos, permitiendo registrar asistentes, gestionar presupuestos y generar reportes detallados.',
        repositori: 'https://github.com/llopezgalvez/EventManager.git',
        technologies: ['JavaScript', 'Express', 'MongoDB', 'NodeJS', 'Github', 'Bootstrap', 'CSS', 'React'],
        images: [tonys1],
        category: 'Aplicación de escritorio',
        fecha: 'Agosto 2023',
        rol: 'Full Stack',
        slug: 'gestor-de-eventos'
    },
    {
        id: '9',
        image: 'https://datascientest.com/en/files/2024/03/Stackoverflow-768x422-1.jpg',
        title: 'BugStack',
        descripcion: 'Plataforma de preguntas y respuestas para desarrolladores, con funcionalidades para compartir y solucionar problemas de programación, similar a StackOverflow.',
        repositori: 'http://portal-bugstack.s3-website-us-west-2.amazonaws.com/#/home',
        technologies: ['Spring Boot', 'PostgreSQL', 'Angular', 'Tailwindcss'],
        images: [bugstack1, bugstack2, bugstack3, bugstack4],
        category: 'Aplicación web',
        fecha: 'Octubre 2024',
        rol: 'Backend',
        slug: 'bugstack'
    },
    {
        id: '10',
        image: 'https://www.instalacionesanfra.com/wp-content/uploads/2016/01/tienda-de-ropa-1.jpg',
        title: 'DressCode',
        descripcion: 'Aplicación de compra de ropa en línea, centrada en ofrecer una interfaz moderna y fácil de usar, con opciones de filtrado y carrito de compras.',
        repositori: 'https://github.com/llopezgalvez/DressCode.git',
        technologies: ['JavaScript', 'Express', 'MongoDB', 'NodeJS', 'Github'],
        images: [dresscode1, dresscode2, dresscode3],
        category: 'Web',
        fecha: 'Octubre 2023',
        rol: 'Backend',
        slug: 'dresscode'
    }
]