import React from "react";
import { Link } from "react-router-dom";
import { Col, Card } from "react-bootstrap";
import propTypes from "prop-types";

export const CardExperience = props => {
	return (
		<Col xs={12} md={6} lg={4} className="mt-3">
			<Card className="shadow p-3">
				<div className="row justify-content-center">
					<Card.Img variant="top" src={props.imagen} style={{ width: "300px", height: "250px" }} />
				</div>
				<Card.Header>
					<strong>{props.title}</strong>
				</Card.Header>
				<Card.Body>
					<div className="accordion" id="accordionExample">
						<div className="accordion-item">
							<h2 className="accordion-header" id="headingOne">
								<button
									className="accordion-button"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseOne"
									aria-expanded="true"
									aria-controls="collapseOne">
									Leer más
								</button>
							</h2>
							<div
								id="collapseOne"
								className="accordion-collapse collapse"
								aria-labelledby="headingOne"
								data-bs-parent="#accordionExample">
								<div className="accordion-body">
									<p className="card-text">{props.body}</p>
								</div>
							</div>
						</div>
					</div>
				</Card.Body>
			</Card>
		</Col>
	);
};

CardExperience.propTypes = {
	title: propTypes.string,
	body: propTypes.string,
	imagen: propTypes.string
};
