import logo from "../../assets/png/logo-dark.png"
import {useHistory, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
export const CheckoutPage = () => {
    const [checkoutOrder, setCheckoutOrder] = useState()
    const location = useLocation()

    useEffect(() => {
        if (location.state) {
            console.log(location)
            setCheckoutOrder(location.state?.order)
        }

    },[])
    return (
        <div className={'my-20'}>
            <div className={'container'}>
                <div className="row gap-10 gap-lg-0">
                    <div className="col-12 col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <div className={'d-flex flex-column gap-4'}>
                                    <div>
                                        <h2 className={'text-primary2'}>Dados do fornecedor</h2>
                                        <div className={'border-bottom border-primary2 w-100px'}/>
                                    </div>
                                    <div className={'da-flex justify-content-between py-6 border-bottom border-gray-300'}>
                                        <div className={'text-primary2 da-flex gap-1'}>
                                            <i className="ki-solid ki-shop fs-1 text-primary2"></i> <span className={'fs-4 text-primary2'}>Empresa:</span>
                                        </div>
                                        <h3 className={'mb-0 text-end fw-semibold'} style={{wordBreak:"break-word"}}>
                                            Grama pontal LTDA
                                        </h3>
                                    </div>
                                    <div className={'da-flex justify-content-between py-6 border-bottom border-gray-300'}>
                                        <div className={'text-primary2 da-flex gap-1'}>
                                            <i className="bi bi-envelope-at-fill fs-1 text-primary2"></i> <span className={'fs-4 text-primary2'}>E-mail:</span>
                                        </div>
                                        <h3 className={'mb-0 text-end fw-semibold'} style={{wordBreak:"break-word"}}>
                                            gramapontal@suporte.br
                                        </h3>
                                    </div>

                                    <div className={'da-flex justify-content-between py-6 border-bottom border-gray-300'}>
                                        <div className={'text-primary2 da-flex gap-1'}>
                                            <i className="bi bi-telephone-fill fs-1 text-primary2"></i> <span className={'fs-4 text-primary2'}>Telefone:</span>
                                        </div>
                                        <h3 className={'mb-0 text-end fw-semibold'} style={{wordBreak:"break-word"}}>
                                            (18) 4002-8922
                                        </h3>
                                    </div>
                                     <div className={'da-flex justify-content-between py-6 '}>
                                        <div className={'text-primary2 da-flex gap-1'}>
                                            <i className="ki-solid ki-geolocation fs-1 text-primary2"></i> <span className={'fs-4 text-primary2'}>Endereço:</span>
                                        </div>
                                        <h4 className={'mb-0 text-end fw-semibold'} style={{wordBreak:"break-word"}}>
                                            Av. Enseada Lopes, 2012 - Terenos, MS
                                        </h4>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div>
                            <h1 className={'text-primary2'}>{checkoutOrder?.name}</h1>
                            <div className={'border-bottom border-primary2 w-150px'}/>
                        </div>
                        <div className={'my-4 text-center px-4'}>
                            <img src={checkoutOrder?.image} alt="image"
                                 className={'h-300px h-lg-200px shadow-lg w-100 object-fit-cover rounded-4'}
                                 style={{objectPosition: "50% 50%"}}
                            />
                        </div>
                        <div className={'d-flex flex-column gap-4 p-4 px-6'}>
                            <div>
                                <span className="badge badge-light-primary gap-2 fs-5">Entrega em até 4 dias úteis</span>
                            </div>
                            <div>
                                <span className="badge badge-light-primary gap-2 fs-5">Entrega em até 7 dias úteis</span>
                            </div>
                        </div>

                        <div className={'p-4 px-6'}>
                            <p className={'text-gray-700 text-justify fs-3'}>
                                {checkoutOrder?.description}
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="card bg-secondary">
                            <div className="card-body">
                                <div className={'text-primary2 mb-8'}>
                                    <h3 className={'text-primary fw-normal'}>Revise seus dados</h3>
                                </div>
                                <div>
                                    <div className="d-flex mb-8">
                                        <div>
                                            <img src={logo} className={'h-50px w-100 object-fit-cover img-thumbnail'}
                                                 alt="image"
                                                 style={{ objectPosition: "50% 50%"}}
                                            />
                                        </div>
                                        <div className={'ms-4 flex-grow-1'}>
                                            <h3 className={'text-primary2'}>Tipo de Grama:</h3>
                                            <div className={'d-flex justify-content-between'}>
                                                <p className={'text-gray-700 fs-4'}>{checkoutOrder?.name}</p>
                                                <a href="#" className={'text-blue'}>alterar</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-8">
                                        <div>
                                            <img src={logo} className={'h-50px w-100 object-fit-cover img-thumbnail'}
                                                 alt="image"
                                                 style={{ objectPosition: "50% 50%"}}
                                            />
                                        </div>
                                        <div className={'ms-4 flex-grow-1'}>
                                            <h3 className={'text-primary2'}>Quantidade:</h3>
                                            <div className={'d-flex justify-content-between'}>
                                                <p className={'text-gray-700 fs-4'}>20 m²</p>
                                                <a href="#" className={'text-blue'}>alterar</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-8">
                                        <div>
                                            <img src={logo} className={'h-50px w-100 object-fit-cover img-thumbnail'}
                                                 alt="image"
                                                 style={{ objectPosition: "50% 50%"}}
                                            />
                                        </div>
                                        <div className={'ms-4 flex-grow-1'}>
                                            <h3 className={'text-primary2'}>Endereço:</h3>
                                            <div className={'d-flex justify-content-between'}>
                                                <p className={'text-gray-700 fs-4'}>R. Julio graças, 2019, Monte castelo, MS</p>
                                                <a href="#" className={'text-blue'}>alterar</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div>
                                            <img src={logo} className={'h-50px w-100 object-fit-cover img-thumbnail'}
                                                 alt="image"
                                                 style={{ objectPosition: "50% 50%"}}
                                            />
                                        </div>
                                        <div className={'ms-4 flex-grow-1'}>
                                            <h3 className={'text-primary2'}>Data de entrega prevista:</h3>
                                            <div className={'d-flex justify-content-between'}>
                                                <p className={'text-gray-700 fs-4'}>22/11/2023</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex separator border-3 border-primary my-8"/>

                                    <div className={'d-flex justify-content-end'}>
                                        <div className={'da-flex fs-2x gap-2'}>
                                            <span className={'fs-3'}>R$</span><p className={'text-primary fw-bold mb-0'}>1,200,00</p>
                                        </div>
                                    </div>
                                    <div className={'d-flex justify-content-end fs-5'}>
                                        <p>12x R$120,00</p>
                                    </div>
                                    <div>
                                        <button className={'btn btn-primary w-100'}>
                                            Finalizar pedido
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}