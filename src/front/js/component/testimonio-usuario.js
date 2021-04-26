import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card, Button, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import propTypes from "prop-types";
export function TestimonioUsuario(props) {
	const { store, actions } = useContext(Context);
	async function eliminarTestimonio(tetimonio_id) {
		const solicitudEliminar = await fetch(process.env.BACKEND_URL + `/api/eliminar/tetimonio/${tetimonio_id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + sessionStorage.getItem("token")
			}
		});
		const datosSolicitud = await solicitudEliminar.json();
		if (solicitudEliminar.status == "200") {
			actions.obtenerInformacionusuario();
			Swal.fire({
				text: "Testimonio Eliminado",
				timer: 2000,
				confirmButtonText: "Ok"
			});
		} else {
			console.error("Error Eliminar Testimonio", solicitudEliminar.status, datosSolicitud);
		}
	}
	return (
		<>
			<Card>
				<Card.Header>
					{props.fecha}
					<i className="fas fa-trash" onClick={() => eliminarTestimonio(props.testimonioId)} />
				</Card.Header>
				<Card.Body>
					<Card.Title>Titulo: {props.titulo}</Card.Title>
					<Card.Body>
						<Col xs={6} lg={6}>
							{props.experiencia}
						</Col>
						<Col xs={6} lg={6}>
							<Card.Img style={{ width: "100px" }} src={props.multimedia} />
						</Col>
					</Card.Body>
				</Card.Body>
			</Card>
		</>
	);
}
TestimonioUsuario.propTypes = {
	fecha: propTypes.string,
	titulo: propTypes.string,
	experiencia: propTypes.string,
	multimedia: propTypes.string,
	testimonioId: propTypes.number
};
