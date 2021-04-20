import React from "react";
import "../../styles/articuloStyle.scss";
import { Link } from "react-router-dom";
import { Container, Row, CardDeck, Card } from "react-bootstrap";

export const Articulo = () => {
	return (
		<Container>
			<Row>
				<CardDeck style={{ marginTop: "50px" }}>
					<Card className="card bg-body rounded" style={{ width: "17rem", height: "14rem" }}>
						<Card.Img
							variant="top"
							src="https://images.unsplash.com/photo-1531295915662-53be797fbad5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVwcmVzc2VkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
						/>
						<Card.Body>
							<Card.Title style={{ textAlign: "center" }}>DEPRESIÓN</Card.Title>
							{/* <Card.Text>
								This is a wider card with supporting text below as a natural lead-in to additional
								content. This content is a little bit longer.
							</Card.Text> */}
						</Card.Body>
					</Card>
					<Card className="card bg-body rounded" style={{ width: "17rem", height: "14rem" }}>
						<Card.Img
							variant="top"
							src="https://images.unsplash.com/photo-1520206319821-0496cfdeb31e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGVwcmVzc2VkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
						/>
						<Card.Body>
							<Card.Title style={{ textAlign: "center" }}>TRAUMA</Card.Title>
							{/* <Card.Text>
								This card has supporting text below as a natural lead-in to additional content.{" "}
							</Card.Text> */}
						</Card.Body>
					</Card>
					<Card className="card bg-body rounded" style={{ width: "17rem", height: "14rem" }}>
						<Card.Img
							variant="top"
							src="https://images.unsplash.com/photo-1456162018889-1d2b969f7084?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRlcHJlc3NlZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
						/>
						<Card.Body>
							<Card.Title style={{ textAlign: "center" }}>ANSIEDAD</Card.Title>
							{/* <Card.Text>
								This is a wider card with supporting text below as a natural lead-in to additional
								content. This card has even longer content than the first to show that equal height
								action.
							</Card.Text> */}
						</Card.Body>
					</Card>
					<Card className="card bg-body rounded" style={{ width: "17rem", height: "14rem" }}>
						<Card.Img
							variant="top"
							src="https://images.unsplash.com/photo-1604208485423-f19bc2aaae2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YW54aWV0eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
						/>
						<Card.Body>
							<Card.Title style={{ textAlign: "center" }}>ESTRÉS</Card.Title>
							{/* <Card.Text>
								This is a wider card with supporting text below as a natural lead-in to additional
								content. This card has even longer content than the first to show that equal height
								action.
							</Card.Text> */}
						</Card.Body>
					</Card>
				</CardDeck>
			</Row>
		</Container>
		// <div className="card rounded-start shadow-lg p-3 mb-5 bg-body rounded">
		// 	<h5 className="card-header">Featured</h5>
		// 	<div className="card-body">
		// 		<h5 className="card-title">Special title treatment</h5>
		// 		<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
		// 		<Link to="/demo">
		// 			<button className="btn btn-lg text-white rounded-pill">Learn</button>
		// 		</Link>
		// 	</div>
		// </div>
	);
};
