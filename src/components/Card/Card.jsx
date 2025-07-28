import "./Card.css";
import StarEmpty from "../StarEmpty";
import StarFilled from "../StarFilled";

function Card({ coffee }) {
	const RatingFontColor = coffee.rating ? "#f5eee5" : "#60656b";
	return (
		<div className="coffee-card">
			{coffee.popular && <div id="popular">Popular</div>}
			<img id="image" src={coffee.image} alt="coffee image" />
			<div id="name-price">
				<span id="name">{coffee.name}</span>
				<span id="price">{coffee.price}</span>
			</div>
			<div id="star-rating-votes-available">
				<div id="star-rating-votes">
					<div id="star">{coffee.rating ? <StarFilled /> : <StarEmpty />}</div>
					<span id="rating" style={{ color: RatingFontColor }}>
						{coffee.rating ? coffee.rating : "No ratings"}
					</span>
					{coffee.rating && <span id="votes">{`(${coffee.votes})`}</span>}
				</div>
				{!coffee.available && (
					<span id="available">{coffee.available ? "" : "Sold out"}</span>
				)}
			</div>
		</div>
	);
}

export default Card;
