import React, { useState } from "react";
import "./cards.css";
import TinderCard from "react-tinder-card";
function Cards() {
	const [people, setPeople] = useState([
		{ name: "Elon Musk", url: "https://www.wallpapersdsc.net/wp-content/uploads/2016/01/Elon-Musk-Widescreen.jpg" },
		{
			name: "jeff bezos",
			url: "https://wallpaperaccess.com/full/2058400.jpg",
		},
	]);

	const onSwipe = (direction) => {
		console.log("You swiped: " + direction);
	};

	const onCardLeftScreen = (myIdentifier) => {
		console.log(myIdentifier + " left the screen");
	};
	return (
		<div className="cards">
			<div className="tinderCards_card_caontainer">
				{people.map((person) => (
					<TinderCard
						className="swipe"
						key={person.name}
						onSwipe={(dir) => onSwipe(dir, person.name)}
						onCardLeftScreen={() => onCardLeftScreen(person.name)}
						preventSwipe={["up", "down"]}
					>
						<div style={{ backgroundImage: `url( ${person.url})` }} className="card">
							<h3>{person.name}</h3>
						</div>
					</TinderCard>
				))}
			</div>
		</div>
	);
}

export default Cards;
