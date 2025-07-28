import "./Card.css";

function Card({ coffee }) {
	return (
		<div className="coffee">
			<img id="image" src={coffee.image} alt="coffee image" />
			<p id="name">{coffee.name}</p>
			<p id="price">{coffee.price}</p>
		</div>
	);
}

export default Card;
