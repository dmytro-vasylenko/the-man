import React, {Component} from "react";

class TourDates extends Component {
	constructor(props) {
		super(props);

		this.state = {
			style: {}
		};
	}

	render() {
		const dates = [
			{date: {day: 17, month: "Nov", year: 2017}, location: "MITSUBISHI ELECTRIC HALLEDUSSELDORF, GERMANY"},
			{date: {day: 17, month: "Nov", year: 2017}, location: "MITSUBISHI ELECTRIC HALLEDUSSELDORF, GERMANY"},
			{date: {day: 17, month: "Nov", year: 2017}, location: "MITSUBISHI, GERMANY"},
			{date: {day: 17, month: "Nov", year: 2017}, location: "MITSUBISHI ELECTRIC HALLEDUSSELDORF, GERMANY"},
			{date: {day: 17, month: "Nov", year: 2017}, location: "MITSUBISHI ELECTRIC HALLEDUSSELDORF, GERMANY"},
			{date: {day: 17, month: "Nov", year: 2017}, location: "MITSUBISHI ELECTRIC HALLEDUSSELDORF, GERMANY"},
			{date: {day: 17, month: "Nov", year: 2017}, location: "MITSUBISHI ELECTRIC HALLEDUSSELDORF, GERMANY"},
			{date: {day: 17, month: "Nov", year: 2017}, location: "MITSUBISHI ELECTRIC HALLEDUSSELDORF, GERMANY"},
			{date: {day: 17, month: "Nov", year: 2017}, location: "MITSUBISHI ELECTRIC HALLEDUSSELDORF, GERMANY"},
			{date: {day: 17, month: "Nov", year: 2017}, location: "MITSUBISHI, GERMANY"}
		];
		return (
			<div className="info-block transition-item" style={this.state.style}>
				{dates.map((item, index) => {
					return (
						<div className="event" key={index}>
							<div className="date">{item.date.day} {item.date.month} {item.date.year}</div>
							<div className="location">{item.location}</div>
							<div className="tickets">Tickets</div>
						</div>
					);
				})}
			</div>
		);
	}
}

export default TourDates;