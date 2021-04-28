import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import "../../styles/card-expertos.scss";
import { Context } from "../store/appContext";
import propTypes from "prop-types";
import Swal from "sweetalert2";
export const CardExpertos = props => {
	const { store, actions } = useContext(Context);
	function alerta() {
		Swal.fire({
			text: "Debe iniciar sesión para ver esa información",
			timer: 3000,
			confirmButtonText: "Ok"
		});
	}
	return (
		<React.Fragment>
			<Col xs={12} md={6} lg={4} className="mt-3">
				<div
					className="imagen-especialista-container spring-fever"
					style={{
						backgroundImage: `url(${props.imagen})`
					}}>
					<div className="nombre-especialidad">
						<h3>{props.nombre}</h3>
						<div className="especilidad-expertos">{props.especialidad}</div>
					</div>
					<div className="detalles-experto">
						{props.detalles}
						{store.token != "" && store.token != null ? (
							<Link to={`/especialista/${props.id}`} className="read-more-experto justify-content-center">
								<button className="col-4" style={{ maxWidth: "none" }}>
									Más información
								</button>
							</Link>
						) : (
							<Row className="justify-content-center">
								<button className="read-more-experto col-5" onClick={alerta}>
									Más información
								</button>
							</Row>
						)}
					</div>
				</div>
			</Col>
		</React.Fragment>
	);
};
CardExpertos.propTypes = {
	id: propTypes.number,
	nombre: propTypes.string,
	especialidad: propTypes.string,
	imagen: propTypes.string,
	detalles: propTypes.string
};
