import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Pago = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<div>
				<div className="card-header bg-none text-center">
					<h2>Concluyamos la compra</h2>
				</div>

				<form id="form">
					<div className="card-body">
						<div className="col-md-12" id="alert" />

						<div className="row mt-3">
							<div className="col-md-4">
								<div className="form">
									<label className="form-label text-dark">Número de tarjeta</label>
									<input
										type="number"
										id="card"
										className="form-control"
										placeholder="XXXXXXXXXXXXXXX"
									/>
									<p id="alertCard" />
								</div>
							</div>
							<div className="col-md-4">
								<div className="form">
									<label className="form-label text-dark">Código de seguridad</label>
									<input type="number" id="cvc" className="form-control" placeholder="0000" />
									<p id="alertCvc" />
								</div>
							</div>
							<div className="col-md-4">
								<div className="form">
									<label htmlFor="amount" className="form-label">
										Total a pagar
									</label>
									<div className="input-group">
										<div>
											<i className="fas fa-dollar-sign col" />
										</div>
										<input
											type="number"
											className="form-control disabled"
											id="amount"
											placeholder="10000"
											readOnly
											value={store.total}
										/>
									</div>
									<p id="alertAmount" />
								</div>
							</div>
						</div>
						<div className="row mt-3">
							<div className="col-md-6">
								<div className="form">
									<label className="form-label text-dark">Primer Nombre</label>
									<input type="text" id="firstName" className="form-control" />
									<p id="alertName" />
								</div>
							</div>
							<div className="col-md-6">
								<div className="form">
									<label className="form-label text-dark">Apellidos</label>
									<input type="text" id="lastName" className="form-control" />
									<p id="alertLastName" />
								</div>
							</div>
						</div>
						<div className="row mt-3">
							<div className="col-md-6">
								<div className="form">
									<label className="form-label text-dark">Ciudad</label>
									<input type="text" id="city" className="form-control" />
									<p id="alertCity" />
								</div>
							</div>
							<div className="col-md-3">
								<div className="form">
									<label className="form-label text-dark">Cantón</label>
									<input type="text" id="state" className="form-control" placeholder="" />
									<p id="alertState" />
								</div>
							</div>

							<div className="col-md-3">
								<div className="form">
									<label className="form-label text-dark">Código postal</label>
									<input type="text" id="postalCode" className="form-control" />
									<p id="alertPostal" />
								</div>
							</div>
						</div>

						<div className="row mt-2">
							<div className="col-md-6">
								<label htmlFor="paymentCard" className="form-label">
									Aceptamos:
								</label>
								<div className="col-lg-8 rounded-1 p-2 d-flex justify-content-between bg-secondary text-light">
									<div className="form-check-inline">
										<input
											className="form-check-input"
											type="radio"
											name="inlineRadioOptions"
											id="inlineRadio1"
											value="option1"
											checked
										/>
										<i className="fab fa-cc-mastercard" />
									</div>
									<div className="form-check-inline">
										<input
											className="form-check-input"
											type="radio"
											name="inlineRadioOptions"
											id="inlineRadio2"
											value="option2"
										/>
										<i className="fab fa-cc-visa" />
									</div>
									<div className="form-check-inline">
										<input
											className="form-check-input"
											type="radio"
											name="inlineRadioOptions"
											id="inlineRadio3"
											value="option3"
										/>
										<i className="fab fa-cc-diners-club" />
									</div>
									<div className="form-check-inline">
										<input
											className="form-check-input"
											type="radio"
											name="inlineRadioOptions"
											id="inlineRadio4"
											value="option4"
										/>
										<i className="fab fa-cc-amex" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="card-footer mt-5">
						<div className="">
							<div className="text-right">
								<button className="btn btn-secondary float-end m-2" type="button" onClick="resetForm()">
									Cancelar
								</button>
								<button className="btn btn-primary float-end m-2" type="submit">
									Finalizar
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};
