import "./App.css";
import Header from "../src/components/header/Header";
import Cards from "../src/components/cards/Cards";
import Footer from "../src/components/footer/Footer";
function App() {
	return (
		<div className="app">
			<Header />
			<Cards />
			<Footer/>
		</div>
	);
}

export default App;
