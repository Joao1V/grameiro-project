import SEO from "../../Default/SEO.jsx";
import image from "../../assets/img/img.png"
import grass1 from "../../assets/img/Grass Texture_01.jpg"
import grass2 from "../../assets/img/Grass Texture_02.jpg"
import grass3 from "../../assets/img/Grass Texture_06.jpg"
import grass4 from "../../assets/img/Grass Texture_13.jpg"
import grass5 from "../../assets/img/Grass1.png"


function HomePage() {
    return (
        <div>
            <SEO title='Página inicial | Grameiro'
                 description='Página inicial'
                 name='Pagina inicial'
                 type='article'
            />

            <section className={'page-title-home min-h-lg-550px'}>
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
            </section>
            <section className={'container mt-n20'}>
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
            </section>

            <section className={'mt-20'}>
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
                                        <div className={'mh-250px'}>
                                            <img src={image} alt="image" className={'rounded-top-2 img-fluid'}/>
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
            </section>
            <section className={'bg-secondary mt-20'}>
                <div className={'container py-12'}>
                    <div className={ 'row'}>
                        <div className={'col-12 col-md-6'}>
                            <div>
                                <h2 className={'text-primary fw-normal mb-8'}>Sobre a gente</h2>
                                <h1 className={'fs-4x font-jost fw-semibold mb-8'}>Grama pontal!</h1>
                                <div className={'fs-3'}>
                                    <p>
                                        Há mais de 10 anos no mercado de grama, Há mais de 10 anos no mercado de grama,
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={'col-12 col-md-6'}>
                            <img src={grass5} alt="grass" className={'w-100'}/>
                        </div>
                    </div>


                </div>
            </section>
            <section className={'mt-5 mb-15'}>
                <div className={'container'}>
                    <div className={''}>
                        <div className={'text-center  my-8'}>
                            <span className={'text-primary fs-3 ls-5'}>WORK PROCESS</span>
                        </div>
                        <h1 className={'fs-4x font-jost fw-semibold mb-8 text-center'}> Veja como é facil comprar!</h1>
                    </div>
                    <div>
                        <div className={'row align-items-center mb-lg-10'}>
                            <div className={'col-12 col-lg-6'}>
                                <div className={'row flex-center px-6 gap-6 px-lg-0'}>
                                    <div style={{border:'7px solid '}} className={'d-flex flex-center col-12 col-lg-6 position-relative rounded-2 w-lg-175px h-175px border-secondary'}>
                                        <i className={'icon-farming fs-6x'}></i>
                                        <div className={'position-absolute'} style={{left:-24, top:-24}}>
                                            <span className={'font-jost d-flex flex-center bg-primary text-white p-8 h-25px w-25px fs-2 rounded-circle'}>
                                                <span className={'fw-bold'}>01</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className={'col-12 col-lg-6 text-center text-lg-start my-8 my-lg-0'}>
                                        <h2 className={'fs-2x font-jost fw-bold text-primary2'}>Nos informe sua cidade</h2>
                                        <p className={'fs-3 text-gray-700'}>Vamos buscar todos os tipos de grama e parceiros que podem entregar para sua região</p>
                                    </div>
                                </div>
                            </div>

                            <div className={'col-12 col-lg-6'}>
                                <div className={'row flex-center px-6 gap-6 px-lg-0'}>
                                    <div style={{border:'7px solid '}} className={'d-flex flex-center col-8 col-lg-6 position-relative rounded-2 w-lg-175px h-175px border-secondary'}>
                                        <i className={'icon-seed  fs-6x'}></i>
                                        <div className={'position-absolute'} style={{left:-24, top:-24}}>
                                            <span className={'font-jost d-flex flex-center bg-primary text-white p-8 h-25px w-25px fs-2 rounded-circle'}>
                                                <span className={'fw-bold'}>02</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className={'col-12 col-lg-6 text-center text-lg-start my-8 my-lg-0'}>
                                        <h2 className={'fs-2x font-jost fw-bold text-primary2'}>Informe o endereço e a data de Entrega</h2>
                                        <p className={'fs-3 text-gray-700'}>Informe para onde e quando gostaria de receber a sua Grama!</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className={'row align-items-center'}>
                            <div className={'col-12 col-lg-6'}>
                                <div className={'row flex-center px-6 gap-6 px-lg-0'}>
                                    <div style={{border:'7px solid '}} className={'d-flex flex-center col-8 col-lg-6 position-relative rounded-2 w-lg-175px h-175px border-secondary'}>
                                        <i className={'icon-seeding1  fs-6x'}></i>
                                        <div className={'position-absolute'} style={{left:-24, top:-24}}>
                                            <span className={'font-jost d-flex flex-center bg-primary text-white p-8 h-25px w-25px fs-2 rounded-circle'}>
                                                <span className={'fw-bold'}>03</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className={'col-12 col-lg-6 text-center text-lg-start my-8 my-lg-0'}>
                                        <h2 className={'fs-2x font-jost fw-bold text-primary2'}>
                                            Escolha o tipo de grama
                                        </h2>
                                        <p className={'fs-3 text-gray-700'}>Escolha entre os diversos tipos de grama, aquela que atende sua necessidade</p>
                                    </div>
                                </div>
                            </div>

                            <div className={'col-12 col-lg-6'}>
                                <div className={'row flex-center px-6 gap-6 px-lg-0'}>
                                    <div style={{border:'7px solid '}} className={'d-flex flex-center col-8 col-lg-6 position-relative rounded-2 w-lg-175px h-175px border-secondary'}>
                                        <i className={'icon-greenhouse1  fs-6x'}></i>
                                        <div className={'position-absolute'} style={{left:-24, top:-24}}>
                                            <span className={'font-jost d-flex flex-center bg-primary text-white p-8 h-25px w-25px fs-2 rounded-circle'}>
                                                <span className={'fw-bold'}>04</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className={'col-12 col-lg-6 text-center text-lg-start my-8 my-lg-0'}>
                                        <h2 className={'fs-2x font-jost fw-bold text-primary2'}>
                                            Efetue o pagamento e aguarde a confirmação
                                        </h2>
                                        <p className={'fs-3 text-gray-700'}>Após fazer o pagamento é só aguardar a confirmação do fornecedor!</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className={'flat-service-home min-h-500px'}>
                <div className={''}>
                    <div className={'container pt-10 pb-20'}>
                        <div className={'row flex-center'}>
                            <div className={'col-12 col-lg-8 text-center my-14'}>
                                <p className={'fs-3 text-white'}>Escolha o tipo de Grama</p>
                                <h1 className={'fs-3x text-white font-jost fw-semibold'}>Escolha abaixo o tipo de grama que busca para sua necessidade</h1>
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className={'col-12 col-md-6 col-lg-4 col-xl-3 p-6'}>
                                <div className="card">
                                    <div className="card-flush">
                                        <div>
                                            <img src={grass1} alt="grassA"  className={'img-fluid  rounded-top-2'}/>
                                        </div>
                                        <div className={'p-8'}>
                                            <h3 style={{color:'#0f4229'}}>
                                                Tipo A
                                            </h3>
                                            <div className={'fs-4'} >
                                                <p>
                                                    Não precisa entrar em contato com ninguém, todo o processo é feito em um so lugar
                                                </p>
                                            </div>

                                            <div className={'d-flex flex-center pt-4'}>
                                                <button className={'flex-grow-1 d-flex flex-center gap-2 btn  bg-hover-primary text-primary border border-1 border-primary text-hover-white rounded-pill'}>
                                                    <span>
                                                        Comprar
                                                    </span>
                                                    <i className="ki-solid ki-arrow-right fs-2 text-primary fw-bold p-0"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={'col-12 col-md-6 col-lg-4 col-xl-3 p-6'}>
                                <div className="card">
                                    <div className="card-flush">
                                        <div>
                                            <img src={grass2} alt="grassA"  className={'img-fluid  rounded-top-2'}/>
                                        </div>
                                        <div className={'p-8'}>
                                            <h3 style={{color:'#0f4229'}}>
                                                Tipo B
                                            </h3>
                                            <div className={'fs-4'} >
                                                <p>
                                                    Não precisa entrar em contato com ninguém, todo o processo é feito em um so lugar
                                                </p>
                                            </div>

                                            <div className={'d-flex flex-center pt-4'}>
                                                <button className={'flex-grow-1 d-flex flex-center gap-2 btn  bg-hover-primary text-primary border border-1 border-primary text-hover-white rounded-pill'}>
                                                    <span>
                                                        Comprar
                                                    </span>
                                                    <i className="ki-solid ki-arrow-right fs-2 text-primary fw-bold p-0"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={'col-12 col-md-6 col-lg-4 col-xl-3 p-6'}>
                                <div className="card">
                                    <div className="card-flush">
                                        <div>
                                            <img src={grass3} alt="grassA"  className={'img-fluid  rounded-top-2'}/>
                                        </div>
                                        <div className={'p-8'}>
                                            <h3 style={{color:'#0f4229'}}>
                                                Tipo C
                                            </h3>
                                            <div className={'fs-4'} >
                                                <p>
                                                    Não precisa entrar em contato com ninguém, todo o processo é feito em um so lugar
                                                </p>
                                            </div>

                                            <div className={'d-flex flex-center pt-4'}>
                                                <button className={'flex-grow-1 d-flex flex-center gap-2 btn  bg-hover-primary text-primary border border-1 border-primary text-hover-white rounded-pill'}>
                                                    <span>
                                                        Comprar
                                                    </span>
                                                    <i className="ki-solid ki-arrow-right fs-2 text-primary fw-bold p-0"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={'col-12 col-md-6 col-lg-4 col-xl-3 p-6'}>
                                <div className="card">
                                    <div className="card-flush">
                                        <div>
                                            <img src={grass4} alt="grassA"  className={'img-fluid rounded-top-2'}/>
                                        </div>
                                        <div className={'p-8'}>
                                            <h3 style={{color:'#0f4229'}}>
                                                Tipo D
                                            </h3>
                                            <div className={'fs-4'} >
                                                <p>
                                                    Não precisa entrar em contato com ninguém, todo o processo é feito em um so lugar
                                                </p>
                                            </div>

                                            <div className={'d-flex flex-center pt-4'}>
                                                <button className={'flex-grow-1 d-flex flex-center gap-2 btn  bg-hover-primary text-primary border border-1 border-primary text-hover-white rounded-pill'}>
                                                    <span>
                                                        Comprar
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
            </section>
        </div>

    );
}

export default HomePage;
