import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Icono from "../../img/Icono.png";
import { Context } from "../store/appContext";
import { Modal, Button } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [smShow, setSmShow] = useState(false);
	return (
		<nav className="navbar mb-3">
			<Link to="/">
				<span className="tracking-in-expand  navbar-brand mb-0 h1">Clínica de Adolescentes</span>
				<img className="heartbeat" src={Icono} style={{ width: "40px" }} alt="icono" />
			</Link>

			<div className="float-right d-flex flex-row ml-auto">
				{store.token != "" && store.token != null ? (
					<p
						className="linea"
						style={{ color: "#FFD23F", cursor: "pointer" }}
						onClick={() => setSmShow(true)}>
						Cerrar Sesión
					</p>
				) : (
					<>
						<Link to="/iniciosesion">
							<p className="enter">Iniciar Sesión</p>
						</Link>
						<p className="linea"> - </p>
						<Link to="/registro">
							<p className=" regi ">Registrarse</p>
						</Link>
					</>
				)}
			</div>
			<div className=" menu col-12 mr-auto">
				<Link className="menu" to="/orientacion">
					Orientacion
				</Link>
				<Link className="menu" to="/derechos">
					Derechos
				</Link>
				<Link className="menu" to="/expertos">
					Expertos
				</Link>

				<Link className="menu" to="/testimonios">
					Testimonios
				</Link>

				<Link className="menu" to="/reporta">
					Reportar
				</Link>
				{store.token != "" &&
					store.token != null && (
						<Link className="menu" to="/perfil">
							Perfil
						</Link>
					)}
			</div>
			<Modal
				size="sm"
				show={smShow}
				onHide={() => setSmShow(false)}
				aria-labelledby="example-modal-sizes-title-sm">
				<Modal.Header />
				<Modal.Footer>
					<Link to="/">
						<Button
							id="btnCerrarSesion"
							onClick={() => {
								actions.cerrarSesion();
								setSmShow(false);
							}}>
							Cerrar Sesión
						</Button>
					</Link>
				</Modal.Footer>
			</Modal>
		</nav>
	);
};
