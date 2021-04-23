import React from "react";
import { CardExperience } from "../js/component/cardExperience";
import { Container, Col, Card } from "react-bootstrap";
export const Testimonios = () => {
	let title1 = "Estar solo tampoco ayuda";
	let text1 =
		"Cuando empecé a desarrollar ansiedad, me sentía excesivamente cohibida en los espacios públicos. Los pensamientos empezaban a correr por mi cabeza y me desorientaba si no podía calmarme. Pronto empecé a experimentar ataques de pánico en el día a día. Mi ansiedad hacía que me diera miedo estar con otros y a veces incluso estar sola, porque estar sola significaba estar a solas con mis pensamientos. Conforme crecí, con la ayuda de un terapeuta, aprendí a lidiar con ello. Todavía tengo malos días, pero ¡ahora sé cómo vivir con ello!” Kloe, 14";

	let title2 = "No debería haber prejuicios";
	let text2 =
		"Mi madre sufre desorden bipolar, ansiedad, depresión y alcoholismo. Cuando empecé la universidad empecé a tener ataques de pánico y de ansiedad, sobre todo después de las elecciones (estudio ciencias políticas), Como estaba familiarizada con las enfermedades mentales, pude darme cuenta de que la ansiedad que sufría no era terrible y recibí la ayuda que necesitaba. Quiero que la gente entienda que no debe haber prejuicios por sufrir de enfermedades mentales, así estas enfermedades podrían ser abordadas y tratadas”. Emily";

	let title3 = "La terapia y la medicación pueden ayudar mucho";
	let text3 =
		"Desarrollé un desorden de ansiedad cuando tenía 14 años. Empecé a sufrir ataques de ansiedad cuando estudiaba para los exámenes de mates. Fui haciendo terapia intermitentemente durante dos años, y hace poco empecé a tomar medicación para la ansiedad que me ha estado ayudando bastante. Me daba miedo tomar medicación porque no quería que me etiquetaran como una loca o que la gente me juzgara por ello. ¡Pero a quién le importa! Mi lucha todavía no ha terminado, pero estoy mucho mejor”. Calista, 16";

	let title4 = "Puede hacer que lo dejes todo";
	let text4 =
		"En 2005 me diagnosticaron una afección estomacal poco común llamada gastroparesis, lo que supone que mis músculos estomacales están básicamente paralizados. Empecé a experimentar fuertes ataques de ansiedad y tenía miedo de tener náuseas en público. Los sentimientos fueron creciendo hasta que dejé la universidad y mi trabajo y me aislé en casa. Finalmente, mi madre me arrastró a ver a un psicólogo que me hacía terapia de dos a tres veces a la semana durante algunos meses  además, un psiquiatra me recetó algunos medicamentos. Sólo han pasado unos meses y ya estoy haciendo cosas que nunca imaginé que haría. He vuelto a la universidad, me he vuelto a enamorar de la comida, Aún sufro ansiedad y todavía tengo algunos días difíciles, pero soy más feliz de lo que he sido nunca. Jessica, 20 ";
	let title5 = "Quizás debas hacer cambios en tu vida para recuperarte";
	let text5 =
		"Debido a mi desorden de bipolaridad que derivó en ansiedad, y tengo que vivir una vida muy estructurada. Tomo mi medicación por la mañana con el desayuno y no me lo puedo saltar ni un día, apenas bebo, y necesito de 8 a 10 horas de sueño cada noche. Solía pensar que me hacía una persona aburrida en comparación con mi anterior estilo de vida, caracterizado por una gran impulsividad, fiesta, bebiendo alcohol y tomando drogas, pero echando la vista atrás estoy significativamente más sana y feliz por los cambios que he hecho. Mis amigos y familia han sido geniales conmigo en cuanto a mi condición, ofreciéndome apoyo y cariño incondicionales y me siento enormemente afortunada por ello. Priya, 22";
	return (
		<Container fluid className="m-0 row justify-content-center align-items-center">
			<CardExperience title={title1} body={text1} />
			<CardExperience title={title2} body={text2} />
			<CardExperience title={title3} body={text3} />
			<CardExperience title={title4} body={text4} />
			<CardExperience title={title5} body={text5} />
		</Container>
	);
};
