import React, {Component} from "react";
import {hashHistory} from "react-router";

class Header extends Component {
	handleClick(event, link) {
		event.preventDefault();
		if(hashHistory.getCurrentLocation().pathname === `/${link}`) {
			hashHistory.push("/");
		} else {
			hashHistory.push(link);
		}
	}

	render() {
		const menu = [
			{title: "Music store", link: "music"},
			{title: "Official merch", link: "merch"},
			{title: "Tour dates", link: "dates"},
			{title: "Facebook", link: "https://www.facebook.com/themanofficialgroup"},
			{title: "Youtube", link: "https://www.youtube.com/channel/UCCc2ZgasHk-mUvmwfY3qGwA?view_as=subscriber"},
			{title: "Instagram", link: "https://www.instagram.com/themanofficialgroup"},
			{title: "Twitter", link: "#"}
		];

		return (
			<header>
				<div className="container">
					{menu.map((item, index) => {
						if(item.link.startsWith("http")) {
							return <a href={item.link} target="_blank" key={index}>{item.title}</a>;
						} else {
							return <a href={item.link} key={index} onClick={event => this.handleClick(event, item.link)}>{item.title}</a>
						}
					})}
				</div>
			</header>
		);
	}
}

export default Header;