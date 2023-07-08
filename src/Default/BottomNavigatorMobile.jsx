import {Link} from "react-router-dom";


const BottomNavigatorMobile = () => {

    return (
        <div style={{height: 80, zIndex: 9999}} className={'d-flex bg-white d-md-none justify-content-between px-4 shadow align-items-center shadow-sm position-fixed bottom-0 left-0 w-100'}>
            <div  className='d-flex flex-column align-items-center hover-elevate-up'>
                <Link to={'/'} className="btn btn-icon btn-light btn-circle p-0">
                    <i className="bi bi-house fs-2"></i>
                </Link>
            </div>
            <div  className='d-flex flex-column align-items-center hover-elevate-up'>
                <a href="#" className="btn btn-icon btn-light btn-circle p-0">
                    <i className="bi bi-search fs-2"></i>
                </a>
            </div>

            <div style={{height: '30%', width: 1}} className='bg-primary-subtle'/>

            <div  className='hover-elevate-up'>
                <Link to={'/produtos'} className="btn btn-icon btn-primary btn-lg btn-circle p-1">
                    <i className="bi bi-cart3 fs-2x"></i>
                </Link>
            </div>
            <div style={{height: '30%', width: 1}} className='bg-primary-subtle'/>

            <div  className='d-flex flex-column align-items-center hover-elevate-up'>
                <a href="#" className="btn btn-icon btn-light btn-circle p-0">
                    <i className="bi bi-bell fs-2"></i>
                </a>
            </div>

            <div className="dropdown arrow-none">
                <button className="btn-reset dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                    <div  className='d-flex flex-column align-items-center hover-elevate-up'>
                        <a href="#" className="btn btn-icon btn-light btn-circle p-0">
                            <i className="bi bi-justify fs-2"></i>
                        </a>
                    </div>
                </button>
                <ul className="dropdown-menu animate__animated drop-fadeInUp animate__faster ">
                    <li className="dropdown-item bg-light px-8">
                        <span className="nav-link text-primary fw-bolder">Home</span>
                    </li>
                    <li className="dropdown-item px-8">
                        <span className="nav-link text-hover-primary fw-semibold">Sobre nós</span>
                    </li>
                    <li className="dropdown-item px-8">
                        <span className="nav-link text-hover-primary fw-semibold">Como comprar</span>
                    </li>
                    <li className="dropdown-item px-8">
                        <span className="nav-link text-hover-primary fw-semibold">Parceiros</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default BottomNavigatorMobile