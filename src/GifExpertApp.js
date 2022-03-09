import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

const GifExpertApp = () => {
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
            <AddCategory></AddCategory>
			<hr />

			

			<ol>
				{categorias.map((categoria) => {
					return <li key={categoria}>{categoria}</li>;
				})}
			</ol>
		</>
	);
};

export default GifExpertApp;
