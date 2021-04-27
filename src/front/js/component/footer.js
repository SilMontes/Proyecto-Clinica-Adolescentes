import React from "react";

export const Footer = () => (
	<div className="container-fluid" style={{ marginTop: "1.5rem", paddingRight: "0", paddingLeft: "0" }}>
		<footer className="mt-auto py-3">
			<div className="row d-flex justify-content-center">
				<div className=" footer col-4">
					<h6 className="abajo" style={{ marginBottom: "0.75rem" }}>
						Sobre Nosotros
					</h6>
					<p className="abajo" style={{ marginBottom: "0.75rem" }}>
						Contáctenos
					</p>
					<p className="abajo" style={{ marginBottom: "0.75rem" }}>
						Reportá
					</p>
					<p className="abajo" style={{ marginBottom: "0.75rem" }}>
						Comunidad juventud
					</p>
					<p className="abajo" style={{ marginBottom: "0.75rem" }}>
						Clínicas cercanas
					</p>
				</div>
				<div className="footer col-4">
					<h4 className=" titfoo text-center">Clinica de Adolescentes</h4>
					<i className="fab fa-facebook-f" target="_blank" href="https://www.facebook.com/PANICR/" />
					<i className="fab fa-instagram" target="_blank" href="" />
					<i className="fab fa-youtube" target="_blank" href="" />
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
