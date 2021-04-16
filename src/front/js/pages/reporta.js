import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.scss";

export const reportar = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="row">
				<div>
					<h1 className="reporta">Reportá</h1>

					<p className="text-center">
						{" "}
						Denuncie situaciones de Violencia, acoso u abuso sexuales al Servicio de Emergencia. Desde este
						servicio, se da atención de todos aquellos incidentes de emergencia y consulta sobre violencia.
						En este servicio Llámenos: 2295-3000
					</p>

					<button> </button>
				</div>

				<div />
			</div>
		</div>
	);
};
