import logo from "../assets/img/img_1.png"
const Footer = () => {

    return (
        <footer style={{background:'#252525'}}>
            <div className={'d-none d-md-block container'}>
                <div className={'mb-15 mt-n15'}>
                    <div className={'row'}>
                        <div className={'col-3'}>
                            <div className="card bg-primary">
                                <div className="card-flush ">
                                    <div className={'p-6'}>
                                        <img src={logo} alt="logo" className={'img-fluid mw-100px'}/>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className={'col-auto'}>
                            <div className="card h-100 bg-secondary">
                                <div className="card-body">
                                    <div>
                                        <div className={'da-flex gap-2 mb-5'}>
                                            <div className={'d-flex flex-center bg-primary rounded-circle p-2 h-40px w-40px'}>
                                                <i className="bi bi-geo-alt-fill text-light" style={{fontSize:18}}></i>
                                            </div>
                                            <span className={'text-gray-800'}>Rua Getúlio Vargas, 1201, Campo Grande, MS</span>
                                        </div>
                                        <div className={'da-flex gap-2 mb-5'}>

                                            <div className={'d-flex flex-center bg-primary rounded-circle p-2 h-40px w-40px'}>
                                                <i className="bi bi-telephone-fill text-light" style={{fontSize:18}}></i>
                                            </div>

                                            <span className={'text-gray-800'}>(67) 3020-2030</span>
                                        </div>
                                        <div className={'da-flex gap-2'}>
                                            <div className={'d-flex flex-center bg-primary rounded-circle p-2 h-40px w-40px'}>
                                                <i className="bi bi-envelope-fill text-light" style={{fontSize:18}}></i>
                                            </div>
                                            <span className={'text-gray-800'}>contato@gramapontal.com.br</span>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={'d-flex flex-center my-10'}>
                <section className={'container '}>
                    <div className={'row text-light'}>
                        <div className={'col-12 col-md-4 mb-6 mb-md-0 flex-column d-flex justify-content-center justify-content-md-start align-items-center align-items-md-start'}>
                            <h1 className={'mb-5 text-light'}>Sobre</h1>
                            <p className={'da-flex ms-1 fs-5'}>
                                <i className="ki-solid ki-right fs-3"></i>
                                Missão
                            </p>
                            <p className={'da-flex ms-1 fs-5'}>
                                <i className="ki-solid ki-right fs-3"></i>
                                Valores
                            </p>
                            <p className={'da-flex ms-1 fs-5'}>
                                <i className="ki-solid ki-right fs-3"></i>
                                Nossa trajetória
                            </p>
                            <p className={'da-flex ms-1 fs-5'}>
                                <i className="ki-solid ki-right fs-3"></i>
                                Termos de uso
                            </p>
                        </div>

                        <div className={'col-12 col-md-4 flex-column d-flex justify-content-center justify-content-md-start align-items-center align-items-md-start'}>
                            <h1 className={'mb-5 text-light'}>
                                Ajuda & FAQ
                            </h1>
                            <p className={'da-flex ms-1 fs-5'}>
                                <i className="ki-solid ki-right fs-3"></i>
                                Dúvidas frequentes
                            </p>
                            <p className={'da-flex ms-1 fs-5'}>
                                <i className="ki-solid ki-right fs-3"></i>
                                Qual grama escolher
                            </p>
                            <p className={'da-flex ms-1 fs-5'}>
                                <i className="ki-solid ki-right fs-3"></i>
                                Entrar em contato
                            </p>
                        </div>
                    </div>

                    <div className={'d-flex justify-content-end mt-5'}>
                        <div className={'da-flex gap-4'}>
                            <div className={'d-flex flex-center bg-primary rounded-circle p-2 h-50px w-50px'}>
                                <i className="ki-solid ki-facebook text-light" style={{fontSize:24}}></i>
                            </div>

                            <div className={'d-flex flex-center bg-primary rounded-circle p-2 h-50px w-50px'}>
                                <i className="ki-solid ki-instagram  text-light" style={{fontSize:24}}></i>
                            </div>

                            <div className={'d-flex flex-center bg-primary rounded-circle p-2 h-50px w-50px'}>
                                <i className="bi bi-linkedin  text-light" style={{fontSize:24}}></i>
                            </div>

                            <div className={'d-flex flex-center bg-primary rounded-circle p-2 h-50px w-50px'}>
                                <i className="ki-solid ki-whatsapp text-light" style={{fontSize:24}}></i>
                            </div>
                        </div>
                    </div>

                </section>
            </div>

            <div className={'d-flex justify-content-center border-top border-gray-500 text-center py-5'}>
                <span className={'text-white '}>
                    Copyright 2023 by Grama Pontal
                </span>
            </div>

        </footer>
    )
}

export default Footer