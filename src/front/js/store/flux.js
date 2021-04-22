const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			datosEspecialistas: [],
			datosRegistro: {
				primer_nombre: "",
				apellidos: "",
				email: "",
				numero_telefonico: "",
				password: "",
				confim_password: ""
			},
			datosInicioSesion: {
				email: "",
				password: ""
			},
			emailCambiarPassword: "",
			codigoCambiarPassword: "",
			redirect: false,
			erroresRegistro: [],
			erroresInicioSesion: [],
            token: sessionStorage.getItem("token") || "",
            emailPassword:"",
            codigoConfirmacionValor:"",
            redirectCodigoConfirmacion:false
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
				console.log(store.datosRegistro);
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
					sessionStorage.setItem("token", datosSolicitud[1].token);
					sessionStorage.setItem("id_usuario", datosSolicitud[1].id_usuario);
					setStore({ ...store, token: datosSolicitud[1].token });
					console.log(datosSolicitud);
				} else if (respuesta.status == "400" || respuesta.status == "401") {
					setStore({ ...store, erroresInicioSesion: datosSolicitud });
				} else {
					console.log("Error inicio sesion ", respuesta.status);
				}
            },
            //Enviar correo para cambiar contraseña--------------------
			onSubmitEmail: async e => {
				e.preventDefault(e);
				const store = getStore();
				console.log(store.emailPassword);
				const respuestaRecuperacion = await fetch(process.env.BACKEND_URL + "/api/recuperarcontraseña", {
					method: "POST",
					body: JSON.stringify({ email: store.emailPassword }),
					headers: {
						"Content-Type": "application/json"
					}
				});
				const datosRespuesta = await respuestaRecuperacion.json();
				if (respuestaRecuperacion.status == "200") {
					console.log(datosRespuesta)
				} else {
					console.error("Error restore password ", respuestaRecuperacion.status);
                }
			},
			codigoConfimacion: async e => {
				const store = getStore();
				e.preventDefault(e);
				console.log(parseInt(store.codigoConfirmacionValor));
				console.log(store.emailRestorePassword);
				const respuesta = await fetch(process.env.BACKEND_URL + "/api/codigo_usuario" + store.emailPassword, {
					method: "POST",
					body: JSON.stringify({ code: parseInt(store.codigoConfirmacionValor) }),
					headers: {
						"Content-Type": "application/json"
					}
				});
				const datosRespuesta = await respuesta.json();
				if (response.status == "200") {
					console.log(datosRespuesta);
					sessionStorage.setItem("user_id", datosRespuesta.id);
					setStore({ ...store, redirectNuevaContraseña: true });
					setStore({ ...store, emailPassword: "" });
				} else if (respuesta.status == "404") {
					setStore({...store,errorCodigoConfirmacion:datosRespuesta.msg})
				} else {
					console.error("Error sending code: ", respuesta.status);
				}
			},
			/// PUT cambiar contraseña
			resetPassword: async e => {
				const store = getStore();
				e.preventDefault(e);
				const response = await fetch(process.env.BACKEND_URL + "users/actualizarcontrasena/" + sessionStorage.getItem("user_id"), {
					method: "PUT",
					body: JSON.stringify({ password: store.resetPasswordInfo }),
					headers: {
						"Content-Type": "application/json"
					}
				});
				const data = await response.json();
				if (response.status == "200") {
					setStore({ ...store, redirectToLogIn: true });
				} else if (response.status == "400" || response.status == "400") {
					alert(data.msg);
				} else {
					console.error("Error reset password", response.status);
				}
			}
		}
		
	};
};

export default getState;
