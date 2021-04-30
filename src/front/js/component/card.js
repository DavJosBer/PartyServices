import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";

export const Tarjeta = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="col-md-4 mb-3 mb-md-0">
			<Card className="border-0 mt-3">
				<Card.Img variant="top" src={props.service.img} height="180" width="180" />
				<Card.Body
					className="bg-light d-flex justify-content-center align-items-center"
					style={{ height: "250px" }}>
					<div>
						<Card.Title>
							<h2>{props.service.name}</h2>
						</Card.Title>
						<Card.Text>Precio por persona: ₡{props.service.precio}</Card.Text>
						<Link to={`/service/${props.id}`}>
							<Button className="btn btn-dark">Detalles del paquete</Button>
						</Link>
					</div>
				</Card.Body>
			</Card>
		</div>
	);
};
Tarjeta.propTypes = {
	service: PropTypes.object,
	id: PropTypes.number
};
