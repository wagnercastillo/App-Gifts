import React, { useState, useEffect } from "react";
import { GifGridtem } from "./GifGridtem";

export const GifGrid = ({ categoria }) => {
	const [count, setCount] = useState(0);

	const [images, setImages] = useState([]);

	useEffect(() => {
		getGifs();
	}, []);

	const getGifs = async () => {
		const url =
			"https://api.giphy.com/v1/gifs/search?q=Rick and Morty&limit=10&api_key=j8x276OP0NlJSP0opHPZ3H4hno9BfTF3";
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
		setImages(gifs);
	};

	return (
		<>
			<h3>{categoria}</h3>
			<div className="card-grid">
				{images.map((img) => (
					<GifGridtem key={img.id} {...img} />
				))}
			</div>
		</>
	);
};
