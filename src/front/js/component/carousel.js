import React from "react";

export const Carousel = () => {
	return (
		<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
			<div className="carousel-indicators">
				<button
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide-to="0"
					className="active"
					aria-current="true"
					aria-label="Slide 1"
				/>
				<button
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide-to="1"
					aria-label="Slide 2"
				/>
				<button
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide-to="2"
					aria-label="Slide 3"
				/>
			</div>
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img
						src="https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVlbmFnZXJzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
						className="d-block w-100"
						alt="..."
					/>
					<div className="carousel-caption d-none d-md-block">
						<h5>Amistad</h5>
						<p>Algún texto representativo del contenido del primer slide.</p>
					</div>
				</div>
				<div className="carousel-item">
					<img
						src="https://images.unsplash.com/photo-1560821818-69db8b3989fd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHRlZW5hZ2Vyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
						className="d-block w-100"
						alt="..."
					/>
					<div className="carousel-caption d-none d-md-block">
						<h5>Relaciones</h5>
						<p>Algún texto representativo del contenido del segundo slide.</p>
					</div>
				</div>
				<div className="carousel-item">
					<img
						src="https://images.unsplash.com/photo-1478061653917-455ba7f4a541?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGZhbWlseSUyMHRvZ2V0aGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
						className="d-block w-100"
						alt="..."
					/>
					<div className="carousel-caption d-none d-md-block">
						<h5>Familia</h5>
						<p>Algún texto representativo del contenido del tercer slide.</p>
					</div>
				</div>
			</div>
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExampleCaptions"
				data-bs-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true" />
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#carouselExampleCaptions"
				data-bs-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true" />
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
};
