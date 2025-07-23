import React from "react";
import './skill.css'
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoJavascript, IoLogoSass } from "react-icons/io";
import { SiAdobephotoshop, SiAdobexd, SiCss3, SiMysql, SiOpenjdk, SiPostgresql, SiSpringboot, SiWindows10 } from "react-icons/si";
import { FaGitSquare, FaHtml5 } from "react-icons/fa";
import { DiJava, DiPhp } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
import { BsWordpress } from "react-icons/bs";

const Skills = () => {
    return (
        <section id='skills' className='skills container section'>

            <div className="sectionTitle">
                <span className="titleNumber"></span>
                <h5 className="titleText">Habilidades
                    <div className="underline"><span></span></div>
                </h5>
            </div>

            {/*skills container*/}
            <div className="skillsContainer grid">

                {/*single group of kills*/}
                <div className="skillGroup">
                    <div className="groupTitle">
                        <h2 className="title">Desenvolvimento</h2>
                        <span className="subTitle">
                            3 - 5 Anos de Experiência
                        </span>
                    </div>

                    <div className="generalSkills">
                        {/*single kills div*/}

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <SiOpenjdk className='icon' />
                            </div>
                            <span className="skillName">Java Desktop</span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <DiJava className='icon' />
                            </div>
                            <span className="skillName">Java</span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <DiPhp className='icon' />
                            </div>
                            <span className="skillName">PHP</span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <SiSpringboot className='icon' />
                            </div>
                            <span className="skilName">Spring Boot</span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <SiMysql className='icon' />
                            </div>
                            <span className="skillName">MySQL</span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <SiPostgresql className='icon' />
                            </div>
                            <span className="skillName">PostgreSQL</span>
                        </div>

                    </div>

                </div>

                <div className="skillGroup">
                    <div className="groupTitle">
                        <h2 className="title">Des. / Web Design</h2>
                        <span className="subTitle">
                            3 Anos de Experiência
                        </span>
                    </div>

                    <div className="generalSkills">
                        {/*single kills div*/}

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <TbBrandReactNative className='icon' />
                            </div>
                            <span className="skillName">React</span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <IoLogoJavascript className='icon' />
                            </div>
                            <span className="skillName">Javascript</span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <IoLogoSass className='icon' />
                            </div>
                            <span className="skillName">Sass</span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <SiCss3 className='icon' />
                            </div>
                            <span className="skillName">Css 3</span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <FaHtml5 className='icon' />
                            </div>
                            <span className="skillName">HTML</span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <SiAdobephotoshop className='icon' />
                            </div>
                            <span className="skillName">Photoshop</span>
                        </div>

                    </div>
                </div>

                {/*single group of kills*/}
                <div className="skillGroup">
                    <div className="groupTitle">
                        <h2 className="title">Outras Habilidades</h2>
                        <span className="subTitle">
                            3 Anos de Experiência
                        </span>
                    </div>

                    <div className="generalSkills">
                        {/*single kills div*/}
                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <FaGitSquare className='icon' />
                            </div>
                            <span className="skillName">Git</span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <AiFillGithub className='icon' />
                            </div>
                            <span className="skillName">Git Hub</span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <BsWordpress className='icon' />
                            </div>
                            <span className="skillName">Word Press</span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <SiWindows10 className='icon' />
                            </div>
                            <span className="skillName">Win Server</span>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}
export default Skills