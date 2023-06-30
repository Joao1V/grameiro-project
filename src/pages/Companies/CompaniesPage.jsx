import {empresas} from "../../mock/Companies.js";
import {maskReal} from "../../helpers/Functions.js";

export const CompaniesPage = () => {

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
					<div className="card-body py-20">
						<div>
							<h2 className={'text-primary2 fw-normal mb-8'}>Você selecionou a grama: <strong>São Carlos</strong> </h2>
						</div>
						<div className="row g-4">
							{empresas?.map((item, key) => (
								<div key={key} className={'col-4'}>
									<div className="card  shadow border border-primary h-100">
										<div className="card-flush ">
											<div className={'position-relative'}>
												<img src={item.image} className={'h-300px h-lg-200px w-100 object-fit-cover card-img-top'} alt="image" style={{objectPosition: "50% 50%"}}/>
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
													<p className={'text-muted mb-0'}>
														{item.cnpj}
													</p>
												</div>
												<div>
													<p className={'text-dark'}>{item.email}</p>
												</div>
												<div className={'bg-secondary  px-2 py-1 rounded-2 da-flex justify-content-between mb-4'}>
													<h3 className={'fw-semibold text-primary mb-0'}>A partir de:</h3><strong className={'text-primary2 fs-1'}>R${maskReal(item.valor)}</strong>
												</div>


												<div className={'d-flex justify-content-end flex-grow-1'}>
													<button className={'btn btn-primary col-6 hover-elevate-up w-75'}>
														<span className={'d-flex flex-center gap-2'}><i className="ki-duotone ki-handcart fs-2">
														</i>Comprar</span>
													</button>
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