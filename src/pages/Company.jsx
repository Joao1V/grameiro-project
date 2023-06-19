import SEO from "../Default/SEO.jsx";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

const Company = () => {

    return (
        <div>
            <SEO title='Empresa | Grameiro'
                 description='Empresa'
                 name='Empresa'
                 type='article'
            />

            <div>
                <Button>
                    Empresa
                </Button>
                <div>
                    <Link to={'/'}>mudar</Link>
                </div>
            </div>
        </div>
    )
}

export default Company