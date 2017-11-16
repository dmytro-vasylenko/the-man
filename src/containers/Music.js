import React, {Component} from "react";

import {Link} from "react-router";

class Music extends Component {
	render() {
		const albums = [
			{
				image: "images/albums/all_that_you_need.jpg",
				link: "all_that_you_need"
			}
		];

		return (
			<div className="info-block albums">
				<div className="container">
					{albums.map((album, index) => {
						return <Link to={"/music/" + album.link} key={index}><img src={album.image} /></Link>;
					})}
				</div>
			</div>
		);
	}
};

export default Music;