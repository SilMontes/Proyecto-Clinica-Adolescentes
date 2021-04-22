import React, { useEffect } from "react";

import { Row, Col, Modal } from "react-bootstrap";
import { Articulo } from "../js/component/articulo";
import "../styles/orientacion.scss";
import ReactPlayer from "react-player/youtube";

export const Orientacion = () => {
	useEffect(() => {
		const script = document.createElement("script");

		script.src = "https://cse.google.com/cse.js?cx=9db2f417abda91cc5";
		script.async = true;
		document.body.appendChild(script);
	}, []);

	return (
		<div className="orientacionArticulos">
			<Row>
				<Col xs={4}>
					<button
						className="btn btn-primary"
						type="button"
						data-bs-toggle="offcanvas"
						data-bs-target="#offcanvasWithBothOptions"
						aria-controls="offcanvasWithBothOptions">
						Busqueda
					</button>
					<div
						className="offcanvas offcanvas-start"
						data-bs-scroll="true"
						tabIndex="-1"
						id="offcanvasWithBothOptions"
						aria-labelledby="offcanvasWithBothOptionsLabel">
						<div className="offcanvas-header">
							<h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
								Realice su busqueda con los temas mostrados anteriormente
							</h5>
							<button
								type="button"
								className="btn-close text-reset"
								data-bs-dismiss="offcanvas"
								aria-label="Close"
							/>
						</div>
						<div className="offcanvas-body">
							<div>
								<div style={{ border: "1px solid blue" }} autoComplete="true">
									<div className="gcse-search" />
								</div>
							</div>
						</div>
					</div>
				</Col>
			</Row>
			<Row>
				<Col xs={4}>
					<Articulo />
				</Col>

				<Col xs={4}>
					<Articulo />
				</Col>

				<Col xs={4}>
					<Articulo />
				</Col>

				<Col xs={4}>
					<Articulo />
				</Col>

				<Col xs={4}>
					<Articulo />
				</Col>

				<Col xs={4}>
					<Articulo />
				</Col>
			</Row>
		</div>
	);
};
