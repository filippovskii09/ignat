import CatalogImage from '../../assets/catalog-image.webp';

const Catalog = () => {
  return (
	 <section className="catalog">
		<div className="catalog__container container">
			<div className="catalog__content">
				<h2 className="catalog__title"> Ми знаємо, що сподобається вашим “великим” друзям!</h2>
				<p className="catalog__text text">Обирай подарунок своїм друзями бодібілдерам із нашою новою колекцію термобілизни “Big warm”</p>
				<button className="catalog__button">До каталогу</button>
			</div>
			<div className="catalog__image">
				<img src={CatalogImage} alt="Image with man" />
			</div>
		</div>
	 </section>
  )
}

export default Catalog
