import React from "react";
import { Link } from "react-router-dom";
export const CardExpertos = () => {
	return (
		<React.Fragment>
			<div className="experto-card">
				<div className="photocontainer">
					<div className="photo-experto" />
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfCDIA77zO5QDN1sPSvIUBZbuFU_-hmMOpLQ&usqp=CAU" />
				</div>
				<div className="descriptionexperto">
					<h1>Lorem ipsum dolor sit amet</h1>
					<h2>Lorem ipsum dolor sit amet</h2>
					<p>
						{" "}
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati
						enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.
					</p>
					<p className="read-more-experto">
						<Link to="#">
							<button>Más información</button>
						</Link>
					</p>
				</div>
			</div>
		</React.Fragment>
	);
};
