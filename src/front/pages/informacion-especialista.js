import React from "react";
import "../styles/index.scss";

export const InformacionEspecialista = () => {
	return (
		<div className=" expertos container">
			<div className="row">
				<div className="col-md-6">
					<img
						className="especialista rounded-circle float-right"
						src="https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
					/>
				</div>
				<div className="col-md-6">
					<h1 className="titulo">Especialista</h1>
				</div>
			</div>

			<div className="general card  text-left border-light mb-3">
				<div className="card-header">Informacion General</div>
				<div className="card-body">
					<p clasName="card-text">
						Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de
						tipografías
					</p>
				</div>
			</div>

			<div className="general text-left  card border-light mb-3">
				<div className="card-header">Areaas de Especialización</div>
				<div className="card-body">
					<ul>
						<li>Area</li>
						<li>Area</li>
						<li>Area</li>
					</ul>
				</div>
			</div>

			<a
				href="https://api.whatsapp.com/send?phone=5195508107&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202."
				className="float">
				<i className="fab fa-whatsapp" />
			</a>
		</div>
	);
};
