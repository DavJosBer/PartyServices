import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card, Button } from "react-bootstrap";

export const Articles = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	console.log(store.favorites);

	let articles = store.favorites;
	let total = [];
	let bigTotal = 0;
	return (
		<>
			<div className="container">
				<div className="row">
					{articles.map((item, index) => (
						<Card className="col-4" style={{ width: "18rem" }} key={index}>
							<Card.Body>
								<Card.Title className="text-success">
									<u>{item.name}</u>
								</Card.Title>
								<Card.Subtitle className="mb-2 text-muted">
									Cantidad de personas: {item.cantidad}
								</Card.Subtitle>
								<Card.Subtitle className="mb-2 text-danger">
									<span className="d-none">{(total[index] = item.precio * item.cantidad)}</span>
									Total: ¢{total[index]}
								</Card.Subtitle>
							</Card.Body>
						</Card>
					))}
				</div>
				<div>
					{total.forEach(element => {
						bigTotal += element;
						return bigTotal;
					})}
					{bigTotal}
				</div>
				<div className="d-flex align-items-center justify-content-center mt-4">
					<Button variant="primary">Proceder al Pago</Button>
				</div>
			</div>
		</>
	);
};
