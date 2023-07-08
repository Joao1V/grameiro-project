import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import BottomNavigatorMobile from "./BottomNavigatorMobile.jsx";

const DefaultLayout = ({children}) => {

    return (
        <div className={'d-flex flex-column h-100'}>
            <Header/>
            <main className={'flex-grow-1'}>
                {children}
            </main>
            <Footer/>
            <BottomNavigatorMobile/>
        </div>
    );
};

export default DefaultLayout;
