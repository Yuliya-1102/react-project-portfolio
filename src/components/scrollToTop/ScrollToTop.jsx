import { useEffect, useState } from 'react';
import './ScrollToTop.css';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    const handleScroll = () => {
        setIsVisible(window.scrollY > 300)
    }

    const scrollTo = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <button className={`btn scrollToTop flex-center ${isVisible ? 'active' : ''}`}
            onClick={scrollTo}>
            <FaArrowUp/>
        </button>
    )
}

export default ScrollToTop