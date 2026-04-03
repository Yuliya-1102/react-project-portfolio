import './About.css'
import {aboutImg} from '../../assets/images'
import { FaDownload } from "react-icons/fa6";
import SectionTitle from '../sectionTitle/SectionTitle';
import { motion } from 'motion/react';
import { slideInVariants } from '../../utils/animation';

const About = () => {
  return (
        <section className="about section" id="about">
            <div className="container flex-center">
                <SectionTitle title={`About me`} subtitle={`About me`}/>
                <div className="about-wrapper">
                    <motion.div className="about-img"
                        variants={slideInVariants("left", 0.9, 100, false)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false, amount: 0.5}}>
                        <img src={aboutImg} alt="about"/>
                    </motion.div>
                    <div className="about-info">
                        <div className="description">
                            <h3>I'm Ilay</h3>
                            <h4>A Lead <span>Front-End Developer</span> based in <span>California</span></h4>
                            <p>
                                I design and develop services for customers specializing creating stylish, modern
                                websites,
                                web services and online stores. My passion is to design digital user experiences through
                                meaningful interactions. Check out my Portfolio
                            </p>
                        </div>
                        <ul className="professional-list">
                            <li className="list-item">
                                <span className="number">5+</span>
                                <span className="text">Years of experience</span>
                            </li>
                            <li className="list-item">
                                <span className="number">3K+</span>
                                <span className="text">Happy Customers</span>
                            </li>
                            <li className="list-item">
                                <span className="number">5+</span>
                                <span className="text">Success Projects</span>
                            </li>
                        </ul>
                        <a href="" className="inner-info-link">Download
                            <FaDownload/>
                        </a>
                    </div>
                </div>
            </div>
      </section>
  )
}

export default About