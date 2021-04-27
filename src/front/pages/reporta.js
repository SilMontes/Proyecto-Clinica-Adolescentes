import React from "react";
import "../styles/index.scss";

export const Reporta = () => {
	return (
		<div className="container">
			<div className="row">
				<div>
					<h1 className="reporta d-flex justify-content-center">Reportá</h1>
					<div className="container">
						<p className="text-center">
							Denuncie situaciones de Violencia, Acoso o Abuso Sexual al Servicio de Emergencia. Desde
							este servicio, se da atención a todos aquellos incidentes de emergencia y consulta sobre
							violencia.
						</p>
						<div className="text-center">
							<h3>En este servicio llámenos: 2295-3000</h3>
							<h3>Emergencias: 911</h3>
							<h3>Niños y niñas: 1147</h3>
							<h3>Madre adolescente: 800-226-2626</h3>
						</div>
					</div>
					<div className="col-12  d-flex align-items-center justify-content-center">
						<a
							href="https://api.whatsapp.com/send?phone=50689891147"
							target="_blank"
							role="button"
							rel="noopener noreferrer"
							aria-pressed="true"
							className=" call btn rounded-pill">
							Envíanos un mensaje
						</a>
					</div>
				</div>
				<div className=" col-6 formulario form-group">
					<form>
						<label className="mensaje" htmlFor="comment">
							Envia un Mensaje:
						</label>
						<textarea className="form-control" rows="5" id="comment" />
						<button type="Reset" className="cancel rounded-pill btn ">
							Cancelar
						</button>
						<button type="submit" className="submit rounded-pill btn ">
							Enviar
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
