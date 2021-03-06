import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar, Image, Nav, DropdownButton, ButtonGroup, Button, Dropdown, Badge } from "react-bootstrap";
import { Login_user } from "../component/login";
import { SignUp } from "../component/signup";
import PropTypes from "prop-types";

const DropItem = props => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="mt-2 border-bottom">
				<a className="dropdown-item d-inline">
					{props.cantidad} {props.name} ¢{props.precio}
				</a>
				<i className="fas fa-trash d-inline" onClick={() => actions.removeFav(props.id)} />
			</div>
		</>
	);
};
DropItem.proptypes = {
	name: PropTypes.string,
	id: PropTypes.number,
	precio: PropTypes.number,
	index: PropTypes.number,
	cantidad: PropTypes.number
};

export const Navbar_main = () => {
	const { store, actions } = useContext(Context);
	let num = store.favorites.length;
	return (
		<Navbar className="container">
			<Navbar.Brand>
				<Link to="/">
					<Image src="https://image.flaticon.com/icons/png/512/34/34859.png" height="60" alt="party" />
				</Link>
			</Navbar.Brand>

			<Nav className="mr-auto">
				<Link className="nav-link" to="/acerca">
					Acerca de nosotros
				</Link>
				<Link className="nav-link" to="/contacto">
					Contáctanos
				</Link>
				{store.administrador ? (
					<Nav>
						<Link className="nav-link" to="/admin">
							Módulo de Administración
						</Link>
					</Nav>
				) : null}
			</Nav>
			<Nav className="mr-sm-2">
				{store.token === null ? (
					<>
						<Login_user />
						<SignUp />
					</>
				) : (
					<Button variant="danger" onClick={() => actions.sign_out()}>
						Cerrar Sesión
					</Button>
				)}
			</Nav>
			<div className="bg-dark d-flex align-items-center justify-content-center px-1 rounded">
				<Link to="/articles">
					<i className="fas fa-shopping-cart pl-1 text-light" />
				</Link>
				<div className="dropdown">
					<button
						className="btn btn-dark py-2 dropdown-toggle d-flex justify-content-between align-items-center"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						<span className="badge badge-light ml-2">{num}</span>
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						{store.favorites.map((item, index) => (
							<DropItem
								key={index}
								name={item.name}
								id={item.id}
								precio={item.precio}
								cantidad={item.cantidad}
							/>
						))}
					</div>
				</div>
			</div>
		</Navbar>
	);
};
