import React, { useContext, useState, useEffect } from "react";
import { Context } from "../js/store/appContext";
import "../styles/index.scss";
import { useParams } from "react-router-dom";
import WhatsAppWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import { Row, Col } from "react-bootstrap";

export const InformacionEspecialista = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [mensaje, setMensaje] = useState("");
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

					<div className="general text-left  card border-light mb-3">
						<div className="card-header">Areas de Especialización</div>
						<div className="card-body">
							<ul>
								<li>Area</li>
								<li>Area</li>
								<li>Area</li>
							</ul>
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
