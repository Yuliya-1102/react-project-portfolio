import { FaCircleCheck, FaXmark } from "react-icons/fa6";

const ServiceModal = ({item, isActive, closeModal}) => {
  return (
    <div className={isActive ? "service-modal active" : "service-modal"}>
        <div className="service-modal-body">
            <FaXmark className="modal-close-btn" onClick={closeModal}/>
            <h3>{item.title}</h3>
            <h4>{item.subtitle}</h4>
            <p>{item.description}</p>
            <h4>What I provide</h4>
            <ul>
            {item.list.map((elem, i) => (
                <li className="icon-check" key={i}>
                    <FaCircleCheck />
                    {elem}
                </li>
            ))}                
            </ul>
        </div>
    </div>
  )
}

export default ServiceModal