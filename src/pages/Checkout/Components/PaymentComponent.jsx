import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import NumberFormat from "react-number-format";
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
                    <label htmlFor="name">Nome impresso no cartão</label>
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
                    <label htmlFor="number-card">Número do cartão</label>
                </div>
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
                    <label htmlFor="expiry">Validade</label>
                </div>
                <div className="form-floating mb-5">
                    <NumberFormat
                        name="cvc"
                        mask={' '}
                        id={'cvc'}
                        className={'form-control form-control-lg'}
                        format={'###'}
                        placeholder="Código de verificação (CVV)"
                        value={state.cvc}
                        onValueChange={(e) => handleInputChange('cvc', e.formattedValue)}
                        onFocus={handleInputFocus}
                    />
                    <label htmlFor="cvc">Código de verificação (CVV)</label>
                </div>


               <button className={'btn btn-primary w-100'} type={'submit'}>Pagar com cartão</button>
            </form>
        </div>
    )
}

export default React.memo(PaymentComponent)
