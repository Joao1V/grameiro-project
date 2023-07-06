import {empresas} from "../../mock/Companies.js";
import {maskReal} from "../../helpers/Functions.js";
import lawnGif from "../../assets/gif/lawn.gif"
import {Link, useLocation} from "react-router-dom";
import {useState} from "react";

export const CompaniesPage = () => {
	const location = useLocation()
	const [checkoutOrder,] = useState(location.state?.order);

	return (
		<div className={'my-20'}>
			<div className="container pb-20">
				<div>
					<h1 className={'text-primary2 fs-2tx'}>
						Escolha o fornecedor
					</h1>
					<p className={'fs-4 text-gray-700'}>
						Escolha a oferta da empresa que mais lhe agradar!
					</p>
				</div>
				<div className="card ">
					<div className="card-body ">
						<div className={'rounded p-5 bg-light-success mb-6 d-flex align-items-center'}>
							<img src={lawnGif} style={{height: 50, marginTop: -8, marginRight: 10}}/>
							<h2 className={'text-primary2 fw-normal mb-0'}>Você selecionou <strong>{checkoutOrder.qtd} Metros²</strong> da grama <strong>{checkoutOrder.type.name}</strong> para entregar em <strong className={"text-primary"}>{checkoutOrder.place}</strong> </h2>
						</div>
						<div className="row g-4">
							{empresas?.map((item, key) => (
								<div key={key} className={'col-12 col-md-6 col-lg-4'}>
									<div className="card  shadow border border-primary h-100">
										<div className="card-flush ">
											<div className={'position-relative'}>
												<img src={item.image} className={'h-300px h-lg-200px w-100 object-fit-cover card-img-top'} alt="image" style={{objectPosition: "50% 50%"}}/>
												<div  className={'h-300px h-lg-200px w-100 object-fit-cover card-img-top position-absolute'} style={{objectPosition: "50% 50%", top: 0, opacity: 0.8, background: "#29543e"}}/>
												<div className="symbol symbol-90px symbol-circle position-absolute img-thumbnail" style={{right:10, bottom: 10,}}>
													<img src={item.logo} alt="image" style={{objectPosition: "50% 50%" }}
													/>
												</div>
											</div>
											<div className={'p-4'}>
												<div>
													<h2 className={'text-primary2 mb-0'}>{item.name}</h2>
												</div>
												<div>
													<p className={'text-muted mb-0 limit-rows clamp-3'}>
														{item.description}
													</p>
												</div>
												<div className={'bg-secondary mt-3 px-2 py-1 rounded-2 da-flex justify-content-between mb-4 align-items-baseline'}>
													<span className={'fw-semibold text-primary mb-0'}>A partir de:</span><strong className={'text-primary2 fs-1'}>R${maskReal(item.valor)}</strong>
												</div>

												<div className={"mb-6"}>
													<div className={"d-flex flex-wrap"}>
														<span className="badge badge-light-primary me-1">
															<i style={{color: '#2196f3'}} className="bi bi-credit-card  me-1"></i>
															<span style={{color: '#2196f3'}}>Até 12x </span>
														</span>
														<span className="badge badge-light-primary">
															<i style={{color: '#2196f3'}} className="bi bi-truck me-1"></i>
															<span style={{color: '#2196f3'}}>Entregas a partir de 12/06</span>
														</span>
													</div>
												</div>


												<div className={'d-flex justify-content-end flex-grow-1'}>
													<Link to={{pathname:'/checkout', state: {order: location.state?.order} }}>
														<button className={'btn btn-primary col-6 hover-elevate-up w-100'}>
															<span className={'d-flex flex-center gap-2'}><i className="ki-duotone ki-handcart fs-2">
															</i>Comprar</span>
														</button>
													</Link>

												</div>
											</div>
										</div>
									</div>
								</div>

							))}
						</div>
					</div>
				</div>
			</div>

		</div>
	)
}
