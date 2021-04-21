const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			datosEspecialistas: [],
			datosRegistro: {
				primer_nombre: "",
				apellidos: "",
				email: "",
				numero_telefonico: "",
				password: ""
			},
			datosInicioSesion: {
				email: "",
				password: ""
			},
			emailCambiarPassword: "",
			codigoCambiarPassword: ""
		},
		actions: {
			//---------------------------- OBTENER ESPECIALISTAS ------------------------------------
			obtenerEspecialistas: async () => {
				const store = getStore();
				const respuesta = await fetch(process.env.BACKEND_URL + "/api/especialistas", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				});
				const datosRespuesta = await respuesta.json();
				if (respuesta.status == "200") {
					setStore({ ...store, datosEspecialistas: datosRespuesta });
				} else {
					console.error("Hubo un error al tratar de obtener los especialistas", respuesta.status);
				}
			},
			/// Valor inputs RESGISTRO
			onChangeRegistro: e => {
				const store = getStore();
				const { datosRegistro } = store;
				datosRegistro[e.target.name] = e.target.value;
				setStore({ datosRegistro });
				console.log(store.datosRegistro);
			},
			/// SOLICITUD POST REGISTRO
			onSubmitRegistro: async e => {
				e.preventDefault(e);
				const store = getStore();
				const respuesta = await fetch(process.env.BACKEND_URL + "/api/registrarse", {
					method: "POST",
					body: JSON.stringify(store.datosRegistro),
					headers: {
						"Content-Type": "application/json"
					}
				});
				const datosRespuesta = await respuesta.json();
				if (respuesta.status == "200") {
					return datosRespuesta;
				} else if (respuesta.status == "400" || respuesta.status == "401") {
					console.log(datosRespuesta);
					//throw validacionErrores(datosRespuesta || ["Hubo un error registrandose"]);
				} else {
					//throw Error(respuesta.status);
					console.error("Error ", respuesta.status);
				}
			},
			/// Valor input INICIO SESION
			onChangeInicioSesion: e => {
				const store = getStore();
				const { datosInicioSesion } = store;
				datosInicioSesion[e.target.name] = e.target.value;
				setStore({ datosInicioSesion });
			},
			/// SOLICITUS POST INICIO SESION
			onSubmitInicioSesion: async e => {
				e.preventDefault(e);
				const store = getStore();
				const respuesta = await fetch(process.env.BACKEND_URL + "/api/iniciosesion", {
					method: "POST",
					body: JSON.stringify(store.datosInicioSesion),
					headers: {
						"Content-Type": "application/json"
					}
				});
				const datosSolicitud = await respuesta.json();
				if (respuesta.status == "200") {
					return datosSolicitud;
				} else if (respuesta.status == "400" || respuesta.status == "401") {
					console.log(datosSolicitud);
					//throw validacionErrores(datosSolicitud || ["Hubo un error iniciando sesión"]);
				} else {
					//throw Error(respuesta.status);
					console.error("Error ", respuesta.status);
				}
			}
		}
	};
};
const validacionErrores = listaErrers => {
	return {
		errores: listaErrers
	};
};
export default getState;
