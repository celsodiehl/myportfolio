import React, { useState } from "react";
import './contact.css'
import { BsInstagram } from "react-icons/bs";
import { TbArrowBigRightLines } from "react-icons/tb";
import { AiFillLinkedin } from "react-icons/ai";
import emailjs from "@emailjs/browser";
//EMAIL JS
//import emailjs from '@emailjs/browser';

const Contact = () => {

    //ENVIAR E-MAIL
    const [nome, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e) {
        //PRA NÃO DAR RELOAD NA PÁGINA
        e.preventDefault();

        if (nome === '' || email === '' || message === '') {
            alert("PREENCHA TODOS OS CAMPOS!");
            return;
        }

        const templateParams = {
            from_name: nome,
            email: email,
            message: message
        }

        emailjs.send("service_3pnnt57", "template_r8mcu3q", templateParams, "NdDO1TvcVXq12ytoU")
            .then((response) => {
                console.log("EMAIL ENVIADO", response.status, response.text)
                setName('')
                setEmail('')
                setMessage('')
            }, (err) =>{
                console.log("ERRO AO ENVIAR E-MAIL", err)
            })
    }


    return (
        <section id='contact' className="contact section container">
            <div className="sectionTitle">
                <span className="titleNumber"></span>
                <h5 className="titleText">Contato
                    <div className="underline"><span></span></div>
                </h5>
            </div>

            <div className="contactContainer grid">
                <div className="socialContacts grid">
                    <h3>Fale Comigo</h3>

                    <div className="cards grid">
                        <div className="card">
                            <div>
                                <BsInstagram className='icon' />
                            </div>
                            <h4>Instagram</h4>
                            <span className="userName">
                                @CelsoDiehl
                            </span>
                            <div>
                                <a href="https://www.instagram.com/celso.diehl/" className='flex' target='_blank' rel="noopener noreferrer">
                                    Enviar Mensagem<TbArrowBigRightLines className='icon' />
                                </a>
                            </div>
                        </div>

                        <div className="cards grid">
                            <div className="card">
                                <div>
                                    <AiFillLinkedin className='icon' />
                                </div>
                                <h4>LinkedIn</h4>
                                <span className="userName">
                                    @CelsoDiehl
                                </span>
                                <div>
                                    <a href="https://www.linkedin.com/in/celso-diehl-385365165/?trk=opento_sprofile_details/" className='flex' target='_blank' rel="noopener noreferrer">
                                        Enviar Mensagem<TbArrowBigRightLines className='icon' />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                {/*ARRUMAR PRA ENVIAR E-MAIL*/}
                <div className="form grid">
                    <h3>Envie-me um E-mail</h3>

                    {/*ESSE {form} é de useRef la em cima*/}
                    <form className="form" onSubmit={sendEmail}>
                        <input type="text" placeholder="Digite seu Nome" onChange={(e) => setName(e.target.value)} value={nome} />
                        <input type="email" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)} value={email} />

                        <textarea name="message" id="" placeholder="Digite uma Mensagem" onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
                        <button className="formBtn" type='submit' name='submit'>Enviar E-mail</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Contact