import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<div className="col-6">
				<img
					src="https://staticr1.blastingcdn.com/media/photogallery/2018/5/1/660x290/b_502x220/who-originally-said-im-not-a-doctor-but-i-play-one-on-tv-mentalflosscom_1965501.jpg"
					className="especialista  rounded-circle"
				/>
				<div className=" titulo col-6">
					<h1>Especialista</h1>
				</div>
			</div>

			<div className="container-fluid">
				<div className="general card  border-light mb-3">
					<div className="card-header">Informacion General</div>
					<div className="card-body">
						<p clasName="card-text">
							Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de
							tipografías
						</p>
					</div>
				</div>

				<div className="general  card border-light mb-3">
					<div className="card-header">Header</div>
					<div className="card-body">
						<ul>
							<li>Area</li>
							<li>Area</li>
							<li>Area</li>
						</ul>
					</div>
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
