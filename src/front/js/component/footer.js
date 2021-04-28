import React from "react";
import "../../styles/index.scss";

export const Footer = () => (
	<div className="container-fluid" style={{ marginTop: "1.5rem", paddingRight: "0", paddingLeft: "0" }}>
		<footer className="mt-auto py-3">
			<div className="row d-flex justify-content-center">
				<div className=" footer col-4">
					<h6 className="til" style={{ marginBottom: "14px" }}>
						Sobre Nosotros
					</h6>
					<ul>
						<li>
							{" "}
							<a
								className="abajo"
								target="_blank"
								rel="noopener noreferrer"
								href="https://api.whatsapp.com/send?phone=50689891147">
								Contáctenos
							</a>{" "}
						</li>

						<li>
							<a className="abajo" href="src/front/pages/reporta.js" style={{ marginBottom: "0.75rem" }}>
								Reportá
							</a>
						</li>
						<li>
							<a className="abajo" href="" style={{ marginBottom: "0.75rem" }}>
								Comunidad juventud
							</a>
						</li>
						<li>
							{" "}
							<a className="abajo" href="" style={{ marginBottom: "0.75rem" }}>
								Clínicas cercanas
							</a>
						</li>
					</ul>
				</div>
				<div className="footer col-4">
					<h4 className=" titfoo text-center">Clinica de Adolescentes</h4>
					<a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/PANICR/">
						<i className="fab fa-facebook-f" style={{ left: "32%", marginRight: "5px" }} />
						{"  "}
					</a>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.instagram.com/edsexualparatodxs/?hl=es-la">
						<i className="fab fa-instagram" style={{ left: "32%", marginRight: "5px" }} />
						{"  "}
					</a>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.youtube.com/channel/UCdkUfbpaEoYqOMGq7k-iCwA">
						<i className="fab fa-youtube" style={{ left: "32%" }} />
						{"  "}
					</a>
					<br />
					<br />
					<p className="text-center" style={{ marginBottom: "0.75rem" }}>
						©2021 Derechos Reservados.
					</p>
					<p className="text-center" style={{ marginBottom: "0.75rem" }}>
						Hecho por 3m1h Lab Creativo.
					</p>
				</div>
				<div className="footer col-4" />
			</div>
		</footer>
	</div>
);
