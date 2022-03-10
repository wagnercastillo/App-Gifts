import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridtem } from "./GifGridtem";

export const GifGrid = ({ categoria }) => {
	const { data: images, loading } = useFetchGifs(categoria);

	return (
		<>
			<h3>{categoria}</h3>

			{loading && <p>Loading</p>}

			<div className="card-grid">
				{images.map((img) => (
					<GifGridtem key={img.id} {...img} />
				))}
			</div>
		</>
	);
};
