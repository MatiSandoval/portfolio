import  {Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import React, { useEffect, useRef, useState } from 'react';
import styles from './Certificate.module.css';
import { data } from '../../data/data';


export const Certificate = () => {
  const [swiper, setSwiper] = useState(null);

  return (
    <section className={styles.container} id="certificate">
          <h2 className={styles.title}>Certificados</h2>
          <div className={styles.maincontainer}>
        <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        onSwiper={setSwiper}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
          >
              
        {data.map((item) => (
          <SwiperSlide key={item.id} >
            <img src={item.imgUrl} alt={`Certificate ${item.id}`} className={styles.imger} />
          </SwiperSlide>
        ))}
                  
              </Swiper>
              </div>
          
    </section>
  );
};