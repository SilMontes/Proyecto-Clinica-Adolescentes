import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { InicioSesion } from "../pages/inicio-sesion";
import { Registro } from "../pages/registro";
import { HomePage } from "../pages/homePage";
import { Orientacion } from "../pages/orientacion";
import { Derechos } from "../pages/derechos";
import { InformacionEspecialista } from "../pages/informacion-especialista";
import { EmailCambiarContraseña } from "../pages/email-cambiar-contraseña";
import { PaginaExpertos } from "../pages/paginaExpertos";
import { Reporta } from "../pages/reporta";
import { NuevaContraseña } from "../pages/nuevacontraseña";
import { CodigoCambiarContraseña } from "../pages/codigo-cambiar-contraseña";
//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<HomePage />
						</Route>
						<Route exact path="/iniciosesion">
							<InicioSesion />
						</Route>
						<Route exact path="/registro">
							<Registro />
						</Route>
						<Route exact path="/reporta">
							<Reporta />
						</Route>
						<Route exact path="/especialista/:personaid">
							<InformacionEspecialista />
						</Route>
						<Route exact path="/expertos">
							<PaginaExpertos />
						</Route>
						<Route exact path="/derechos">
							<Derechos />
						</Route>
						<Route exact path="/orientacion">
							<Orientacion />
						</Route>
						<Route exact path="/emailcambiarcontraseña">
							<EmailCambiarContraseña />
						</Route>
						<Route exact path="/codigoconfirmacion">
							<CodigoCambiarContraseña />
						</Route>
						<Route exact path="/nuevacontraseña">
							<NuevaContraseña />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
