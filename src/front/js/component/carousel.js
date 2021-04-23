import React from "react";
import "../../styles/index.scss";

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
				<button
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide-to="3"
					aria-label="Slide 4"
				/>
				<button
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide-to="4"
					aria-label="Slide 5"
				/>
			</div>
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img
						src="https://www.pictoline.com/imgs/2019/08/09/1makoARZZum7KoQwUaTmAoEUCj3u7TilwwhDvA5B.png"
						className="d-block w-100"
						alt="Imagen ausente"
					/>
				</div>
				<div className="carousel-item">
					<img
						src="https://www.pictoline.com/imgs/2021/03/12/ss5rPBOBuWWAXFhG1UJUzmSOzNeA2gLGzXFVnsYb.png"
						className="d-block w-100"
						alt="Imagen ausente"
					/>
				</div>
				<div className="carousel-item">
					<img
						src="https://www.pictoline.com/imgs/2016/03/08/FEMINISMO_SITE.png"
						className="d-block w-100"
						alt="Imagen ausente"
					/>
				</div>
				<div className="carousel-item">
					<img
						src="https://www.pictoline.com/imgs/2018/01/08/a-8.png"
						className="d-block w-100"
						alt="Imagen ausente"
					/>
				</div>
				<div className="carousel-item">
					<img
						src="https://www.pictoline.com/imgs/2021/02/02/AmENrmNweGMWJ8H7bjBJ8LV7XdLoan6KC0vkNiNl.png"
						className="d-block w-100"
						alt="Imagen ausente"
					/>
				</div>
			</div>

			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExampleCaptions"
				data-bs-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true" />
				<span className="visually-hidden">Anterior</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#carouselExampleCaptions"
				data-bs-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true" />
				<span className="visually-hidden">Siguiente</span>
			</button>
		</div>
	);
};
