import SEO from "../../Default/SEO.jsx";


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
                <div className={'container'}>
                    <h5 className={'text-primary fw-normal mb-8'}>
                        POR QUE ESCOLHER A GENTE
                    </h5>
                    <h1 className={'fs-2tx mb-14'}>
                        Compre pelo site, sem complicação
                    </h1>


                    <div>

                    </div>
                </div>
            </div>
        </section>

    );
}

export default HomePage;
