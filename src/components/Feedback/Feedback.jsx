import PrevIcon from '../../assets/icons/left-arrow.svg';
import NextIcon from '../../assets/icons/right-arrow.svg';
import UserImage from '../../assets/user.webp';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import StarIcon from '../../assets/icons/star.svg';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const Feedback = () => {

	const FeedbackData = [
		{id: 1, imageUrl: UserImage, name: 'Жора Ремінгтон', text: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...'},
		{id: 2, imageUrl: UserImage, name: 'Жора Ремінгтон', text: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...'},
		{id: 3, imageUrl: UserImage, name: 'Жора Ремінгтон', text: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...'},
		{id: 4, imageUrl: UserImage, name: 'Жора Ремінгтон', text: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...'},
		{id: 5, imageUrl: UserImage, name: 'Жора Ремінгтон', text: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...'},
		{id: 6, imageUrl: UserImage, name: 'Жора Ремінгтон', text: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...'},
	]

  return (
	 <section className='feedback'>
		<div className="feedback__container container">
		<div className="feedback__content">
				<h3 className="feedback__title">Найгарячіші товари</h3>
				<div className="feedback__info">
					<div className="feedback__pages text"></div>
					<div className="feedback__actions">
						<button className="feedback__button feedback-prev">
							<img src={PrevIcon} alt="prev-slide" />
						</button>
						<button className="feedback__button feedback-next">
							<img src={NextIcon} alt="next-slide" />
						</button>
					</div>
				</div>
			</div>
			<Swiper
      	  slidesPerView={4}
      	  centeredSlides={false}
      	  spaceBetween={18}
      	  pagination={{
      	    type: 'fraction',
				 el: '.feedback__pages'
      	  }}
      	  navigation={{
				prevEl: '.feedback-prev',
				nextEl: '.feedback-next'
			  }}
      	  modules={[Pagination, Navigation]}
      	  className="productsSwiper"
      	>
				{FeedbackData.map(item => (
					<SwiperSlide key={item.id}>
						<div className="feedback__item feedback-item">
							<div className="feedback-item__content">
								<div className="feedback-item__image">
									<img src={item.imageUrl} alt={item.name} />
								</div>
								<div className="feedback-item__info">
									<div className="feedback-item__stars">
										<img src={StarIcon} alt="star" />
										<img src={StarIcon} alt="star" />
										<img src={StarIcon} alt="star" />
										<img src={StarIcon} alt="star" />
										<img src={StarIcon} alt="star" />
									</div>
									<p className="feedback-item__name">{item.name}</p>
								</div>
							</div>
							<p className="feedback-item__text text">{item.text}</p>
						</div>
			 		</SwiperSlide>
				))}
      	</Swiper>
			<div className="feedback__row">
				{FeedbackData.map(item => (
					<div key={item.id} className="feedback__item feedback-item">
					<div className="feedback-item__content">
						<div className="feedback-item__image">
							<img src={item.imageUrl} alt={item.name} />
						</div>
						<div className="feedback-item__info">
							<div className="feedback-item__stars">
								<img src={StarIcon} alt="star" />
								<img src={StarIcon} alt="star" />
								<img src={StarIcon} alt="star" />
								<img src={StarIcon} alt="star" />
								<img src={StarIcon} alt="star" />
							</div>
							<p className="feedback-item__name">{item.name}</p>
						</div>
					</div>
					<p className="feedback-item__text text">{item.text}</p>
				</div>
				))}
			</div>
		</div>
	 </section>
  )
}

export default Feedback
