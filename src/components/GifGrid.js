import React, { useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGIfs";
import { GifGridtem } from "./GifGridtem";
// import { getGifs } from "../helpers/getGifjs";

export const GifGrid = ({ categoria }) => {
	const [count, setCount] = useState(0);

	const { loading } = useFetchGifs();
	// const [images, setImages] = useState([]);

	// useEffect(() => {
	// 	getGifs(categoria)
	// 		.then(setImages);
	// }, [categoria, count]);

	return (
		<>
			<h3>{categoria}</h3>
			{loading ? "Cargando..." : " Data Cargada"}

			<div className="card-grid">
				{/* {images.map((img) => (
					<GifGridtem key={img.id} {...img} />
				))} */}
			</div>
		</>
	);
};
