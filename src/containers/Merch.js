import React, {Component} from "react";

class Merch extends Component {
	render() {
		const items = [
			{
				title: "Item 1",
				image: "1.jpg",
				price: 100
			},
			{
				title: "Item 2",
				image: "1.jpg",
				price: 100
			},
			{
				title: "Item 3",
				image: "1.jpg",
				price: 100
			},
			{
				title: "Item 4",
				image: "1.jpg",
				price: 100
			},
			{
				title: "Item 5",
				image: "1.jpg",
				price: 100
			},
			{
				title: "Item 6",
				image: "1.jpg",
				price: 100
			}
		];

		return (
			<div className="info-block items">
				<div className="container">
					{items.map((item, index) => (
						<div className="item" key={index}>
							<img src={"/images/merch/" + item.image} />
							<h4>{item.title}</h4>
							<h5>${item.price}</h5>
						</div>
					))}
				</div>
			</div>
		);
	}
};

export default Merch;