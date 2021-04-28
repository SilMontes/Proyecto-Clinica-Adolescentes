import React, { useContext, useState, useEffect } from "react";
import { Context } from "../js/store/appContext";
//import "../styles/index.scss";
import { useParams, Link } from "react-router-dom";
import WhatsAppWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import Swal from "sweetalert2";
import { Row, Col, Form, Container } from "react-bootstrap";

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
		<div className="container">
			{store.datosEspecialistas.length > 0 && (
				<>
					<Row className=" justify-content-center">
						<Col xs={12} md={6} lg={4} className="justify-content-center">
							<div>
								<img
									className="especialista rounded-circle"
									src={store.datosEspecialistas[params.personaid].imagen}
								/>
							</div>
						</Col>
						<Col xs={10} md={6} lg={4} className="row">
							<div className="align-self-center">
								<h1 className="titulo" style={{ position: "relative" }}>
									{store.datosEspecialistas[params.personaid].nombre +
										" " +
										store.datosEspecialistas[params.personaid].apellido}
								</h1>
							</div>
						</Col>
					</Row>
					<Row>
						<div
							className="general card  text-left border-light mt-4 mb-3"
							style={{ maxWidth: "700px", borderRadius: "15px 50px ", border: "10px solid #FFD23F" }}>
							<div className="card-header">Informacion General</div>
							<div className="card-body">
								<p className="card-text">{store.datosEspecialistas[params.personaid].detalles}</p>
							</div>
						</div>
					</Row>
					<Row>
						<div
							className="general card  mt-4 text-left border-light mb-3"
							style={{ maxWidth: "700px", borderRadius: "15px 50px", border: "10px solid #FFD23F" }}>
							<div className="card-header">
								{"Ubicación" + " "}
								<span>
									<a
										href={`https://www.google.com/maps/search/?api=1&query=${store
											.datosEspecialistas[params.personaid].ubicación +
											store.datosEspecialistas[params.personaid].provincia}`}>
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
					</Row>
					<Row>
						<div
							className="general text-left mt-4 card border-light mb-3"
							style={{ maxWidth: "700px", borderRadius: "15px 50px", border: "10px solid #FFD23F" }}>
							<div className="card-header">Comentarios de otros usuarios</div>
							<div className="card-header">
								<p onClick={() => setMostrarForm(true)}>
									Dejar mi comentario sobre este especialista{" "}
									<i className="fas fa-edit" style={{ fontSize: "20px" }} />
								</p>

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
														<label>Escriba su comentario</label>
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
													<div className="align-items-center">
														<button
															style={{
																background: "#9c9c9c",
																color: "#0016b0",
																border: "none",
																margin: "5px",
																padding: "10px",
																borderRadius: "5px"
															}}
															onClick={() => setMostrarForm(false)}>
															Cancelar
														</button>
														<button
															style={{
																background: "#1D3557",
																color: "#FFD23F",
																border: "none",
																margin: "5px",
																padding: "10px",
																borderRadius: "5px"
															}}>
															Enviar
														</button>
													</div>
												</Form>
											</Row>
										</Col>
									</div>
								)}
							</div>

							{store.datosEspecialistas[params.personaid].comentarios.length > 0 && (
								<div className="card-body">
									{store.datosEspecialistas[params.personaid].comentarios.map((dato, index) => {
										return (
											<div
												key={index}
												style={{
													border: "2px solid #FFD23F",
													padding: "10px",
													marginTop: "5px"
												}}>
												<div className="text-muted float-right">
													<i className="fas fa-calendar-alt" style={{ color: "#2271b3" }} />{" "}
													{dato.fecha}
												</div>
												<div>
													<h6>Autor: {dato.nombre_cliente}</h6>
													<div className="text-muted">
														<p style={{ padding: "5px" }}>{dato.comentario}</p>
													</div>
												</div>
											</div>
										);
									})}
								</div>
							)}
						</div>
					</Row>
					<div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
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
