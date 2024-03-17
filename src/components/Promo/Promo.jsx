import PromoForm from "../PromoForm/PromoForm"

const Promo = () => {

  return (
	 <section className="promo">
		<div className="promo__container container">
			<h2 className="promo__title">Спіймай всі акції!</h2>
			<p className="promo__text text">Підписуйся на Email розсилку і отримуй інформацію про всі акції, які будуть з`влятись у нашому магазині. А у нас їх багато :D</p>
			<PromoForm/>
		</div>
	 </section>
  )
}

export default Promo
