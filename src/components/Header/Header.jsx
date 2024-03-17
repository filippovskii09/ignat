import Search from "../Search/Search"
import LogoIcon from '../../assets/logo.svg'
import SearchIcon from '../../assets/icons/search.svg';
import HeartIcon from '../../assets/icons/heart.svg';
import CartIcon from '../../assets/icons/bag.svg';
import { Fade as Hamburger } from 'hamburger-react'
import { useEffect, useState } from "react";
import Links from "../Links/Links";

const Header = () => {

	const [isOpen, setOpen] = useState(false)

	useEffect(() => {
		const html = document.documentElement;
		isOpen ? html.classList.add('menu-open') : html.classList.remove('menu-open');
	}, [isOpen, setOpen])

  return (
	<header className="header">
		<div className="header__container container">
			<div className="header__content">
				<a href="/" className="header__logo"><img src={LogoIcon} alt="IGNAT-LOGO"/></a>
				<div className={`header__menu menu ${isOpen ? 'menu_open' : ''}`}>
					<Search icon={SearchIcon}/>
					<nav className="menu__body">
						<Links/>
					</nav>
				</div>
			</div>	
			<div className="header__actions">
				<Search icon={SearchIcon}/>
				<a aria-label="heart button" href="" className="header__icon"><img src={HeartIcon} alt="Heart-Icon"/></a>
				<a aria-label="cart button" href="" className="header__icon"><img src={CartIcon} alt="Cart-Icon"/></a>
				<Hamburger color={isOpen ? "#fff" : "#000"} toggled={isOpen} size={20} toggle={setOpen} />
			</div>
		</div>
	</header>
  )
}

export default Header
