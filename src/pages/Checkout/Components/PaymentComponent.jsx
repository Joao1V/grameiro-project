import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import NumberFormat from "react-number-format";
import visa from "../../../assets/svg/visa.svg"
import master from "../../../assets/svg/mastercard.svg"
import america from "../../../assets/svg/american-express.svg"
const PaymentComponent = () => {

    const [state, setState] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '',
    });

    const handleInputChange = (name, value) => {

        console.log(name, value)

        setState({...state, [name]: value});
    }

    const handleInputFocus = (evt) => {
        setState((prev) => ({ ...prev, focus: evt.target.name }));
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)
    }

    return (
        <div>
            <div className={'mb-3'}>
                <Cards
                    locale={{valid:'Validade'}}
                    placeholders={{ name: 'nome titular' }}
                    number={state.number}
                    expiry={state.expiry}
                    cvc={state.cvc}
                    name={state.name}
                    focused={state.focus}
                />
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                    <input type="text"
                           name={'name'}
                           id={'name'}
                           className={'form-control'}
                           onChange={(e) => handleInputChange('name', e.target.value)}
                           onFocus={handleInputFocus}
                    />
                    <label htmlFor="name" className={'text-gray-600'}>Nome impresso no cartão</label>
                </div>
                <div className="form-floating mb-3">
                    <NumberFormat
                        name="number"
                        mask={' '}
                        id={'number-card'}
                        className={'form-control form-control-lg'}
                        format={'#### #### #### ####'}
                        placeholder="Número do cartão"
                        value={state.number}
                        onValueChange={(e) => handleInputChange('number', e.value)}
                        onFocus={handleInputFocus}
                    />
                    <label htmlFor="number-card" className={'d-flex align-items-center w-100 justify-content-between'}>
                        <span className={'text-gray-600'}> Número do cartão</span>

                        <div>
                            <img src={visa} alt="" className="h-25px"/>
                            <img src={master} alt="" className="h-25px"/>
                            <img src={america} alt=""
                                 className="h-25px"/>
                        </div>
                    </label>
                </div>
                <div className={'row'}>
                    <div className={'col-8'}>
                        <div className="form-floating mb-3">
                            <NumberFormat
                                name="expiry"
                                mask={' '}
                                id={'expiry'}
                                className={'form-control form-control-lg'}
                                format={'##/##'}
                                placeholder="Validade"
                                value={state.expiry}
                                onValueChange={(e) => handleInputChange('expiry', e.floatValue)}
                                onFocus={handleInputFocus}
                            />
                            <label htmlFor="expiry" className={'text-gray-600'}>Validade</label>
                        </div>
                    </div>
                    <div className={'col-4'}>
                        <div className="form-floating mb-5">
                            <NumberFormat
                                name="cvc"
                                mask={' '}
                                id={'cvc'}
                                className={'form-control form-control-lg'}
                                format={'###'}
                                placeholder="Código (CVC)"
                                value={state.cvc}
                                onValueChange={(e) => handleInputChange('cvc', e.formattedValue)}
                                onFocus={handleInputFocus}
                            />
                            <label htmlFor="cvc" className={'text-gray-600'}> CVV <span className="ms-1"
                                                                                        data-bs-toggle="tooltip"
                                                                                        aria-label="Enter a card CVV code"
                                                                                        data-bs-original-title="Enter a card CVV code"
                                                                                        data-kt-initialized="1">
											<i className="ki-duotone ki-information-5 text-gray-500 fs-6">
												<span className="path1"></span>
												<span className="path2"></span>
												<span className="path3"></span>
											</i>
										</span> </label>
                        </div>
                    </div>
                </div>




               <button className={'btn btn-primary w-100'} type={'submit'}>Pagar com cartão</button>
            </form>
        </div>
    )
}

export default React.memo(PaymentComponent)
