import React, { useContext, useState, useEffect } from "react";
import { Context } from "../js/store/appContext";
import "../styles/index.scss";
import { useParams, Link } from "react-router-dom";
import WhatsAppWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import { Row, Col } from "react-bootstrap";

export const InformacionEspecialista = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [mensaje, setMensaje] = useState("");
	const [mostrarForm, setMostrarForm] = useState(false);
	useEffect(() => {
		const nombre = sessionStorage.getItem("nombre");
		if (nombre != "" && nombre != null) {
			setMensaje("¡Hola " + nombre + "! Me alegra que me escribas.\n¿Cómo puedo ayudarte?");
		}
	}, []);

	return (
		<div className=" expertos container">
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
											<div>
												<label>Escribe tu comentario</label>
												<textarea
													className="form-control"
													rows="5"
													id="comment"
													name="comentario"
												/>
											</div>
											<div>
												<button onClick={() => setMostrarForm(false)}>Cancelar</button>
												<button>Enviar</button>
											</div>
										</Row>
									</Col>
								</div>
							)}
						</div>

						<div className="card-body">
							<div style={{ border: "1px solid black", marginTop: "5px" }}>
								<div style={{ background: "blue", colr: "white" }}>fecha</div>
								<h5>Nombre</h5>
								<div>
									<p style={{ padding: "10px" }}>
										Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en
										demostraciones de tipografías o de borradores de diseño para probar el diseño
										visual antes de insertar el texto final.
										<span>{" " + "Hola"}</span>
									</p>
								</div>
							</div>
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
