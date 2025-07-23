import React from "react";
import './about.css'
import { TbCloudDownload } from "react-icons/tb";
import img from '../../Assets/cd.jpg'

const About = () => {
    return (
        <section id='about' className='about section container'>

            <div className="sectionTitle">
                <span className="titleNumber"></span>
                <h5 className="titleText">Sobre Mim
                    <div className="underline"><span></span></div>
                </h5>
            </div>
            
            <div className="sectionContent grid">
                <div className="textSection">
                    <h4> 
                    Desenvolver software é uma carreira desafiadora e apaixonante, eu faço trabalhos como programador já faz algum tempo, durante os anos criei softwares<br/>
                     para os mais diversos fins e mercados, criei um aplicativo para clinicas de saúde estarem enviando seus arquivos em XML para a ANS dos  procedimentos<br/>
                     realizados do mês, APIs e serviços, e por ai vai. Minha motivação como programador é resolver problemas interessantes ao mesmo tempo que contribuo para<br/>
                     tornar processos mais eficientes. Hoje meu foco esta em desenvolver para a nuvem, criando serviços, tecnologias e integrando sistemas assim ajudando meus clientes a diminuir custos.
                    </h4>
                    <div className="aboutBtn">
                        <a href="CVCelso_2024.pdf" download="{CVCelso_2024.pdf}" className="flex">Download CV <TbCloudDownload className='icon' /></a>
                    </div>
                </div>
                <div className="aboutImgDiv">
                    <img src={img} alt="Celso Diehl" className="aboutImg" />
                </div>
            </div>
        </section>
    )
}
export default About