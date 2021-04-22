import React from "react";
import { Row, Col, Container, Modal } from "react-bootstrap";
import { Articulo } from "../js/component/articulo";
import "../styles/orientacion.scss";
import ReactPlayer from "react-player/youtube";

export const Orientacion = () => {
	let nameDepr = "DEPRESIÓN";
	let urlDepr =
		"https://images.unsplash.com/photo-1506084219759-6d8777e5958d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZGVwcmVzc2VkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";
	let nameTrau = "TRAUMA";
	let urlTrau =
		"https://images.unsplash.com/photo-1539541417736-3d44c90da315?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdW1hfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";
	let nameAnsi = "ANSIEDAD";
	let urlAnsi =
		"https://images.unsplash.com/photo-1595178156906-2396ef837b0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YW54aWV0eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";
	let nameStre = "STRESS";
	let urlStre =
		"https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RyZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60";
	let nameDuel = "DUELO";
	let urlDuel =
		"https://images.unsplash.com/photo-1495558685573-aba7573d9c01?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGdyaWVmfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";
	let nameRelac = "RELACIONES";
	let urlRelac =
		"https://images.unsplash.com/photo-1510932742089-bef92acabb5b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmVsYXRpb25zaGlwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";

	// Cometario: Info para tarjetas adicionales
	// let nameViol = "VIOLENCIA DOMESTICA";
	// let urlViol =
	//     "https://images.unsplash.com/photo-1602058176018-7915d6bd37ae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmlvbGVuY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";
	// let nameOtro = "OTRO";
	// let urlOtro =
	//     "https://images.unsplash.com/photo-1577984533103-baf62c6757e6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWluZGZ1bGxuZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";

	return (
		<div className="container">
			<h2 className="text-center">Haga su búsqueda por cualquiera de los siguientes temas</h2>
			<div className="orientacionArticulos">
				<Row>
					<Col xs={4}>
						<Articulo name={nameDepr} url={urlDepr} />
					</Col>
					<Col xs={4}>
						<Articulo name={nameTrau} url={urlTrau} />
					</Col>
					<Col xs={4}>
						<Articulo name={nameAnsi} url={urlAnsi} />
					</Col>
					<Col xs={4}>
						<Articulo name={nameStre} url={urlStre} />
					</Col>
					<Col xs={4}>
						<Articulo name={nameDuel} url={urlDuel} />
					</Col>
					<Col xs={4}>
						<Articulo name={nameRelac} url={urlRelac} />
					</Col>
				</Row>
			</div>
		</div>
	);
};
