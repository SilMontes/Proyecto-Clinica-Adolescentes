import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";
import { Modal, Button } from "react-bootstrap";
import propTypes from "prop-types";
export function TestimonioUsuario(props) {
	const { store, actions } = useContext(Context);
	const [smShow, setSmShow] = useState(false);
	const [enviar, setEnviar] = useState(false);
	const [testimonioID, setTestimonioID] = useState("");
	useEffect(
		() => {
			if (enviar === true) {
				eliminarTestimonio(testimonioID);
			}
		},
		[enviar]
	);
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
		setEnviar(false);
	}
	return (
		<>
			<div
				className="row w-100 mt-3"
				style={{
					border: "4px solid #1d3557",
					borderRadius: "50px 20px",
					marginRight: "0px",
					marginLeft: "0px"
				}}>
				<div className="col-12 col-sm-12 col-md-3 px-0">
					<img
						src={props.multimedia}
						alt="Mike Anamendolla"
						style={{ borderRadius: "50px 20px", maxHeight: "200" }}
						className="mx-auto d-block img-fluid"
					/>
				</div>
				<div className="col-12 col-sm-12 col-md-9 text-center text-sm-left">
					<div className=" float-right">
						<span>
							<i className="far fa-calendar-alt" style={{ left: "0%", color: "#0082fd" }} />
							Publicado: {props.fecha}
						</span>

						<span>
							<i
								className="fas fa-trash-alt"
								style={{ left: "0%" }}
								onClick={() => {
									setSmShow(true);
									setTestimonioID(props.testimonioId);
								}}
							/>
						</span>
					</div>

					<br />
					<span style={{ color: "#007bff" }}>Título: {props.titulo}</span>
					<br />
					<br />
					<p className="text-muted">{props.experiencia}</p>

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
						<i className="fas fa-exclamation-circle" style={{ color: " #ff0000 ", fontSize: "35px" }} />
					</Modal.Header>

					<Modal.Body>
						<p> ¿Está de que seguro que desea eliminar su testimonio?</p>
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
