import classes from './css/Skill.module.css';
import { SKILLS } from '../assets/logo';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper/modules';

export const Skill = () => {
  const elementSkill = SKILLS.map(skill => (
    <SwiperSlide key={skill.title} className={classes.card}>
      <img src={skill.icon} alt={skill.title} />
      <strong>{skill.title}</strong>
    </SwiperSlide>
  ));

  return (
    <Swiper
      slidesPerView={10}
      spaceBetween={0}
      navigation={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      modules={[Navigation, Autoplay]}
    >
      {elementSkill}
    </Swiper>
  );
};
