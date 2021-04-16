import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Container, Button, Card } from "react-bootstrap";

// import "../../styles/demo.scss";

export const Derechos = () => {
	return (
		<div className="container">
			<Card border="secondary" style={{ width: "auto" }}>
				<Card.Header>
					<strong>CONVENCIÓN SOBRE LOS DERECHOS DEL NIÑO</strong>
				</Card.Header>
				<Card.Body style={{ background: "rgb(192, 201, 190)" }}>
					<Card.Text>Se entiende por niño todo ser humano menor de dieciocho años de edad.</Card.Text>
				</Card.Body>
			</Card>
			<br />
			<Card border="secondary" style={{ width: "auto" }}>
				<Card.Header>
					<strong>DERECHOS A LA SUPERVIVENCIA Y EL DESARROLLO</strong>
				</Card.Header>
				<Card.Body style={{ background: "rgb(192, 201, 190)" }}>
					<Card.Text>
						Estos son derechos a los recursos, las aptitudes y las contribuciones necesarias para la
						supervivencia y el pleno desarrollo del niño. Incluyen derechos a recibir una alimentación
						adecuada, vivienda, agua potable, educación oficial, atención primaria de la salud, tiempo libre
						y recreación, actividades culturales e información sobre los derechos. Estos derechos exigen no
						solamente que existan los medios para lograr que se cumplan, sino también acceso a ellos. Una
						serie de artículos específicos abordan las necesidades de los niños y niñas refugiados, los
						niños y niñas con discapacidades y los niños y niñas de los grupos minoritarios o indígenas.
					</Card.Text>
				</Card.Body>
				<Button variant="link" style={{ background: "rgb(192, 201, 190)" }}>
					<a href="https://www.unicef.org/spanish/crc/index_30177.html">Más información</a>
				</Button>{" "}
			</Card>
			<br />
			<Card border="secondary" style={{ width: "auto" }}>
				<Card.Header>
					<strong>DERECHOS A LA PROTECCION</strong>
				</Card.Header>
				<Card.Body style={{ background: "rgb(192, 201, 190)" }}>
					<Card.Text>
						Estos derechos incluyen la protección contra todo tipo de malos tratos, abandono, explotación y
						crueldad, e incluso el derecho a una protección especial en tiempos de guerra y protección
						contra los abusos del sistema de justicia criminal.
					</Card.Text>
				</Card.Body>
				<Button variant="link" style={{ background: "rgb(192, 201, 190)" }}>
					<a href="https://www.unicef.org/spanish/crc/index_30177.html">Más información</a>
				</Button>{" "}
			</Card>
			<br />
			<Card border="secondary" style={{ width: "auto" }}>
				<Card.Header>
					<strong>DERECHOS A LA PARTICIPACION</strong>
				</Card.Header>
				<Card.Body style={{ background: "rgb(192, 201, 190)" }}>
					<Card.Text>
						Los niños y niñas tienen derecho a la libertad de expresión y a expresar su opinión sobre
						cuestiones que afecten su vida social, económica, religiosa, cultural y política. Los derechos a
						la participación incluyen el derecho a emitir sus opiniones y a que se les escuche, el derecho a
						la información y el derecho a la libertad de asociación. El disfrute de estos derechos en su
						proceso de crecimiento ayuda a los niños y niñas a promover la realización de todos sus derechos
						y les prepara para desempeñar una función activa en la sociedad.
					</Card.Text>
				</Card.Body>
				<Button variant="link" style={{ background: "rgb(192, 201, 190)" }}>
					<a href="https://www.unicef.org/spanish/crc/index_30177.html">Más información</a>
				</Button>{" "}
			</Card>
			<br />
			<Card border="secondary" style={{ width: "auto" }}>
				<Card.Header>
					<strong>ENLACES</strong>
				</Card.Header>
				<Button variant="link" style={{ background: "rgb(192, 201, 190)" }}>
					<a href="https://www.voicesofyouth.org/es/">La Juventud Opina</a>
				</Button>{" "}
				<br />
				<Button variant="link" style={{ background: "rgb(192, 201, 190)" }}>
					<a href="https://pani.go.cr/">Patronato Nacional de la Infancia Costa Rica</a>
				</Button>{" "}
			</Card>
			<br />
		</div>
	);
};
