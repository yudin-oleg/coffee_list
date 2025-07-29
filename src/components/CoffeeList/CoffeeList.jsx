import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./CoffeeList.css";

function CoffeeList({ option }) {
	const [data, setdata] = useState([]);
	useEffect(() => {
		fetch(
			"https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
		)
			.then((response) => response.json())
			.then((data) => {
				setdata(data);
			});
	}, []);

	function getProperCoffeeList(option, data) {
		if (option === "showAll") {
			return data;
		} else {
			return data.filter((coffee) => coffee.available === true);
		}
	}

	return (
		<div className="coffee-list">
			{getProperCoffeeList(option, data).map((item) => {
				return <Card key={item.id} coffee={item} />;
			})}
		</div>
	);
}

export default CoffeeList;
