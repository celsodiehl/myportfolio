import React, { useState } from "react";
import './navbar.css'
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
    //code to toggle an and off the navbar at smail width
    const [active, setActive] = useState('navBar')

    //this will bring in the navbar from the top
    const showNavBar = () => {
        setActive('navBar activeNavBar')
    }

    //this will hide the navbar
    const removeNavBar = () => {
        setActive('navBar')
    }

    //code statement to add background color
    const [activeHeader, setActiveHeader] = useState('header')
    const addBg = () => {
        if(window.scrollY >= 10){
            setActiveHeader('header activeHeader')
        }else{
            setActiveHeader('header')
        }
    }
    window.addEventListener('scroll', addBg)

    return (
        <header className={activeHeader}>
            <div className="logoDiv">
                <h1 className="logo"><a href="#home">Celso.</a></h1>
            </div>

            <div className={active}>
                <ul onClick={removeNavBar} className="navLists">
                    <li className="navItem">
                        <a href="#about"
                            className="navLink">
                            <span className='headerNumber'></span>Sobre</a>
                    </li>
                    <li className="navItem">
                        <a href="#skills"
                            className="navLink">
                            <span className='headerNumber'></span>Habilidades</a>
                    </li>
                    <li className="navItem">
                        <a href="#projects"
                            className="navLink">
                            <span className='headerNumber'></span>Projetos</a>
                    </li>
                    <li className="navItem">
                        <a href="#contact"
                            className="navLink">
                            <span className='headerNumber'></span>Contato</a>
                    </li>
                    <button className='btn'>
                        <a href="DImas UML">Resume</a>
                    </button>
                </ul>

                <div onClick={removeNavBar} className="closeNavBar"><AiFillCloseCircle className="icon" />
                </div>
            </div>

            <div onClick={showNavBar} className="toggleNavBar"><TbGridDots className="icon" />
            </div>

        </header>
    )
}

export default Navbar