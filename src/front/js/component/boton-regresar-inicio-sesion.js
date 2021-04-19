import React from "react";
import { Link } from "react-router-dom";
export const BotonIrInicioSesion = () => {
	return (
		<Link to="/iniciosesion">
			<button className="btnIrInicioSesión px-3" type="submit">
				Cancelar
			</button>
		</Link>
	);
};
