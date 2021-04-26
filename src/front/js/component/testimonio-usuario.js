import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card, Button, Col } from "react-bootstrap";
export function TestimonioUsuario() {
	const { store, actions } = useContext(Context);
	return (
		<div className="general card  text-left border-light mb-3">
			<div className="card-header">Testimonio</div>
			<div className="card-body">
				{store.datosUsuarioActivo.testimonios.map((dato, index) => {
					return (
						<Card key={index}>
							<Card.Header>
								{dato.fecha}
								<i className="fas fa-trash" />
							</Card.Header>
							<Card.Body>
								<Card.Title>Titulo: {dato.titulo}</Card.Title>
								<Card.Body>
									<Col xs={6} lg={6}>
										{dato.experiencia}
									</Col>
									<Col xs={6} lg={6}>
										<Card.Img style={{ width: "100px" }} src={dato.multimedia} />
									</Col>
								</Card.Body>
							</Card.Body>
						</Card>
					);
				})}
			</div>
		</div>
	);
}
