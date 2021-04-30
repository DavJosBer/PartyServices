import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/acerca.scss";

export const Acerca = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container text-center " style={{ height: "1700px" }}>
			<div className="container text-center mt-5">
				<h1 className="display-4">Acerca de nosotros</h1>
			</div>
			<div>
				<hr className="my-4" />
			</div>

			<section className="page-section " id="team">
				<div className="container">
					<div className="text-center">
						<p className="section-subheading text-muted">
							<em>Colaboradores y miembros del proyecto final 4Geeks Academy Party´s Services</em>
						</p>
						<div className="col-md-12 mb-3 mb-md-0" />
					</div>
					<div className="row">
						<div className="col-lg-3">
							<div className="team-member">
								<img
									className="mx-auto rounded-circle"
									src="https://ca.slack-edge.com/T0BFXMWMV-U01KUR63ZJ5-246a1a3d9811-512"
									alt="..."
									width="150"
									height="150"
								/>
								<h4>David Bermúdez</h4>
								<p className="text-muted">Lead Designer</p>
								<a className="btn btn-dark btn-social mx-2" href="#!">
									<i className="fab fa-twitter" />
								</a>
								<a className="btn btn-dark btn-social mx-2" href="#!">
									<i className="fab fa-facebook-f" />
								</a>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="team-member">
								<img
									className="mx-auto rounded-circle"
									src="https://ca.slack-edge.com/T0BFXMWMV-U01KG6N3B5G-2980225e416a-512"
									alt="..."
									width="150"
									height="150"
								/>
								<h4>Jobanny Zúñiga</h4>
								<p className="text-muted">Administrador de Empresas</p>
								<a className="btn btn-dark btn-social mx-2" href="#!">
									<i className="fab fa-twitter" />
								</a>
								<a className="btn btn-dark btn-social mx-2" href="#!">
									<i className="fab fa-facebook-f" />
								</a>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="team-member">
								<img
									className="mx-auto rounded-circle"
									src="https://ca.slack-edge.com/T0BFXMWMV-U01L6216S56-6a2ba6e0f2c3-512"
									alt="..."
									width="100"
									height="100"
								/>
								<h4>Sharmey Fallas</h4>
								<p className="text-muted">Ingeniera Informática</p>
								<a className="btn btn-dark btn-social mx-2" href="#!">
									<i className="fab fa-twitter" />
								</a>
								<a className="btn btn-dark btn-social mx-2" href="#!">
									<i className="fab fa-facebook-f" />
								</a>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="team-member">
								<img
									className="mx-auto rounded-circle"
									src="https://ca.slack-edge.com/T0BFXMWMV-U01KD3ZE81K-bca4874285dd-512"
									alt="..."
									width="150"
									height="150"
								/>
								<h4>Emanuel Burgalin</h4>
								<p className="text-muted">Lead Designer</p>
								<a className="btn btn-dark btn-social mx-2" href="#!">
									<i className="fab fa-twitter" />
								</a>
								<a className="btn btn-dark btn-social mx-2" href="#!">
									<i className="fab fa-facebook-f" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
