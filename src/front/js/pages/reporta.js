import React from "react";
import "../../styles/index.scss";

export const Reporta = () => {
	return (
		<div className="container">
			<div className="row">
				<div>
					<h1 className="reporta d-flex justify-content-center">Reportá</h1>

					<p className="text-center">
						Denuncie situaciones de Violencia, acoso u abuso sexuales al Servicio de Emergencia. Desde este
						servicio, se da atención de todos aquellos incidentes de emergencia y consulta sobre violencia.
						En este servicio Llámenos: 2295-3000
					</p>

					<button type="button" className="btn btn-primary">
						Llámenos
					</button>
				</div>

				<div className=" formulario form-group">
					<form>
						<label className="mensaje" htmlFor="comment">
							Envia un Mensaje:
						</label>
						<textarea className="form-control" rows="5" id="comment" />
						<button type="submit" className="btn btn-primary">
							Cancel
						</button>
						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
