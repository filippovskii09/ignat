import { Swiper, SwiperSlide } from "swiper/react"
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import SiperParalLaxIMage from '../../../assets/swiper-image.webp'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const MainSwiper = () => {

	const data = [
		{id: 1, title: 'Швидше. Вище. Сильніше.', subtitle: 'Разом із Nike'},
		{id: 2, title: 'Швидше. Вище. Сильніше.', subtitle: 'Разом із Adidas'},
		{id: 3, title: 'Швидше. Вище. Сильніше.', subtitle: 'Разом із Joma'},
	]

  return (
	<>
		<Swiper
		style={{
		  '--swiper-navigation-color': '#fff',
		  '--swiper-pagination-color': '#fff',
		}}
		speed={600}
		parallax={true}
		pagination={{
		  clickable: true,
		}}
		navigation={true}
		modules={[Parallax, Pagination, Navigation]}
		className="mySwiper"
	 >
		<div
		  slot="container-start"
		  className="parallax-bg"
		  style={{
			 'backgroundImage':
				`url(${SiperParalLaxIMage})`,
		  }}
		  data-swiper-parallax="-23%"
		></div>
		 {data.map(slide => (
			 <SwiperSlide key={slide.id}>
				 <div className="swiper__slide swiper-slide">
					 <div className="swiper-slide__wrapper">
						 <div className="swiper-slide__content">
								<div className="swiper-slide__title" data-swiper-parallax="-300">
								 {slide.title}
								</div>
							  <div className="swiper-slide__subtitle" data-swiper-parallax="-200">
									{slide.subtitle}
							 </div>
						 </div>
						 <div className="swiper-slide__info">
							 <div className="swiper-slide__discount">Знижки до 40%</div>
							 <p className="swiper-slide__text">Залишився лише тиждень</p>
						 </div>
					 </div>
				 </div>
			 </SwiperSlide>
		 ))}
	 	</Swiper>
	</>
  )
}

export default MainSwiper
