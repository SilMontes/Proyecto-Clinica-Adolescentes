import React from "react";
import "../styles/index.scss";

export const Reporta = () => {
	return (
		<div className="container">
			<div className="row">
				<div>
					<h1 className="reporta">Reportá</h1>
					<div style={{ background: "#FFB400" }}>
						<h2 className="text-center">
							Denuncie situaciones de Violencia, Acoso o Abuso Sexual al Servicio de Emergencia. Desde
							este servicio, se da atención a todos aquellos incidentes de emergencia y consulta sobre
							violencia.
						</h2>
						<div className="text-center">
							<h3>
								En este servicio llámenos: 2295-3000 <i className="fas fa-phone-volume" />
							</h3>
							<h3>
								Emergencias: 911 <i className="fas fa-phone-volume" />
							</h3>
							<h3>
								Niños y niñas: 1147 <i className="fas fa-phone-volume" />
							</h3>
							<h3>
								Madre adolescente: 800-226-2626 <i className="fas fa-phone-volume" />
							</h3>
						</div>
					</div>

					<button type="button" className="btn btn-info">
						Llámenos
					</button>
				</div>

				<div className="form-group">
					<form>
						<label htmlFor="comment">Mensaje:</label>
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
