import React, {Component} from "react";

import {hashHistory} from "react-router";

class Album extends Component {
	render() {
		const albums = {
			"all_that_you_need": {
				image: "images/albums/all_that_you_need.jpg",
				title: "All that you need",
				links: {
					"apple_itunes": "https://itunes.apple.com/album/id1257337416?ls=1&app=itunes",
					"apple_music": "http://itunes.apple.com/album/id1257337416",
					"google_play": "https://play.google.com/store/music/album/The_Man_All_That_You_Need?id=Bmebzg7dvrsmkckohsrsncvqjua&hl=ru",
					"soundcloud": "https://soundcloud.com/the-man-600002383/sets/all-that-you-need-1"
				}
			}
		};

		const album = albums[this.props.routeParams.album];

		if(!album) {
			hashHistory.push("/music");
			return <div />;
		}


		return (
			<div className="info-block album">
				<div className="container">
					<img src={album.image} />
					<div className="links">
						{Object.keys(album.links).map((item, index) => {
							return <a href={album.links[item]} key={index} target="_blank"><img src={"/images/" + item + ".svg"}/></a>;
						})}
					</div>
				</div>
			</div>
		);
	}
};

export default Album;