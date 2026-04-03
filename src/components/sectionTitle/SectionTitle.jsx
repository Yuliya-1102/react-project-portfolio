import { titleVariants, subtitleVariants } from '../../utils/animation'
import { motion } from 'motion/react';
import './SectionTitle.css'


const SectionTitle = ({title, subtitle}) => {
  return (
    <>
        <motion.h2 className="inner-title"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: false, amount: 0.5}}>
            {title}</motion.h2>
        <motion.h3 className="inner-second-title"
          variants={subtitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: false, amount: 0.5}}
        >{subtitle}</motion.h3>
    </>
  )
}

export default SectionTitle