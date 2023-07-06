import logo from "../../assets/png/logo-dark.png"
import calendar from "../../assets/png/calendar.png"
import grass from "../../assets/icons/icons-svg/icons8-grass-96.png"
import {Link, useLocation} from "react-router-dom";
import { useEffect, useRef, useState} from "react";
import DatePicker from "react-datepicker"




import PaymentComponent from "./Components/PaymentComponent.jsx";
import SEO from "../../Default/SEO.jsx";
export const CheckoutPage = () => {
    const location = useLocation()
    const [checkoutOrder,] = useState(location.state?.order);
    const [changeAddress, setChangeAddress] = useState(false);
    const [changeAmount, setChangeAmount] = useState(false);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [step,setStep] = useState('review-data')
    const [startDate, setStartDate] = useState(new Date)
    const geocode = useRef();

    const getGeolocation = (e) => {
        console.log(e)
    }

    useEffect(() => {
        if(window.google) {
            geocode.current = new window.google.maps.places.Autocomplete(document.querySelector('#maps'), {types: ['geocode']});
            geocode.current.addListener('place_changed', getGeolocation);
            geocode.current.setComponentRestrictions({'country': ['br']});
            geocode.current.setFields(['formatted_address', 'geometry', 'address_components']);
        }
    },[window.google]);
    return (
        <div className={'mt-20'} style={{marginBottom: 200}}>
            <SEO title='Checkout | Grameiro'
                 description='Checkout'
                 name='Checkout'
                 type='article'
            />
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
                                    <div className={'d-flex justify-content-center'}>
                                        <img src={logo}
                                             className={'h-85px w-85px object-fit-cover rounded-circle'}
                                             alt="image"

                                        />
                                    </div>
                                    <div className={'da-flex justify-content-between py-6 border-bottom border-gray-300'}>
                                        <div className={'text-primary2 da-flex gap-1'}>
                                            <i className="ki-solid ki-shop fs-3 text-primary2"></i> <span className={'fs-5 text-primary2'}>Empresa</span>
                                        </div>
                                        <span className={'mb-0 text-end fw-normal ps-3 fs-5 text-gray-800'} style={{wordBreak:"break-word"}}>
                                            Grama pontal LTDA
                                        </span>
                                    </div>
                                    <div className={'da-flex justify-content-between py-6 border-bottom border-gray-300'}>
                                        <div className={'text-primary2 da-flex gap-1'}>
                                            <i className="bi bi-envelope-at-fill fs-3 text-primary2"></i> <span className={'fs-5 text-primary2'}>Email</span>
                                        </div>
                                        <span className={'mb-0 text-end fw-normal ps-3 fs-5 text-gray-800'} style={{wordBreak:"break-word"}}>
                                            gramapontal@suporte.br
                                        </span>
                                    </div>

                                    <div className={'da-flex justify-content-between py-6 border-bottom border-gray-300'}>
                                        <div className={'text-primary2 da-flex gap-1'}>
                                            <i className="bi bi-telephone-fill fs-3 text-primary2"></i> <span className={'fs-5 text-primary2'}>Telefone</span>
                                        </div>
                                        <span className={'mb-0 text-end fw-normal ps-3 fs-5 text-gray-800'} style={{wordBreak:"break-word"}}>
                                            (18) 4002-8922
                                        </span>
                                    </div>
                                     <div className={'da-flex justify-content-between py-6 align-items-start'}>
                                        <div className={'text-primary2 da-flex gap-1'}>
                                            <i className="ki-solid ki-geolocation fs-3 text-primary2"></i> <span className={'fs-5 text-primary2'}>Endereço</span>
                                        </div>
                                        <span className={'mb-0 text-end fw-normal ps-3 fs-5 text-gray-800'} style={{wordBreak:"break-word"}}>
                                            Av. Enseada Lopes, 2012 - Terenos, MS
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className={'mb-4 text-center position-relative'}>
                            <img src={checkoutOrder?.type?.image} alt="image"
                                 className={'h-300px h-lg-200px shadow w-100 object-fit-cover rounded-4'}
                                 style={{objectPosition: "50% 50%"}}
                            />
                            <div className={'position-absolute'} style={{bottom: 5, cursor: 'pointer', right: 5, zIndex: 100, background: '#ffffffcf', padding: 3, paddingRight: 10, paddingLeft: 10, borderRadius: 5}}>
                                <a className={'text-primary '}> Sobre o produto </a>
                            </div>
                        </div>

                        <div className={"mb-2"}>
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
                        <div className={'card mt-4'}>
                            <div className={'card-body pt-5'}>
                                <div className={'mb-6'}>
                                    <h2 className={'fw-normal mb-0 da-flex fw-semibold gap-2 text-black'}>Valores por data de entrega</h2>
                                    <span className={'text-gray-700'}>As fornecedoras podem cobrar um valor diferente dependendo do prazo de entrega escolhido.</span>
                                </div>

                                <div className="d-flex align-items-center mb-6 bg-light-success pe-4">
                                    {/*begin::Bullet*/}
                                    <img src={calendar} style={{height: 35, marginRight: 10, marginLeft: 10}}/>
                                    <span data-kt-element="bullet" className="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-info" />
                                    {/*end::Bullet*/}
                                    {/*begin::Info*/}
                                    <div className="flex-grow-1 me-5">
                                        {/*begin::Time*/}
                                        <div className="text-gray-800 fw-semibold fs-3">5 Julho - 10 Julho</div>
                                        {/*end::Time*/}
                                        {/*begin::Description*/}
                                        {/*end::Description*/}
                                        {/*begin::Link*/}
                                        <div className="text-gray-400 fw-semibold fs-7">R$
                                            {/*begin::Name*/}
                                            <a href="#" className="text-primary opacity-75-hover fw-semibold"> 1.200,00</a>
                                            {/*end::Name*/}</div>
                                        {/*end::Link*/}
                                    </div>
                                    {/*end::Info*/}
                                    {/*begin::Action*/}
                                    <a href="#" className="btn btn-sm btn-white" data-bs-toggle="modal" data-bs-target="#kt_modal_create_project">
                                        <i className="ki-solid ki-arrow-right fs-1 text-primary"></i></a>
                                    {/*end::Action*/}
                                </div>

                                <div className="d-flex align-items-center mb-6 pe-4">
                                    {/*begin::Bullet*/}
                                    <img src={calendar} style={{height: 35, marginRight: 10, marginLeft: 10}}/>
                                    <span data-kt-element="bullet" className="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-info" />
                                    {/*end::Bullet*/}
                                    {/*begin::Info*/}
                                    <div className="flex-grow-1 me-5">
                                        {/*begin::Time*/}
                                        <div className="text-gray-800 fw-semibold fs-3">11 Julho - 30 Julho</div>
                                        {/*end::Time*/}
                                        {/*begin::Description*/}
                                        {/*end::Description*/}
                                        {/*begin::Link*/}
                                        <div className="text-gray-400 fw-semibold fs-7">R$
                                            {/*begin::Name*/}
                                            <a href="#" className="text-primary opacity-75-hover fw-semibold"> 1.100,00</a>
                                            {/*end::Name*/}</div>
                                        {/*end::Link*/}
                                    </div>
                                    {/*end::Info*/}
                                    {/*begin::Action*/}
                                    <a href="#" className="btn btn-sm btn-white" data-bs-toggle="modal" data-bs-target="#kt_modal_create_project">
                                        <i className="ki-solid ki-arrow-right fs-1 text-primary"></i></a>
                                    {/*end::Action*/}
                                </div>

                                <div className="d-flex align-items-center mb-6 pe-4">
                                    {/*begin::Bullet*/}
                                    <img src={calendar} style={{height: 35, marginRight: 10, marginLeft: 10}}/>

                                    <span data-kt-element="bullet" className="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-5 bg-info" />
                                    {/*end::Bullet*/}
                                    {/*begin::Info*/}
                                    <div className="flex-grow-1 me-5">
                                        {/*begin::Time*/}
                                        <div className="text-gray-800 fw-semibold fs-3">A partir de agosto</div>
                                        {/*end::Time*/}
                                        {/*begin::Description*/}
                                        {/*end::Description*/}
                                        {/*begin::Link*/}
                                        <div className="text-gray-400 fw-semibold fs-7">R$
                                            {/*begin::Name*/}
                                            <a href="#" className="text-primary opacity-75-hover fw-semibold"> 999,00</a>
                                            {/*end::Name*/}</div>
                                        {/*end::Link*/}
                                    </div>
                                    {/*end::Info*/}
                                    {/*begin::Action*/}
                                    <a href="#" className="btn btn-sm btn-white" data-bs-toggle="modal" data-bs-target="#kt_modal_create_project">
                                        <i className="ki-solid ki-arrow-right fs-1 text-primary"></i></a>
                                    {/*end::Action*/}
                                </div>
                            </div>
                        </div>



                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="card shadow bg-secondary">
                            {step === 'review-data' ?
                                <div className="card-body">
                                    <div className={'mb-8'}>
                                        <h2 className={'text-primary'}>Seu pedido</h2>
                                        <div className={'border-bottom border-primary w-100px'}/>
                                    </div>
                                <div>
                                    <div className="row mb-8">
                                        <div className={'col-3 d-flex flex-center bg-white rounded-2 h-50px w-50px'}>
                                            <img src={grass} className={'h-45px h-45px'}
                                                 alt="image"
                                            />
                                        </div>
                                        <div className={'col-9 flex-grow-1'}>
                                            <h3 className={'text-primary fw-semibold'}>Tipo de Grama:</h3>
                                            <div className={'d-flex justify-content-between'}>
                                                <p className={'text-gray-700 fs-5 pe-2'}>{checkoutOrder?.type?.name}</p>
                                                <button className={'btn btn-reset p-0 link-primary fw-normal'}><Link to={'/produtos'}>alterar</Link></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-8">
                                        <div className={'col-3 d-flex flex-center bg-white rounded-2  h-50px w-50px'}>
                                            <i className="bi bi-rulers fs-1 text-primary"></i>
                                        </div>


                                        <div className={'col-9 flex-grow-1'}>
                                            <h3 className={'text-primary fw-semibold'}>Quantidade:</h3>
                                            <div className={`${changeAmount ? 'd-block animate__animated animate__fadeIn' : 'd-none'}`}>
                                                <div className="form-floating mb-3">
                                                    <input type="number"
                                                           className="form-control"
                                                           placeholder="ex: 200 metros"
                                                    />
                                                    <label className={'form-label'}><i className="bi bi-rulers me-2"></i>Metros²</label>
                                                </div>
                                            </div>

                                            <div className={`${changeAmount ? 'd-none' : 'd-flex justify-content-between'}`}>
                                                <p className={'text-gray-700 fs-5 pe-2'}>20 m²</p>
                                                <button className={'btn btn-reset p-0 link-primary fw-normal'} onClick={() => setChangeAmount(!changeAmount)}>alterar</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-8">
                                        <div className={'col-3 h-50px w-50px d-flex flex-center bg-white rounded-2 '}>
                                            <i className="ki-solid ki-delivery-geolocation fs-2qx text-primary"></i>
                                        </div>
                                        <div className={'col-9 flex-grow-1'}>
                                            <h3 className={'text-primary fw-semibold'}>Endereço:</h3>
                                            <div className={`${changeAddress ? 'd-block animate__animated animate__fadeIn' : 'd-none'}`}>
                                                <div className="form-floating mb-3">
                                                    <input type="text"
                                                           id={'maps'}
                                                           className="form-control"
                                                           placeholder="ex: 200 metros"
                                                    />
                                                    <label className={'form-label'}><i className="ki-solid ki-geolocation"></i> Endereço</label>
                                                </div>
                                            </div>
                                            <div className={`${changeAddress ? 'd-none' : 'd-flex justify-content-between'}`}>
                                                <p className={'text-gray-700 fs-5 pe-2'}>R. Julio graças, 2019, Monte castelo, MS</p>
                                                <button className={'btn btn-reset p-0 link-primary fw-normal'} onClick={() => setChangeAddress(!changeAddress)}>alterar</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className={'col-3 h-50px w-50px d-flex flex-center bg-white rounded-2 '}>
                                            <i className="ki-solid ki-delivery-3 fs-2qx text-primary"></i>
                                        </div>
                                        <div className={'col-9 flex-grow-1'}>
                                            <h3 className={'text-primary fw-semibold'}>Data de entrega</h3>

                                            <div className={`row g-0 justify-content-between`}>
                                                {showDatePicker ?
                                                    <div className={'col-auto  position-relative'}>
                                                        <DatePicker name={' date'}
                                                                    showIcon
                                                                    selected={startDate}
                                                                    className={'form-control form-control-lg text-start ps-12 me-n17'}
                                                                    onChange={(date) => setStartDate(date)}
                                                                    dateFormat={'dd/MM/yyyy'}
                                                                    locale="ptBR"
                                                        />
                                                        <i className="ki-solid ki-calendar-edit position-absolute fs-1 d-flex flex-center text-gray-700 ps-4" style={{top:0, bottom:0, left:0}}></i>
                                                    </div>
                                                     :
                                                    <p className={'col-8 text-gray-700 fs-5 pe-2 mb-0'}>22/11/2023</p>
                                                }
                                                <span className={'col-auto'}>
                                                     <button className={' btn btn-reset p-0 link-primary fw-normal flex-lg-grow-1 text-end'} onClick={() => setShowDatePicker(!showDatePicker) }>alterar</button>
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="d-flex separator border-3 border-primary my-8"/>

                                    <div className={'d-flex justify-content-end'}>
                                        <div className={'da-flex fs-2x gap-2'}>
                                            <span className={'fs-3'}>R$</span><p className={'text-primary fw-bold mb-0'}>1,200,00</p>
                                        </div>
                                    </div>
                                    <div className={'d-flex justify-content-end fs-5 mb-4'}>
                                        <small className={'text-gray-600'}>12x R$120,00</small>
                                    </div>
                                    <div>
                                        <button className={'btn btn-primary w-100'} onClick={() => setStep('payment')}>
                                            Ir para pagamento
                                        </button>
                                    </div>

                                </div>
                            </div> :
                               (step === 'payment' &&
                                <div className={'card-body'}>
                                    <div className={'text-primary2 mb-8'}>
                                        <h3 className={'text-primary fw-bold da-flex gap-2'}><i className="ki-solid ki-credit-cart text-primary-emphasis fs-1"></i>Pagamento</h3>
                                    </div>
                                    <div>
                                        <PaymentComponent/>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
