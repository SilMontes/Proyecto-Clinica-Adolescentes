import React from "react";
import { Button, Card } from "react-bootstrap";
import "../styles/index.scss";

export const Derechos = () => {
	return (
		<div className="container">
			<Card className="derechos" style={{ background: "#FFD23F" }}>
				<Card.Header>
					<strong>CONVENCIÓN SOBRE LOS DERECHOS DEL NIÑO</strong>
				</Card.Header>
				<Card.Body>
					<Card.Text>Se entiende por niño todo ser humano menor de dieciocho años de edad.</Card.Text>
				</Card.Body>
			</Card>
			<br />
			<Card className="shadow p-3">
				<Card.Header>
					<strong>DERECHOS A LA SUPERVIVENCIA Y EL DESARROLLO</strong>
				</Card.Header>
				<Card.Body>
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
				<Button variant="link">
					<a style={{ color: "white" }} href="https://www.unicef.org/spanish/crc/index_30177.html">
						Más información
					</a>
				</Button>{" "}
			</Card>
			<br />
			<Card className="shadow p-3">
				<Card.Header>
					<strong>DERECHOS A LA PROTECCION</strong>
				</Card.Header>
				<Card.Body>
					<Card.Text>
						Estos derechos incluyen la protección contra todo tipo de malos tratos, abandono, explotación y
						crueldad, e incluso el derecho a una protección especial en tiempos de guerra y protección
						contra los abusos del sistema de justicia criminal.
					</Card.Text>
				</Card.Body>
				<Button variant="link">
					<a style={{ color: "white" }} href="https://www.unicef.org/spanish/crc/index_30177.html">
						Más información
					</a>
				</Button>{" "}
			</Card>
			<br />
			<Card className="shadow p-3">
				<Card.Header>
					<strong>DERECHOS A LA PARTICIPACION</strong>
				</Card.Header>
				<Card.Body>
					<Card.Text>
						Los niños y niñas tienen derecho a la libertad de expresión y a expresar su opinión sobre
						cuestiones que afecten su vida social, económica, religiosa, cultural y política. Los derechos a
						la participación incluyen el derecho a emitir sus opiniones y a que se les escuche, el derecho a
						la información y el derecho a la libertad de asociación. El disfrute de estos derechos en su
						proceso de crecimiento ayuda a los niños y niñas a promover la realización de todos sus derechos
						y les prepara para desempeñar una función activa en la sociedad.
					</Card.Text>
				</Card.Body>
				<Button variant="link">
					<a style={{ color: "white" }} href="https://www.unicef.org/spanish/crc/index_30177.html">
						Más información
					</a>
				</Button>{" "}
			</Card>
			<br />
			<Card className="shadow p-3">
				<Card.Header>
					<strong>ENLACES</strong>
				</Card.Header>
				<br />
				<Card.Link a href="https://www.voicesofyouth.org/es/" target="_blank">
					La Juventud Opina
				</Card.Link>{" "}
				<br />
				<Card.Link href="https://pani.go.cr/" target="_blank">
					Patronato Nacional de la Infancia Costa Rica
				</Card.Link>{" "}
				<br />
				<Card.Link a href="https://www.apa.org/centrodeapoyo/sexual/" target="_blank">
					Orientación sexual e identidad de género
				</Card.Link>{" "}
				<br />
				<Card.Link
					href="https://www.ministeriodesalud.go.cr/index.php/centro-de-informacion/derechos-humanos"
					target="_blank">
					Ministerio de Salud Costa Rica
				</Card.Link>{" "}
			</Card>
			<br />
		</div>
	);
};
