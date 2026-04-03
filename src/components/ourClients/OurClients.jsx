import {clientData} from '../../data/clientsData';
// import SectionTitle from '../sectionTitle/SectionTitle';


import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from '../sectionTitle/SectionTitle';
import './ourClients.css'

const OurClients = () => {
  return (
    <section className="section our-client">
            <div className="container flex-center">
                <SectionTitle title='Our Clients' subtitle='Our Clients'/>
                <div className="our-client-wrapper">
                    <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    className='client-swiper'
                    >
                        {clientData.map(item => (
                            <SwiperSlide key={item.id}>
                                <div className="our-client-wrapper">
                                    <div className="swiper client-swiper">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide swiper-client-block">
                                            <div className="client-img">
                                                <img src={item.imgSrc} alt={item.name}/>
                                            </div>
                                            <div className="client-details">
                                                <p>{item.description}</p>
                                                <h3>Aria Collins</h3>
                                                <span>{item.position}</span>
                                            </div>
                                        </div>
                                        </div>                        
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                
                    
            </div>
            </section>
    )
    }

export default OurClients