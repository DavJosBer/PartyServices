import React from "react";
import { Tarjeta } from "../component/card";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Carousel } from "react-bootstrap";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container text-center mt-5">
			<div style={{ height: "1000px" }}>
				<div>
					<h1>Party´s Services</h1>
					{/* <span>{store.token}</span> */}
				</div>
				<Carousel className="m-5">
					<Carousel.Item>
						<img
							className="rounded"
							src="https://i0.wp.com/alquileressanfrancisco.com/wp-content/uploads/2014/08/Catering-Services-1.jpg?ssl=1"
							height="400"
							width="1000"
							alt="First slide"
						/>
						<Carousel.Caption style={{ color: "black" }}>
							<h3>Catering Service</h3>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="rounded"
							src="http://ideasdeeventos.com/wp-content/uploads/2014/12/decoracion-de-fiestas-corporativas-tipo-coctel.jpg"
							height="400"
							width="1000"
							alt="Second slide"
						/>

						<Carousel.Caption>
							<h3>Eventos Temáticos</h3>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="rounded"
							src="https://retroversion.es/wp-content/uploads/2018/04/Claves-para-contratar-a-un-DJ-para-bodas-fiestas-o-eventos-1.png"
							height="400"
							width="1000"
							alt="Third slide"
						/>
						<Carousel.Caption>
							<h3>DJ</h3>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>

				<div>
					<h1>Paquetes Disponibles</h1>
				</div>

				<div className="row mt-5">
					{store.services.map((item, index) => (
						<Tarjeta key={index} id={index} service={item} />
					))}
				</div>
			</div>
		</div>
	);
};
