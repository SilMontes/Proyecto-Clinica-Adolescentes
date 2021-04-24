import React, { useEffect, useContext } from "react";
import { CardExperience } from "../js/component/cardExperience";
import { Container, Row, Col } from "react-bootstrap";
import { Context } from "../js/store/appContext";
import { BotonTestimonio } from "../js/component/botónTestimonio";
export const Testimonios = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.obtenerTestimonios();
	}, []);
	return (
		<Container fluid className="m-0 row justify-content-center align-items-center">
			<div className="row justify-content-center">
				<Col xs={11} md={7} lg={4}>
					<BotonTestimonio />
				</Col>
			</div>
			{store.testimonios.length > 0 &&
				store.testimonios.map((testimonio, index) => {
					console.log(testimonio.multimedia);
					return (
						<CardExperience
							key={index}
							title={testimonio.titulo}
							body={testimonio.experiencia}
							imagen={testimonio.imagen}
						/>
					);
				})}
		</Container>
	);
};
