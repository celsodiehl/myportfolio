import React from "react";
import './projects.css'
import { AiFillYoutube } from "react-icons/ai";
//images =====
import img from '../../Assets/tiss.jpg'
import img2 from '../../Assets/desk.jpg'
import img3 from '../../Assets/myport.jpg'
import img4 from '../../Assets/nfe.jpg'
import { FiGithub } from "react-icons/fi";


const data = [
    {
        id: 1,
        image: img,
        demo: 'https://www.youtube.com/watch?v=Ei9bZj-EG8o',
        liveLink: '',
        github: '',
        title: 'Sistema de Envio de XML',
        desc: 'Sistema de Cadastro de Pacientes, médicos, procedimentos, e envio de xml para a ANS ',
        tech1: 'Java',
        tech2: 'JPA',
        tech3: 'Hibernate',
        tech4: 'PostgreSQL',
    },

    {
        id: 2,
        image: img2,
        demo: 'https://www.youtube.com/watch?v=Ei9bZj-EG8o',
        liveLink: '',
        github: '',
        title: 'Gerenciador de Vendas Desktop',
        desc: 'FrontEnd de sistema de vendas em geral',
        tech1: 'Java',
        tech2: 'JPA',
        tech3: 'Hibernate',
        tech4: 'PostgreSQL',
    },

    {
        id: 3,
        image: img3,
        demo: 'https://www.youtube.com/watch?v=Ei9bZj-EG8o',
        liveLink: '',
        github: '',
        title: 'Portfólio web',
        desc: 'Minha página de Portfólio web que desenvolvi totalmente com React',
        tech1: 'React',
        tech2: 'HTML',
        tech3: 'CSS',
        tech4: 'Sass',
    },

    {
        id: 4,
        image: img4,
        demo: 'https://www.youtube.com/watch?v=Ei9bZj-EG8o',
        liveLink: '',
        github: '',
        title: 'Sistema de Vendas c/ NF-e Web',
        desc: 'Sistema Completo de Vendas, Cadastros web p/ emissão e impressão de NF-e, Parceria',
        tech1: 'HTML',
        tech2: 'Next.js',
        tech3: 'Sprigboot',
        tech4: 'Java...',
    }
]

const Projects = () => {
    return (
        <section id='projects' className='projects container section'>

            <div
                className="sectionTitle">
                <span className="titleNumber"></span>
                <h5 className="titleText">Projetos
                    <div className="underline"><span></span></div>
                </h5>
            </div>

            <div className="projectContainer grid">
                {
                    data.map(({ id, github, image, liveLink, desc, demo, title, tech1, tech2, tech3, tech4 }) => {
                        return (
                            <div key={id} className='singleProject'>

                                <div className="externalLinks flex">
                                    <div className="youtubeIcon">
                                        <a href={demo} target='_blank' rel="noopener noreferrer">
                                            <AiFillYoutube className='icon' />
                                        </a>
                                    </div>
                                    <div className="gitHubIcon">
                                        <a href={github} target='_blank' rel="noopener noreferrer">
                                            <FiGithub className='icon' />
                                        </a>
                                    </div>
                                </div>

                                <div className="imgDiv">
                                    <a href={liveLink} target='_blank'>
                                        <img src={image} alt={title} />
                                    </a>
                                </div>

                                <div className="projectTitle">
                                    <h3>{title}</h3>
                                </div>

                                <div className="desc">
                                    {desc}
                                </div>

                                <div className="technologies flex">
                                    <small>{tech1}</small>
                                    <small>{tech2}</small>
                                    <small>{tech3}</small>
                                    <small>{tech4}</small>
                                </div>
                            </div>
                        )
                    })

                }
            </div>
        </section>
    )
}
export default Projects