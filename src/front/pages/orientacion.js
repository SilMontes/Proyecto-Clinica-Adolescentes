import React, { useEffect } from "react";
import { Row, Col, Container, Modal } from "react-bootstrap";

import { Articulo } from "../js/component/articulo";
import "../styles/orientacion.scss";
import ReactPlayer from "react-player/youtube";

export const Orientacion = () => {
	let namePro = "MÈTODOS DE PROTECCIÓN";
	let urlPro =
		"http://d1poh340f4imgl.cloudfront.net/upload/images/534x326/2014/08/18/ba9f44912b8d8f55ecf94dcb8a56b093_534x326.jpg";

	let nameSana = "VIDA SANA";
	let urlSana = "https://i.blogs.es/ab7714/vida-sana/1366_2000.jpg";

	let nameOri = "ORIENTACIÓN SEXUAL";
	let urlOri = "http://www.colegas.lgbt/wp-content/uploads/2017/04/orientacion-sexual.jpg";

	let nameStre = "RESPETAR MI CUERPO";
	let urlStre =
		"https://media1.popsugar-assets.com/files/thumbor/PKeWcdlaYv9QFAE_LCD1NycVqXU/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2016/08/31/604/n/1922564/32f9a8f8981e36ac_allwoman-4177-2/i/All-Woman-Project-IAmAllWoman-Campaign-Photos.jpg";

	let namePlan = "APRENDE A PLANIFICAR";
	let urlPlan = "https://blog.lactapp.es/wp-content/uploads/belly-3186730_1280-1038x576.jpg";

	let nameRela = "ACLARA DUDAS SOBRE RELACIONES";
	let urlRela =
		"https://quierocuidarme.dkvsalud.es/sites/default/files/styles/vivelasalud_ficha_825x464/public/imagen/2017-03/shutterstock_304744727_0.jpg?h=a0bb56d3&itok=HZPM5zW6";

	let nameTrans = "TRANSMISIONES SEXUALES";
	let urlTrans = "https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2019/10/31/herpes-boca.jpeg";

	let nameCons = "CONSECUENCIAS DE MIS ACTOS";
	let urlCons = "https://d1lofqbqbj927c.cloudfront.net/monumental/2019/07/18104143/580558_625808.jpg";

	useEffect(() => {
		const script = document.createElement("script");

		script.src = "https://cse.google.com/cse.js?cx=9db2f417abda91cc5";
		script.async = true;
		document.body.appendChild(script);
	}, []);

	return (
		<div className="orientacionArticulos">
			<Row>
				<Col lg={4}>
					<button
						className=" search-button fas fa-search"
						data-bs-toggle="offcanvas"
						data-bs-target="#offcanvasWithBothOptions"
						aria-controls="offcanvasWithBothOptions">
						Búsqueda
					</button>

					<div
						className="offcanvas offcanvas-start"
						data-bs-scroll="true"
						tabIndex="-1"
						id="offcanvasWithBothOptions"
						aria-labelledby="offcanvasWithBothOptionsLabel">
						<div className="offcanvas-header">
							<h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
								Realice su búsqueda con los temas mostrados anteriormente
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
				<Col lg={3}>
					<Articulo name={namePro} url={urlPro} />
				</Col>
				<Col lg={3}>
					<Articulo name={nameSana} url={urlSana} />
				</Col>
				<Col lg={3}>
					<Articulo name={nameOri} url={urlOri} />
				</Col>
				<Col lg={3}>
					<Articulo name={nameStre} url={urlStre} />
				</Col>
				<Col lg={3}>
					<Articulo name={namePlan} url={urlPlan} />
				</Col>
				<Col lg={3}>
					<Articulo name={nameRela} url={urlRela} />
				</Col>
				<Col lg={3}>
					<Articulo name={nameTrans} url={urlTrans} />
				</Col>
				<Col lg={3}>
					<Articulo name={nameCons} url={urlCons} />
				</Col>

				<Col lg={6}>
					<iframe
						width="560"
						height="315"
						src="https://www.youtube.com/embed/9LF7GjEwc2A"
						title="YouTube video player"
						frameBorder="0"
						allowFullScreen="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					/>
					;
				</Col>
				<Col lg={6}>
					<iframe
						width="560"
						height="315"
						src="https://www.youtube.com/embed/k3QfxGfRaUE"
						title="YouTube video player"
						frameBorder="0"
						allowFullScreen="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					/>
					;
				</Col>
				<Col lg={6}>
					<iframe
						width="560"
						height="315"
						src="https://www.youtube.com/embed/8-LdgyEOjxQ"
						title="YouTube video player"
						frameBorder="0"
						allowFullScreen="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					/>
					;
				</Col>
				<Col lg={6}>
					<iframe
						width="560"
						height="315"
						src="https://www.youtube.com/embed/rbLIV7xFfSo"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					/>
					;
				</Col>
			</Row>
		</div>
	);
};
