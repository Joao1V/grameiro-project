import {Link} from "react-router-dom";
import SEO from "../../Default/SEO.jsx";


function HomePage() {
    return (
        <div>
            <SEO title='Página inicial | Grameiro'
                 description='Página inicial'
                 name='Pagina inicial'
                 type='article'
            />
            <div>
                Home page
                <div>
                    <Link to={'/empresa'}>mudar</Link>
                </div>
            </div>
        </div>

    );
}

export default HomePage;
