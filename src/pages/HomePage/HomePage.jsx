import SEO from "../../Default/SEO.jsx";
import image from "../../assets/img/img.png"


function HomePage() {
    return (
        <section>
            <SEO title='Página inicial | Grameiro'
                 description='Página inicial'
                 name='Pagina inicial'
                 type='article'
            />

            <div className={'page-title-home min-h-lg-550px'}>
                <div className={'container'}>
                    <div style={{paddingTop:'15%'}}>
                        <h6 className={'text-white'}>Gramas e Jardinagem</h6>h1
                        <h1 className={'text-white fs-3x'}>Há 30 anos grama não é tudo igual, <br/>
                            grama é pontal</h1>
                    </div>
                    <div className={'mt-10'}>
                        <button className={'btn btn-primary fs-2'}>Comprar agora</button>
                    </div>
                </div>
            </div>
            <div className={'container mt-n20'}>
                <div className={'card shadow'}>
                    <div className={'card-body px-16 py-14 row justify-content-between  '}>
                        <div className={'col-6'}>
                            <h3 className={'fs-2hx fw-semibold'}>
                                Tem alguma dúvida? fale com a gente!
                            </h3>
                            <p className={'text-primary fs-2x '}>
                                (99) 99999-9999
                            </p>
                        </div>
                        <div className={'col-6'}>
                            <span className={'fs-2'}>
                                Na grama pontal, voce texto a ser definido voce texto a ser definido voce texto a ser definido voce texto a ser definido voce texto a ser definido voce texto a ser definido voce texto a ser definido
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'mt-20'}>
                <div className={'container text-center'}>
                    <h5 className={'text-primary fw-normal mb-8'}>
                        POR QUE ESCOLHER A GENTE
                    </h5>
                    <h1 className={'fs-2tx mb-14 fw-semibold'}>
                        Compre pelo site, sem complicação
                    </h1>

                    <div className={'container'}>
                        <div className={'row '}>
                            <div className={'col-12 col-md-4 col-lg-4'}>
                                <div className={'card shadow'}>
                                    <div className={'card-flush'}>
                                        <div className={''}>
                                            <img src={image} alt="image" className={'mw-100 rounded-top-2'}/>
                                        </div>
                                        <div className={'p-8'}>
                                            <h3 style={{color:'#0f4229'}}>
                                                Tudo pelo site
                                            </h3>
                                            <div className={'fs-4'} >
                                                <p>
                                                    Não precisa entrar em contato com ninguém, todo o processo é feito em um so lugar
                                                </p>
                                            </div>

                                            <div className={'d-flex flex-center pt-4'}>
                                                <button className={'da-flex gap-2 btn  bg-hover-primary text-primary border border-1 border-primary text-hover-white rounded-pill'}>
                                                    <span>
                                                        Saiba mais
                                                    </span>
                                                    <i className="ki-solid ki-arrow-right fs-2 text-primary fw-bold p-0"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={'col-12 col-md-4 col-lg-4'}>
                                <div className={'card shadow'}>
                                    <div className={'card-flush'}>
                                        <div className={''}>
                                            <img src={image} alt="image" className={'mw-100 rounded-top-2'}/>
                                        </div>
                                        <div className={'p-8'}>
                                            <h3 style={{color:'#0f4229'}}>
                                                Tudo pelo site
                                            </h3>
                                            <div className={'fs-4'} >
                                                <p>
                                                    Não precisa entrar em contato com ninguém, todo o processo é feito em um so lugar
                                                </p>
                                            </div>

                                            <div className={'d-flex flex-center pt-4'}>
                                                <button className={'da-flex gap-2 btn  bg-hover-primary text-primary border border-1 border-primary text-hover-white rounded-pill'}>
                                                    <span>
                                                        Saiba mais
                                                    </span>
                                                    <i className="ki-solid ki-arrow-right fs-2 text-primary fw-bold p-0"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={'col-12 col-md-4 col-lg-4'}>
                                <div className={'card shadow'}>
                                    <div className={'card-flush'}>
                                        <div className={''}>
                                            <img src={image} alt="image" className={'mw-100 rounded-top-2'}/>
                                        </div>
                                        <div className={'p-8'}>
                                            <h3 style={{color:'#0f4229'}}>
                                                Tudo pelo site
                                            </h3>
                                            <div className={'fs-4'} >
                                                <p>
                                                    Não precisa entrar em contato com ninguém, todo o processo é feito em um so lugar
                                                </p>
                                            </div>

                                            <div className={'d-flex flex-center pt-4'}>
                                                <button className={'da-flex gap-2 btn  bg-hover-primary text-primary border border-1 border-primary text-hover-white rounded-pill'}>
                                                    <span>
                                                        Saiba mais
                                                    </span>
                                                    <i className="ki-solid ki-arrow-right fs-2 text-primary fw-bold p-0"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default HomePage;
