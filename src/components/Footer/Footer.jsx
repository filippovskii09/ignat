import React from 'react'
import InstagramIcon from '../../assets/icons/inst.svg'
import ViberIcon from '../../assets/icons/viber.svg'
import TelegramIcon from '../../assets/icons/telegram.svg'
import Links from '../Links/Links'

const Footer = () => {
  return (
	<footer className="footer">
		<div className="footer__container container">
			<div className="footer__contact-center contact-center">
				<div className="contact-center__column">
					<h5 className="contact-center__title footer-title">Контакт - центр</h5>
					<ul className="contact-center__list">
						<li className="contact-center__item">
							<a href="tel:098 900 09 09 ">098 900 09 09 </a>
						</li>
						<li className="contact-center__item">Пн - Пт 09:00 - 21:00</li>
					</ul>
				</div>
				<div className="contact-center__social social">
					<a href="#" className="social__item">
						<img src={InstagramIcon} alt="Instagram"/>
					</a>
					<a href="#" className="social__item">
						<img src={ViberIcon} alt="Viber"/>
					</a>
					<a href="#" className="social__item">
						<img src={TelegramIcon} alt="Telegram"/>
					</a>
				</div>
			</div>
			<div className="footer__site-navigation ">
				<div className="footer__customer-service customer-service">
					<h5 className="customer-service__title footer-title">Покупцям</h5>
					<ul className="customer-service__list">
						<li className="customer-service__item">
							<a href="#">Оплата і доставка</a>
						</li>
						<li className="customer-service__item">
							<a href="#">Повернення</a>
						</li>
						<li className="customer-service__item">
							<a href="#">Питання та відповіді</a>
						</li>
					</ul>
				</div>
				<div className="footer__personal-account personal-account">
					<h5 className="personal-account__title footer-title">Особистий кабінет</h5>
					<ul className="personal-account__list">
						<li className="personal-account__item">
							<a href="#">Мої дані</a>
						</li>
						<li className="personal-account__item">
							<a href="#">Історія замовлень</a>
						</li>
						<li className="personal-account__item">
							<a href="#">Улюблені</a>
						</li>
						<li className="personal-account__item">
							<a href="#">Розсилки</a>
						</li>
					</ul>
				</div>
				<div className="footer__company-info company-info">
					<h5 className="company-info__title footer-title">Про компанію</h5>
					<ul className="company-info__list">
						<li className="company-info__item">
							<a href="#">Про нас</a>
						</li>
						<li className="company-info__item">
							<a href="#">Новини</a>
						</li>
						<li className="company-info__item">
							<a href="#">Стати партнером</a>
						</li>
						<li className="company-info__item">
							<a href="#">Угода користувача</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div className="footer__bottom">
			<div className="footer__container container">
				<div className="footer__bottom-content">
					<Links/>
					<p className="footer__copy text">© 2022 — 2023 IGNAT. Усі права захищені.</p>
				</div>
			</div>
		</div>
	</footer>
  )
}

export default Footer
