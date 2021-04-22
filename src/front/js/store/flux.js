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
			codigoCambiarPassword: "",
			redirect: false,
			erroresRegistro: [],
			token: sessionStorage.getItem("token") || ""
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
					setStore({ ...store, redirect: true });
				} else if (respuesta.status == "400" || respuesta.status == "401") {
					setStore({ ...store, erroresRegistro: datosRespuesta });
				} else {
					console.error(respuesta.status);
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
					sessionStorage.setItem("token", responseData[1].token);
					sessionStorage.setItem("id_usuario", responseData[1].id_usuario);
					setStore({ ...store, token: responseData[1].token });
				} else if (respuesta.status == "400" || respuesta.status == "401") {
					setStore({ ...store, erroresInicioSesion: datosSolicitud });
				} else {
					console.log("Error inicio sesion ", respuesta.status);
				}
			}
		}
	};
};

export default getState;
