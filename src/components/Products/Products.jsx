import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import firstImage from '../../assets/products/1.webp'
import secondImage from '../../assets/products/2.webp'
import thirdImage from '../../assets/products/3.webp'
import PrevIcon from '../../assets/icons/left-arrow.svg'
import NextIcon from '../../assets/icons/right-arrow.svg'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ProductsItemLike from '../ProductsItemLike/ProductsItemLike';


const Products = () => {

	const productsData = [
		{id: 1, imageUrl: firstImage, name: 'Термобілизна для бодібілдерів', category: 'Для чоловіків', info: '2 кольори', price: '4000 грн.'},
		{id: 2, imageUrl: secondImage, name: 'Майка для бодібілдерів', category: 'Для жінок', info: '6 кольорів', price: '1100 грн.'},
		{id: 3, imageUrl: thirdImage, name: 'Ланцюжок для бодібілдерів', category: 'Аксесуари', info: '30 кг.', price: '2000 грн.'},
		{id: 4, imageUrl: firstImage, name: 'Термобілизна для бодібілдерів', category: 'Для чоловіків', info: '2 кольори', price: '4000 грн.'},
		{id: 5, imageUrl: secondImage, name: 'Майка для бодібілдерів', category: 'Для жінок', info: '6 кольорів', price: '1100 грн.'}
	]	

  return (
	 <section className="products">
		<div className="products__container container">
			<div className="products__content">
				<h3 className="products__title">Найгарячіші товари</h3>
				<div className="products__info">
					<div className="products__pages text"></div>
					<div className="products__actions">
						<button className="products__button products-prev">
							<img src={PrevIcon} alt="prev-slide" />
						</button>
						<button className="products__button products-next">
							<img src={NextIcon} alt="next-slide" />
						</button>
					</div>
				</div>
			</div>
			<Swiper
      	  slidesPerView={3}
      	  centeredSlides={false}
      	  spaceBetween={20}
      	  pagination={{
      	    type: 'fraction',
				 el: '.products__pages'
      	  }}
      	  navigation={{
				prevEl: '.products-prev',
				nextEl: '.products-next'
			  }}
      	  modules={[Pagination, Navigation]}
      	  className="productsSwiper"
      	>
				{productsData.map(item => (
					<SwiperSlide key={item.id}>
						<div className="products__item products-item">
							<ProductsItemLike/>
							<div className="products-item__image">
								<img src={item.imageUrl} alt={item.name} />
							</div>
							<div className="products-item__content">
								<h4 className="products-item__name">{item.name}</h4>
								<p className="products-item__category text">{item.category}</p>
								<p className="products-item__info text">{item.info}</p>
								<p className="products-item__price">{item.price}</p>
							</div>
				 		</div>
			 		</SwiperSlide>
				))}
      	</Swiper>
		</div>
	 </section>
  )
}

export default Products
