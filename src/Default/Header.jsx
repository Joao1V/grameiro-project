import logo from "../assets/png/logo-dark.png"
import {Link} from "react-router-dom";
const Header = () => {

    return (
        <div>
            <div className={'bg-primary '}>
                <div className={'container-fluid'}>
                    <div className='da-flex justify-content-between'>
                        <div className={'p-4'}>
                        <span className={'da-flex text-white fw-bold gap-2 fs-6'}>
                           <i className="bi bi-geo-alt-fill text-white"></i> Grama é pontal
                        </span>
                        </div>
                        <div>
                            <span className={'da-flex text-white fw-bold gap-2 fs-6'}>
                                <i className="bi bi-envelope text-white"></i>
                                gramapontal@gmail.com
                            </span>
                        </div>
                    </div>

                </div>

            </div>

            <nav className="navbar navbar-expand-lg bg-secondary min-h-100px">
                <header className="container">
                    <div>
                        <img src={logo} alt="logo" className={'mw-100px'}/>
                    </div>

                    <div className={'col-6'}>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav fs-3 gap-3">
                                <li className="nav-item cursor-pointer ">
                                    <span className="nav-link text-primary fw-bolder">Home</span>
                                </li>
                                <li className="nav-item cursor-pointer">
                                    <span className="nav-link text-hover-primary fw-semibold">Sobre nós</span>
                                </li>
                                <li className="nav-item cursor-pointer">
                                    <spam className="nav-link text-hover-primary fw-semibold">Como comprar</spam>
                                </li>
                                <li className="nav-item cursor-pointer">
                                    <spam className="nav-link text-hover-primary fw-semibold">Parceiros</spam>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className={'da-flex gap-3'}>
                        <div >
                            <div className={'bg-white bg-hover-primary text-hover-white p-1 rounded-circle d-flex flex-center h-50px w-50px'}>
                                <i className="ki-solid ki-magnifier fs-2x text-primary"></i>
                            </div>
                        </div>
                        <div>
                            <Link to={'/produtos'}>
                                <button className={'btn btn-outline-primary text-hover-white border-hover-transparent border border-2 border-gray-300'}>
                                    Comprar
                                </button>
                            </Link>
                        </div>
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </header>
            </nav>

        </div>

    )
}

export default Header