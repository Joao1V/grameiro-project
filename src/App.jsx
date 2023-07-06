import {HelmetProvider} from "react-helmet-async";
import {
    BrowserRouter as Router, Route,
    Switch,

} from "react-router-dom";
import DefaultLayout from "./Default/DefaultLayout.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import {ProductsPage} from "./pages/Products/ProductsPage.jsx";
import {CheckoutPage} from "./pages/Checkout/CheckoutPage.jsx";
import {CompaniesPage} from "./pages/Companies/CompaniesPage.jsx";
import {FinishedOrderScreen} from "./pages/Finished/FinishedOrderScreen.jsx";


const App = () => {
    const helmetContext = {};
    return (
    <HelmetProvider context={helmetContext}>
        <Router>
            <Switch>
                <DefaultLayout>
                    <Route exact path={'/'} component={HomePage}/>
                    <Route exact path={'/produtos'} component={ProductsPage}/>
                    <Route exact path={'/empresas-recomendadas'} component={CompaniesPage}/>
                    <Route exact path={'/checkout'} component={CheckoutPage}/>
                    <Route exact path={'/pedido-concluido'} component={FinishedOrderScreen}/>
                </DefaultLayout>
            </Switch>
        </Router>
    </HelmetProvider>
  )
}

export default App
