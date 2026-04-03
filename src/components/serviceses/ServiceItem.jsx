import { useState } from "react";
import ServiceModal from "./ServiceModal"
import { ImArrowUpRight } from "react-icons/im";

const ServiceItem = ({services}) => {
    const [activeIndex, setActiveIndex] = useState(null)

    const openModal = (index) => {
        setActiveIndex(index)
    }

    const closeModal = () => {
        setActiveIndex(null)
    }

    return (
        <>
            {services.map((item, index) => (
                <li className="services-container" key={index}>
                    <div className="service-card">
                        <item.icon className="service-icon"/>
                        <h3>{item.title}</h3>
                        <div className="learn-more-btn" onClick={() => openModal(index)}>
                            Learn More
                            <ImArrowUpRight className="learn-more-icon"/>
                        </div>
                    </div>
                    <ServiceModal item={item} isActive={index === activeIndex} closeModal={closeModal}/>
                </li>
            ))}
        </>
    )
}

export default ServiceItem