import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card, Button, Col } from "react-bootstrap";
import Swal from "sweetalert2";
export function ComentariosUsuario() {
	const { store, actions } = useContext(Context);
	async function eliminarComentario(comentario_id) {
		const solicitudEliminar = await fetch(process.env.BACKEND_URL + `/api/eliminar/comentario/${comentario_id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + sessionStorage.getItem("token")
			}
		});
		const datosSolicitud = await solicitudEliminar.json();
		if (solicitudEliminar.status == "200") {
			actions.obtenerComentariosusuario();
			Swal.fire({
				text: "Comentario Eliminado",
				timer: 2000,
				confirmButtonText: "Ok"
			});
		} else {
			console.error("Error Eliminar Comentario", solicitudEliminar.status, datosSolicitud);
		}
	}
	return (
		<>
			{store.comentarioUsuario.map((comentario, index) => {
				return (
					<Card key={index}>
						<Card.Header>
							{comentario.fecha}
							<i className="fas fa-trash" onClick={() => eliminarComentario(comentario.id)} />
						</Card.Header>
						<Card.Body>
							<Card.Title>Especialista: {comentario.nombre_experto}</Card.Title>
							<Card.Body>
								<Col xs={6} lg={6}>
									{comentario.comentario}
								</Col>
								<Col xs={6} lg={6}>
									<Card.Img style={{ width: "100px" }} src={comentario.imagen_experto} />
								</Col>
							</Card.Body>
						</Card.Body>
					</Card>
				);
			})}
		</>
	);
}
