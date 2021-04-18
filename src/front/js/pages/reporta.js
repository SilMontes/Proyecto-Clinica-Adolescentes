import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.scss";

export const reportar = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="row">
				<div>
					<h1 className="reporta">Reportá</h1>

					<p className="text-center">
						Denuncie situaciones de Violencia, acoso u abuso sexuales al Servicio de Emergencia. Desde este
						servicio, se da atención de todos aquellos incidentes de emergencia y consulta sobre violencia.
						En este servicio Llámenos: 2295-3000
					</p>

					<button  type="button" >Llámenos</button>
				</div>

				<div className="form-group"> 
                    <form>
                         <label for="comment">Mensaje:</label>
                         <textarea className="form-control" rows="5" id="comment"></textarea>
                         <button type="submit" className="btn btn-primary">Cancel</button>
                         <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
			</div>
		</div>
        </div>
	);
};
