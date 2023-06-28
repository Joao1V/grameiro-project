import logo from "../../assets/png/logo-dark.png"
import grass from "../../assets/icons/icons-svg/icons8-grass-96.png"
import {useLocation} from "react-router-dom";
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
            <div className={'container-fluid container-lg'}>
                <div className="row gap-10 gap-lg-0">
                    <div className="col-12 col-lg-4">
                        <div className="card shadow">
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
                        <div className={'my-4 text-center'}>
                            <img src={checkoutOrder?.image} alt="image"
                                 className={'h-300px h-lg-200px shadow w-100 object-fit-cover rounded-4'}
                                 style={{objectPosition: "50% 50%"}}
                            />
                        </div>



                            <div className={'card shadow'}>
                                <div className={'card-body'}>
                                    <div className={'mb-4'}>
                                        <span className={'fw-normal fs-5'}>Descrição do produto:</span>
                                        <p className={'text-gray-700 text-justify fs-7'}>
                                            {checkoutOrder?.description}
                                        </p>
                                    </div>


                                    <h3 className={'fw-bolder mb-5 da-flex gap-2 text-gray-700'}><i className={'ki-solid ki-delivery fs-1 text-primary2 bg-light-primary2 p-2 rounded-2' }></i>FRETE:</h3>


                                    <div className="form-check d-flex flex-column gap-4 mb-3 ms-4">
                                        <div>
                                            <input
                                                name="group1"
                                                type={"radio"}
                                                id={`inline-radio-1`}
                                                className={'form-check-input'}
                                            />
                                            <label className={'form-check-label badge badge-light-primary gap-2 fs-5'} htmlFor={'inline-radio-1'}>SEDEX - <span className={'fw-normal'}>até 3 dias úteis</span></label>
                                        </div>
                                        <div>
                                            <input
                                                className={'form-check-input'}
                                                name="group1"
                                                type={"radio"}
                                                id={`inline-radio-2`}
                                            />
                                            <label className={'form-check-label badge badge-light-primary gap-2 fs-5'} htmlFor={'inline-radio-2'}>PAC - <span className={'fw-normal'}>até 7 dias úteis</span></label>
                                        </div>

                                    </div>
                                </div>

                            </div>



                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="card shadow bg-secondary">
                            <div className="card-body">
                                <div className={'text-primary2 mb-8'}>
                                    <h3 className={'text-primary fw-normal'}>Revise seus dados</h3>
                                </div>
                                <div>
                                    <div className="row mb-8">
                                        <div className={'col-3 d-flex flex-center bg-white rounded-2 shadow  h-50px w-50px'}>
                                            <img src={grass} className={'h-45px h-45px'}
                                                 alt="image"
                                            />
                                        </div>
                                        <div className={'col-9 flex-grow-1'}>
                                            <h3 className={'text-primary2'}>Tipo de Grama:</h3>
                                            <div className={'d-flex justify-content-between'}>
                                                <p className={'text-gray-700 fs-4 pe-2'}>{checkoutOrder?.name}</p>
                                                <a href="#" className={'text-blue'}>alterar</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-8">
                                        <div className={'col-3 d-flex flex-center bg-white rounded-2 shadow  h-50px w-50px'}>
                                            <i className="bi bi-rulers fs-1 text-primary"></i>
                                        </div>


                                        <div className={'col-9 flex-grow-1'}>
                                            <h3 className={'text-primary2'}>Quantidade:</h3>
                                            <div className={'d-flex justify-content-between'}>
                                                <p className={'text-gray-700 fs-4 pe-2'}>20 m²</p>
                                                <a href="#" className={'text-blue'}>alterar</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-8">
                                        <div className={'col-3 h-50px w-50px d-flex flex-center bg-white rounded-2 shadow '}>
                                            <i className="ki-solid ki-delivery-geolocation fs-2qx text-primary"></i>
                                        </div>
                                        <div className={'col-9 flex-grow-1'}>
                                            <h3 className={'text-primary2'}>Endereço:</h3>
                                            <div className={'d-flex justify-content-between'}>
                                                <p className={'text-gray-700 fs-4 pe-2'}>R. Julio graças, 2019, Monte castelo, MS</p>
                                                <a href="#" className={'text-blue'}>alterar</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className={'col-3 h-50px w-50px d-flex flex-center bg-white rounded-2 shadow '}>
                                            <i className="ki-solid ki-delivery-3 fs-2qx text-primary"></i>
                                        </div>
                                        <div className={'col-9 flex-grow-1'}>
                                            <h3 className={'text-primary2'}>Data de entrega prevista:</h3>
                                            <div className={'d-flex justify-content-between'}>
                                                <p className={'text-gray-700 fs-4 pe-2'}>22/11/2023</p>
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