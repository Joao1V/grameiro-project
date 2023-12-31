import {useEffect, useRef, useState} from "react";
import {grass} from "../../mock/Grass.js"
import {Link} from "react-router-dom";
import SEO from "../../Default/SEO.jsx";

export const ProductsPage = () => {
    const [productSelected, setProductSelected] = useState(null)
    const geocode = useRef();
    const [qtd, setQtd] = useState('')
    const [place, setPlace] = useState('')

    const handleBuy = (item) => {
        console.log(item)
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setProductSelected(item)
    }

    const getGeolocation = () => {
        setTimeout(() => {
            const place = geocode.current.getPlace();
            setPlace(place.formatted_address);
        },[200]);
    }

    useEffect(() => {
        if(window.google) {
            geocode.current = new window.google.maps.places.Autocomplete(document.querySelector('#product_maps'), {types: ['geocode']});
            geocode.current.addListener('place_changed', getGeolocation);
            geocode.current.setComponentRestrictions({'country': ['br']});
            geocode.current.setFields(['formatted_address', 'geometry', 'address_components']);
        }
    },[window.google]);

    return (
        <div className={'my-20'}>
            <SEO title='Produtos | Grameiro'
                 description='Produtos'
                 name='Produtos'
                 type='article'
            />
            <div className={'container'}>
                <div className={`${productSelected ? 'd-flex' : 'd-none'} card flex-center mb-8`}>
                    <div className="card-body">
                        <div className={`${productSelected ? 'animate__animated animate__fadeIn' : ''}`}>
                            <h1 className={'text-primary2 mb-6'}>Para onde e quanto você precisa?</h1>
                            <div className={'row gy-4 gy-md-0'}>
                                <div className="col-12 col-md-5 col-lg-4">
                                    <img src={productSelected?.image}
                                         className={'h-100 shadow-lg w-100 object-fit-cover img-thumbnail'}
                                         alt="image"
                                         style={{objectPosition: "50% 50%"}}
                                    />
                                </div>
                                <div className={'col-12 col-md-auto d-flex flex-column'}>
                                    <div className={'mb-4'}>
                                        <span style={{color: 'rgb(26 96 6)'}} className={'fw-semibold fs-5 me-2'}>
                                            Produto selecionado:
                                        </span>
                                        <div>
                                            <span className={'fs-3 fw-semibold'}>
                                                {productSelected?.name}
                                            </span>
                                        </div>
                                    </div>
                                    <div className={'mb-4'}>
                                        <span style={{color: 'rgb(26 96 6)'}} className={'fw-semibold fs-5 me-2'}>
                                            Selecione o <span className={'text-primary'}>endereço</span> de entrega:
                                        </span>
                                        <div className="form-floating mb-3 mt-2">
                                            <input type="text"
                                                   id={'product_maps'}
                                                   className="form-control text-black"
                                                   placeholder="name@example.com"
                                            />
                                            <label className={'form-label fs-6 fw-normal'}>
                                                <i className="ki-solid ki-geolocation me-1"></i>
                                                <span style={{color: '#757575'}}>
                                                    Insira aqui o Endereço
                                                </span>
                                            </label>
                                        </div>
                                    </div>

                                    <div>
                                        <span style={{color: 'rgb(26 96 6)'}} className={'fw-semibold fs-5 me-2'}>
                                            Informe a metragem que você precisa em <strong className={'text-primary'}>M²</strong>:
                                        </span>
                                        <div className="form-floating mt-2">
                                            <input type="text"
                                                   value={qtd}
                                                   onChange={(e) => setQtd(e.target.value)}
                                                   className="form-control text-black"
                                                   placeholder="20m"
                                            />
                                            <label className={'form-label fw-normal fs-6'}>
                                                <i className="bi bi-rulers me-2"></i>
                                                <span style={{color: '#757575'}}>Insira o valor em Metros²</span>
                                                </label>
                                        </div>
                                    </div>
                                </div>
                                <div className={'col-12 text-end'}>
                                    <Link to={{pathname:'/empresas-recomendadas', state: {order: {type: productSelected, qtd: qtd, place: place}} }}>
                                        <button className={'btn btn-primary'}>
                                            Ver orçamentos
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${productSelected ? 'd-none' : 'd-block'}`}>
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
                                <div key={key} className={'col-12 col-md-6 col-lg-4'}>
                                    <div className="card shadow border border-primary h-100">
                                        <div className="card-flush ">
                                            <div>
                                                <img src={item.image}
                                                     className={'h-300px h-lg-200px w-100 object-fit-cover card-img-top'}
                                                     alt="image" style={{objectPosition: "50% 50%"}}/>
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
                                                    <button onClick={() => handleBuy(item)}
                                                            className={'btn btn-primary col-6 hover-elevate-up'}>
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
