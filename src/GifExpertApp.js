import React, { useState } from "react";

const GifExpertApp = () => {
	// const catergorias = ["One Punch", "Samurai X", "Dragon Ball"];
	const [categorias, setCategorias] = useState([
		"One Punch",
		"Samurai X",
		"Dragon Ball",
	]);

    const handleAdd =()=>{
        setCategorias([...categorias, "HunterXHunter"]);
    }

	return (
		<>
			<h2>GifExpertApp</h2>
			<hr />

			<button onClick={handleAdd}>Agregar</button>

			<ol>
				{categorias.map((categoria) => {
					return <li key={categoria}>{categoria}</li>;
				})}
			</ol>
		</>
	);
};

export default GifExpertApp;
