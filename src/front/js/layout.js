import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Derechos } from "./pages/derechos";
import { Single } from "./pages/single";

import injectContext from "./store/appContext";
import { HomePage } from "./pages/homePage";
import { Orientacion } from "./pages/orientacion";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Login } from "./pages/login";
import { Registro } from "./pages/registro";
import { EmailCambiarContraseña } from "./pages/email-cambiar-contraseña";
import { PaginaExpertos } from "./pages/paginaExpertos";

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
						<Route exact path="/reporta">
							<Home />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/registro">
							<Registro />
						</Route>
						<Route exact path="/emailcambiarcontraseña">
							<EmailCambiarContraseña />
						</Route>
						<Route exact path="/paginaexpertos">
							<PaginaExpertos />
						</Route>
						<Route exact path="/derechos">
							<Derechos />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single">
							<Single />
						</Route>
						<Route exact path="/orientacion">
							<Orientacion />
						</Route>
						<Route exact path="/homePage">
							<HomePage />
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
