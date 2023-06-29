import {grass} from "../../mock/Grass.js"
import {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {Icons} from "../Icons.jsx";

export const ProductsPage = () => {
    const [productSelected, setProductSelected] = useState(null)
    const geocode = useRef();

    const handleBuy = (item) => {
        console.log(item)
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setProductSelected(item)
    }

    const getGeolocation = (e) => {
        console.log(e)
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
            <div className={'container'}>
                <div className={`${productSelected ? 'd-flex' : 'd-none'} row flex-center`}>
                    <div className="col-10">
                        <div className={`mb-10 ${productSelected ? 'animate__animated animate__fadeIn' : ''}`}>
                            <div className="card">
                                <div className="card-body">
                                    <h1 className={'text-primary2 mb-6'}>Para onde e quanto você precisa?</h1>
                                    <div className={'row'}>
                                        <div className="col-lg-3">
                                            <div>
                                                <img src={productSelected?.image}
                                                     className={'h-300px h-lg-200px shadow-lg w-100 object-fit-cover img-thumbnail'}
                                                     alt="image"
                                                     style={{objectPosition: "50% 50%"}}
                                                />
                                            </div>
                                        </div>
                                        <div className={'col-auto'}>
                                            <div className={'mb-4'}>
                                                <span className={'fw-bold fs-5 me-2'}>
                                                    Produto selecionado:
                                                </span>
                                                <div>
                                                    <span className={'fs-3 text-primary fw-semibold'}>
                                                        {productSelected?.name}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className={'mb-4'}>
                                                <span className={'fw-bold fs-5 me-2'}>
                                                    Selecione o endereço de entrega:
                                                </span>
                                                <div className="form-floating mb-3">
                                                    <input type="text"
                                                           id={'product_maps'}
                                                           className="form-control"
                                                           placeholder="name@example.com"
                                                    />
                                                    <label className={'form-label'}><i className="ki-solid ki-geolocation"></i> Endereço</label>
                                                </div>
                                            </div>

                                            <div>
                                                <span className={'fw-bold fs-5 me-2'}>
                                                    Informe a metragem que você precisa em M²:
                                                </span>
                                                <div className="form-floating mb-3">
                                                    <input type="text"
                                                           className="form-control"
                                                           placeholder="20m"
                                                    />
                                                    <label className={'form-label'}><i className="bi bi-rulers me-2"></i>Metros²</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={'col-12 text-end'}>
                                            <Link to={{pathname:'/checkout', state: {order: productSelected} }}>
                                                <button className={'btn btn-primary'}>
                                                    Ver orçamentos
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
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
                                <div key={key} className={'col-4'}>
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