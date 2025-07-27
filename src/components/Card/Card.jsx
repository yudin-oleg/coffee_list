function Card({ coffee }) {
	return (
		<div className="coffee">
			<img src={coffee.img} alt="coffee image" />
			<p className="name">{coffee.name}</p>
			<p className="price">{coffee.price}</p>
		</div>
	);
}

export default Card;
