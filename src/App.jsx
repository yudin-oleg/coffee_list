import { useState } from "react";
import "./App.css";
import CoffeeList from "./components/CoffeeList/CoffeeList";
import Vector from "./components/Vector";

function App() {
	const [option, setOption] = useState("showAll");
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
						<button
							id="all-products"
							className={option === "showAll" ? "selected" : ""}
							onClick={() => setOption("showAll")}
						>
							All Products
						</button>
						<button
							id="available-now"
							className={option === "showAvailable" ? "selected" : ""}
							onClick={() => setOption("showAvailable")}
						>
							Available Now
						</button>
					</div>
					<CoffeeList option={option} />
				</div>
			</div>
		</>
	);
}

export default App;
