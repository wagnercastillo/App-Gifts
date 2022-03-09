import React, { useState, useEffect } from "react";
import { GifGridtem } from "./GifGridtem";
import { getGifs } from "../helpers/getGifjs";

export const GifGrid = ({ categoria }) => {
	const [count, setCount] = useState(0);

	const [images, setImages] = useState([]);

	useEffect(() => {
		getGifs(categoria)
			.then(setImages);
	}, [categoria, count]);

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
