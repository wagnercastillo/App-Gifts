import React from "react";

export const GifGrid = ({ categoria }) => {
	const getGifs = async () => {
		const url =
			"https://api.giphy.com/v1/gifs/search?q=Rick and Morty&limit=5&api_key=j8x276OP0NlJSP0opHPZ3H4hno9BfTF3";
		const resp = await fetch(url);
		const { data } = await resp.json();

		const gifs = data.map((img) => {
			return {
				id: img.id,
				title: img.title,
				url: img.images?.downsized_medium.url,
			};
		});
		 

		console.log(gifs);
	};

	getGifs();

	return (
		<div>
			<h3>{categoria}</h3>
		</div>
	);
};
