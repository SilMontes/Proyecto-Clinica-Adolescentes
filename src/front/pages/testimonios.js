import React, { useEffect, useContext, useState } from "react";
import { CardExperience } from "../js/component/cardExperience";
import { Container, Row, Col } from "react-bootstrap";
import { Context } from "../js/store/appContext";
import "../styles/botonTestimonio.scss";
import Swal from "sweetalert2";
export const Testimonios = () => {
	const { store, actions } = useContext(Context);
	const [mostrarForm, setMostrarForm] = useState(false);
	useEffect(() => {
		(store.alertatestimonio = ""), (store.errortestimonio = "");
		actions.obtenerTestimonios();
	}, []);
	useEffect(
		() => {
			if (store.alertatestimonio != "") {
				Swal.fire({
					title: store.alertatestimonio,
					showClass: {
						popup: "animate__animated animate__fadeInDown"
					},
					hideClass: {
						popup: "animate__animated animate__fadeOutUp"
					},
					imageUrl:
						"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTgJeQFCfNWw9-UPG3J6zGpgwjTP3Jr6Xlyg&usqp=CAU",
					imageWidth: 300,
					imageHeight: 150,
					imageAlt: "Custom image",
					timer: 2000
				});
				setMostrarForm(false);
			} else if (store.errortestimonio != "") {
				Swal.fire({
					title: "Oops...",
					text: store.errortestimonio,
					timer: 3000
				});
			}
		},
		[store.errortestimonio, store.alertatestimonio]
	);
	function alerta() {
		Swal.fire({
			text: "Debe iniciar sesión para realizar esa acción",
			timer: 3000,
			confirmButtonText: "Ok"
		});
	}
	return (
		<Container fluid className="m-0 row justify-content-center align-items-center">
			<div className="row justify-content-center">
				<Col xs={11} md={7} lg={4}>
					{store.token != "" && store.token != null ? (
						<Row className="justify-content-center">
							<button className="bubbly-button" onClick={() => setMostrarForm(true)}>
								<span className="expe">¡Cuentanos tu experiencia!</span>{" "}
							</button>
						</Row>
					) : (
						<Row className="justify-content-center">
							<button className="bubbly-button" onClick={alerta}>
								<span className="expe">¡Cuentanos tu experiencia!</span>{" "}
							</button>
						</Row>
					)}
				</Col>
			</div>
			{mostrarForm && (
				<div className=" testimonio row justify-content-center">
					<Col>
						<Row className="justify-content-center">
							<div>
								<label className="field">Elige un titulo</label>
								<input
									placeholer="Titulo"
									name="titulo"
									onChange={e => actions.onChangeTestimonio(e)}
								/>
							</div>
							<div>
								<label className="field">
									Agrega una imagen{" "}
									<span className="text-muted">
										* Si completa este campo, añadiremos una imagen predeterminada
									</span>
								</label>
								<input
									placeholer="Imagen"
									name="multimedia"
									onChange={e => actions.onChangeTestimonio(e)}
								/>
							</div>
							<div>
								<label className="field">Cuenta tu experincia</label>
								<textarea
									className="form-control"
									rows="5"
									id="comment"
									name="experiencia"
									onChange={e => actions.onChangeTestimonio(e)}
								/>
							</div>
							<div>
								<button className="testi btn" onClick={() => setMostrarForm(false)}>
									Cancelar
								</button>
								<button className="testi btn" onClick={e => actions.onSubmitNuevoTestimonio(e)}>
									Enviar
								</button>
							</div>
						</Row>
					</Col>
				</div>
			)}
			{store.testimonios.length > 0 &&
				store.testimonios.map((testimonio, index) => {
					return (
						<CardExperience
							key={index}
							title={testimonio.titulo}
							body={testimonio.experiencia + ", " + testimonio.nombre}
							imagen={testimonio.imagen}
						/>
					);
				})}
		</Container>
	);
};
