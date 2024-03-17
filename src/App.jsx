import Catalog from "./components/Catalog/Catalog"
import Feedback from "./components/Feedback/Feedback"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import NavBar from "./components/NavBar/NavBar"
import Products from "./components/Products/Products"
import Promo from "./components/Promo/Promo"

const App = () => {
  return (
	<>
		<NavBar/>
		<Header/>
		<Main/>
		<Catalog/>
		<Products/>
		<Promo/>
		<Feedback/>
		<Footer/>
	</>
  )
}

export default App
