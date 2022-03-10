import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridtem } from "./GifGridtem";

export const GifGrid = ({ categoria }) => {
	const { data: images, loading } = useFetchGifs(categoria);

	return (
		<>
			<h3 className="animate__animated animate_fadeIn">{categoria}</h3>

			{loading && <p className="animate__animated animate__fadeIn">Loading</p>}

			<div className="card-grid">
				{images.map((img) => (
					<GifGridtem key={img.id} {...img} />
				))}
			</div>
		</>
	);
};
