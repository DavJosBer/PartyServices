import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";

export const Tarjeta = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="col-3">
			<Card
				className="h-100 border-0 rounded"
				style={{ background: "none", height: "400px", width: "400px", display: "inline-block" }}>
				<div className="">
					<Card.Img
						variant="top"
						src="https://static.smalljoys.me/2020/07/2527082_cumplea%C3%B1os-123_1594326555.jphttps://faros.hsjdbcn.org/sites/default/files/styles/shareimg/public/fiesta-discoteca-adolescente.jpg?itok=HOauEZXk"
						height="180"
						width="180"
					/>
					<Card.Body
						className="bg-light d-flex flex-column justify-content-between"
						style={{ height: "250px" }}>
						<div>
							<Card.Title>
								<h2>{props.service.name}</h2>
							</Card.Title>
							<Card.Text>Precio por persona: ₡{props.service.precio}</Card.Text>
						</div>
						<Link to={`/service/${props.id}`}>
							<Button className="btn btn-dark">Detalles del paquete</Button>
						</Link>
					</Card.Body>
				</div>
			</Card>
		</div>
	);
};
Tarjeta.propTypes = {
	service: PropTypes.object,
	id: PropTypes.number
};
