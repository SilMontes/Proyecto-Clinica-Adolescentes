import React, { useContext, useState, useEffect } from "react";
import { Context } from "../js/store/appContext";
import "../styles/index.scss";
import { useParams, Link } from "react-router-dom";
import WhatsAppWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import Swal from "sweetalert2";
import { Row, Col, Form } from "react-bootstrap";

export const InformacionEspecialista = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [mensaje, setMensaje] = useState("");
	const [mostrarForm, setMostrarForm] = useState(false);
	const [comentario, setComentario] = useState("");

	async function solicitudAgregarComentario(e, expertoId) {
		e.preventDefault(e);
		const datosComentario = {
			comentario: comentario,
			experto_id: expertoId
		};
		let respuesta = await fetch(process.env.BACKEND_URL + "/api/comentario/experto", {
			method: "POST",
			body: JSON.stringify(datosComentario),
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + sessionStorage.getItem("token")
			}
		});
		const datos = await respuesta.json();
		if (respuesta.status == "200") {
			actions.obtenerEspecialistas();
			Swal.fire({
				text: "Su comentario se ha añadido",
				timer: 2000,
				confirmButtonText: "Entendido"
			});
			setMostrarForm(false);
			setComentario("");
		} else if (respuesta.status == "400" || respuesta.status == "401") {
			Swal.fire({
				text: datos.msg,
				timer: 2000,
				confirmButtonText: "Entendido"
			});
		} else {
			console.error("Error enviar comentario", respuesta.status);
		}
	}
	useEffect(
		() => {
			console.log(comentario);
		},
		[comentario]
	);
	useEffect(() => {
		const nombre = sessionStorage.getItem("nombre");
		if (nombre != "" && nombre != null) {
			setMensaje("¡Hola " + nombre + "! Me alegra que me escribas.\n¿Cómo puedo ayudarte?");
		}
	}, []);

	return (
		<div className=" expertos container-fluid">
			{store.datosEspecialistas.length > 0 && (
				<>
					<div className="row">
						<div className="col-md-6">
							<img
								className="especialista rounded-circle float-right"
								src={store.datosEspecialistas[params.personaid].imagen}
							/>
						</div>
						<div className="col-md-6">
							<h1 className="titulo">
								{store.datosEspecialistas[params.personaid].nombre +
									" " +
									store.datosEspecialistas[params.personaid].apellido}
							</h1>
						</div>
					</div>

					<div className="general card  text-left border-light mb-3">
						<div className="card-header">Informacion General</div>
						<div className="card-body">
							<p className="card-text">{store.datosEspecialistas[params.personaid].detalles}</p>
						</div>
					</div>
					<div className="general card  text-left border-light mb-3">
						<div className="card-header">
							{"Ubicación" + " "}
							<span>
								<a
									href={`https://www.google.com/maps/search/?api=1&query=${store.datosEspecialistas[
										params.personaid
									].ubicación + store.datosEspecialistas[params.personaid].provincia}`}>
									<i className="fas fa-map-marker-alt" />
								</a>
							</span>
						</div>
						<div className="card-body">
							<p className="card-text">
								{store.datosEspecialistas[params.personaid].ubicación +
									"; " +
									store.datosEspecialistas[params.personaid].provincia}
							</p>
						</div>
					</div>

					<div className="general text-left  card border-light mb-3">
						<div className="card-header">Comentarios de otros usuarios</div>
						<div className="card-header">
							<p onClick={() => setMostrarForm(true)}>Dejar mi comentario sobre este especialista</p>
							{mostrarForm && (
								<div className="row justify-content-center">
									<Col>
										<Row className="justify-content-center">
											<Form
												onSubmit={e =>
													solicitudAgregarComentario(
														e,
														store.datosEspecialistas[params.personaid].id
													)
												}>
												<div>
													<label>Escribe tu comentario</label>
													<textarea
														className="form-control"
														rows="5"
														id="comment"
														name="comentario"
														onChange={e => {
															setComentario(e.target.value), console.log(comentario);
														}}
													/>
												</div>
												<div>
													<button onClick={() => setMostrarForm(false)}>Cancelar</button>
													<button>Enviar</button>
												</div>
											</Form>
										</Row>
									</Col>
								</div>
							)}
						</div>

						<div className="card-body">
							{store.datosEspecialistas[params.personaid].comentarios.length > 0 ? (
								store.datosEspecialistas[params.personaid].comentarios.map((dato, index) => {
									return (
										<div key={index} style={{ border: "1px solid black", marginTop: "5px" }}>
											<div style={{ background: "blue", colr: "white" }}>{dato.fecha}</div>
											<h5>{dato.nombre_cliente}</h5>
											<div>
												<p style={{ padding: "10px" }}>{dato.comentario}</p>
											</div>
										</div>
									);
								})
							) : (
								<p>Aún no hay comentarios</p>
							)}
						</div>
					</div>
					<div className="float">
						<WhatsAppWidget
							phoneNumber={store.datosEspecialistas[params.personaid].numero_telefonico}
							sendButton="Enviar"
							message={mensaje}
							textReplyTime=""
							companyName={
								store.datosEspecialistas[params.personaid].nombre +
								" " +
								store.datosEspecialistas[params.personaid].apellido
							}
							className="whatsappIcono"
						/>
					</div>
				</>
			)}
		</div>
	);
};
