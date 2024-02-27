import  {Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import React, { useEffect, useRef, useState } from 'react';
import styles from './Certificate.module.css';



export const Certificate = () => {
  const [swiper, setSwiper] = useState(null);
  const data = [
  {
    id: 1, imgUrl: "assets/certificates/cert1.png"
  },
  {
    id: 2, imgUrl: "assets/certificates/frontend-argentinaprograma.png"
  },
  {
    id: 3, imgUrl: "assets/certificates/info2.png"
  },
  {
    id: 4, imgUrl: "assets/certificates/unity.png"
  }
  ]
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