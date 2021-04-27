import React from "react";
import { Link } from "react-router-dom";
export const Card = () => {
	return (
		<>
			<div className="row w-100">
				<div className="col-12 col-sm-6 col-md-3 px-0">
					<img
						src="https://i.pinimg.com/originals/19/87/90/198790eb7e08830027c1ae1686496c72.png"
						alt="Mike Anamendolla"
						className="rounded-circle mx-auto d-block img-fluid"
					/>
				</div>
				<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
					<div className=" float-right">
						<span>
							<Link to={"/iniciosesion"}>
								<i className="fas fa-info-circle" />
							</Link>
						</span>

						<span>
							<i className="fas fa-trash-alt" />
						</span>
					</div>
					<label className="name lead">okonov pbgr</label>
					<br />
					<span className="text-muted">nfpnwrgbprjghebhnh6</span>
					<br />
					<br />
					<p className="text-muted">
						Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de
						tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto
						fina
					</p>
					<br />
					<span
						className="fa fa-phone fa-fw text-muted mr-3"
						data-toggle="tooltip"
						title=""
						data-original-title="(870) 288-4149"
					/>
					<span className="text-muted small">knvb0gbrent</span>
					<br />
				</div>
			</div>
			<div className="row w-100">
				<div className="col-12 col-sm-6 col-md-3 px-0">
					<img
						src="https://i.pinimg.com/originals/19/87/90/198790eb7e08830027c1ae1686496c72.png"
						alt="Mike Anamendolla"
						className="rounded-circle mx-auto d-block img-fluid"
					/>
				</div>
				<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
					<div className=" float-right">
						<span>
							<Link to={"/iniciosesion"}>
								<i className="fas fa-info-circle" />
							</Link>
						</span>

						<span>
							<i className="fas fa-trash-alt" />
						</span>
					</div>
					<label className="name lead">okonov pbgr</label>
					<br />
					<span className="text-muted">nfpnwrgbprjghebhnh6</span>
					<br />
					<br />
					<p className="text-muted">
						Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de
						tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto
						fina
					</p>
					<br />
					<span
						className="fa fa-phone fa-fw text-muted mr-3"
						data-toggle="tooltip"
						title=""
						data-original-title="(870) 288-4149"
					/>
					<span className="text-muted small">knvb0gbrent</span>
					<br />
				</div>
			</div>
		</>
	);
};
