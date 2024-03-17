const Search = ({icon}) => {

  return (
	<form className="header__form form-header">
		<input className="form-header__input" type="search" name="search" />
		<button aria-label="search button" className="form-header__action" ><img src={icon} alt="" /></button>	
	</form>
  )
}

export default Search

