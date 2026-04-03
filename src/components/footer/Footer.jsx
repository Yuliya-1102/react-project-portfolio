import './Footer.css'
import { infoLinks } from '../../data/footerData'
import { followLinks } from '../../data/footerData'
import FooterLinkGroup from './FooterLinkGroup'

const Footer = () => {
  const currenYear = new Date().getFullYear();
  return (
    <footer className="footer">
        <div className="container footer-wrapper">
            <div className="about-group">
                <h2>Ilay</h2>
                <p>Frontend Developer</p>
                <a href="#about">About me</a>
            </div>
            <div className="hr"></div>
            <FooterLinkGroup title="More" links={infoLinks} />
            <div className="hr"></div>
            <FooterLinkGroup title="Follow" links={followLinks} isSocial/>
        </div>
        <p className="footer-copyright">© <span className="year">{currenYear}</span> by Coding Snow. All rights reserved.</p>
    </footer>
  )
}

export default Footer