import React from "react";
import './home.css'
import { AiFillGithub } from "react-icons/ai";
import { FiTwitter, FiYoutube } from "react-icons/fi";
import { TbArrowBigRightLines, TbChevronsDown } from "react-icons/tb";

const Home = () => {
    return (
        <section id='home' className='home section'>

            {/*Essa div só será visível em telas maiores*/}
            <div className="leftIcons">
                <div className="socials grid">
                    <a href="https://github.com" target='_blank'><AiFillGithub className='icon' /></a>
                    <a href="" target='_blank'><FiTwitter className='icon' /></a>
                    <a href="https://www.youtube.com" target='_blank'><FiYoutube className='icon' /></a>
                    <div className="line"></div>
                </div>
            </div>

            {/*Home Content*/}
            <div className="container homeContainer">
                <span className="introText">
                    Oi meu nome é
                </span>
                <h1 className='title'>
                    Celso Diehl
                </h1>
                <span className="subTitle">
                    Eu desenvolvo aplicativos e softwares escaláveis ​​baseados na web
                </span>
                <p className="homeParagraph">
                    A escrita de código requer padrões e estilos de codificação para atender à necessidade exata
                </p>
                <div className="lowerHomeSection">
                    <button className="contactBtn">
                        <a href="#contact" className="flex">Contato.: <TbArrowBigRightLines className='icon' /></a>
                    </button>

                    <div className="scrollDiv">
                        <a href="#about" className="flex"><h6 className="scroll">Role para baixo</h6><TbChevronsDown className='iconScroll' /></a>
                    </div>

                </div>
            </div>
            {/*div direita, com endereço de e-mail (também será visível apenas em uma tela maior)*/}

            <div className="rightEmail">
                <div>
                    <div className="emailAdress">
                        <a href="https://mailto:celsodiehl@gmail.com" target='_blank'>celsodiehl@gmail.com</a>
                    </div>
                   <div className="line"></div>
                </div>
            </div>
        </section>
    )
}
export default Home