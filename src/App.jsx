import "./App.css";
import CoffeeList from "./components/CoffeeList/CoffeeList";
import Vector from "./components/Vector";

function App() {
	return (
		<>
			<div className="vector">
				<Vector />
			</div>
			<div className="background-image"></div>
			<div className="background-dark">
				<div className="content-part">
					<h1>Our Collection</h1>
					<p className="info">
						Introducing our Coffee Collection, a selection of unique coffees
						from different roast types and origins, expertly roasted in small
						batches and shipped fresh weekly.
					</p>
					<div className="buttons">
						<button id="all-products" className="selected">
							All Products
						</button>
						<button id="available-now">Available Now</button>
					</div>
					<CoffeeList />
				</div>
			</div>
		</>
	);
}

export default App;
