import './Home.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaArrowCircleRight } from "react-icons/fa";
import { mainImg } from '../../assets/images';
import { FaArrowDown } from "react-icons/fa6";
import { motion } from 'motion/react';
import { iconVariants, imgVariants, slideInVariants } from '../../utils/animation';


const icons = [
    {id: 1, href: "", icon: <FaFacebookF/>},
    {id: 2, href: "", icon: <FaInstagram/>},
    {id: 3, href: "", icon: <FaGithub/>},
]


const Home = () => {
  return (
            <section className="home" id="home">
            <div className="container home-wrapper">
                <div className="media-icons">
                    {icons.map(({id, href, icon}, index) => (
                        <motion.a key={id}
                            href={href}
                            custom={index}
                            variants={iconVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: false, amount: 0.5}}
                            >
                            {icon}
                        </motion.a>
                    ))}
                </div>
                <div className="home-info">
                    <h1>Hi, I am Ilay</h1>
                    <h3>Front-end Developer</h3>
                    <p>
                        I create stunning websites for your business, Highly experienced in web design and development
                    </p>
                    <a href="" className="home-info-link inner-info-link">
                        Contact me
                        <FaArrowCircleRight/>
                    </a>
                </div>
                <motion.div className="home-img"
                    variants={imgVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: false, amount: 0.5}}>
                    <img src={mainImg} alt="man"/>
                </motion.div>
            </div>
            <a href="#about" className="scroll-down">
                Scroll down
                <FaArrowDown/>
            </a>
        </section>
  )
}

export default Home