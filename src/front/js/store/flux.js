const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			datosEspecialistas: [],
			datosRegistro: {
				primer_nombre: "",
				apellidos: "",
				email: "",
				numero_telefonico: "",
				contraseña: "",
				confirmar_Contraseña: ""
			},
			datosInicioSesion: {
				email: "",
				contraseña: ""
			},
			codigoCambiarContraseña: "",
			redirect: false,
			erroresRegistro: [],
			erroresInicioSesion: [],
			token: sessionStorage.getItem("token") || "",
			emailContraseña: "",
			redirectCodigoConfirmacion: false,
			redirectNuevaContraseña: false,
			nuevaContraseñaDatos: {
				nuevaContraseña: "",
				confirmarNuevaContraseña: ""
			},
			erroresEmailContraseña: "",
			erroresCodigoContraseña: "",
			erroresNuevaContraseña: "",
			testimonios: [],
			datosTestimonio: {
				experiencia: "",
				titulo: "",
				multimedia: ""
			},
			alertatestimonio: "",
			errortestimonio: "",
			datosCambiarContraseña: {
				nueva: "",
				actualContraseña: "",
				confirmarContraseña: ""
			},
			datosUsuarioActivo: [],
			comentarioUsuario: [],
			testimonioUsuario: [],
			errorCambiarContraseña: "",
			errorEditarPerfil: [],
			correcto: false
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
			cerrarSesion: () => {
				const store = getStore();
				sessionStorage.removeItem("token");
				sessionStorage.removeItem("nombre");
				sessionStorage.removeItem("user_id");
				setStore({ ...store, token: "" });
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
					sessionStorage.setItem("token", datosSolicitud[1].token);
					sessionStorage.setItem("user_id", datosSolicitud[1].id_usuario);
					sessionStorage.setItem("nombre", datosSolicitud[1].nombre);
					setStore({ ...store, token: datosSolicitud[1].token });
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
				const respuestaRecuperacion = await fetch(process.env.BACKEND_URL + "/api/recuperarcontraseña", {
					method: "POST",
					body: JSON.stringify({ email: store.emailContraseña }),
					headers: {
						"Content-Type": "application/json"
					}
				});
				const datosRespuesta = await respuestaRecuperacion.json();
				if (respuestaRecuperacion.status == "200") {
					setStore({ ...store, redirectCodigoConfirmacion: true });
					setStore({ ...store, erroresEmailContraseña: "" });
				} else if (respuestaRecuperacion.status == "400") {
					setStore({ ...store, erroresEmailContraseña: datosRespuesta });
				} else {
					console.error("Error email Contraseña ", respuestaRecuperacion.status);
				}
			},
			codigoConfimacion: async e => {
				const store = getStore();
				e.preventDefault(e);
				setStore({ ...store, erroresCambiarContraseña: "" });
				const respuesta = await fetch(
					process.env.BACKEND_URL + "/api/codigo_usuario/" + store.emailContraseña,
					{
						method: "POST",
						body: JSON.stringify({ codigo: parseInt(store.codigoCambiarContraseña) }),
						headers: {
							"Content-Type": "application/json"
						}
					}
				);
				const datosRespuesta = await respuesta.json();
				if (respuesta.status == "200") {
					sessionStorage.setItem("user_id", datosRespuesta.id);
					setStore({ ...store, redirectNuevaContraseña: true });
					setStore({ ...store, emailContraseña: "" });
					setStore({ ...store, erroresCodigoContraseña: "" });
				} else if (respuesta.status == "404") {
					setStore({ ...store, erroresCodigoContraseña: datosRespuesta.msg });
				} else {
					console.error("Error sending code: ", respuesta.status);
				}
			},
			onChangeNuevaContraseña: e => {
				const store = getStore();
				const { nuevaContraseñaDatos } = store;
				nuevaContraseñaDatos[e.target.name] = e.target.value;
				setStore({ nuevaContraseñaDatos });
			},
			/// PUT cambiar contraseña
			crearNuevaContraseña: async e => {
				const store = getStore();
				e.preventDefault(e);
				setStore({ ...store, redirect: false });
				setStore({ ...store, erroresNuevaContraseña: "" });
				const response = await fetch(
					process.env.BACKEND_URL + "/api/usuario/nuevacontraseña/" + sessionStorage.getItem("user_id"),
					{
						method: "PUT",
						body: JSON.stringify(store.nuevaContraseñaDatos),
						headers: {
							"Content-Type": "application/json"
						}
					}
				);
				const datosRespuesta = await response.json();
				if (response.status == "200") {
					setStore({ ...store, redirect: true });
					setStore({ ...store, erroresNuevaContraseña: "" });
				} else if (response.status == "400" || response.status == "404") {
					setStore({ ...store, erroresNuevaContraseña: datosRespuesta.msg });
				} else {
					console.error("Error reset Contraseña", response.status);
				}
			},
			// GET TESTIMONIOS
			obtenerTestimonios: async () => {
				const store = getStore();
				const respuesta = await fetch(process.env.BACKEND_URL + "/api/testimonios");
				const datosRespuesta = await respuesta.json();

				if (respuesta.status == "200") {
					setStore({ ...store, testimonios: datosRespuesta });
				} else {
					console.error("Error al cargar testimonios", datosRespuesta.status);
				}
			},
			onChangeTestimonio: e => {
				e.preventDefault(e);
				const store = getStore();
				const { datosTestimonio } = store;
				datosTestimonio[e.target.name] = e.target.value;
				setStore({ datosTestimonio });
			},
			onSubmitNuevoTestimonio: async e => {
				e.preventDefault(e);
				setStore({ ...store, errortestimonio: "" });
				setStore({ ...store, alertatestimonio: "" });
				const store = getStore();
				const actions = getActions();
				const solicitudTestimonio = await fetch(process.env.BACKEND_URL + "/api/nuevotestimonio", {
					method: "POST",
					body: JSON.stringify(store.datosTestimonio),
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + sessionStorage.getItem("token")
					}
				});
				const datosSolicitudTestimonio = await solicitudTestimonio.json();
				if (solicitudTestimonio.status == "200") {
					actions.obtenerTestimonios();
					setStore({ ...store, alertatestimonio: "por compartir tu testimonio" });
				} else if (
					solicitudTestimonio.status == "400" ||
					solicitudTestimonio.status == "401" ||
					solicitudTestimonio.status == "404"
				) {
					setStore({ ...store, errortestimonio: datosSolicitudTestimonio.msg });
				} else console.error(solicitudTestimonio.status);
			},
			/// Informacion de usuario
			obtenerInformacionusuario: async () => {
				const store = getStore();
				const solicitudInformacionUsuario = await fetch(
					process.env.BACKEND_URL + "/api/usuario/" + sessionStorage.getItem("user_id")
				);
				const datosUsuario = await solicitudInformacionUsuario.json();
				if (solicitudInformacionUsuario.status == "200") {
					setStore({ ...store, datosUsuarioActivo: datosUsuario });
					setStore({ ...store, testimonioUsuario: datosUsuario.testimonios });
					console.log("obtenerInformacionusuario", store.datosUsuarioActivo);
					console.log("test", store.testimonioUsuario);
				} else {
					console.error("Error obtener datos usuario: ", datosUsuario, solicitudInformacionUsuario.status);
				}
			},
			//OBTENER COMENTARIOS DE USUARIO----------------
			obtenerComentariosusuario: async () => {
				const store = getStore();
				const solicitudComentarios = await fetch(process.env.BACKEND_URL + "/api/usuario/obtener_comentarios", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + sessionStorage.getItem("token")
					}
				});
				const comentariosUsuario = await solicitudComentarios.json();
				if (solicitudComentarios.status == "200") {
					setStore({ ...store, comentarioUsuario: comentariosUsuario });
					console.log("obtenerComentariosusuario", store.comentarioUsuario);
				} else {
					console.error("Error al obtener comentarios de usuario: ", solicitudComentarios.status);
				}
			},

			///------------ Cambiar contraseña ------------
			onChangeCambiarContraseña: e => {
				const store = getStore();
				const { datosCambiarContraseña } = store;
				datosCambiarContraseña[e.target.name] = e.target.value;
				setStore({ datosCambiarContraseña });
			},
			onSubmitCambiarContraseña: async e => {
				e.preventDefault(e);
				const store = getStore();
				setStore({ ...store, correcto: false });
				setStore({ ...store, errorCambiarContraseña: "" });
				const cambiarContraseñaSolicitud = await fetch(process.env.BACKEND_URL + "/api/actualizar_contraseña", {
					method: "PUT",
					body: JSON.stringify(store.datosCambiarContraseña),
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + sessionStorage.getItem("token")
					}
				});
				const nuevosDatos = await cambiarContraseñaSolicitud.json();
				if (cambiarContraseñaSolicitud.status == "200") {
					setStore({ ...store, correcto: true });
					setStore({ ...store, errorCambiarContraseña: "" });
				} else if (
					cambiarContraseñaSolicitud.status == "400" ||
					cambiarContraseñaSolicitud.status == "401" ||
					cambiarContraseñaSolicitud.status == "404"
				) {
					setStore({ ...store, errorCambiarContraseña: nuevosDatos.msg });
				} else {
				}
			},
			// ------- MODIFICAR PERFIL -------------------
			onChangePerfil: e => {
				const store = getStore();
				const { datosUsuarioActivo } = store;
				datosUsuarioActivo[e.target.name] = e.target.value;
				setStore({ datosUsuarioActivo });
			},
			onSubmitEditarPerfil: async e => {
				e.preventDefault(e);
				const store = getStore();
				setStore({ ...store, correcto: false });
				setStore({ ...store, errorEditarPerfil: [] });
				const actions = getActions();
				const datosAjustePerfil = {
					primer_nombre: store.datosUsuarioActivo.primer_nombre,
					apellidos: store.datosUsuarioActivo.apellidos,
					email: store.datosUsuarioActivo.email,
					numero_telefonico: store.datosUsuarioActivo.numero_telefonico
				};
				const solicitudEditarperfil = await fetch(process.env.BACKEND_URL + "/api/usuario/ajustes", {
					method: "PUT",
					body: JSON.stringify(datosAjustePerfil),
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + sessionStorage.getItem("token")
					}
				});
				const datos = await solicitudEditarperfil.json();
				if (solicitudEditarperfil.status == "200") {
					actions.obtenerInformacionusuario();
					setStore({ ...store, correcto: true });
					console.log("onSubmitEditarPerfil", store.correcto);
				} else if (solicitudEditarperfil.status == "401" || solicitudEditarperfil.status == "400") {
					setStore({ ...store, errorEditarPerfil: datos });
					console.log("onSubmitEditarPerfilerr", store.errorEditarPerfil);
				} else {
					console.error("Error al editar perfil", solicitudEditarperfil.status);
				}
			}
		}
	};
};

export default getState;
