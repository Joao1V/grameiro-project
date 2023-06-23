import {grass} from "../../mock/Grass.js"
export const ProductsPage = () => {
	return (
		<div className={'my-20'}>
			<div className={'container'}>
				<div>
					<h1 className={'text-primary2 fs-2tx'}>
						Escolha sua grama
					</h1>
					<p className={'fs-4 text-gray-700'}>
						Escolha qual tipo da grama você precisa
					</p>
				</div>
				<div className="card">
					<div className="card-body">
						<div className="row g-4">
							{grass?.map((item, key) => (
								<div key={key} className={'col-4'}>
									<div className="card shadow border border-primary h-100">
										<div className="card-flush ">
											<div>
												<img src={item.image} className={'h-300px h-lg-200px w-100 object-fit-cover card-img-top'} alt="image" style={{ objectPosition: "50% 50%"}}/>
											</div>
											<div className={'p-4'}>
												<div>
													<h2 className={'text-primary2'}>{item.name}</h2>
												</div>
												<div>
													<p className={'text-gray-700'}>
														{item.description}
													</p>
												</div>
												<div className={'d-flex justify-content-end'}>
													<button className={'btn btn-primary col-6 hover-elevate-up'}>
														Comprar
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