import React from 'react'

const NavBar = () => {
  return (
	<section className='nav'>
		<div className="nav__container container">
			<div className='nav__info'>
				<p className="nav__text sm-text">098 900 09 09</p>
				<p className="nav__text sm-text">Допомога</p>
			</div>
			<div className="nav__actions">
				<a className='nav__link sm-text' href="">Увійти</a><p className='sm-text'>/</p><a className='nav__link sm-text' href="">Зареєструватися</a>
			</div>
		</div>
	</section>
  )
}

export default NavBar
