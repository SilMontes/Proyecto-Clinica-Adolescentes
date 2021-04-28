import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Modal, Button } from "react-bootstrap";
export function ComentariosUsuario() {
	const { store, actions } = useContext(Context);
	const [smShow, setSmShow] = useState(false);
	const [enviar, setEnviar] = useState(false);
	const [comentarioId, setComentarioId] = useState("");
	useEffect(
		() => {
			if (enviar === true) {
				eliminarComentario(comentarioId);
			}
		},
		[enviar]
	);
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
		setEnviar(false);
	}

	return (
		<>
			{store.comentarioUsuario.map((comentario, index) => {
				return (
					<div
						className="row w-100 mt-2 p-2"
						style={{ border: "1px solid #cdcdcd", marginRight: "0px", marginLeft: "0px" }}
						key={index}>
						<div className="col-12 col-sm-6 col-md-3 px-0">
							<img
								src={comentario.imagen_experto}
								alt="Mike Anamendolla"
								className="rounded-circle mx-auto d-block img-fluid"
								style={{ maxHeight: "150px" }}
							/>
						</div>
						<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
							<div className=" float-right">
								<span>
									<Link to={`/especialista/${comentario.experto_id - 1}`}>
										<i className="fas fa-info-circle" style={{ left: "0%" }} />
									</Link>
								</span>
								{"  "}
								<span>
									<i
										className="fas fa-trash-alt"
										style={{ left: "0%" }}
										onClick={() => {
											setSmShow(true);
											setComentarioId(comentario.id);
										}}
									/>
								</span>
							</div>
							<label className="name lead">
								<i className="far fa-calendar-alt" style={{ left: "0%", color: "#0082fd" }} />{" "}
								Publicado: {comentario.fecha}
							</label>
							<br />
							<span className="text-muted">Especialista: {comentario.nombre_experto}</span>
							<br />
							<br />
							<p className="text-muted">{comentario.comentario}</p>

							<span className="text-muted small">
								<a href={`https://wa.me/506${comentario.numero_telefonico}`}>
									<i className="fab fa-whatsapp" style={{ color: "#00bb2d", left: "0%" }} />
								</a>
							</span>
							<br />
						</div>
						<Modal
							size="sm"
							show={smShow}
							onHide={() => setSmShow(false)}
							aria-labelledby="example-modal-sizes-title-sm"
							backdrop="static"
							keyboard={false}
							centered>
							<Modal.Header closeButton>
								<i
									className="fas fa-exclamation-circle"
									style={{ color: " #ff0000 ", fontSize: "35px" }}
								/>
							</Modal.Header>

							<Modal.Body>
								<p> ¿Está de que seguro que desea eliminar este comentario?</p>
							</Modal.Body>
							<Modal.Footer>
								<Button
									style={{ background: "#646b63", color: "white", fontSize: "25px" }}
									onClick={() => setSmShow(false)}>
									Cerrar
								</Button>
								<Button
									style={{ background: "#de1f21 ", color: "white", fontSize: "25px" }}
									onClick={() => {
										setSmShow(false);
										setEnviar(true);
									}}>
									{" Sí "}
								</Button>
							</Modal.Footer>
						</Modal>
					</div>
				);
			})}
		</>
	);
}
