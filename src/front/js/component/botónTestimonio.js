import React, { useState, useContext } from "react";
import "../../styles/botonTestimonio.scss";
import { Row, Col, Modal, Button, Form } from "react-bootstrap";
import { Context } from "../../js/store/appContext";
export const BotonTestimonio = () => {
	const { store, actions } = useContext(Context);
	const [modalShow, setModalShow] = useState(false);
	function MyVerticallyCenteredModal(props) {
		return (
			<Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
				<Modal.Header closeButton />
				<Modal.Body>
					<h5>Completa los siguientes campos:</h5>
					<Row className="justify-content-center">
						<form>
							<Form.Row>
								<Col>
									<Form.Control placeholder="titulo" onChange={e => actions.onChangeTestimonio(e)} />
								</Col>
								<Col>
									<Form.Control
										placeholder="multimedia"
										onChange={e => actions.onChangeTestimonio(e)}
									/>
								</Col>
							</Form.Row>
							<label>Experiencia</label>
							<textarea
								className="form-control"
								rows="5"
								id="comment"
								onChange={e => actions.onChangeTestimonio(e)}
							/>
						</form>
					</Row>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={props.onHide}>Close</Button>
					<Button onClick={props.onHide}>Enviar</Button>
				</Modal.Footer>
			</Modal>
		);
	}
	return (
		<Row className="justify-content-center">
			<button className="bubbly-button" onClick={() => setModalShow(true)}>
				<span>
					<i className="fas fa-heart" style={{ color: "white", left: "0%" }} />{" "}
				</span>
				<span>¡Cuentanos tu experiencia!</span>{" "}
				<span>
					<i className="fas fa-heart" style={{ color: "white", left: "0%" }} />
				</span>
			</button>
			<MyVerticallyCenteredModal
				show={modalShow}
				onHide={() => setModalShow(false)}
				backdrop="static"
				keyboard={false}
			/>
		</Row>
	);
};
